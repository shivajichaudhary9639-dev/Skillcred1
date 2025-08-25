# LearnAI Tutor 🎓

An AI-powered educational tutor built with Node.js, Express, and Google's Gemini AI API. Get instant help with various academic subjects including Mathematics, Science, History, English, Programming, and more.

## ✨ Features

- **AI-Powered Learning**: Instant explanations and personalized learning paths
- **Multiple Subjects**: Comprehensive coverage of academic subjects
- **24/7 Availability**: Learn anytime, anywhere
- **Interactive Chat Interface**: Natural conversation with AI tutor
- **Modern UI**: Beautiful, responsive design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd learnai-tutor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001`

### Development Mode

For development with auto-reload:
```bash
npm run dev
```

## 🔧 Configuration

The project is already configured with your Gemini API key. If you need to change it:

1. Update the API key in `server.js` (line 15)
2. Or create a `.env` file with:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3000
   ```

## 📚 Available Subjects

- **Mathematics**: Algebra, Calculus, Geometry, Statistics
- **Science**: Physics, Chemistry, Biology, Earth Science
- **History**: World History, US History, Ancient Civilizations
- **English**: Grammar, Literature, Writing, Reading
- **Programming**: JavaScript, Python, Algorithms, Web Development
- **General Learning**: Study Tips, Learning Strategies, General Knowledge

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome

## 📁 Project Structure

```
learnai-tutor/
├── index.html          # Main application interface
├── server.js           # Express server with Gemini API integration
├── package.json        # Project dependencies and scripts
├── env.example         # Environment variables template
└── README.md           # This file
```

## 🔌 API Endpoints

- `GET /` - Main application page
- `POST /api/ai-response` - AI chat response endpoint
- `GET /api/health` - Server health check

## 💡 Usage Examples

Try asking questions like:
- "Explain photosynthesis"
- "Help me solve 2x + 5 = 15"
- "What is the Pythagorean theorem?"
- "How do I write a function in JavaScript?"
- "Explain the causes of World War II"

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `server.js` or kill the process using port 3001
2. **API errors**: Check that your Gemini API key is valid and has sufficient quota
3. **Dependencies not found**: Run `npm install` to install all required packages

### Error Messages

- **"Error connecting to the AI service"**: Check your internet connection and API key
- **"Query is required"**: Make sure you're sending a message in the chat

## 📝 License

MIT License - feel free to use this project for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the project repository.

---

**Happy Learning! 🎉**
# Skillcred1
