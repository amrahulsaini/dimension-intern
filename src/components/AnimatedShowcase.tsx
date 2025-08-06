
"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Zap, Globe, Lock, Users, Sparkles, ChevronRight, Star, Heart, MessageSquare } from 'lucide-react';

const AnimatedShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [notifications, setNotifications] = useState<Array<{id: number, text: string, icon: React.ElementType}>>([]);

  const features = React.useRef([
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'Your messages are encrypted before leaving your device',
      color: 'from-green-400 to-emerald-500',
      demo: 'Encrypting message... 🔐'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Messages delivered in milliseconds worldwide',
      color: 'from-yellow-400 to-orange-500',
      demo: 'Message sent in 0.003s ⚡'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with anyone, anywhere in the world',
      color: 'from-blue-400 to-cyan-500',
      demo: 'Connected to 180+ countries 🌍'
    }
  ]).current;

  const notificationTypes = React.useRef([
    { text: 'New message from Alice', icon: MessageSquare },
    { text: 'Community event starting', icon: Users },
    { text: 'Your post got 50 likes', icon: Heart },
    { text: 'Featured in trending', icon: Star },
  ]).current;

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureTimer);
  }, [features.length]);

  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const randomNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
      const newNotification = {
        id: Date.now(),
        text: randomNotification.text,
        icon: randomNotification.icon
      };

      setNotifications(prev => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 3000);
    }, 2000);

    return () => clearInterval(notificationTimer);
  }, [notificationTypes]);

  return (
    <div className="relative py-20">
      {/* Floating notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="glass-effect rounded-lg p-3 flex items-center space-x-2 animate-slide-in-right"
          >
            <notification.icon className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white">{notification.text}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
            <br />
            <span className="text-white">The Difference</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Feature cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 cursor-pointer transition-all duration-500 ${
                  activeFeature === index 
                    ? 'scale-105 glow-effect border-purple-500/50 border' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center ${
                    activeFeature === index ? 'animate-pulse-glow' : ''
                  }`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                    {activeFeature === index && (
                      <div className="mt-2 text-sm text-purple-400 animate-fade-in-up">
                        {feature.demo}
                      </div>
                    )}
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeFeature === index ? 'rotate-90' : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Interactive demo */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 animate-float">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">Live Demo</h3>
                <p className="text-gray-400">See features in action</p>
              </div>

              {/* Demo screen */}
              <div className="bg-black/50 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient-shift"></div>
                <div className="relative z-10">
                  {activeFeature === 0 && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300">Encryption: AES-256</span>
                      </div>
                      <div className="bg-gray-800 rounded p-3">
                        <div className="text-xs text-gray-400 mb-2">Original Message:</div>
                        <div className="text-white">&quot;Hello, how are you?&quot;</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl animate-spin">🔐</div>
                      </div>
                      <div className="bg-gray-800 rounded p-3">
                        <div className="text-xs text-gray-400 mb-2">Encrypted:</div>
                        <div className="text-green-400 font-mono text-xs break-all">
                          7a8b9c2d3e4f5g6h1i2j3k4l5m6n7o8p
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 1 && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="text-center">
                        <div className="text-6xl mb-4">⚡</div>
                        <div className="text-2xl font-bold gradient-text animate-pulse">0.003s</div>
                        <div className="text-gray-400">Average delivery time</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-gray-400">You</div>
                        </div>
                        <div className="flex-1 mx-4 relative">
                          <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 relative">
                            <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse" style={{
                              left: `${(Date.now() % 3000) / 30}%`,
                              top: '-3px'
                            }}></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-gray-400">Friend</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 2 && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-2 animate-spin-slow">🌍</div>
                        <div className="text-lg font-semibold text-white">Global Network</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['🇺🇸', '🇬🇧', '🇯🇵', '🇩🇪', '🇫🇷', '🇧🇷', '🇮🇳', '🇨🇳', '🇦🇺'].map((flag, i) => (
                          <div
                            key={i}
                            className="text-center p-2 glass-effect rounded animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <div className="text-2xl">{flag}</div>
                            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-1 animate-ping"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating elements around demo */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedShowcase;