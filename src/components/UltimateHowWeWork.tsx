import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import Lottie from 'lottie-react';
import { 
  MessageCircle, 
  FileText, 
  Palette, 
  Code, 
  Rocket,
  Zap
} from 'lucide-react';

// Import Lottie animations from src/assets
import discoveryAnimation from '../assets/lottie/discovery.json';
import proposalAnimation from '../assets/lottie/proposal.json';
import designAnimation from '../assets/lottie/design.json';
import developmentAnimation from '../assets/lottie/development.json';
import launchAnimation from '../assets/lottie/launch.json';

const steps = [
  {
    id: 1,
    title: 'Discovery (Free Call)',
    desc: 'We understand your goals, constraints, and success criteria. Expect clear notes and next steps within 24 hours.',
    icon: MessageCircle,
    lottieAnimation: discoveryAnimation,
    color: '#00D4FF',
    gradient: 'from-cyan-400 to-blue-500',
    tag: 'FREE'
  },
  {
    id: 2,
    title: 'Scope & Proposal',
    desc: 'Lean scope with must-haves vs nice-to-haves, timeline options, and transparent pricing. No fluff.',
    icon: FileText,
    lottieAnimation: proposalAnimation,
    color: '#7C3AED',
    gradient: 'from-purple-400 to-purple-600',
    tag: 'DETAILED'
  },
  {
    id: 3,
    title: 'Design & Plan',
    desc: 'We translate goals into user flows and tickets. You review the plan before we write code.',
    icon: Palette,
    lottieAnimation: designAnimation,
    color: '#F59E0B',
    gradient: 'from-amber-400 to-orange-500',
    tag: 'VISUAL'
  },
  {
    id: 4,
    title: 'Build in Iterations',
    desc: 'Weekly demos, honest status, and fast adjustments. We ship value early and often.',
    icon: Code,
    lottieAnimation: developmentAnimation,
    color: '#10B981',
    gradient: 'from-emerald-400 to-green-500',
    tag: 'AGILE'
  },
  {
    id: 5,
    title: 'Launch & Support',
    desc: 'Staging → Production with a checklist. Post-launch monitoring and a clear support path.',
    icon: Rocket,
    lottieAnimation: launchAnimation,
    color: '#EF4444',
    gradient: 'from-red-400 to-pink-500',
    tag: 'LIVE'
  },
];

// Clean Step Card Component
const CleanStepCard: React.FC<{ 
  step: typeof steps[0], 
  index: number, 
  isActive: boolean
}> = ({ step, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  const progressSpring = useSpring({
    width: isActive ? '100%' : '0%',
    config: { tension: 200, friction: 25 }
  });

  const IconComponent = step.icon;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection Line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0">
          <animated.div 
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600"
            style={progressSpring}
          />
        </div>
      )}

      <animated.div
        style={cardSpring}
        className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 
                   border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm
                   hover:border-primary-500/50 transition-all duration-300
                   min-h-[280px]"
      >
        {/* Step Number Badge */}
        <motion.div 
          className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} 
                     flex items-center justify-center text-white font-bold text-sm shadow-lg z-20`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {index + 1}
        </motion.div>

        {/* Tag */}
        <div className="absolute -top-2 right-4 z-20">
          <span className={`px-2 py-1 text-xs font-semibold bg-gradient-to-r ${step.gradient} 
                          text-white rounded-full shadow-lg`}>
            {step.tag}
          </span>
        </div>

        {/* Icon with Lottie Animation */}
        <motion.div 
          className="mb-4 relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.gradient} 
                          flex items-center justify-center mb-4 relative overflow-hidden`}>
            {/* Fallback Icon */}
            <IconComponent className="w-8 h-8 text-white absolute inset-0 m-auto" />
            
            {/* Lottie Animation Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                animationData={step.lottieAnimation}
                className="w-12 h-12"
                loop
                autoplay={isHovered}
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-3 relative z-10">
          <h3 className="text-lg font-semibold text-white">
            {step.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 relative z-10">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r ${step.gradient}`}
              initial={{ width: 0 }}
              animate={{ width: isActive ? '100%' : '0%' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
        </div>
      </animated.div>
    </motion.div>
  );
};

const CleanHowWeWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-20 bg-[#0A0A0A] border-t border-primary-500/20 relative overflow-hidden">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 
                       border border-primary-500/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">Our Process</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r 
                         from-white to-gray-400 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A simple, honest process that keeps momentum and clarity. Every step designed 
            to minimize risk and maximize value delivery.
          </p>
        </motion.div>

        {/* Clean Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <CleanStepCard
              key={step.id}
              step={step}
              index={index}
              isActive={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanHowWeWork;