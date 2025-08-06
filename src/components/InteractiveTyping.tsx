// THIS IS THE CRITICAL CHANGE FOR NEXT.JS
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Smile, Paperclip, Mic, MoreHorizontal, Sparkles, Zap, Heart } from 'lucide-react';

const InteractiveTyping = () => {
  const [userInput, setUserInput] = useState('');
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'bot', timestamp: Date, reactions?: string[]}>>([
    { 
      id: 1, 
      text: "🌟 Welcome to the future of decentralized communication! I'm your AI assistant. How can I help you explore our platform today?", 
      sender: 'bot', 
      timestamp: new Date(),
      reactions: ['👋', '🚀']
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const responses = [
    "That's an excellent question! Our decentralized architecture ensures your data remains completely private and secure. 🔒",
    "I love your curiosity! Let me walk you through how our community-driven approach works... ✨",
    "Great point! Here's how our lightning-fast network delivers sub-millisecond performance... ⚡",
    "Fantastic question! Our global infrastructure spans 200+ nodes worldwide for maximum reliability. 🌍",
    "I'm excited to share this with you! Our open-source approach means complete transparency... 📖",
    "Perfect timing! Let me explain how our AI-enhanced features can transform your experience... 🤖"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (userInput.length > 0) {
      const timer = setTimeout(() => {
        setIsUserTyping(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsUserTyping(false);
    }
  }, [userInput]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: userInput,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsUserTyping(false);
    setIsResponding(true);

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= randomResponse.length) {
          setSimulatedResponse(randomResponse.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsResponding(false);
          
          const botMessage = {
            id: Date.now() + 1,
            text: randomResponse,
            sender: 'bot' as const,
            timestamp: new Date(),
            reactions: [['💡', '👍', '🎯'][Math.floor(Math.random() * 3)]]
          };
          
          setMessages(prev => [...prev, botMessage]);
          setSimulatedResponse('');
        }
      }, 40);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto overflow-hidden hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 group">
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000 rounded-3xl"></div>
      </div>

      <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Chat Experience
          </h3>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-4 py-2 border border-purple-500/30">
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
            <span className="text-sm font-medium text-gray-300">Live Demo</span>
          </div>
        </div>
      </div>

      <div className="h-96 overflow-y-auto mb-6 space-y-6 pr-4 relative z-10" style={{ scrollbarWidth: 'thin' }}>
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-start space-x-4 animate-fade-in-up group/message ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center animate-scale-bounce shadow-lg relative overflow-hidden ${
              message.sender === 'user' 
                ? 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 shadow-purple-500/30' 
                : 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 shadow-blue-500/30'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
              <div className="w-6 h-6 rounded-full relative z-10 bg-white"></div>
            </div>

            <div className="flex flex-col max-w-lg">
              <div className={`px-6 py-4 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500 group-hover/message:scale-105 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white shadow-purple-500/30'
                  : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl text-gray-100 border border-white/20 shadow-black/20'
              }`}>
                <div className={`absolute inset-0 opacity-0 group-hover/message:opacity-100 transition-opacity duration-500 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-white/10 to-transparent' 
                    : 'bg-gradient-to-r from-blue-500/10 to-transparent'
                }`}></div>
                <p className="text-sm leading-relaxed relative z-10">{message.text}</p>
                <span className="text-xs opacity-70 mt-2 block relative z-10">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {message.reactions && (
                <div className="flex space-x-2 mt-3 ml-4">
                  {message.reactions.map((reaction, idx) => (
                    <span 
                      key={idx}
                      className="text-sm bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-3 py-1 rounded-full animate-scale-bounce hover:scale-125 cursor-pointer transition-transform border border-white/20 hover:bg-white/20"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {reaction}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isResponding && (
          <div className="flex items-start space-x-4 animate-fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center animate-pulse shadow-lg shadow-blue-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
              <div className="w-6 h-6 bg-white rounded-full relative z-10"></div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-lg max-w-md">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                {simulatedResponse && (
                  <span className="text-sm text-gray-300 ml-4 animate-fade-in-up">
                    {simulatedResponse}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="relative z-10">
        <div className="relative bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-1 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl flex items-center space-x-4 p-4">
            <button className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/10 hover:scale-110 group/btn">
              <Paperclip className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message and experience the magic..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm font-medium"
            />
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-yellow-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/10 hover:scale-110 group/btn">
                <Smile className="w-5 h-5 group-hover/btn:scale-125 transition-transform duration-300" />
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/10 hover:scale-110 group/btn">
                <Mic className="w-5 h-5 group-hover/btn:animate-pulse transition-all duration-300" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!userInput.trim()}
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-500 hover:scale-110 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 relative overflow-hidden group/send disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  <Send className="w-5 h-5 group-hover/send:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/send:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {isUserTyping && (
          <div className="absolute -top-10 left-6 animate-fade-in-up">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-full px-4 py-2 border border-purple-500/30">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  You are typing
                </span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default InteractiveTyping;