
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
    <section className="py-20 px-4 bg-cream-200">
      <div className="max-w-3xl mx-auto text-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-earth-600 hover:bg-earth-700 text-white font-inter font-medium px-8 py-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg">
              Meet the Baker
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
                  Nadine bakes from her small kitchen in Stornoway — just a few loaves at a time, the way she learned from her grandmother.
                </p>
                <p className="text-base md:text-lg font-inter text-earth-600 leading-relaxed">
                  No gluten-free, no fuss. Just sourdough with real crust and warmth.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AboutModal;
