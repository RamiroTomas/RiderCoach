import { Instagram, Smartphone as TikTok, MessageCircle as WhatsApp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-32 pb-10 border-t border-white/5 mt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div>
            <Link href="/" className="text-4xl font-display uppercase italic tracking-tighter text-white mb-4 block">
              Rider<span className="text-lime-400">Coach</span>
            </Link>
            <p className="text-white/40 max-w-xs text-sm uppercase tracking-widest font-medium">
              Transformando cuerpos, forjando mentes desde La Paz. El mejor momento para empezar fue ayer.
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="https://www.instagram.com/ridercoach_/?hl=es" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://tiktok.com/@nahuelrider" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <TikTok size={20} />
            </a>
            <a href="https://w.app/ridercoach" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
              <WhatsApp size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Rider Coach. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8 text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
            <Link href="#" className="hover:text-white">Privacidad</Link>
            <Link href="#" className="hover:text-white">Términos</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
