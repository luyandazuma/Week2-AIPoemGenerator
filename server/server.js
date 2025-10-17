// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // Parse JSON request bodies

// Hugging Face Configuration
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_TOKEN;
const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/gpt2";

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "MuseMind backend is running!",
    timestamp: new Date().toISOString(),
  });
});

// Main poem generation endpoint
app.post("/api/generate-poem", async (req, res) => {
  try {
    const { userInput, theme } = req.body;

    // Validate input
    if (!userInput || userInput.trim().length === 0) {
      return res.status(400).json({
        error: "Please provide your feelings or thoughts to generate a poem.",
      });
    }

    // Check if API key exists
    if (!HUGGING_FACE_API_KEY) {
      console.error("ERROR: HUGGING_FACE_TOKEN not found in .env file!");
      return res.status(500).json({
        error: "Server configuration error. Please contact support.",
      });
    }

    // Build the prompt based on theme
    const prompt = buildPrompt(userInput, theme);

    console.log(
      `Generating ${theme} poem for input: "${userInput.substring(0, 50)}..."`
    );

    // Call Hugging Face API
    const response = await axios.post(
      HUGGING_FACE_API_URL,
      {
        inputs: prompt,
        parameters: {
          max_length: 200,
          temperature: 0.8,
          top_p: 0.9,
          return_full_text: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 second timeout
      }
    );

    // Extract generated text
    let generatedPoem = response.data[0]?.generated_text || "";

    // Clean up the poem
    generatedPoem = cleanPoem(generatedPoem);

    // Return the poem
    res.json({
      success: true,
      poem: generatedPoem,
      theme: theme,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error generating poem:", error.message);

    // Handle different error types
    if (error.response) {
      // Hugging Face API error
      if (error.response.status === 503) {
        return res.status(503).json({
          error:
            "The AI model is currently loading. Please try again in a few moments.",
          retryAfter: 20,
        });
      } else if (error.response.status === 401) {
        return res.status(500).json({
          error: "Authentication failed. Please check server configuration.",
        });
      } else {
        return res.status(500).json({
          error: "Failed to generate poem. Please try again.",
        });
      }
    } else if (error.code === "ECONNABORTED") {
      // Timeout error
      return res.status(504).json({
        error: "Request timed out. Please try again with a shorter prompt.",
      });
    } else {
      // Generic error
      return res.status(500).json({
        error: "An unexpected error occurred. Please try again.",
      });
    }
  }
});

// Helper function to build themed prompts
function buildPrompt(userInput, theme) {
  const themeContexts = {
    lovelines: `Write a heartfelt, romantic love poem (5 lines) about: ${userInput}. 
Make it sweet, emotional, and expressive. Focus on feelings of love, affection, and tenderness.
Poem:`,

    moodverse: `Write an emotional poem (5 lines) capturing these feelings: ${userInput}. 
Reflect the mood authentically, whether joyful, melancholic, anxious, or peaceful.
Poem:`,

    soulscript: `Write an inspiring, reflective affirmation poem (5 lines) about: ${userInput}. 
Make it uplifting, motivational, and soul-nourishing. Focus on inner strength and personal growth.
Poem:`,
  };

  return themeContexts[theme] || themeContexts["moodverse"];
}

// Helper function to clean up generated poem
function cleanPoem(text) {
  // Remove extra whitespace
  text = text.trim();

  // Remove incomplete sentences at the end
  const sentences = text.split(/[.!?]/);
  if (
    sentences.length > 1 &&
    sentences[sentences.length - 1].trim().length < 10
  ) {
    sentences.pop();
    text = sentences.join(". ") + ".";
  }

  // Format with line breaks (assuming each sentence is a line)
  text = text.replace(/\.\s+/g, ".\n");

  // Remove any leftover prompt text
  text = text.replace(/^(Write|Poem|Create).*?:/gi, "");

  return text.trim();
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found. Use POST /api/generate-poem to generate poems.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║     MuseMind Backend Server          ║");
  console.log("╚═══════════════════════════════════════╝");
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`✅ Health check: http://localhost:${PORT}/api/health`);
  console.log(
    `✅ API endpoint: POST http://localhost:${PORT}/api/generate-poem`
  );
  console.log("\n📝 Press Ctrl+C to stop the server\n");
});
