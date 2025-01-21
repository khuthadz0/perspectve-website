import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Add console log to check if this is being called
    console.log('Scroll position:', window.pageYOffset);
    if (window.pageYOffset > 100) { // Reduced threshold to 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Remove AnimatedElement wrapper for now
  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-orange-500 text-white shadow-lg 
        hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 
        hover:shadow-xl z-50"
      style={{ 
        zIndex: 9999, // Ensure it's above everything
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden'
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  ) : null;
};

export default ScrollToTop;