'use client';

import { motion } from 'motion/react';
import { Dumbbell, Users, Laptop, Zap } from 'lucide-react';

const services = [
  {
    title: 'Entrenamiento Presencial',
    description: 'Sesiones personalizadas en gimnasio con seguimiento técnico directo y motivación constante al 100%.',
    icon: Dumbbell,
    features: ['Horarios flexibles', 'Corrección técnica', 'Material incluido', 'Atención 1 a 1']
  },
  {
    title: 'Asesoría Online',
    description: 'Planificación completa a distancia. Entrena donde quieras con el aval de un profesional en tu bolsillo.',
    icon: Laptop,
    features: ['Plan de entrenamiento', 'Videollamadas semanales', 'App exclusiva', 'Soporte 24/7']
  },
  {
    title: 'Transformación Grupal',
    description: 'Entrenamientos en equipo que potencian tu rendimiento a través de la competencia sana y el apoyo mutuo.',
    icon: Users,
    features: ['Comunidad activa', 'Eventos mensuales', 'Motivación grupal', 'Costos reducidos']
  },
  {
    title: 'Planes Nutricionales',
    description: 'La base del éxito. Diseñamos tu alimentación según tus gustos, objetivos y estilo de vida.',
    icon: Zap,
    features: ['Macro tracking', 'Recetarios fitness', 'Ajustes constantes', 'Vegano/Vegetariano']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="container mx-auto px-6">
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-4">
          MIS <span className="text-lime-400">SERVICIOS</span>
        </h2>
        <div className="h-1 w-20 bg-lime-400 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-8 border border-white/10 hover:border-lime-400 bg-white/5 transition-all duration-300 flex flex-col h-full"
          >
            <div className="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-white/60 mb-8 flex-grow">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
