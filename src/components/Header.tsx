import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

import logo from "../images/sudarshan-logo.png";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
               
          <img src={logo} alt="Logo" />  
              </div> 
              <div>
            
      
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-['Montserrat'] text-sm transition-colors relative group ${
                    activeSection === item.id
                      ? 'text-[#1a2332] font-semibold'
                      : 'text-gray-600 hover:text-[#1a2332]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4a574]"></span>
                  )}
                </button>
              ))}
            </nav>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-[#d4a574] hover:bg-[#c49563] text-white px-6 py-2.5 rounded-sm transition-all shadow-md hover:shadow-lg font-['Montserrat'] text-sm font-medium"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-sm hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-[#1a2332]" /> : <Menu size={24} className="text-[#1a2332]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors font-['Montserrat'] ${
                  activeSection === item.id
                    ? 'text-[#1a2332] bg-[#f8f9fa] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#d4a574] hover:bg-[#c49563] text-white px-6 py-3 rounded-sm transition-all font-['Montserrat'] font-medium"
              >
                Request Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}