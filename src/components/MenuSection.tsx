
import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { 
      name: "Rustic Sourdough", 
      price: "£5",
      description: "Thick crust, deep flavour. Traditional and bold."
    },
    { 
      name: "Seeded Sourdough", 
      price: "£6.50",
      description: "Packed with seeds and slow-fermented for crunch and depth."
    },
    { 
      name: "Cranberry Raisin", 
      price: "£6.50",
      description: "Sweet, tangy, and soft. Great with butter or cheese."
    },
    { 
      name: "Ciabatta (Pack of 4)", 
      price: "£4",
      description: "Light, airy, and golden. Best fresh or toasted."
    },
    { 
      name: "Plain Bagels (4 pack)", 
      price: "£3.50",
      description: "Chewy and simple. Perfect for breakfast or lunch."
    },
    { 
      name: "Sesame Bagels (4 pack)", 
      price: "£4",
      description: "Same chewy base, topped with toasted sesame seeds."
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-cream-200 border border-cream-300 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-dancing font-semibold text-earth-700 mb-12 text-center">
            Loaves + Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-cream-100 border border-cream-300 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-200 hover:-translate-y-1 transition-transform ${
                  index % 2 === 0 && index < menuItems.length - 1 ? 'md:border-r-0 md:rounded-r-none' : ''
                } ${
                  index % 2 === 1 ? 'md:border-l-0 md:rounded-l-none' : ''
                } ${
                  index < menuItems.length - 2 ? 'border-b border-cream-300/50' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-dancing font-medium text-earth-700 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xl font-inter font-semibold text-earth-700 ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm font-inter text-earth-600 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
