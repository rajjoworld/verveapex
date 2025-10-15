import React from 'react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-20 text-center text-white">
  <SEO title="Page Not Found — Verve Apex" description="The page you're looking for doesn't exist." path={window.location.pathname} />
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">404 — Page Not Found</h1>
        <p className="text-white/70">The page you requested doesn't exist or may have moved.</p>
      </div>
    </div>
  );
};

export default NotFound;
