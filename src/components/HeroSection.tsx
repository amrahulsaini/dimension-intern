// THIS IS A CLIENT COMPONENT due to mouse tracking and input state
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// A simple placeholder for the logos. You would replace this with actual SVG components.
const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="text-gray-400 text-2xl font-semibold filter grayscale hover:grayscale-0 transition-all duration-300">
    {name}
  </div>
);

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  // This effect tracks the mouse position and applies it to CSS custom properties
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top } = section.getBoundingClientRect();
      section.style.setProperty('--mouse-x', `${clientX - left}px`);
      section.style.setProperty('--mouse-y', `${clientY - top}px`);
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // We add the 'hero-glow' class here to activate the new animation
    <section 
      ref={sectionRef} 
      className="hero-glow relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 animate-fade-in-down">
          The new standard
          <br />
          for collaboration
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          An end-to-end platform for developers to build, ship, and scale their ideas. 
          Chat, code, cloud, and deployments — all in one place.
        </p>

        {/* New CTA: Email form */}
        <div className="flex justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <form className="flex w-full max-w-md bg-white/5 border border-white/20 rounded-lg p-1.5 backdrop-blur-sm focus-within:border-purple-400 transition-all duration-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300"
            >
              Join waitlist <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Social Proof Logos */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-gray-500 text-sm mb-6">TRUSTED BY DEVELOPERS AT COMPANIES AND PROJECTS LIKE</p>
          <div className="flex justify-center items-center gap-x-10 gap-y-4 flex-wrap">
            <LogoPlaceholder name="Astro" />
            <LogoPlaceholder name="tRPC" />
            <LogoPlaceholder name="SolidJS" />
            <LogoPlaceholder name="TanStack" />
            <LogoPlaceholder name="Vercel" />
            <LogoPlaceholder name="CodeSandbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;