import React, { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

const App = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const isAnchor = e.target.hash;
      if (isAnchor) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;