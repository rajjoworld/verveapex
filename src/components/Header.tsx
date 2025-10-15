import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trackEvent } from '../services/analytics';

const Header: React.FC = () => {
  useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        duration: 0.6
      }
    }
  };

  const logoText = "Verve Apex";
  const letters = logoText.split("");

  return (
    <header className="bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-primary-500/20 sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(139, 92, 246, 0.3), 0 0 16px rgba(139, 92, 246, 0.2)",
                    "0 0 12px rgba(139, 92, 246, 0.4), 0 0 24px rgba(139, 92, 246, 0.3), 0 0 36px rgba(139, 92, 246, 0.2)",
                    "0 0 8px rgba(139, 92, 246, 0.3), 0 0 16px rgba(139, 92, 246, 0.2)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl font-heading bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent inline-block"
                    style={{ backgroundSize: "200% 200%" }}
                    variants={letterVariants}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      backgroundPosition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1
                      }
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Elegant floating particles */}
              <motion.div
                className="absolute -top-3 -right-3 w-1.5 h-1.5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                animate={{
                  y: [-4, 4, -4],
                  x: [-3, 3, -3],
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1
                }}
              />

              <motion.div
                className="absolute -bottom-2 -left-2 w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                animate={{
                  y: [3, -3, 3],
                  x: [2, -2, 2],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.5
                }}
              />

              <motion.div
                className="absolute top-1/2 -right-4 w-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                animate={{
                  y: [-2, 2, -2],
                  x: [-1, 1, -1],
                  scale: [0.6, 1, 0.6],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 2
                }}
              />
            </motion.div>
          </Link>

          {/* CTA visible on all screens */}
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/#book-a-call"
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                onClick={() => trackEvent('book_call_click', { location: 'header_desktop' })}
              >
                Book a Call
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
