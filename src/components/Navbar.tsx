import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 bg-white border-b border-gray-300 shadow-sm' // Sempre com a borda e sombra
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-semibold text-portfolio-dark-gray">
            Gonçalo Barata
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover-link text-portfolio-dark-gray text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-portfolio-dark-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20 border-t border-gray-300', // Sempre com a borda no menu mobile
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-portfolio-dark-gray text-lg font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
