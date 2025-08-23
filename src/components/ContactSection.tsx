
import React from 'react';

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/447762776413', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Nadine12xx@gmail.com';
  };

  return (
    <section id="order" className="py-24 px-4 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-cream-200 border border-cream-300 rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-8">
            Place an Order or Ask a Question
          </h2>
          <p className="text-lg md:text-xl font-inter text-earth-600 leading-relaxed mb-6">
            Text Nadine on WhatsApp or email her directly. She replies personally, no bots, no forms.
          </p>
          
          <div className="bg-cream-100 border border-cream-300 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-inter font-semibold text-earth-700 mb-3">
              Order Timeline
            </h3>
            <div className="text-sm md:text-base font-inter text-earth-600 space-y-2">
              <p>
                <span className="font-medium">Orders before 3pm:</span> Ready next day
              </p>
              <p>
                <span className="font-medium">Orders after 3pm:</span> Ready in 2 days
              </p>
              <p className="text-xs md:text-sm text-earth-500 mt-3">
                Orders placed after 3pm are included with the next day's batch
              </p>
            </div>
          </div>
          
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
