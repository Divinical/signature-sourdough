
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-16 bg-gradient-to-br from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold text-earth-700 mb-6 leading-tight">
          Baked with heart in the Highlands.
        </h1>
        <p className="text-xl md:text-2xl text-earth-500 font-inter font-light max-w-2xl mx-auto leading-relaxed">
          Fresh sourdough, made simple. No gluten-free, no gimmicks — just the good stuff.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
