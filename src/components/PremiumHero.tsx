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
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Futuristic Background System */}
      <div className="absolute inset-0">
        {/* Deep Space Gradient with Vibrant Accents */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-slate-900/50 to-purple-900/30"
          style={{ scale, opacity }}
        />
        
        {/* Luminous Network Lines - Representing Global Connectivity */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y3, x: springX, rotate: springY }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-[#B065FF]/40 to-transparent"
              style={{
                width: '1px',
                height: '150vh',
                left: `${15 + i * 15}%`,
                top: '-25vh',
                transform: `rotate(${12 + i * 6}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleY: [0.3, 1, 0.3],
                boxShadow: [
                  "0 0 5px #B065FF",
                  "0 0 20px #B065FF, 0 0 30px #B065FF",
                  "0 0 5px #B065FF"
                ]
              }}
              transition={{
                duration: 6 + i * 0.8,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Glowing Data Node Network - Convergence Concept */}
        <motion.div className="absolute inset-0">
          {/* Central Core Node */}
          <motion.div
            className="absolute w-32 h-32 rounded-full"
            style={{
              top: '45%',
              left: '50%',
              background: 'radial-gradient(circle, #B065FF/60, #6633CC/30, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'translate(-50%, -50%)',
              x: springX,
              y: springY,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                "0 0 20px #B065FF",
                "0 0 60px #B065FF, 0 0 100px #6633CC",
                "0 0 20px #B065FF"
              ]
            }}
            transition={{
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Satellite Nodes - Moving to Center */}
          <motion.div
            className="absolute w-16 h-16 rounded-full"
            style={{
              top: '20%',
              left: '20%',
              background: 'radial-gradient(circle, #6633CC/80, #B065FF/40, transparent 70%)',
              filter: 'blur(15px)',
              x: springX2,
              y: springY15,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              x: [0, 200, 0],
              y: [0, 150, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Secondary Satellite Node */}
          <motion.div
            className="absolute w-12 h-12 rounded-full"
            style={{
              top: '70%',
              right: '15%',
              background: 'radial-gradient(circle, #B065FF/70, #6633CC/35, transparent 70%)',
              filter: 'blur(12px)',
              x: springXNeg15,
              y: springY2,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              x: [0, -180, 0],
              y: [0, -120, 0],
              scale: [0.9, 1.3, 0.9],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Tertiary Node - Portal Ring Effect */}
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-[#B065FF]/50"
            style={{
              top: '35%',
              left: '75%',
              x: springX3,
              y: springYNeg1,
            }}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            whileInView={{
              scale: [1, 2, 1],
              rotate: [0, 360],
              borderColor: ["#B065FF80", "#6633CC80", "#B065FF80"],
              boxShadow: [
                "0 0 10px #B065FF",
                "0 0 40px #B065FF, 0 0 60px #6633CC",
                "0 0 10px #B065FF"
              ]
            }}
            transition={{
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 },
              rotate: { duration: 12, repeat: Infinity, ease: "linear", delay: 3 },
              borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 },
              boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }
            }}
          />
        </motion.div>

        {/* Floating Data Particles - Speed & Flow Concept */}
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
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                y: [-30, 30, -30],
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
                  ${i % 4 === 0 ? 'w-1 h-1 bg-[#B065FF] rounded-full' :
                    i % 4 === 1 ? 'w-0.5 h-6 bg-gradient-to-b from-[#B065FF] to-[#6633CC] rounded-full' :
                    i % 4 === 2 ? 'w-2 h-2 bg-[#6633CC] rotate-45 rounded-sm' :
                    'w-3 h-0.5 bg-gradient-to-r from-[#B065FF] to-[#6633CC] rounded-full'
                  } 
                  opacity-70 shadow-lg
                `}
                style={{
                  boxShadow: `0 0 10px ${i % 2 === 0 ? '#B065FF' : '#6633CC'}`,
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
          
          {/* Tech Innovation Badge */}
          <motion.div 
            className="mb-16"
            style={{ y: y2 }}
            variants={textVariants}
          >
            <motion.div
              className="inline-flex items-center gap-6 px-8 py-4 rounded-full border border-[#B065FF]/20 bg-[#B065FF]/5 backdrop-blur-xl"
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#B065FF80",
                backgroundColor: "#B065FF10",
                boxShadow: "0 20px 40px rgba(176, 101, 255, 0.3)"
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#B065FF] via-[#6633CC] to-[#B065FF]"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(176, 101, 255, 0.7)",
                    "0 0 0 10px rgba(176, 101, 255, 0)",
                    "0 0 0 0 rgba(176, 101, 255, 0.7)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white/90 text-sm tracking-[0.3em] uppercase font-light">
                Next-Generation Digital Innovation
              </span>
              <motion.div 
                className="w-8 h-8 rounded-full border border-[#B065FF]/30 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-[#B065FF] rounded-full" />
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
                  className="block relative z-10 bg-gradient-to-r from-[#B065FF] via-white to-[#6633CC] bg-clip-text text-transparent"
                  initial={{ y: 200, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ 
                    x: springX10,
                    backgroundSize: "200% 200%"
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    APEX
                  </motion.span>
                </motion.span>
                {/* Enhanced Luminous Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#B065FF]/40 via-[#6633CC]/50 to-[#B065FF]/40 blur-3xl"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
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
                className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-light leading-relaxed mb-8"
              >
                We don't just build products —{" "}
                <motion.span 
                  className="bg-gradient-to-r from-[#B065FF] via-white to-[#6633CC] bg-clip-text text-transparent font-normal"
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
                  we engineer digital futures
                </motion.span>{" "}
                that transform entire ecosystems
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
              className="group relative px-16 py-6 bg-gradient-to-r from-[#B065FF] via-[#6633CC] to-[#B065FF] text-white font-medium text-lg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{
                boxShadow: "0 20px 40px rgba(176, 101, 255, 0.4)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6633CC] via-[#B065FF] to-[#6633CC]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <span className="relative z-10 flex items-center gap-4">
                Enter the Future
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1],
                    boxShadow: [
                      "0 0 5px white",
                      "0 0 15px white",
                      "0 0 5px white"
                    ]
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
              className="group px-16 py-6 border border-[#B065FF]/30 text-white/90 font-medium text-lg rounded-full backdrop-blur-xl hover:bg-[#B065FF]/10 hover:border-[#B065FF]/60 transition-all duration-700"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-4">
                Explore Innovation
                <motion.div
                  className="w-8 h-8 border border-[#B065FF]/40 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-1 h-1 bg-[#B065FF] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        "0 0 3px #B065FF",
                        "0 0 10px #B065FF",
                        "0 0 3px #B065FF"
                      ]
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

          {/* Future-Tech Metrics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 2, delay: 2.5 }}
          >
            {[
              { metric: "15+", label: "Years of Innovation", color: "from-[#B065FF] to-[#6633CC]" },
              { metric: "200+", label: "Digital Solutions", color: "from-[#6633CC] to-[#B065FF]" },
              { metric: "99.8%", label: "Client Success", color: "from-[#B065FF] to-white" },
              { metric: "∞", label: "Infinite Possibilities", color: "from-white to-[#B065FF]" }
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
                    filter: [
                      "drop-shadow(0 0 5px #B065FF)",
                      "drop-shadow(0 0 20px #B065FF)",
                      "drop-shadow(0 0 5px #B065FF)"
                    ]
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
                <div className="text-white/70 text-sm tracking-wider font-light uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 4 }}
        style={{ y: y3 }}
      >
        <motion.div 
          className="w-8 h-16 border border-[#B065FF]/30 rounded-full flex justify-center p-3 backdrop-blur-xl"
          whileHover={{ 
            borderColor: "#B065FF80", 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(176, 101, 255, 0.5)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-1 h-4 bg-gradient-to-b from-[#B065FF] via-[#6633CC] to-[#B065FF] rounded-full"
            animate={{ 
              y: [0, 20, 0],
              opacity: [1, 0.3, 1],
              boxShadow: [
                "0 0 5px #B065FF",
                "0 0 15px #B065FF",
                "0 0 5px #B065FF"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        <motion.div 
          className="text-white/60 text-xs tracking-[0.2em] mt-6 uppercase font-light"
          animate={{
            opacity: [0.4, 1, 0.4],
            color: ["rgba(255,255,255,0.6)", "rgba(176,101,255,0.8)", "rgba(255,255,255,0.6)"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Explore
        </motion.div>
      </motion.div>

      {/* Enhanced Futuristic Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/80" />
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-transparent via-[#B065FF]/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default PremiumHero;
