
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-cream-200">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-8 text-center">
            Meet Nadine
          </h2>
          <p className="text-lg md:text-xl font-inter text-earth-600 leading-relaxed text-center max-w-2xl mx-auto">
            Nadine has been baking for years for friends, family, and anyone who loves proper bread. 
            Her recipes are traditional, crust-first, and baked fresh every week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
