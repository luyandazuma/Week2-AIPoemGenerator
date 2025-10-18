# MuseMind — AI Poem Generator

MuseMind is an AI-powered web application that transforms your feelings, emotions, and mood into personalised poems. Choose a theme, type your prompt, and let AI weave your words into art that captures how you feel and thoughtfully espresses it.


## Why We Created MuseMind

Have you ever felt something deeply but could not find the words to express it? That’s where MuseMind fits in, in the quiet spaces between emotion and language.  

We wanted to build something that does not just generate text, but **transforms feeling into form**. MuseMind explores how AI can become a creative partner, helping anyone find the words to give what is in their heart artistic shape through language.


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
| **LoveLines** | Heartfelt poems for loved ones. |  Romantic, emotional, and warm. |
| **MoodVerse** | Expressive poems based on your current feelings or mood | Emotive and expressive. 
| **SoulScript** | Affirming and kind words to positively influence ones sense of self. | Assuring, uplifting and gentle. |



## Tech Stack:

**Frontend:**  
- HTML — Structure and content.
- CSS — Styling and responsiveness. 
- JavaScript — Interactivity and user input handling.

**Backend:**  
- Node.js + Express.js — Runs JavaScript on server and handles API requests. 
- Gemini API — Powers AI poem generation. 
- `.env` — Stores sensitive API keys securely.


## How to Run:

**1. Clone the Repository**
Open your terminal and run:

git clone https://github.com/luyandazuma/Week2-AIPoemGenerator.git
cd Week2-AIPoemGenerator

**2. Set Up the Backend**
Navigate to the backend folder:

cd server

Install the necessary dependencies:

npm install

Create a .env file in the server folder:
Copy the content from .env.example into a new .env file.
Add your Gemini API key:

GEMINI_API_KEY=your_actual_gemini_api_key_here

Start the backend server:

npm run dev

🖥️ The backend will run on http://localhost:3000 by default.

**3. Set Up the Frontend**
Open a new terminal and navigate to the public folder:

cd ../public

Then open index.html in your browser.
💡 Tip: Use a local server (like VS Code Live Server) to make sure fetch requests work correctly.

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


## 👩🏽‍💻 The Git Girls Team

| Member | Role | Responsibilities |
|---------|------|------------------|
| **Aobakwe Modillane** | Frontend Developer. | Web content creation and page styling. |
| **Boikanyo Maswi** | Junior Developer. | README.md, inetractivity and user input handling, GitHub About section |
| **Luyanda Zuma** | Scrum Master. | Project management, repository setup, inetractivity and user input handling, documentation. |
| **Nqobile Masombuka** | Fullstack Developer. | Page styling, API integration, Application deployment, documentation, README.md. |

