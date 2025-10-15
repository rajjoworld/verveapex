import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-16">
      <SEO
        title="Privacy Policy | Verve Apex"
        description="We respect your privacy. Learn how we handle your data and contact information."
        path="/privacy"
      />
      <div className="max-w-3xl mx-auto px-4 text-white/80">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-4">We respect your privacy. This website collects only the information you provide through the contact form or scheduling widget.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Data you submit (name, email, message) is used solely to respond to your inquiry.</li>
          <li>Scheduler embeds are subject to their provider’s privacy policies.</li>
          <li>We do not sell your data. We retain messages for operational purposes only.</li>
          <li>Contact us at contact@verveapex.com for any privacy-related requests.</li>
        </ul>
        <p className="mt-6 text-sm text-white/60">Last updated: 20 Sep 2025</p>
      </div>
    </div>
  );
};

export default Privacy;
