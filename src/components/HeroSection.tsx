
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-24 md:py-32 bg-gradient-to-br from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing font-semibold text-earth-800 mb-6 leading-tight drop-shadow-sm">
          Signature Sourdough
        </h1>
        <p className="text-xl md:text-2xl text-earth-600 font-inter font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Slowly fermented, traditional sourdough.
          <br />
          Baked with care in Stornoway
        </p>
        
        <button 
          onClick={scrollToMenu}
          className="inline-flex items-center justify-center text-earth-500 hover:text-earth-600 transition-colors animate-bounce"
          aria-label="Scroll to menu"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
