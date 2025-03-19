
# Bodaguy Connect - Uganda's Modern Delivery Service Platform

![Bodaguy Connect](https://source.unsplash.com/random/1200x630?delivery&sig=1)

## Overview

Bodaguy Connect is a modern web application for an on-demand delivery service in Uganda, similar to Uber Connect. The platform connects drivers with customers who need package delivery services across Kampala and other major Ugandan cities.

## Live Demo

You can view the live demo at: [https://bodaguy.lovable.dev](https://bodaguy.lovable.dev)

## Features

- Modern, responsive design with clean UI/UX optimized for Ugandan market
- Multiple pages: Home, About, Newsroom, Blog, and Careers
- Mobile-friendly layout with smooth animations
- Optimized for conversion with clear CTAs for both drivers and customers

## Tech Stack

- React.js (with TypeScript)
- Vite for build tooling
- React Router for routing
- Tailwind CSS for styling
- shadcn/ui for UI components
- Framer Motion for animations
- Tanstack Query for data fetching

## Local Development Setup

### Prerequisites

- Node.js (v14.0.0 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/bodaguy-connect.git
   cd bodaguy-connect
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
bodaguy-connect/
├── public/             # Static assets
├── src/
│   ├── assets/         # Project assets (images, icons, etc.)
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main App component with routes
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── tailwind.config.ts  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Deployment

### GitHub Pages Deployment

The project is configured to automatically deploy to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

To deploy manually:

1. Push your changes to the main branch, or
2. Go to the Actions tab in your GitHub repository and manually trigger the "Deploy to GitHub Pages" workflow

The deployed site will be available at: `https://yourusername.github.io/bodaguy-connect/`

### Other Deployment Options

The project can also be deployed to:
- Netlify
- Vercel
- AWS Amplify
- Any static site hosting service

## Adding New Content

### Images and Assets
- Place new images in the `src/assets/` directory
- Import them from the `src/assets/index.ts` file

### Adding New Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add a link to the new page in the navigation components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact info@bodaguy.ug

