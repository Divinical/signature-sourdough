
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutModal = () => {
  return (
    <div className="hidden">
      <Dialog>
        <DialogTrigger asChild>
          <button data-about-trigger className="opacity-0 pointer-events-none">
            Hidden Trigger
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-[95vw] bg-cream-50 border-cream-300 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-dancing font-semibold text-earth-700 mb-6">
              Meet Nadine
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="aspect-square bg-cream-300 rounded-xl flex items-center justify-center order-2 md:order-1">
              <span className="text-earth-500 font-inter">Photo of Nadine</span>
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <p className="text-base md:text-lg font-inter text-earth-600 leading-relaxed">
                Nadine bakes from her small kitchen in Stornoway, just a few loaves at a time. She's entirely self-taught, learning through trial, error, and love for the process.
              </p>
              <p className="text-base md:text-lg font-inter text-earth-600 leading-relaxed">
                No gluten-free, no fuss. Just sourdough with real crust and warmth.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutModal;
