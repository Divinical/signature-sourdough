
import React from 'react';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import AboutModal from '../components/AboutModal';
import ImageCarousel from '../components/ImageCarousel';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter">
      <HeroSection />
      <MenuSection />
      <AboutModal />
      <ImageCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
