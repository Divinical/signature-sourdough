
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openAboutModal = () => {
    const aboutButton = document.querySelector('[data-about-trigger]') as HTMLElement;
    if (aboutButton) {
      aboutButton.click();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-cream-100/90 backdrop-blur-sm py-3' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-center md:justify-between items-center">
          <div className="text-2xl font-dancing font-semibold text-earth-700">
            Signature Sourdough
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="font-inter font-medium text-earth-600 hover:text-earth-700 hover:underline underline-offset-4 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={openAboutModal}
              className="font-inter font-medium text-earth-600 hover:text-earth-700 hover:underline underline-offset-4 transition-colors"
            >
              Meet the Baker
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="font-inter font-medium text-earth-600 hover:text-earth-700 hover:underline underline-offset-4 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="font-inter font-medium text-earth-600 hover:text-earth-700 hover:underline underline-offset-4 transition-colors"
            >
              Order
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-earth-600 text-cream-50 rounded-full shadow-lg hover:bg-earth-700 transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu */}
          <div className="md:hidden fixed top-20 right-4 z-50 bg-cream-100 rounded-lg shadow-xl border border-cream-300 min-w-[200px]">
            <div className="px-4 py-4 space-y-1">
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 hover:bg-cream-200 py-3 px-2 rounded transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={openAboutModal}
                className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 hover:bg-cream-200 py-3 px-2 rounded transition-colors"
              >
                Meet the Baker
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 hover:bg-cream-200 py-3 px-2 rounded transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 hover:bg-cream-200 py-3 px-2 rounded transition-colors"
              >
                Order
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
