import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

type ProjectCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  emoji: string;
  accent: 'primary' | 'mustard' | 'sodaGreen' | 'lime';
};

const cards: ProjectCard[] = [
  {
    title: 'FinTech Banking',
    subtitle: 'Secure digital wallets & payments',
    bullets: ['KYC/AML flows', 'Transfers & payouts', 'Charts & analytics'],
    emoji: '💳',
    accent: 'primary',
  },
  {
    title: 'Telemedicine',
    subtitle: 'Virtual care & eRx',
    bullets: ['Video consult', 'EMR-lite records', 'Scheduling'],
    emoji: '🩺',
    accent: 'sodaGreen',
  },
  {
    title: 'E‑commerce',
    subtitle: 'Modern storefronts',
    bullets: ['Catalog & search', 'Checkout', 'Order tracking'],
    emoji: '🛒',
    accent: 'mustard',
  },
  {
    title: 'SaaS CRM',
    subtitle: 'Pipelines & automation',
    bullets: ['Leads & deals', 'Dashboards', 'Email integration'],
    emoji: '📊',
    accent: 'primary',
  },
  {
    title: 'EdTech',
    subtitle: 'Courses & cohorts',
    bullets: ['Video lessons', 'Quizzes', 'Certificates'],
    emoji: '🎓',
    accent: 'lime',
  },
  {
    title: 'Logistics',
    subtitle: 'Dispatch & tracking',
    bullets: ['Route optimize', 'Driver app', 'Live status'],
    emoji: '🚚',
    accent: 'sodaGreen',
  },
];

const accentStyles: Record<ProjectCard['accent'], string> = {
  // Subtle, neutral glassy tints instead of saturated colors
  primary: 'from-white/6 to-white/2 border-white/10',
  mustard: 'from-white/6 to-white/2 border-white/10',
  sodaGreen: 'from-white/6 to-white/2 border-white/10',
  lime: 'from-white/6 to-white/2 border-white/10',
};

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-white/10 to-white/0" />
        <div className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-white/10 to-white/0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Projects We Can Build For You
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            From concept to completion — interactive cards preview what your product could feel like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="group"
              >
                <div className={`relative rounded-2xl border p-6 bg-[#0A0A0A]/70 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 bg-gradient-to-br ${accentStyles[card.accent]}`}>
                  {/* Floating orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">
                        <span role="img" aria-label="icon">{card.emoji}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                        <p className="text-white/70 text-sm">{card.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-white/80 text-sm">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
