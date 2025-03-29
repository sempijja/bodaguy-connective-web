import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ChevronUp, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

// Define navigation items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Add scroll event listener to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-bodaguy-700 hover:text-bodaguy-600 transition-colors"
        >
          <img 
            src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/android-icon-48x48_htru7i" 
            alt="Boda Guy Logo" 
            className="h-8 w-8 rounded-[8px]"
          />
          <span className="hidden sm:inline">Boda Guy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-3 py-2 rounded-full text-sm font-medium transition-colors",
                location.pathname === item.href 
                  ? "text-bodaguy-700 bg-bodaguy-50 hover:bg-bodaguy-100" 
                  : "text-gray-600 hover:text-bodaguy-700 hover:bg-gray-50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/become-driver">Become a Driver</Link>
          </Button>
          <Button asChild className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700">
            <Link to="/download-app">Get the App</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="transition-transform animate-fade-in" />
          ) : (
            <Menu size={24} className="transition-transform animate-fade-in" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md shadow-lg",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container px-4 py-6 mx-auto space-y-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  location.pathname === item.href 
                    ? "text-bodaguy-700 bg-bodaguy-50" 
                    : "text-gray-600 hover:text-bodaguy-700 hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <Button asChild variant="outline" className="w-full">
              <Link to="/become-driver">Become a Driver</Link>
            </Button>
            <Button asChild className="w-full bg-bodaguy-600 hover:bg-bodaguy-700">
              <Link to="/download-app">Get the App</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
