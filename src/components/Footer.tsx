
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
            <img 
            src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/android-icon-48x48_htru7i" 
            alt="Boda Guy Logo" 
            className="h-8 w-8 rounded-[12px]"
          />
              <span>Boda Guy</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Boda Guy connects riders with drivers to deliver packages, goods, and more in a fast, reliable way.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/bodaguy_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/datfri/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bodaguy-600 transition-colors" aria-label="LinkedIn">
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
                <span>P O BOX 171254 Ntinda Kampala Uganda</span>
              </li>
              <li>
                <a 
                  href="mailto:bodaguyfreight@gmail.com" 
                  className="flex gap-3 text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                >
                  <Mail size={20} className="text-bodaguy-600 flex-shrink-0" />
                  <span>bodaguyfreight@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:0393102562" 
                  className="flex gap-3 text-gray-600 hover:text-bodaguy-600 transition-colors text-sm"
                >
                  <Phone size={20} className="text-bodaguy-600 flex-shrink-0" />
                  <span>0393102562</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Boda Guy Freight Services by Lyanda Technologies Limited. All rights reserved.
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
