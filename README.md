# MuseMind — AI Poem Generator
<h3>Your Mood. Our Muse</h3>

MuseMind is an AI-powered web application that transforms your feelings, emotions, and mood into personalised poems. Choose a theme, type your prompt, and let AI weave your words into art that captures how you feel and thoughtfully espresses it.


## Why We Created MuseMind

Have you ever felt something deeply but could not find the words to express it? That’s where MuseMind fits in, in the quiet spaces between emotion and language.  

We wanted to build something that does not just generate text, but **transforms feeling into form**. MuseMind explores how AI can become a creative partner, helping anyone find the words to give what is in their heart artistic shape through language.


## 🌟 Features

Three Themed Experiences:
💕 LoveLines 
🎨 MoodVerse 
🌟 SoulScript 

AI-Powered Generation - Utilizes Google Gemini API for intelligent, contextual poem creation
Real-time Generation - Watch your poem appear with smooth typewriter animation
Beautiful Themed UI - Each theme has its own unique visual aesthetic
Responsive Design - Works seamlessly on desktop, tablet, and mobile devices


## How MuseMind Works

1. User selects a theme (LoveLines, SoulScript, or MoodVerse).  
2. User is redirected to the page where the poem will be generated and has to type an idea, emotion, or thought into the input field.  
3. MuseMind combines a fixed prompt template with user input.  
4. The backend sends this prompt to Gemini’s API.  
5. The AI returns a unique and beautiful poem matching the chosen theme and feelings.
6. Users cab regenerate another poem by clicking the "Generate" button again.


## Themes:

| Theme | Description | Tone |
|-------|--------|-------------|
| **LoveLines** (Pinks, roses and whites) | Heartfelt poems for loved ones. |  Romantic, emotional, and warm. |
| **MoodVerse** (Neon pinks, cyans, deep purples) | Expressive poems based on your current feelings or mood | Emotive and expressive. 
| **SoulScript** (Deep purples, cyans, dark backgrounds) | Affirming and kind words to positively influence ones sense of self. | Assuring, uplifting and gentle. |



## Tech Stack:

**Frontend:**  
- HTML — Structure and content.
- CSS — Styling and responsiveness. 
- JavaScript — Interactivity and user input handling.

**Backend:**  
- Node.js + Express.js — Runs JavaScript on server and handles API requests. 
- Gemini API — Powers AI poem generation (gemini-2.0-flash model). 
- Axios - HTTP client for API requests.
- CORS - Cross-origin resource sharing.
- dotenv - Environment variable management.


## How to Run:

**Prerequisites**
Node.js (v14 or higher)
npm (comes with Node.js)
Google Gemini API key [Get one here](https://aistudio.google.com/app/apikey)

**1. Clone the Repository**
Open your terminal and run:

``` bash
git clone https://github.com/luyandazuma/Week2-AIPoemGenerator.git
cd Week2-AIPoemGenerator```

**2. Install Backend Dependencies**

```bash
cd server
npm install```

**3. Configure Environment Variables**

```# Create a .env file in the server folder:
# Copy the content from .env.example into your new .env file.
# Add your Gemini API key:
# GEMINI_API_KEY=your_actual_gemini_api_key_here```

**4. Start the Backend Server:**

```bash
npm run dev```

🖥️ The backend will run on http://localhost:3000 by default.

**5. Serve the Frontend**
Open a new terminal window:

```bash
cd ../public
npx http-server -p 8080```

Or use Live Server extension in VS Code.
*The frontend will run on http://localhost:8080*

**6. Open in Browswer**
Navigate to http://localhost:8080 and start creating poems!📝✨

Landing page: 
<img width="1340" height="591" alt="2025-10-18 (9)" src="https://github.com/user-attachments/assets/ffa1da0c-f263-4cdb-baf4-fe58f5d1adc6" />
*Users are prompted to click on the type of poem they want from the three given options*

LoveLines Theme Landing Page (all Theme Pages have the same format/structure and functionality)
<img width="1339" height="610" alt="2025-10-18 (8)" src="https://github.com/user-attachments/assets/892a9a76-56e3-47a5-8e47-0c688f9f75dd" />
*If there is no prompt, user will be prompted to add text*

LoveLines- Generated Poem 
<img width="1323" height="598" alt="2025-10-18 (11)" src="https://github.com/user-attachments/assets/2ca40f8f-49cc-4ede-a5ff-2f9173ef1266" />
*After a poem is generated, users can <strong>Select and Copy</strong> poem to paste onto Clipboard or message. Users can also regenerate another poem by clicking the "Generate" button again*

MoodVerse- Generated Poem 
<img width="1349" height="617" alt="2025-10-18 (14)" src="https://github.com/user-attachments/assets/6efd7da1-9504-42cd-974f-6fb1bfbcd601" />

SoulScript- Generated Poem
<img width="1343" height="599" alt="2025-10-18 (17)" src="https://github.com/user-attachments/assets/6f45fe8d-d85e-4ead-ae7c-2d06f492000b" />


## API Documentation

**Backend Endpoints**
**Health Check**

```GET /api/health```
*Returns server status and timestamp.*

**Generate Poem**

```POST /api/generate-poem
Content-Type: application/json

Body:
{
  "userInput": "string",  // User's feelings or thoughts
  "theme": "string"       // "lovelines" | "moodverse" | "soulscript"
}

Response:
{
  "success": true,
  "poem": "string",       // Generated poem text
  "theme": "string",
  "timestamp": "string"
}```

## 👩🏽‍💻 The Git Girls Team

| Member | Role | Responsibilities |
|---------|------|------------------|
| **Aobakwe Modillane** | Frontend Developer. | Web content creation and page styling. |
| **Boikanyo Maswi** | Junior Developer. | README.md, inetractivity and user input handling, GitHub About section |
| **Luyanda Zuma** | Scrum Master. | Project management, repository setup, inetractivity and user input handling, documentation. |
| **Nqobile Masombuka** | Fullstack Developer. | Page styling, Backend Integration & API Development, Application deployment, documentation, README.md. |

## Project Structure

```Week2-AIPoemGenerator/
├── public/                    # Frontend files
│   ├── index.html            # Landing page
│   ├── lovelines.html        # LoveLines theme page
│   ├── moodverse.html        # MoodVerse theme page
│   ├── soulscript.html       # SoulScript theme page
│   ├── styles/
│   │   ├── styles.css        # Base styles
│   │   └── themes.css        # Theme-specific styles
│   └── Script/
│       ├── landing.js        # Landing page logic
│       ├── lovelines.js      # LoveLines functionality
│       ├── moodverse.js      # MoodVerse functionality
│       └── soulscript.js     # SoulScript functionality
│
├── server/                   # Backend files
│   ├── server.js            # Express server & API logic
│   ├── package.json         # Dependencies
│   ├── .env.example         # Environment variables template
│   └── .gitignore           # Git ignore rules
│
├── .gitignore               # Root git ignore
└── README.md                # This file```


## 🔒 Security Notes

⚠️ Never commit .env files - They contain sensitive API keys
✅ Always use .env.example as a template for team members
✅ Regenerate API keys if accidentally exposed
✅ Use environment variables for all secrets

## 📄 License
This project was created as part of a coding bootcamp group project.

## 📞 Support
If you encounter any issues:

Check that your Gemini API key is valid
Ensure both frontend and backend servers are running
Check browser console for errors

**Made with 💜 by Git Girls**
_Transform your emotions into poetry. One verse at a time. ✨_ 

