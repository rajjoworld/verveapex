import React, { useState } from 'react';
import Atropos from 'atropos/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, DollarSign, CheckCircle, ArrowRight, CreditCard, Stethoscope, ShoppingCart, BarChart3, GraduationCap, Truck } from 'lucide-react';

type ProjectCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  outcome: string;
  hoverMetric: string;
  techStack: string[];
  timeline: string;
  budgetRange: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: 'primary' | 'mustard' | 'sodaGreen' | 'lime';
};

const cards: ProjectCard[] = [
  {
    title: 'FinTech Banking',
    subtitle: 'Secure digital wallets & payments',
    bullets: ['KYC/AML flows', 'Transfers & payouts', 'Charts & analytics'],
    outcome: 'Reduced onboarding time 40% → PCI-ready stack + audit docs (delivered in 6 weeks)',
    hoverMetric: 'Demo in 2 weeks',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    timeline: '6-8 weeks',
    budgetRange: '₹15L - ₹25L',
    icon: CreditCard,
    accent: 'primary',
  },
  {
    title: 'Telemedicine',
    subtitle: 'Virtual care & eRx',
    bullets: ['Video consult', 'EMR-lite records', 'Scheduling'],
    outcome: '30% faster patient intake → HIPAA-compliant with telehealth integrations (delivered in 7 weeks)',
    hoverMetric: 'Demo in 2.5 weeks',
    techStack: ['React', 'Express', 'MongoDB', 'WebRTC', 'Twilio'],
    timeline: '7-9 weeks',
    budgetRange: '₹12L - ₹20L',
    icon: Stethoscope,
    accent: 'sodaGreen',
  },
  {
    title: 'E-commerce',
    subtitle: 'Modern storefronts',
    bullets: ['Catalog & search', 'Checkout', 'Order tracking'],
    outcome: '50% increase in conversion → scalable inventory & payment systems (delivered in 5 weeks)',
    hoverMetric: 'Demo in 1.5 weeks',
    techStack: ['Next.js', 'Stripe', 'Prisma', 'Vercel', 'Algolia'],
    timeline: '5-7 weeks',
    budgetRange: '₹10L - ₹18L',
    icon: ShoppingCart,
    accent: 'mustard',
  },
  {
    title: 'SaaS CRM',
    subtitle: 'Pipelines & automation',
    bullets: ['Leads & deals', 'Dashboards', 'Email integration'],
    outcome: '2x lead conversion → custom workflows & analytics dashboard (delivered in 8 weeks)',
    hoverMetric: 'Demo in 3 weeks',
    techStack: ['React', 'Django', 'PostgreSQL', 'SendGrid', 'Chart.js'],
    timeline: '8-10 weeks',
    budgetRange: '₹18L - ₹30L',
    icon: BarChart3,
    accent: 'primary',
  },
  {
    title: 'EdTech',
    subtitle: 'Courses & cohorts',
    bullets: ['Video lessons', 'Quizzes', 'Certificates'],
    outcome: 'Engagement up 60% → interactive learning platform with progress tracking (delivered in 6 weeks)',
    hoverMetric: 'Demo in 2 weeks',
    techStack: ['React', 'Firebase', 'Vimeo API', 'SCORM', 'Analytics'],
    timeline: '6-8 weeks',
    budgetRange: '₹12L - ₹22L',
    icon: GraduationCap,
    accent: 'lime',
  },
  {
    title: 'Logistics',
    subtitle: 'Dispatch & tracking',
    bullets: ['Route optimize', 'Driver app', 'Live status'],
    outcome: '25% cost savings → real-time tracking & automated dispatch (delivered in 9 weeks)',
    hoverMetric: 'Demo in 3.5 weeks',
    techStack: ['React Native', 'Express', 'MongoDB', 'Google Maps', 'Socket.io'],
    timeline: '9-12 weeks',
    budgetRange: '₹20L - ₹35L',
    icon: Truck,
    accent: 'sodaGreen',
  },
];

const accentStyles: Record<ProjectCard['accent'], string> = {
  primary: 'from-black/20 to-black/10 border-black/30',
  mustard: 'from-black/20 to-black/10 border-black/30',
  sodaGreen: 'from-black/20 to-black/10 border-black/30',
  lime: 'from-black/20 to-black/10 border-black/30',
};

const ProjectsShowcase: React.FC<{ onCTAClick?: () => void }> = ({ onCTAClick }) => {
  const [selectedCard, setSelectedCard] = useState<ProjectCard | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
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
            {cards.map((card, i) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  onHoverStart={() => setHoveredCard(card.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Atropos
                    className="group"
                    data-atropos-offset="5"
                    onMouseEnter={() => setHoveredCard(card.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`relative rounded-2xl border p-6 bg-black/20 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-black/30 hover:shadow-2xl hover:shadow-black/50 cursor-pointer bg-gradient-to-br ${accentStyles[card.accent]}`}
                      onClick={() => setSelectedCard(card)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedCard(card);
                        }
                      }}
                      role="button"
                      aria-label={`View details for ${card.title}`}
                      data-atropos-offset="0"
                    >
                      {/* Floating orb */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-xl group-hover:blur-2xl transition-all" data-atropos-offset="2" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4" data-atropos-offset="3">
                          <div className="p-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10" data-atropos-offset="4">
                            <IconComponent className="w-6 h-6 text-white/80" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-lg leading-tight">{card.title}</h3>
                            <p className="text-white/60 text-sm leading-tight">{card.subtitle}</p>
                          </div>
                        </div>

                        {/* Outcome - moved to top for prominence */}
                        <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 mb-4" data-atropos-offset="2">
                          <div className="text-primary-300 text-sm font-semibold mb-1">Outcome:</div>
                          <div className="text-white font-semibold text-sm leading-relaxed">{card.outcome}</div>
                        </div>

                        <div className="mb-4">
                          <div className="text-white/80 text-sm font-medium mb-2">Key Features:</div>
                          <ul className="space-y-2">
                            {card.bullets.map((b) => (
                              <li key={b} className="flex items-center gap-2 text-white/80 text-sm" data-atropos-offset="3">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-400" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hover metric */}
                        <AnimatePresence>
                          {hoveredCard === card.title && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="mb-3 p-2 bg-primary-500/10 rounded-lg border border-primary-500/20"
                              data-atropos-offset="4"
                            >
                              <div className="flex items-center gap-2 text-primary-300 text-xs">
                                <Clock className="w-3 h-3" />
                                {card.hoverMetric}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button 
                          className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-500 text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-white/5 flex items-center justify-center gap-2" 
                          data-atropos-offset="5"
                          onClick={onCTAClick}
                        >
                          Request a similar project
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <div className="mt-2 text-center">
                          <div className="text-white/50 text-xs">
                            Typical delivery: {card.timeline} • Budget: {card.budgetRange}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Atropos>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                      <selectedCard.icon className="w-8 h-8 text-white/90" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedCard.title}</h3>
                      <p className="text-white/70">{selectedCard.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Key Outcomes
                    </h4>
                    <p className="text-white/90">{selectedCard.outcome}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Our Approach</h4>
                    <ul className="space-y-2">
                      {selectedCard.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-center gap-3 text-white/80">
                          <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCard.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-primary-500/5 rounded-lg border border-primary-500/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <div>
                        <div className="text-white/90 text-sm font-medium">Timeline</div>
                        <div className="text-white/70 text-xs">{selectedCard.timeline}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary-400" />
                      <div>
                        <div className="text-white/90 text-sm font-medium">Budget Range</div>
                        <div className="text-white/70 text-xs">{selectedCard.budgetRange}</div>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 rounded-lg hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-500 text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-white/5 flex items-center justify-center gap-2"
                    onClick={() => {
                      setSelectedCard(null);
                      onCTAClick?.();
                    }}
                  >
                    Get a Similar Project Plan
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsShowcase;
