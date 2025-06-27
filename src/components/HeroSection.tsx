
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-cream-100 flex items-center justify-center px-4 py-16 bg-gradient-to-br from-cream-50 to-cream-200">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing font-semibold text-earth-700 mb-6 leading-tight">
          Signature Sourdough
        </h1>
        <p className="text-xl md:text-2xl text-earth-500 font-inter font-light max-w-2xl mx-auto leading-relaxed">
          Small batch bread baked with heart in Stornoway.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
