'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Smartphone as TikTok, MessageCircle as WhatsApp, Menu, X } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/ridercoach_/?hl=es', label: 'Instagram' },
  { icon: TikTok, href: 'https://tiktok.com/@nahuelrider', label: 'TikTok' }, // User didn't provide new TikTok, keeping old one or leaving as is
  { icon: WhatsApp, href: 'https://w.app/ridercoach', label: 'WhatsApp' },
];

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Guías', href: '#guias' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 text-2xl font-display uppercase italic tracking-tighter text-white">
          <span>Rider<span className="text-lime-400">Coach</span></span>
          <Image 
            src="/firma.svg" 
            alt="Firma Rider Coach" 
            width={80} 
            height={40} 
            className="invert brightness-0"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-lime-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="hidden md:flex items-center space-x-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-lime-400 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-t border-white/10 py-10 px-6 md:hidden flex flex-col items-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xl font-bold uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-8 pt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  className="text-white hover:text-lime-400"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
