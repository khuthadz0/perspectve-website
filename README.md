# Perspectve A Ventures Website

A modern, responsive website for Perspectve A Ventures, a strategy and growth advisory firm focused on tech startups. Built with React, Tailwind CSS, and modern web technologies.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Interactive portfolio filtering
- 📝 Contact form integration
- 🔝 Smooth scroll functionality

## Technologies Used

- React
- Tailwind CSS
- Lucide Icons
- Intersection Observer API for animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/perspectve-website.git
```

2. Navigate to the project directory

```bash
cd perspectve-website
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── AnimatedElement.jsx
│       └── ScrollToTop.jsx
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── constants.js
├── App.jsx
└── main.jsx

public/
└── images/
    ├── Grayscale-on-transparent.png
    ├── Monochrome-on-transparent.png
    └── White-on-transparent.png

index.css  # Main stylesheet in root directory
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Customization

### Colors

The main theme colors can be modified in `src/utils/constants.js`:

```javascript
export const THEME = {
  colors: {
    primary: "#FF6B35",
    darkGreen: "#004E4E",
  },
};
```

### Styles

Global styles and animations can be found in `index.css` in the root directory

### Content

Update the site content by modifying the constants in `src/utils/constants.js`

## Configuration Files

### tailwind.config.cjs

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#004E4E",
        primary: "#FF6B35",
      },
    },
  },
  plugins: [],
};
```

### postcss.config.cjs

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Deployment

The site can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/perspectve-website](https://github.com/your-username/perspectve-website)
