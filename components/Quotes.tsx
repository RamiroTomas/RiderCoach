'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    author: "Rider Coach"
  },
  {
    text: "Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste.",
    author: "Robert Kiyosaki"
  },
  {
    text: "Tu cuerpo puede aguantar casi cualquier cosa. Es a tu mente a la que tienes que convencer.",
    author: "Proverbio Fitness"
  }
];

export default function Quotes() {
  return (
    <section className="relative overflow-hidden py-32 bg-lime-400">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-black">
        <div className="flex flex-col items-center text-center">
          <Quote size={64} className="mb-12 opacity-80" fill="currentColor" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <p className="text-2xl md:text-3xl font-display italic uppercase leading-tight mb-6 tracking-tight">
                  "{quote.text}"
                </p>
                <div className="h-px w-12 bg-black/30 mb-4" />
                <span className="text-sm font-bold uppercase tracking-widest opacity-60">
                  {quote.author}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
