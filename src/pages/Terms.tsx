import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16">
      <SEO
        title="Terms of Service | Verve Apex"
        description="Basic terms for using this website. Client engagements are governed by separate agreements."
        path="/terms"
      />
      <div className="max-w-3xl mx-auto px-4 text-white/80">
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="mb-4">By using this website, you agree to the following basic terms:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Content is provided for informational purposes only and does not constitute an offer.</li>
          <li>Engagements are governed by a separate written agreement.</li>
          <li>All trademarks and references are property of their respective owners.</li>
        </ul>
        <p className="mt-6 text-sm text-white/60">Last updated: 20 Sep 2025</p>
      </div>
    </div>
  );
};

export default Terms;
