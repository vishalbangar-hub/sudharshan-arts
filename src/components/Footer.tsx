import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../images/sudarshan-logo.png";
interface FooterProps {
  setActiveSection: (section: string) => void;
}

export function Footer({ setActiveSection }: FooterProps) {
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a2332] to-[#2d3e50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                 <img src={logo} alt="Logo" className="footer-logo" />  
              
              </div>
   
            </div>
            <p className="font-['Lora'] text-gray-300 text-sm leading-relaxed mb-4">
              Trusted for a century
            </p>
            <p className="font-['Lora'] text-gray-400 text-xs italic">
              Sudarshan Arts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Montserrat'] text-white mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'work', 'sustainability', 'testimonials', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleNavClick(section)}
                    className="font-['Lora'] text-gray-300 hover:text-[#d4a574] transition-colors text-sm capitalize"
                  >
                    {section === 'home' ? 'Home' : 
                     section === 'about' ? 'About Us' : 
                     section === 'work' ? 'Our Work' :
                     section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Montserrat'] text-white mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-2 font-['Lora'] text-sm text-gray-300">
              <li>Commercial Printing</li>
              <li>Gifting and Merchandising</li>
              <li>Calendar Printing</li>
              <li>Digital Printing</li>
              <li>Offset Printing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Montserrat'] text-white mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-300">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-[#d4a574]" />
                <span className="font-['Lora']">10, Wadala Udyog Bhavan, MGS road, Wadala, Mumbai - 400 031.</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-300">
                <Phone size={16} className="flex-shrink-0 text-[#d4a574]" />
                <span className="font-['Lora']">+91 7506 354 747</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-300">
                <Mail size={16} className="flex-shrink-0 text-[#d4a574]" />
                <span className="font-['Lora']">anand@sudarshanarts.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-['Lora'] text-sm text-gray-300 text-center md:text-left">
            © 2026 Sudarshan Arts Mumbai. All rights reserved. Celebrating 100 years of excellence.
          </div>
          
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-[#d4a574] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-[#d4a574] transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-[#d4a574] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-[#d4a574] transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}