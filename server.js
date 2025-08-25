require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Google Generative AI with your API key
if (!process.env.GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY environment variable is not set!');
    console.error('Please create a .env file with your Gemini API key.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve favicon to prevent 404 errors
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No content response
});

// AI response endpoint
app.post('/api/ai-response', async (req, res) => {
    const { query } = req.body;
    
    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        // Get the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        // Create a chat session
        const chat = model.startChat({
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7,
            },
        });

        // Send the message and get response
        const result = await chat.sendMessage(query);
        const response = await result.response;
        const text = response.text();

        res.json({ answer: text });
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        
        // Provide more helpful error messages
        let errorMessage = 'Error connecting to the AI service';
        if (error.message.includes('models/gemini-pro is not found')) {
            errorMessage = 'AI model configuration error - please check server configuration';
        } else if (error.message.includes('API key')) {
            errorMessage = 'API key error - please check your Gemini API key';
        }
        
        res.status(500).json({ 
            error: errorMessage,
            details: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'LearnAI Tutor server is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 LearnAI Tutor server running on http://localhost:${PORT}`);
    console.log(`📚 AI-powered educational assistant ready to help!`);
});