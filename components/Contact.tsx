'use client';

import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="container mx-auto px-6 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-8 leading-none">
            EMPIEZA <br />
            <span className="text-lime-400">TU CAMBIO</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            No importa en qué punto estés hoy. Lo que importa es hacia dónde quieres llegar. Envíame un mensaje y armamos un plan a tu medida.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Ubicación</p>
                <p className="text-lg font-bold">La Paz, Canelones, Uruguay</p>
              </div>
            </div>
            <a
              href="https://w.app/ridercoach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-lime-400">WhatsApp</p>
                <p className="text-lg font-bold">+598 91 749 293</p>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/ridercoach_/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-6 group"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
                <Instagram size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-lime-400">Seguime</p>
                <p className="text-lg font-bold">@ridercoach_</p>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white px-8 py-12 md:p-16 skew-x-[-2deg]"
        >
          <div className="skew-x-[2deg] text-black">
            <form 
              className="space-y-6" 
              action="https://formsubmit.co/ramirotomasdearmas@gmail.com" 
              method="POST"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Tu Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-slate-100 border-none focus:ring-2 focus:ring-lime-400 p-4 font-bold text-black outline-none placeholder:text-black/20"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Tu Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="ejemplo@mail.com"
                  className="w-full bg-slate-100 border-none focus:ring-2 focus:ring-lime-400 p-4 font-bold text-black outline-none placeholder:text-black/20"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Objetivo</label>
                <select name="objective" className="w-full bg-slate-100 border-none focus:ring-2 focus:ring-lime-400 p-4 font-bold text-black outline-none appearance-none cursor-pointer">
                  <option>Ganar masa muscular</option>
                  <option>Perder peso / Definición</option>
                  <option>Rendimiento deportivo</option>
                  <option>Salud / Bienestar</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Mensaje</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Cuéntame sobre ti..."
                  className="w-full bg-slate-100 border-none focus:ring-2 focus:ring-lime-400 p-4 font-bold text-black outline-none placeholder:text-black/20 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-white py-5 flex items-center justify-center space-x-3 font-black uppercase tracking-[0.2em] hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
