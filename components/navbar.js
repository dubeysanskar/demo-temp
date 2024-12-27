'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Prizes', href: 'prizes' },
    { name: 'Guidelines', href: 'guidelines' },
    { name: 'Themes', href: 'themes' },
    { name: 'Schedule', href: 'timeline' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <motion.nav
      style={{ background }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8" />
              <span className="font-bold text-xl">AI Hackathon</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                className="ml-4"
                variant="secondary"
                onClick={() => window.open('https://forms.gle/EvT5mXzWNZ3Gpn6C8', '_blank')}
              >
                Register Now
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-white/10"
            >
              {item.name}
            </button>
          ))}
          <Button
            className="w-full mt-4"
            variant="secondary"
            onClick={() => window.open('https://forms.gle/EvT5mXzWNZ3Gpn6C8', '_blank')}
          >
            Register Now
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}