import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trackEvent } from '../services/analytics';

const Header: React.FC = () => {
  useLocation();

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
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-white bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Verve Apex
            </motion.span>
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
