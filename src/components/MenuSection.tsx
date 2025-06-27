
import React from 'react';

const MenuSection = () => {
  const menuItems = [
    { 
      name: "Classic Sourdough", 
      price: "£4",
      description: "A crusty, slow-fermented white loaf. Chewy, simple, and timeless."
    },
    { 
      name: "Seeded Sourdough", 
      price: "£4.50",
      description: "Packed with sunflower, pumpkin, and sesame seeds for crunch + depth."
    },
    { 
      name: "Rye & Caraway", 
      price: "£5",
      description: "Deep flavour with a hint of spice. Dense and satisfying."
    },
    { 
      name: "Olive + Herb", 
      price: "£5",
      description: "Briny Kalamata olives with rosemary and thyme."
    },
    { 
      name: "Wholemeal Tin", 
      price: "£4",
      description: "Straightforward and hearty — an everyday go-to."
    },
    { 
      name: "Spelt Loaf", 
      price: "£4.50",
      description: "Nutty flavour and soft texture. Easier on the stomach."
    },
    { 
      name: "Rustic Crust", 
      price: "£5",
      description: "Thick crust, deep bake. Bold flavour for bread purists."
    },
    { 
      name: "Cinnamon Raisin", 
      price: "£5.50",
      description: "Sweet, soft, and nostalgic. Best with a pat of butter."
    },
  ];

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-cream-200 border border-cream-300 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-dancing font-semibold text-earth-700 mb-12 text-center">
            Loaves + Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-cream-100 border border-cream-300 rounded-xl p-6 hover:shadow-md transition-shadow duration-200 hover:-translate-y-1 transition-transform"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-dancing font-medium text-earth-700 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xl font-inter font-semibold text-earth-600 ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm font-inter text-earth-500 leading-relaxed">
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
