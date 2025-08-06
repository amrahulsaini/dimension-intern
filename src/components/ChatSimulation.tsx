// THIS IS THE CRITICAL CHANGE FOR NEXT.JS
"use client";

import React, { useState, useEffect } from 'react';
import { User, Bot, Send, Smile, Heart, Zap, Star } from 'lucide-react';

const ChatSimulation = () => {
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'bot', typing?: boolean, reactions?: string[]}>>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Using a ref to hold the data to avoid it being a dependency in useEffect
  const chatMessagesRef = React.useRef([
    { text: "Hey! Just joined the community 👋", sender: 'user' as const, reactions: ['👋', '🎉'] },
    { text: "Welcome! Great to have you here! 🎉", sender: 'bot' as const, reactions: ['❤️', '🚀'] },
    { text: "This decentralized approach is amazing", sender: 'user' as const, reactions: ['🤩', '⚡'] },
    { text: "Right? Your data stays with you always! 🔒", sender: 'bot' as const, reactions: ['🛡️', '💯'] },
    { text: "Can I create my own community?", sender: 'user' as const, reactions: ['🤔', '💭'] },
    { text: "Absolutely! It takes just a few clicks ✨", sender: 'bot' as const, reactions: ['✨', '🎯'] },
  ]);

  useEffect(() => {
    const chatMessages = chatMessagesRef.current;
    
    const timer = setInterval(() => {
      setCurrentMessageIndex(prevIndex => {
        if (prevIndex < chatMessages.length) {
          const currentMsg = chatMessages[prevIndex];
          
          // Show typing indicator
          setMessages(prev => [...prev, { id: Date.now(), text: '', sender: currentMsg.sender, typing: true }]);
          
          setTimeout(() => {
            // Replace typing indicator with actual message
            setMessages(prev => {
              const newMessages = [...prev];
              const lastMessage = newMessages.pop(); // Remove the typing indicator
              return [...newMessages, { 
                id: lastMessage?.id || Date.now(), 
                text: currentMsg.text, 
                sender: currentMsg.sender,
                reactions: currentMsg.reactions
              }];
            });
          }, 1500);

          return prevIndex + 1;
        } else {
          // Reset after showing all messages
          setTimeout(() => {
            setMessages([]);
          }, 2000); // Wait a bit before clearing
          return 0; // Reset index
        }
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div className="enhanced-glass animated-border rounded-2xl p-6 max-w-md mx-auto animate-fade-in-up hover-lift">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold gradient-text">Community Chat</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      <div className="space-y-3 h-64 overflow-y-auto scrollbar-thin">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 animate-fade-in-up ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center animate-scale-bounce neon-border ${
              message.sender === 'user' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }`}>
              {message.sender === 'user' ? 
                <User className="w-4 h-4 text-white" /> : 
                <Bot className="w-4 h-4 text-white" />
              }
            </div>
            <div className="flex flex-col">
              <div className={`max-w-xs px-4 py-2 rounded-lg animate-scale-in hover-lift ${
                message.sender === 'user' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'enhanced-glass text-gray-100 border border-white/20'
              }`}>
                {message.typing ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) : (
                  <p className="text-sm">{message.text}</p>
                )}
              </div>
              
              {/* Reactions */}
              {message.reactions && !message.typing && (
                <div className="flex space-x-1 mt-1 ml-2">
                  {message.reactions.map((reaction, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-white/10 px-2 py-1 rounded-full animate-scale-bounce hover:scale-110 cursor-pointer transition-transform"
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                      {reaction}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="neon-border rounded-lg p-1 mt-4">
        <div className="flex items-center space-x-2 p-2 enhanced-glass rounded-lg">
          <input 
            type="text" 
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none text-sm"
            disabled
          />
          <div className="flex items-center space-x-2">
            <Smile className="w-5 h-5 text-gray-400 animate-bounce hover:text-yellow-400 transition-colors cursor-pointer" />
            <Send className="w-5 h-5 text-purple-400 animate-pulse hover:text-purple-300 transition-colors cursor-pointer magic-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulation;