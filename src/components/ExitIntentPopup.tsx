import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, FileText } from 'lucide-react';
import { trackExitIntent, trackCTAConversion } from '../services/analytics';

const ExitIntentPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before in this session
    const popupShown = sessionStorage.getItem('exitIntentShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only show if mouse is leaving from top of screen (towards close button)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackExitIntent();
      }
    };

    const handleScroll = () => {
      // Also show on scroll up from bottom (user might be leaving)
      if (window.scrollY < 100 && !hasShown && window.scrollY > 500) {
        // Small delay to avoid showing immediately
        setTimeout(() => {
          if (!hasShown) {
            setShowPopup(true);
            setHasShown(true);
            sessionStorage.setItem('exitIntentShown', 'true');
          }
        }, 2000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleBookCall = () => {
    trackCTAConversion('exit_popup_book_call', 'Book 15-min Call', 'exit_popup');
    // Scroll to contact form instead of opening Calendly
    const contactSection = document.getElementById('book-a-call');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Popup */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Calendar className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Wait — Get a Free Product Roadmap
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">
                    Leaving so soon? Book a 15-min free call and we'll send a custom 1-page roadmap for your idea. Limited slots for early partners.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={handleBookCall}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Book 15-min Call
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      trackCTAConversion('exit_popup_send_deck', 'Send Deck & Get Roadmap', 'exit_popup');
                      // Scroll to contact form
                      const contactSection = document.getElementById('book-a-call');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      setShowPopup(false);
                    }}
                    className="w-full px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="w-4 h-4" />
                    Send Deck & Get Roadmap
                  </motion.button>
                </div>

                {/* Trust signal */}
                <div className="text-center mt-4">
                  <p className="text-white/50 text-xs">
                    No commitment • 15 minutes • Custom insights
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;