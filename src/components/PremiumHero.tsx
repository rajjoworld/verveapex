import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, Variants, useSpring } from 'framer-motion';

interface PremiumHeroProps {
  onCTAClick: () => void;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({ onCTAClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  // Cinematic parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Premium mouse following
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 20 });
  
  // Transform spring values for calculations
  const springX2 = useTransform(springX, (x) => x * 2);
  const springY15 = useTransform(springY, (y) => y * 1.5);
  const springXNeg15 = useTransform(springX, (x) => x * -1.5);
  const springY2 = useTransform(springY, (y) => y * 2);
  const springX3 = useTransform(springX, (x) => x * 3);
  const springYNeg1 = useTransform(springY, (y) => y * -1);
  const springX10 = useTransform(springX, (x) => x * 10);
  
  // Pre-computed dynamic transforms for floating elements (individual declarations)
  const dynamicX0 = useTransform(springX, (x) => x * 1);
  const dynamicY0 = useTransform(springY, (y) => y * 1);
  const dynamicX1 = useTransform(springX, (x) => x * 1.1);
  const dynamicY1 = useTransform(springY, (y) => y * 1.1);
  const dynamicX2 = useTransform(springX, (x) => x * 1.2);
  const dynamicY2 = useTransform(springY, (y) => y * 1.2);
  const dynamicX3 = useTransform(springX, (x) => x * 1.3);
  const dynamicY3 = useTransform(springY, (y) => y * 1.3);
  const dynamicX4 = useTransform(springX, (x) => x * 1.4);
  const dynamicY4 = useTransform(springY, (y) => y * 1.4);
  const dynamicX5 = useTransform(springX, (x) => x * 1.5);
  const dynamicY5 = useTransform(springY, (y) => y * 1.5);
  const dynamicX6 = useTransform(springX, (x) => x * 1.6);
  const dynamicY6 = useTransform(springY, (y) => y * 1.6);
  const dynamicX7 = useTransform(springX, (x) => x * 1.7);
  const dynamicY7 = useTransform(springY, (y) => y * 1.7);
  const dynamicX8 = useTransform(springX, (x) => x * 1.8);
  const dynamicY8 = useTransform(springY, (y) => y * 1.8);
  const dynamicX9 = useTransform(springX, (x) => x * 1.9);
  const dynamicY9 = useTransform(springY, (y) => y * 1.9);
  const dynamicX10 = useTransform(springX, (x) => x * 2.0);
  const dynamicY10 = useTransform(springY, (y) => y * 2.0);
  const dynamicX11 = useTransform(springX, (x) => x * 2.1);
  const dynamicY11 = useTransform(springY, (y) => y * 2.1);
  const dynamicX12 = useTransform(springX, (x) => x * 2.2);
  const dynamicY12 = useTransform(springY, (y) => y * 2.2);
  const dynamicX13 = useTransform(springX, (x) => x * 2.3);
  const dynamicY13 = useTransform(springY, (y) => y * 2.3);
  const dynamicX14 = useTransform(springX, (x) => x * 2.4);
  const dynamicY14 = useTransform(springY, (y) => y * 2.4);
  
  // Array of pre-computed transforms
  const dynamicTransforms = [
    { x: dynamicX0, y: dynamicY0 }, { x: dynamicX1, y: dynamicY1 }, { x: dynamicX2, y: dynamicY2 },
    { x: dynamicX3, y: dynamicY3 }, { x: dynamicX4, y: dynamicY4 }, { x: dynamicX5, y: dynamicY5 },
    { x: dynamicX6, y: dynamicY6 }, { x: dynamicX7, y: dynamicY7 }, { x: dynamicX8, y: dynamicY8 },
    { x: dynamicX9, y: dynamicY9 }, { x: dynamicX10, y: dynamicY10 }, { x: dynamicX11, y: dynamicY11 },
    { x: dynamicX12, y: dynamicY12 }, { x: dynamicX13, y: dynamicY13 }, { x: dynamicX14, y: dynamicY14 }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Award-winning animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 120,
      scale: 0.8,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const orbVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Cinematic Background System */}
      <div className="absolute inset-0">
        {/* Deep Space Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900/20"
          style={{ scale, opacity }}
        />
        
        {/* Luxury Light Rays */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y3, x: springX, rotate: springY }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                width: '2px',
                height: '200vh',
                left: `${10 + i * 12}%`,
                top: '-50vh',
                transform: `rotate(${15 + i * 8}deg)`,
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Morphing Luxury Orbs */}
        <motion.div className="absolute inset-0">
          {/* Primary Orb - Gold */}
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              top: '20%',
              left: '15%',
              background: 'radial-gradient(circle, #fbbf24/20, #f59e0b/10, transparent 70%)',
              filter: 'blur(40px)',
              x: springX2,
              y: springY15,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Secondary Orb - Blue */}
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              top: '60%',
              right: '20%',
              background: 'radial-gradient(circle, #3b82f6/15, #1d4ed8/8, transparent 70%)',
              filter: 'blur(35px)',
              x: springXNeg15,
              y: springY2,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear", delay: 2 }
            }}
          />

          {/* Tertiary Orb - Emerald */}
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{
              top: '40%',
              left: '60%',
              background: 'radial-gradient(circle, #10b981/18, #059669/10, transparent 70%)',
              filter: 'blur(30px)',
              x: springX3,
              y: springYNeg1,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }
            }}
          />
        </motion.div>

        {/* Floating Geometric Elements */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                x: dynamicTransforms[i].x,
                y: dynamicTransforms[i].y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            >
              <div 
                className={`
                  ${i % 4 === 0 ? 'w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500' :
                    i % 4 === 1 ? 'w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-500' :
                    i % 4 === 2 ? 'w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rotate-45' :
                    'w-4 h-1 bg-gradient-to-r from-purple-400 to-pink-500'
                  } 
                  rounded-full opacity-70 shadow-lg
                `}
                style={{
                  boxShadow: '0 0 20px currentColor',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Content */}
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Premium Brand Badge */}
          <motion.div 
            className="mb-16"
            style={{ y: y2 }}
            variants={textVariants}
          >
            <motion.div
              className="inline-flex items-center gap-6 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
              whileHover={{ 
                scale: 1.05, 
                borderColor: "rgba(255,255,255,0.3)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(245, 158, 11, 0.7)",
                    "0 0 0 10px rgba(245, 158, 11, 0)",
                    "0 0 0 0 rgba(245, 158, 11, 0.7)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white/80 text-sm tracking-[0.3em] uppercase font-light">
                Award-Winning Digital Innovation
              </span>
              <motion.div 
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Cinematic Headlines */}
          <motion.div 
            ref={titleRef}
            className="mb-12"
            style={{ y: y1 }}
          >
            <motion.h1 
              className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-thin text-white mb-12 leading-none tracking-tighter"
              variants={textVariants}
            >
              <motion.div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: 200, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  VERVE
                </motion.span>
              </motion.div>
              <motion.div className="overflow-hidden relative">
                <motion.span 
                  className="block relative z-10"
                  initial={{ y: 200, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ x: springX10 }}
                >
                  APEX
                </motion.span>
                {/* Cinematic Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-orange-500/40 to-red-500/30 blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Premium Subtitle with Morphing Effect */}
          <motion.div 
            className="mb-20"
            style={{ y: y2 }}
          >
            <motion.div
              className="max-w-5xl mx-auto"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.2 }}
            >
              <motion.p 
                className="text-2xl sm:text-3xl lg:text-4xl text-white/70 font-light leading-relaxed mb-8"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                We don't just build products —{" "}
                <motion.span 
                  className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-normal"
                  style={{ backgroundSize: "200% 200%" }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  we craft digital masterpieces
                </motion.span>{" "}
                that redefine entire industries
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Cinematic CTA Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <motion.button
              onClick={onCTAClick}
              className="group relative px-16 py-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-medium text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <span className="relative z-10 flex items-center gap-4">
                Begin the Journey
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.button>

            <motion.button
              className="group px-16 py-6 border border-white/20 text-white/80 font-medium text-lg rounded-full backdrop-blur-xl hover:bg-white/5 hover:border-white/40 transition-all duration-700"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-4">
                Explore Masterpieces
                <motion.div
                  className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-1 h-1 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Luxury Metrics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, delay: 2.5 }}
          >
            {[
              { metric: "15+", label: "Years of Mastery", color: "from-amber-400 to-orange-500" },
              { metric: "200+", label: "Digital Masterpieces", color: "from-blue-400 to-cyan-500" },
              { metric: "99.8%", label: "Client Excellence", color: "from-emerald-400 to-teal-500" },
              { metric: "∞", label: "Infinite Possibilities", color: "from-purple-400 to-pink-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 2.8 + index * 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <motion.div 
                  className={`text-5xl lg:text-6xl xl:text-7xl font-thin bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 1,
                    ease: "easeInOut"
                  }}
                >
                  {item.metric}
                </motion.div>
                <div className="text-white/60 text-sm tracking-wider font-light uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 4 }}
        style={{ y: y3 }}
      >
        <motion.div 
          className="w-8 h-16 border border-white/20 rounded-full flex justify-center p-3 backdrop-blur-xl"
          whileHover={{ borderColor: "rgba(255,255,255,0.5)", scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-1 h-4 bg-gradient-to-b from-amber-400 via-orange-500 to-red-500 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        <motion.div 
          className="text-white/40 text-xs tracking-[0.2em] mt-6 uppercase font-light"
          animate={{
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Discover
        </motion.div>
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
    </div>
  );
};

export default PremiumHero;
