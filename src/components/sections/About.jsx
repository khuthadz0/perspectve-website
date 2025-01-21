import React from 'react';
import { Check, Target, Users, Lightbulb } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';

const ValueCard = ({ icon: Icon, title, description, delay }) => (
  <AnimatedElement animation="fade-left" delay={delay}>
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-orange-500" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </AnimatedElement>
);

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Precision",
      description: "We operate with surgical accuracy, focusing on high-impact interventions that address core startup challenges and unlock exponential growth potential."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "More than advisors, we become strategic co-creators, working intimately with founders to translate vision into measurable, sustainable success."
    },
    {
      icon: Lightbulb,
      title: "Customized Methodology",
      description: "Each startup receives a tailored strategy, meticulously designed to align with its unique vision, market position, and growth objectives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <AnimatedElement animation="fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                Perspectve A is a strategy and growth advisory firm focused on tech startups. 
                We help emerging technology companies navigate complex growth challenges, design 
                strategic roadmaps, and accelerate their potential.
              </p>
            </AnimatedElement>
            
            <div className="space-y-6 mb-8">
              {[
                "Comprehensive strategic analysis",
                "Capital strategy optimization",
                "Targeted growth acceleration",
                "Strategic partnerships development"
              ].map((item, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fade-right" 
                  delay={0.2 * index}
                >
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <AnimatedElement animation="fade-up" delay={0.6}>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Work With Us
              </a>
            </AnimatedElement>
          </div>

          {/* Right Column - Values */}
          <div className="mt-12 lg:mt-0">
            <AnimatedElement animation="fade-left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Approach</h3>
                <div className="space-y-8">
                  {values.map((value, index) => (
                    <ValueCard 
                      key={index} 
                      {...value} 
                      delay={0.3 * index}
                    />
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Startups Advised" },
            { number: "$50M+", label: "Capital Raised" },
            { number: "90%", label: "Success Rate" },
            { number: "4", label: "Countries" }
          ].map((stat, index) => (
            <AnimatedElement 
              key={index} 
              animation="fade-up" 
              delay={0.2 * index}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;