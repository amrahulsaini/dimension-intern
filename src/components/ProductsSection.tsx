import React from 'react';
import { Smartphone, Monitor, Globe, Code } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android applications with seamless cross-platform synchronization.',
      features: ['End-to-end encryption', 'Real-time messaging', 'Community management', 'Offline support'],
      status: 'Available Now',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Monitor,
      title: 'Desktop Client',
      description: 'Full-featured desktop application for power users and community moderators.',
      features: ['Advanced moderation tools', 'Multi-account support', 'Custom themes', 'Plugin system'],
      status: 'Available Now',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Platform',
      description: 'Access your communities from any browser with our progressive web application.',
      features: ['Cross-platform compatibility', 'No installation required', 'Full feature parity', 'PWA support'],
      status: 'Available Now',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Developer SDK',
      description: 'Build your own applications on top of the Dimension protocol with our comprehensive SDK.',
      features: ['RESTful APIs', 'WebSocket support', 'Documentation', 'Code examples'],
      status: 'Beta',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="gradient-text"> Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our suite of applications designed to give you the freedom 
            to connect and communicate on your terms.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="glass-effect rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'Available Now' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

              <div className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${product.gradient} text-white hover:shadow-lg hover:scale-[1.02]`}>
                {product.status === 'Available Now' ? 'Download Now' : 'Join Beta'}
              </button>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="glass-effect rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Seamless Integration Across All Platforms
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Start a conversation on your phone, continue it on your desktop, 
            and manage your communities from the web. All synchronized in real-time.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <Smartphone className="w-8 h-8" />
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <Monitor className="w-8 h-8" />
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
            <Globe className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;