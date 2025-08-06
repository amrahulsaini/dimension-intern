import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import AnimatedShowcase from '@/components/AnimatedShowcase';
import ChatSimulation from '@/components/ChatSimulation';
import InteractiveTyping from '@/components/InteractiveTyping';


// In Next.js, the main page component is often called Home or Page.
export default function Home() {
  return (
    // We use a <main> tag for the main content of the page.
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
       
      
      {/* Chat simulation section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Real-time</span>
              <span className="text-white"> Communication</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience seamless conversations with instant messaging and community interactions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ChatSimulation />
            <InteractiveTyping />
          </div>
        </div>
      </section>

      <ProductsSection />
      <AnimatedShowcase />
      <FeaturesSection />
    </main>
  );
}