
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-cream-100/90 backdrop-blur-sm py-3' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-earth-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-t border-cream-300">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 py-2"
            >
              Menu
            </button>
            <button 
              onClick={openAboutModal}
              className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 py-2"
            >
              Meet the Baker
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 py-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="block w-full text-left font-inter font-medium text-earth-600 hover:text-earth-700 py-2"
            >
              Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
