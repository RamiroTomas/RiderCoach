'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const clients = [
  { id: 1, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop', name: 'Marcos T.' },
  { id: 2, src: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?q=80&w=2070&auto=format&fit=crop', name: 'Laura S.' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop', name: 'David R.' },
  { id: 4, src: 'https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?q=80&w=1974&auto=format&fit=crop', name: 'Carla G.' },
  { id: 5, src: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop', name: 'Juan P.' },
  { id: 6, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop', name: 'Sofía L.' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="container mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-4">
          COMUNIDAD <span className="text-lime-400">RIDER</span>
        </h2>
        <p className="text-white/60 uppercase tracking-widest text-sm">Resultados reales de personas reales</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group overflow-hidden break-inside-avoid shadow-2xl"
          >
            <Image 
              src={client.src}
              alt={client.name}
              width={600}
              height={800}
              className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-lime-400 font-black uppercase italic text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {client.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
