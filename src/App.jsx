import { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

function App() {
  const[chatHistory, setChatHistory] = useState([]);

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

          {chatHistory.map((chat, index) =>(
            <ChatMessage key={index} chat={chat}/>
          ))}
  
        </div>

        {/* Chatbot footer */}
        <div className='chat-footer'>
          <ChatForm setChatHistory={setChatHistory}/>
        </div>
      </div>
    </div>
  );
}

export default App;
