
import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { name: "Classic Sourdough", price: "£4" },
    { name: "Seeded Sourdough", price: "£4.50" },
    { name: "Olive + Herb Loaf", price: "£5" },
  ];

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-12 text-center">
            Loaves + Prices
          </h2>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-cream-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-xl md:text-2xl font-inter font-medium text-earth-600">
                  {item.name}
                </h3>
                <span className="text-xl md:text-2xl font-inter font-semibold text-earth-700">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
