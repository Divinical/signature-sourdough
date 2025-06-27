
import React from 'react';

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/447762776413', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:ben@forgeheart.run';
  };

  return (
    <section id="order" className="py-24 px-4 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-cream-200 border border-cream-300 rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-8">
            Place an Order or Ask a Question
          </h2>
          <p className="text-lg md:text-xl font-inter text-earth-600 leading-relaxed mb-10">
            Text Nadine on WhatsApp or email her directly. She replies personally — no bots, no forms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-earth-600 hover:bg-earth-700 text-white font-inter font-medium px-10 py-5 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              WhatsApp
            </button>
            <button 
              onClick={handleEmail}
              className="w-full sm:w-auto bg-earth-500 hover:bg-earth-600 text-white font-inter font-medium px-10 py-5 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
