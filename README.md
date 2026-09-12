# Gemini Chatbot App

A modern, interactive chatbot application powered by Google's Gemini API, built with React and Vite for fast development and optimal performance.

## Features

- 🤖 **AI-Powered Conversations** - Integrated with Google Gemini API for intelligent responses
- ⚡ **Fast Development** - Built with Vite for instant hot module replacement (HMR)
- ⚛️ **Modern React** - Latest React patterns with functional components
- 🎨 **Responsive Design** - Works seamlessly across all devices
- 📦 **Lightweight** - Minimal setup with optimized build output

## Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Language**: JavaScript
- **API**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hungle88/gemini-chatbot-app.git
   cd gemini-chatbot-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build the app for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
gemini-chatbot-app/
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── .env                 # Environment variables (create this)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Usage

1. Open the chatbot interface in your browser
2. Type your message in the input field
3. Press Enter or click Send to submit
4. The Gemini AI will process your message and respond

## Configuration

### ESLint Configuration

This project includes ESLint rules for code quality. The configuration uses:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) with Oxc
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react) with SWC (alternative)

To expand ESLint rules for production applications, refer to the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite) for type-aware lint rules.

### React Compiler (Optional)

The React Compiler is not enabled by default due to its impact on dev & build performance. To enable it, see [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key |

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory, ready for deployment.

## Deployment

The app can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is open source and available under the MIT License.

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Google Gemini API Docs](https://ai.google.dev)

## Support

For issues or questions, please open an [issue](https://github.com/hungle88/gemini-chatbot-app/issues) on GitHub.

---

**Happy Chatting! 💬**
