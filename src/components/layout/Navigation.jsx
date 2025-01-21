import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, THEME } from '../../utils/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      setActiveLink(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent backdrop-blur-sm bg-white/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              aria-label="Go to home"
            >
              <img 
                src="/images/Monochrome-on-transparent.png" 
                alt={COMPANY_INFO.name}
                className="h-10 w-auto"
              />
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-all duration-300 relative group
                  ${isScrolled ? 'text-gray-800' : 'text-gray-900'}
                  ${activeLink === link.href.substring(1) ? 'text-orange-500' : ''}
                `}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full
                  ${activeLink === link.href.substring(1) ? 'w-full' : ''}
                `}></span>
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 
                transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5
                font-medium text-base"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200
                ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-900 hover:bg-white/20'}
              `}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                  ${activeLink === link.href.substring(1) 
                    ? 'bg-orange-50 text-orange-500' 
                    : 'text-gray-800 hover:bg-gray-50 hover:text-orange-500'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 mt-2 bg-orange-500 text-white rounded-lg text-center font-medium
                hover:bg-orange-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;