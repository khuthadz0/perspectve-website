import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO, THEME } from '../../utils/constants';
import AnimatedElement from '../ui/AnimatedElement';

const PortfolioCard = ({ name, description, founder, logo, category, delay }) => (
  <AnimatedElement animation="fade-up" delay={delay}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="h-16 mb-4 flex items-center">
          <img
            src={logo}
            alt={name}
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="mb-4">
          <span 
            className="text-sm font-medium rounded-full px-3 py-1"
            style={{ 
              color: THEME.colors.primary,
              backgroundColor: `${THEME.colors.primary}15`
            }}
          >
            {category}
          </span>
          <h3 className="text-xl font-bold mt-2">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          Founder: {founder}
        </div>
      </div>
    </div>
  </AnimatedElement>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...new Set(PORTFOLIO.current.map(item => item.category))];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO.current
    : PORTFOLIO.current.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're working with innovative startups across various sectors, developing strategic 
              roadmaps that turn breakthrough technologies into market-leading solutions.
            </p>
          </div>
        </AnimatedElement>

        {/* Filter Buttons */}
        <AnimatedElement animation="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5`}
                style={{
                  backgroundColor: activeFilter === category 
                    ? THEME.colors.primary 
                    : `${THEME.colors.primary}15`,
                  color: activeFilter === category 
                    ? 'white' 
                    : THEME.colors.primary
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard 
              key={index} 
              {...item} 
              delay={0.3 + (index * 0.1)}
            />
          ))}
        </div>

        {/* Past Clients Section */}
        <AnimatedElement animation="fade-up" delay={0.6}>
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Past Clients</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {PORTFOLIO.past.map((client, index) => (
                <AnimatedElement 
                  key={client} 
                  animation="fade-up" 
                  delay={0.7 + (index * 0.1)}
                >
                  <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg font-medium text-gray-600">{client}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Portfolio;