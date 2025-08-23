
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = [
    { 
      name: "Rustic Sourdough", 
      description: "Thick crust, deep flavour. Traditional and bold.",
      src: "/rusticsourdoughloaf.webp"
    },
    { 
      name: "Seeded Sourdough", 
      description: "Packed with seeds and slow-fermented for crunch and depth.",
      src: "/seeded-sourdough.webp"
    },
    { 
      name: "Cranberry Raisin", 
      description: "Sweet, tangy, and soft. Great with butter or cheese.",
      src: "/cranberry-raisin.webp"
    },
    { 
      name: "Ciabatta Pack", 
      description: "Light, airy, and golden. Best fresh or toasted.",
      src: "/ciabatta.webp"
    },
    { 
      name: "Plain Bagels", 
      description: "Chewy and simple. Perfect for breakfast or lunch.",
      src: "/plain-bagels.webp"
    },
    { 
      name: "Sesame Bagels", 
      description: "Same chewy base, topped with toasted sesame seeds.",
      src: "/sesame-bagels.webp"
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="gallery" className="py-20 px-4 bg-cream-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-semibold text-earth-700 mb-8 md:mb-12 text-center">
          Fresh from the Oven
        </h2>
        <p className="text-sm text-earth-500 text-center mb-6 md:hidden">
          Swipe to see more photos
        </p>
        <Carousel 
          setApi={setApi}
          className="w-full max-w-3xl mx-auto" 
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-cream-200 rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-inter font-medium text-earth-700 mb-2 text-center">
                        {image.name}
                      </h3>
                      <p className="text-sm font-inter text-earth-600 text-center leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-cream-200 border-cream-300 hover:bg-cream-300 hidden md:flex -left-12" />
          <CarouselNext className="bg-cream-200 border-cream-300 hover:bg-cream-300 hidden md:flex -right-12" />
        </Carousel>
        
        {/* Active indicator dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current - 1 ? 'bg-earth-600' : 'bg-cream-400'
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
