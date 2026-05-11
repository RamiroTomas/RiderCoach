import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Downloads from '@/components/Downloads';
import Gallery from '@/components/Gallery';
import Quotes from '@/components/Quotes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-lime-400 selection:text-black">
      <Navbar />
      <Hero />
      <div className="space-y-32 pb-20">
        <Services />
        <Downloads />
        <Gallery />
        <Quotes />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
