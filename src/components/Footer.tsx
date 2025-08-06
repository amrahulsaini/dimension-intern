import React from 'react';
import { Github, Twitter, Globe, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Mobile App', 'Desktop Client', 'Web Platform', 'Developer SDK', 'API Documentation']
    },
    {
      title: 'Community',
      links: ['Discord', 'Telegram', 'Reddit', 'Forums', 'Newsletter']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Blog', 'Whitepaper', 'Roadmap']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact']
    }
  ];

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold gradient-text">Dimension</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the future of decentralized social networks. 
              Connect freely, own your data, and build communities without boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-effect rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get the latest news and updates from Dimension.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 flex-1 md:w-64"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-r-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 mx-1" />
            <span>by the Dimension team</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Dimension Protocol. All rights reserved.
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;