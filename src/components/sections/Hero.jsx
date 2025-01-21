import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';

const Hero = () => {
  return (
    <div className="relative bg-dark-green min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 w-1/2 h-full">
          {/* Decorative curved lines similar to your brochure */}
          <svg
            className="w-full h-full text-orange-500 opacity-10"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 0C400 220.914 220.914 400 0 400V0H400Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <AnimatedElement animation="fade-right" delay={0.2}>
              <h1 className="text-5xl font-bold text-white mb-6">
                Strategy and Growth Advisory for Tech Startups
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-right" delay={0.4}>
              <p className="text-xl text-gray-300 mb-8">
                We empower tech entrepreneurs to scale strategically, connect with the right partners, 
                and achieve sustainable, meaningful growth.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-dark-green transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <AnimatedElement animation="fade-left" delay={0.4}>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-orange-500 rounded-full opacity-20 filter blur-3xl"></div>
                </div>
                <img
                  src="/images/Grayscale-on-transparent.png"
                  alt="Strategy and Growth"
                  className="relative rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;