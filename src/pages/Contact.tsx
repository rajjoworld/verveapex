import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-white/70 mb-6">Use our contact form on the homepage</p>
        <a
          href="/#book-a-call"
          className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3 px-6 rounded-xl"
        >
          Go to Contact Form
        </a>
      </div>
    </div>
  );
};

export default Contact;
