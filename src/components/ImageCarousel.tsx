
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const images = [
    { name: "Seeded Crust", description: "Fresh seeded sourdough with a golden crust" },
    { name: "Fresh Bake", description: "Warm loaves straight from the oven" },
    { name: "Cinnamon Twist", description: "Sweet cinnamon raisin sourdough" },
    { name: "Classic Loaf", description: "Traditional sourdough with perfect crumb" },
    { name: "Rustic Selection", description: "A variety of handcrafted loaves" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-cream-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-12 text-center">
          Fresh from the Oven
        </h2>
        <Carousel className="w-full max-w-3xl mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-cream-200 rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-square bg-cream-300 flex items-center justify-center">
                      <span className="text-earth-500 font-inter text-center px-4">
                        {image.name}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-inter text-earth-600 text-center leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-cream-200 border-cream-300 hover:bg-cream-300 -left-12" />
          <CarouselNext className="bg-cream-200 border-cream-300 hover:bg-cream-300 -right-12" />
        </Carousel>
        
        {/* Thumbnail dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-cream-400"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
