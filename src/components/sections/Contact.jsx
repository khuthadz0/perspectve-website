import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';

const ContactCard = ({ icon: Icon, title, content, delay }) => (
  <AnimatedElement animation="fade-up" delay={delay}>
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-orange-500" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </AnimatedElement>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projectTypes = [
    'Capital Strategy',
    'Growth Advisory',
    'Strategic Partnership',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-50">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/2">
          <svg className="w-full h-auto text-orange-500 opacity-5" viewBox="0 0 400 400" fill="currentColor">
            <path d="M0 400C220.914 400 400 220.914 400 0H0V400Z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take your startup to the next level? Contact us today to learn how 
              Perspectve A can help you achieve your growth objectives.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={Mail}
            title="Email Us"
            content="Contact our team directly at hello@perspectve.com"
            delay={0.2}
          />
          <ContactCard
            icon={Phone}
            title="Call Us"
            content="Schedule a call to discuss your needs"
            delay={0.4}
          />
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            content="Based in Cape Town, South Africa"
            delay={0.6}
          />
        </div>

        <AnimatedElement animation="fade-up" delay={0.4}>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-dark-green text-white">
                <AnimatedElement animation="fade-right" delay={0.6}>
                  <h3 className="text-2xl font-bold mb-6">Let's Discuss Your Project</h3>
                  <p className="text-gray-300 mb-8">
                    Share your vision with us, and we'll help you develop a strategic roadmap 
                    for success. Our team is ready to support your journey.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">We specialize in:</h4>
                    <ul className="space-y-3">
                      {['Strategic Growth Planning', 'Capital Optimization', 'Market Entry Strategy', 'Partnership Development'].map((item, index) => (
                        <AnimatedElement key={index} animation="fade-right" delay={0.8 + (index * 0.1)}>
                          <li className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-orange-500" />
                            <span className="text-gray-200">{item}</span>
                          </li>
                        </AnimatedElement>
                      ))}
                    </ul>
                  </div>
                </AnimatedElement>
              </div>

              <div className="p-8 lg:p-12">
                <AnimatedElement animation="fade-left" delay={0.6}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        id="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Contact;