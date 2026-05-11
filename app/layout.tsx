import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rider Coach | Personal Trainer',
  description: 'Entrenamiento personal presencial y online con Rider Coach. Planes de alimentación, rutinas personalizadas y seguimiento constante en La Paz, Canelones, Uruguay.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${anton.variable}`}>
      <body suppressHydrationWarning className="bg-black">
        {children}
      </body>
    </html>
  );
}
