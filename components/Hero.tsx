'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Rider Coach Training"
          fill
          className="object-cover object-center grayscale brightness-50"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lime-400 font-bold uppercase tracking-[0.3em] mb-6 text-sm md:text-base"
          >
            Elite Performance Coach
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.8] mb-10 tracking-tighter italic"
          >
            SIN EXCUSAS<br />
            <span className="text-stroke-white text-transparent">SIN LÍMITES</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#contacto"
              className="px-10 py-5 bg-lime-400 text-black font-black uppercase text-lg hover:bg-white transition-colors duration-300 skew-x-[-12deg]"
            >
              <span className="inline-block skew-x-[12deg]">Comenzar Ahora</span>
            </a>
            <a 
              href="#servicios"
              className="px-10 py-5 border-2 border-white text-white font-black uppercase text-lg hover:bg-white hover:text-black transition-all duration-300 skew-x-[-12deg]"
            >
              <span className="inline-block skew-x-[12deg]">Ver Servicios</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '100px' }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px bg-white/30 hidden md:block"
      />
    </section>
  );
}
