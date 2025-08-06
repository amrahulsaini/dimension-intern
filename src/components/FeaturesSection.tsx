// THIS IS THE CRITICAL CHANGE FOR NEXT.JS
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Shield, Users, Zap, Globe, Lock, Sparkles, ChevronRight, Activity, Code2, Database, Cpu, Network } from 'lucide-react';

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Military-grade encryption with zero-knowledge architecture. Your conversations remain completely private and secure from any third-party access.',
      gradient: 'from-emerald-400 via-green-500 to-teal-500',
      hoverGradient: 'from-emerald-300 via-green-400 to-teal-400',
      stats: '256-bit AES encryption',
      bgColor: 'emerald-500/20',
      borderColor: 'emerald-500/30'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Build thriving communities with advanced moderation tools, custom roles, and governance features that put power back in users hands.',
      gradient: 'from-blue-400 via-indigo-500 to-purple-500',
      hoverGradient: 'from-blue-300 via-indigo-400 to-purple-400',
      stats: '100K+ active communities',
      bgColor: 'blue-500/20',
      borderColor: 'blue-500/30'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant messaging with sub-millisecond latency powered by our global edge network and optimized protocols.',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      hoverGradient: 'from-yellow-300 via-orange-400 to-red-400',
      stats: '<2ms global latency',
      bgColor: 'yellow-500/20',
      borderColor: 'yellow-500/30'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect seamlessly across continents with our distributed infrastructure ensuring reliable communication worldwide.',
      gradient: 'from-purple-400 via-pink-500 to-rose-500',
      hoverGradient: 'from-purple-300 via-pink-400 to-rose-400',
      stats: '200+ global nodes',
      bgColor: 'purple-500/20',
      borderColor: 'purple-500/30'
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Fully transparent and auditable codebase. Contribute, customize, and build upon our open-source foundation.',
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      hoverGradient: 'from-cyan-300 via-blue-400 to-indigo-400',
      stats: '50K+ GitHub stars',
      bgColor: 'cyan-500/20',
      borderColor: 'cyan-500/30'
    },
    {
      icon: Sparkles,
      title: 'AI Enhanced',
      description: 'Intelligent features powered by advanced AI including smart translations, content moderation, and personalized recommendations.',
      gradient: 'from-indigo-400 via-purple-500 to-pink-500',
      hoverGradient: 'from-indigo-300 via-purple-400 to-pink-400',
      stats: 'GPT-4 powered',
      bgColor: 'indigo-500/20',
      borderColor: 'indigo-500/30'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Tailwind's JIT compiler needs to see the full class names.
  // This is a common "gotcha" when building class names dynamically.
  // By defining them here, we ensure Tailwind generates the necessary CSS.
  // The actual logic will still use the dynamic names from the features array.
  // This is a "just in case" measure and may not be strictly necessary depending
  // on the exact Tailwind setup, but it's good practice.
  const _safelist = "border-emerald-500/30 border-blue-500/30 border-yellow-500/30 border-purple-500/30 border-cyan-500/30 border-indigo-500/30 shadow-emerald-500/20 shadow-blue-500/20 shadow-yellow-500/20 shadow-purple-500/20 shadow-cyan-500/20 shadow-indigo-500/20";


  return (
    <section ref={sectionRef} id="features" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Enhanced particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${220 + Math.random() * 100}, 70%, 60%)`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-3 mb-8 animate-fade-in-down hover:scale-105 hover:border-purple-400/50 transition-all duration-500 group cursor-pointer">
            <Activity className="w-5 h-5 text-purple-400 animate-pulse group-hover:animate-bounce" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up block">
              Built for the
            </span>
            <span className="text-white animate-fade-in-up block" style={{ animationDelay: '0.2s' }}>
              Modern Web
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Experience cutting-edge technology designed for privacy, performance, and genuine human connection. 
            Every feature is crafted with intention and built for the future.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-index={index}
              className={`feature-card relative group cursor-pointer transition-all duration-1000 ${
                visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced card container */}
              <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border-2 rounded-2xl p-8 overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                hoveredCard === index 
                  ? `border-${feature.borderColor.split('/')[0]}/50 bg-gradient-to-br from-white/10 to-white/5 shadow-${feature.bgColor}` 
                  : `border-white/20 hover:border-${feature.borderColor}`
              }`}>
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-700 ${
                  hoveredCard === index ? 'opacity-5' : ''
                }`}></div>

                {/* Moving light effect */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${
                  hoveredCard === index ? 'opacity-100' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Enhanced icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-700 ${
                    hoveredCard === index 
                      ? `animate-pulse-glow scale-110 bg-gradient-to-r ${feature.hoverGradient}` 
                      : 'hover:scale-110'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                    hoveredCard === index 
                      ? `bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent` 
                      : 'text-white'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-gray-400 leading-relaxed mb-6 transition-colors duration-500 ${
                    hoveredCard === index ? 'text-gray-300' : ''
                  }`}>
                    {feature.description}
                  </p>

                  {/* Enhanced stats and interaction */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-4 py-2 rounded-full font-semibold transition-all duration-500 ${
                      hoveredCard === index 
                        ? `bg-gradient-to-r ${feature.gradient} text-white scale-105` 
                        : `bg-gradient-to-r ${feature.gradient} text-white opacity-75`
                    }`}>
                      {feature.stats}
                    </span>
                    
                    <ChevronRight className={`w-6 h-6 transition-all duration-500 ${
                      hoveredCard === index 
                        ? `text-white translate-x-2 scale-125` 
                        : 'text-gray-400'
                    }`} />
                  </div>

                  {/* Floating indicator */}
                  {hoveredCard === index && (
                    <div className="absolute top-4 right-4 animate-bounce">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} animate-ping`}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 max-w-4xl mx-auto hover:scale-105 transition-all duration-700 group cursor-pointer animate-fade-in-up hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20" style={{ animationDelay: '1.2s' }}>
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 text-white">
                Ready to revolutionize your digital experience?
              </h3>
              <p className="text-xl text-gray-300 mb-8 group-hover:text-white transition-colors duration-500 max-w-2xl mx-auto">
                Join millions of users who have already embraced the future of decentralized social networking.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-700 hover:scale-110 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 relative overflow-hidden group/btn">
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <Sparkles className="inline-block ml-3 w-5 h-5 animate-bounce group-hover/btn:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;