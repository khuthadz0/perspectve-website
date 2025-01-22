// src/utils/constants.js

// Company Information
export const COMPANY_INFO = {
    name: 'Perspectve A Ventures',
    tagline: 'Strategy and Growth Advisory',
    description: 'We empower tech entrepreneurs to scale strategically, connect with the right partners, and achieve sustainable, meaningful growth.',
    email: 'hello@perspectve.com',
    phone: '+27 00 000 0000',
    location: 'Cape Town, South Africa',
    foundedYear: 2025
  };
  
  // Navigation Links
  export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    //{ name: 'Contact', href: '#contact' }
  ];
  
  // Services
  export const SERVICES = [
    {
      id: 'capital-strategy',
      title: 'Capital Strategy Lab',
      description: 'We help tech startups optimize financial strategies through precise funding roadmaps, investor engagement models, and strategic financial modeling to maximize capital attraction and utilization.',
      icon: 'LineChart'
    },
    {
      id: 'investor-os',
      title: 'InvestorOS',
      description: 'We transform complex investor landscapes into clear, actionable pathways, helping startups identify, approach, and effectively engage with the right investment partners at the right time.',
      icon: 'TrendingUp'
    },
    {
      id: 'growth-strategy',
      title: 'Growth Strategy Design',
      description: 'We craft customized growth strategies that go beyond traditional consulting. Our approach combines data-driven insights, market intelligence, and strategic foresight to create adaptive roadmaps.',
      icon: 'Lightbulb'
    },
    {
      id: 'strategic-partner',
      title: 'Strategic Partner Execution',
      description: 'Our strategic partnerships service focuses on ecosystem optimization. We identify, curate, and facilitate high-impact connections that amplify a startups market potential.',
      icon: 'Users'
    }
  ];
  
  // Portfolio
  export const PORTFOLIO = {
    current: [
      {
        name: 'Insure Platform',
        description: 'Innovative Insurtech Solution for Brokers',
        founder: 'Peet Van De Walt',
        category: 'InsureTech',
        logo: '/images/White-on-black.png'
      },
      {
        name: 'Beer Rewards',
        description: 'Innovative Rewards Tech Platform for Alcohol Consumers',
        founder: 'Thabo & Sinethemba',
        category: 'FinTech',
        logo: '/images/White-on-black.png'
      },
      {
        name: 'Body Glow',
        description: 'Innovative Global leader in Sustainable & Organic skincare Solution',
        founder: 'Stha Mavundla',
        category: 'Health & Beauty',
        logo: '/images/White-on-black.png'
      },
      {
        name: 'Tech Impact Africa',
        description: 'Driving Tech and Impact Across Africas Startup Ecosystem',
        founder: 'Bernard Njathi',
        category: 'Tech Innovation',
        logo: '/images/White-on-black.png'
      }
    ],
    past: ['Suba Capital', 'Mapha', 'Welo', 'DigiPharm', 'Umurava']
  };
  
  // Core Values
  export const CORE_VALUES = [
    {
      title: 'Strategic Precision',
      description: 'We operate with surgical accuracy, focusing on high-impact interventions that address core startup challenges and unlock exponential growth potential.'
    },
    {
      title: 'Collaborative Partnership',
      description: 'More than advisors, we become strategic co-creators, working intimately with founders to translate vision into measurable, sustainable success.'
    },
    {
      title: 'Customized Methodology',
      description: 'Each startup receives a tailored strategy, meticulously designed to align with its unique vision, market position, and growth objectives.'
    }
  ];
  
  // Social Media Links
  export const SOCIAL_LINKS = [
    { platform: 'Facebook', url: '#', icon: 'Facebook' },
    { platform: 'Instagram', url: '#', icon: 'Instagram' },
    { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
    { platform: 'YouTube', url: '#', icon: 'Youtube' }
  ];
  
  // Form Options
  export const FORM_OPTIONS = {
    projectTypes: [
      'Capital Strategy',
      'Growth Advisory',
      'Strategic Partnership',
      'Other'
    ]
  };
  
  // Theme Colors
  export const THEME = {
    colors: {
      primary: '#FF6B35', // Orange from brochure
      darkGreen: '#004E4E',
      secondary: '#1A1A1A',
      accent: '#FFA07A',
      background: {
        light: '#F9FAFB',
        dark: '#111827'
      }
    }
  };
  
  // Stats
  export const COMPANY_STATS = [
    { label: 'Startups Advised', value: '100+' },
    { label: 'Capital Raised', value: '$50M+' },
    { label: 'Success Rate', value: '90%' },
    { label: 'Countries', value: '4' }
  ];
  
  // Legal Links
  export const LEGAL_LINKS = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];