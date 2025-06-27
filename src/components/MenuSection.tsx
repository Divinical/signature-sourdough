
import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { name: "Classic Sourdough", price: "£4" },
    { name: "Seeded Sourdough", price: "£4.50" },
    { name: "Rye & Caraway", price: "£5" },
    { name: "Olive + Herb", price: "£5" },
    { name: "Wholemeal Tin", price: "£4" },
    { name: "Spelt Loaf", price: "£4.50" },
    { name: "Rustic Crust", price: "£5" },
    { name: "Cinnamon Raisin", price: "£5.50" },
  ];

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-cream-200 border border-cream-300 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-12 text-center">
            Loaves + Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-cream-300 pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-lg md:text-xl font-inter font-medium text-earth-600">
                  {item.name}
                </h3>
                <span className="text-lg md:text-xl font-inter font-semibold text-earth-700">
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
