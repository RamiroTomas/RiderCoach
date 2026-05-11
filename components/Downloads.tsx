'use client';

import { motion } from 'motion/react';
import { FileText, Download, Apple, Utensils, Scale } from 'lucide-react';

const pdfs = [
  {
    title: 'Guía de Alimentación Básica',
    description: 'Aprende los fundamentos de la nutrición para optimizar tu rendimiento y salud.',
    icon: Apple,
    color: 'bg-red-500/20 text-red-500'
  },
  {
    title: 'Recetario Proteico',
    description: 'Más de 20 recetas fáciles y rápidas con alto contenido de proteína para tus músculos.',
    icon: Utensils,
    color: 'bg-orange-500/20 text-orange-500'
  },
  {
    title: 'Control de Macronutrientes',
    description: 'Aprende a calcular y ajustar tus macros según tu objetivo: volumen o definición.',
    icon: Scale,
    color: 'bg-blue-500/20 text-blue-500'
  },
  {
    title: 'Suplementación Inteligente',
    description: 'Toda la verdad sobre los suplementos. Qué funciona y qué es una pérdida de dinero.',
    icon: FileText,
    color: 'bg-purple-500/20 text-purple-500'
  }
];

export default function Downloads() {
  return (
    <section id="guias" className="bg-white/5 py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-lime-400 font-bold uppercase tracking-widest mb-4">Recursos Gratuitos</p>
          <h2 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter text-white">
            DESCARGAR <span className="text-lime-400">PDFs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pdfs.map((pdf, index) => (
            <motion.div
              key={pdf.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start p-8 bg-black/40 border border-white/10 hover:border-lime-400 transition-colors group"
            >
              <div className={`p-4 rounded-xl mr-6 ${pdf.color}`}>
                <pdf.icon size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 uppercase">{pdf.title}</h3>
                <p className="text-white/60 mb-6 text-sm">{pdf.description}</p>
                <button className="flex items-center text-lime-400 font-bold uppercase text-xs tracking-widest group-hover:underline underline-offset-4">
                  <Download size={16} className="mr-2" />
                  Descargar PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
