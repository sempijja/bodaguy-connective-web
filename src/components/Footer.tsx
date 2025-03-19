
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Stay up to date with Bodaguy
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest news and updates about our services delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-full bg-white"
              />
              <Button className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Company */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-bodaguy-700 mb-6">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#0EA5E9"/>
                <path d="M14 18C14 15.7909 15.7909 14 18 14H30C32.2091 14 34 15.7909 34 18V30C34 32.2091 32.2091 34 30 34H18C15.7909 34 14 32.2091 14 30V18Z" fill="white"/>
                <path d="M22 20L26 24L22 28" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Bodaguy</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Bodaguy connects riders with drivers to deliver packages, goods, and more in a fast, reliable way.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Package Delivery', href: '#' },
                { name: 'On-Demand Delivery', href: '#' },
                { name: 'Same-Day Delivery', href: '#' },
                { name: 'Driver Partnership', href: '#' },
                { name: 'Business Solutions', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Newsroom', href: '/newsroom' },
                { name: 'Blog', href: '/blog' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-600 text-sm">
                <MapPin size={20} className="text-bodaguy-600 flex-shrink-0" />
                <span>123 Market Street, Suite 100, San Francisco, CA 94103</span>
              </li>
              <li>
                <a 
                  href="mailto:info@bodaguy.com" 
                  className="flex gap-3 text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                >
                  <Mail size={20} className="text-bodaguy-600 flex-shrink-0" />
                  <span>info@bodaguy.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1-800-BODAGUY" 
                  className="flex gap-3 text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                >
                  <Phone size={20} className="text-bodaguy-600 flex-shrink-0" />
                  <span>+1-800-BODAGUY</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bodaguy Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-bodaguy-600 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-bodaguy-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
