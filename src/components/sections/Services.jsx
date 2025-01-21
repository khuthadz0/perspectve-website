import React from 'react';
import { Lightbulb, TrendingUp, Users, LineChart } from 'lucide-react';
import { SERVICES, THEME } from '../../utils/constants';
import AnimatedElement from '../ui/AnimatedElement';

// Icon mapping
const ICON_MAP = {
  LineChart: LineChart,
  TrendingUp: TrendingUp,
  Lightbulb: Lightbulb,
  Users: Users
};

const ServiceCard = ({ title, description, icon, delay }) => {
  const IconComponent = ICON_MAP[icon];
  
  return (
    <AnimatedElement animation="fade-up" delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
          style={{ backgroundColor: `${THEME.colors.primary}15` }}
        >
          <IconComponent 
            className="h-6 w-6 transition-transform duration-300 transform group-hover:scale-110" 
            style={{ color: THEME.colors.primary }} 
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedElement>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive strategic solutions designed to transform your startup's potential into market-leading performance.
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.2 + (index * 0.1)} // Staggered delay for each card
            />
          ))}
        </div>

        <AnimatedElement animation="fade-up" delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Ready to accelerate your startup's growth?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ backgroundColor: THEME.colors.primary }}
            >
              Get Started
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;