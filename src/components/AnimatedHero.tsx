import React from 'react';
import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

interface AnimatedHeroProps {
  onCTAClick: () => void;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Particle Field */}
        <ParticleField count={30} color="#0ea5e9" />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-xl opacity-40"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [-8, 8, -8],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.5
          }}
          className="absolute top-60 right-40 w-8 h-8 bg-primary-300 rounded-full opacity-60"
        />

        {/* Large animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-100 to-primary-100 rounded-full"
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="w-full h-4 bg-primary-200 rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-primary-100 mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="w-3 h-3 bg-green-500 rounded-full mr-3"
              />
              <span className="text-sm font-medium text-gray-700">
                🚀 Transforming Ideas into Digital Success Stories
              </span>
            </motion.div>

            {/* Main Headline with Gradient Text */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="block text-gray-900 mb-2">Your Vision.</span>
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="block bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '300% 300%'
                }}
              >
                Launched.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Global MVP & Full-Stack Development for{' '}
              <motion.span
                animate={{
                  color: ['#0ea5e9', '#8b5cf6', '#3b82f6', '#0ea5e9']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="font-semibold"
              >
                Ambitious Businesses
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We partner with international clients to build robust, scalable mobile and web products, 
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="font-medium text-primary-600"
              >
                {' '}faster and smarter.
              </motion.span>
            </motion.p>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={onCTAClick}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Get a Free Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity
                      }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">500+ Projects</div>
                  <div className="text-gray-600">Delivered Successfully</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators with Animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "50+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24h", label: "Response Time" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.5,
                      repeat: Infinity
                    }}
                    className="text-3xl font-bold text-primary-600 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
        <div className="text-center mt-2 text-sm text-gray-500">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
