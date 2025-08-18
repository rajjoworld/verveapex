import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleFieldProps {
  count?: number;
  color?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 50, 
  color = '#0ea5e9' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    animationDuration: Math.random() * 20 + 10,
    animationDelay: Math.random() * 5,
  }));

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.animationDuration,
            delay: particle.animationDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
