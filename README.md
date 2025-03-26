# Bodaguy website

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
   git clone https://github.com/sempijja/bodaguy-website.git
   cd bodaguy-website
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


### Images and Assets
- Place new images in the `src/assets/` directory
- Import them from the `src/assets/index.ts` file

### Adding New Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add a link to the new page in the navigation components


