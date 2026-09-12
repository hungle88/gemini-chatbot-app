import { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const updateHistory = (text) => {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text !== 'Thinking...'),
      { role: 'model', text },
    ]);
  };
  const generateBotResponse = async (history) => {
    const apiUrl = '/api/generate';

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || 'Something went wrong!');
      const apiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!apiResponseText)
        throw new Error('The API returned no response text.');
      const formattedResponse = apiResponseText
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(formattedResponse);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        {/* chatbot header */}
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button className='material-symbols-outlined'>
            keyboard_arrow_down
          </button>
        </div>

        {/* chatbot body */}
        <div className='chat-body'>
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Hey there <br />
              How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot footer */}
        <div className='chat-footer'>
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
