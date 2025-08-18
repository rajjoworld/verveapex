import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectCaseStudy: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const projectData: { [key: string]: any } = {
    'remittance-software': {
      title: 'Remittance Software',
      client: 'Leading FinTech Startup',
      industry: 'FinTech',
      duration: '6 months',
      teamSize: '5 developers',
      challenge: 'The client needed a secure, efficient, and user-friendly platform for cross-border money transfers, targeting a specific corridor with complex compliance requirements. Traditional remittance services were slow, expensive, and lacked transparency for end users.',
      solution: 'We developed a mobile-first remittance application with robust security features, real-time exchange rate tracking, simplified transaction flows, and integrated compliance checks. The platform was designed to handle high transaction volumes while ensuring regulatory compliance across multiple jurisdictions.',
      features: [
        'User registration and comprehensive KYC process',
        'Multi-currency support with real-time exchange rates',
        'Real-time transaction tracking and notifications',
        'Secure payment gateway integration',
        'Recipient management system',
        'Transaction history and reporting',
        'Admin dashboard for compliance monitoring'
      ],
      uniqueFeatures: [
        'AI-powered fraud detection system to flag suspicious transactions in real-time',
        'Biometric authentication for enhanced security',
        'Smart routing algorithms for optimal transfer speed and cost',
        'Automated compliance reporting for regulatory requirements'
      ],
      techStack: {
        frontend: 'Flutter (Cross-platform mobile app)',
        backend: 'Node.js with Express framework',
        database: 'PostgreSQL for transaction data',
        cloud: 'AWS for scalable hosting and security',
        additional: 'Redis for caching, Docker for containerization'
      },
      techRationale: 'Flutter was chosen for its cross-platform efficiency and beautiful UI capabilities, allowing us to serve both iOS and Android users with a single codebase. Node.js provided the high-throughput transaction processing capabilities required for financial operations, while PostgreSQL ensured ACID compliance for critical financial data.',
      impact: [
        'Enabled secure transactions for 50,000+ users within the first 6 months',
        'Reduced transaction fees by 30% compared to traditional services',
        'Achieved 90% faster transfer times than conventional methods',
        'Processed over $10M in transaction volume in the first year',
        'Maintained 99.9% uptime with zero security incidents'
      ],
      postLaunch: 'The platform was architected for horizontal scaling and includes comprehensive monitoring and alerting systems. We established a continuous improvement process based on user feedback and transaction analytics, enabling rapid feature iterations and performance optimizations.',
      images: [
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Remittance+App+Dashboard',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Transaction+Flow',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Mobile+Interface'
      ]
    },
    'kyc-system': {
      title: 'Document Verification (KYC System)',
      client: 'Innovative Identity Verification Company',
      industry: 'FinTech / Identity Verification',
      duration: '4 months',
      teamSize: '6 developers',
      challenge: 'The client required a streamlined, automated, and compliant KYC (Know Your Customer) process for user onboarding. Their existing manual process was slow, error-prone, and created friction in user acquisition. They needed to reduce manual effort, improve accuracy, and ensure regulatory adherence across multiple markets.',
      solution: 'We built a comprehensive web and mobile-based KYC system that automates identity document capture and verification. The system integrates with national identity databases where permissible and leverages advanced AI for document processing and fraud detection.',
      features: [
        'Secure document upload with encryption',
        'Real-time facial recognition and liveness detection',
        'Automated data extraction from identity documents',
        'Real-time verification status tracking',
        'Intuitive admin dashboard for exception handling',
        'Multi-language support for global users',
        'Audit trail and compliance reporting'
      ],
      uniqueFeatures: [
        'Advanced AI-powered OCR for instant document data extraction',
        'Machine learning models for document authenticity verification',
        'Biometric matching algorithms for identity confirmation',
        'Risk scoring system for automated decision making'
      ],
      techStack: {
        frontend: 'React (Web admin dashboard), Flutter (Mobile app)',
        backend: 'Python/Django for robust API and business logic',
        ai: 'AWS Rekognition for facial analysis, Custom ML models',
        database: 'MongoDB for flexible document storage',
        cloud: 'AWS for scalability and data security compliance'
      },
      techRationale: 'React provided the flexibility needed for complex admin interfaces, while Flutter ensured a smooth user experience across mobile platforms. Python/Django was selected for its excellent AI/ML ecosystem and robust security features required for handling sensitive identity data.',
      impact: [
        'Reduced manual verification time by 75%',
        'Improved onboarding conversion rates by 20%',
        'Achieved 99.5% compliance accuracy in document processing',
        'Processed 100,000+ identity verifications in first 6 months',
        'Reduced operational costs by 60% through automation'
      ],
      postLaunch: 'The system includes comprehensive analytics and monitoring, enabling continuous optimization of AI models based on real-world data. We implemented A/B testing capabilities for UI improvements and established feedback loops for enhancing verification accuracy.',
      images: [
        'https://placehold.co/800x500/0ea5e9/ffffff?text=KYC+Upload+Interface',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Admin+Dashboard',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Verification+Flow'
      ]
    },
    'pharmbot-ai': {
      title: 'PharmBot AI',
      client: 'Innovative HealthTech Venture',
      industry: 'HealthTech / AI',
      duration: '5 months',
      teamSize: '4 developers',
      challenge: 'Doctors faced significant challenges in quickly accessing accurate drug information, checking potential drug interactions, and finding dosage guidelines during busy patient consultations. This led to potential delays in treatment and increased risk of medication errors.',
      solution: 'We developed PharmBot AI, an AI-powered conversational chatbot accessible via mobile app and web interface. The system provides instant, evidence-based drug information and clinical decision support, helping doctors make informed medication decisions quickly and safely.',
      features: [
        'Natural Language Processing for complex medical queries',
        'Comprehensive drug database with 50,000+ medications',
        'Real-time drug interaction checker',
        'Precise dosage calculator based on patient parameters',
        'Adverse effects and contraindications lookup',
        'Clinical guidelines and evidence-based recommendations',
        'Integration with popular EMR systems'
      ],
      uniqueFeatures: [
        'Voice-activated query system for hands-free access during consultations',
        'Multi-modal input (text, voice, image recognition for pill identification)',
        'Contextual AI that learns from user patterns and preferences',
        'Real-time updates from medical databases and research publications'
      ],
      techStack: {
        frontend: 'Flutter (Mobile app), React (Web interface)',
        backend: 'Python for NLP and AI model orchestration',
        ai: 'Google Cloud AI Platform, Custom NLP models, TensorFlow',
        database: 'PostgreSQL for reliable drug data storage',
        cloud: 'Google Cloud Platform for scalable healthcare data processing'
      },
      techRationale: 'Flutter provided excellent cross-platform capabilities for healthcare professionals using various devices. Python\'s rich AI/ML ecosystem was essential for processing complex medical language. Google Cloud\'s healthcare APIs ensured HIPAA compliance and robust security for sensitive medical data.',
      impact: [
        'Improved doctor efficiency by 40% in accessing drug information',
        'Reduced potential medication errors by 15% through instant interaction checks',
        'Served 5,000+ healthcare professionals across 50+ hospitals',
        'Processed 500,000+ drug queries with 95% accuracy',
        'Received 95% positive feedback on ease of use and accuracy'
      ],
      postLaunch: 'The AI models are continuously updated with the latest medical research and drug information. We implemented federated learning to improve the system while maintaining patient privacy, and established partnerships with medical institutions for ongoing validation and improvement.',
      images: [
        'https://placehold.co/800x500/0ea5e9/ffffff?text=PharmBot+Chat+Interface',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Drug+Interaction+Checker',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Voice+Interface'
      ]
    },
    'hiring-platform': {
      title: 'AI-Powered Hiring Platform',
      client: 'Leading HR Tech Company',
      industry: 'HR Tech / AI',
      duration: '8 months',
      teamSize: '7 developers',
      challenge: 'The client aimed to revolutionize the hiring process by reducing unconscious bias, improving candidate-job fit, and accelerating time-to-hire. Traditional recruitment processes were inefficient, biased, and struggled with high-volume scenarios, leading to poor hiring decisions and extended vacancy periods.',
      solution: 'We built a comprehensive full-stack platform leveraging AI to automate resume analysis, intelligently match candidates to job descriptions, and streamline initial screening. The platform includes both web and mobile applications to serve recruiters and candidates effectively.',
      features: [
        'AI-powered resume parsing and standardization',
        'Intelligent job matching algorithm with similarity scoring',
        'Objective candidate scoring based on qualifications',
        'Automated initial screening questions (text and video)',
        'Smart interview scheduling with calendar integration',
        'Comprehensive ATS integration with major platforms',
        'Advanced recruiter dashboard with analytics'
      ],
      uniqueFeatures: [
        'Predictive analytics module to identify top-performing candidates',
        'Bias detection and mitigation in job descriptions and evaluations',
        'Soft skills assessment through NLP analysis of responses',
        'Machine learning models trained on successful hire outcomes'
      ],
      techStack: {
        frontend: 'React (Web dashboard), React Native (Mobile app)',
        backend: 'Python/Flask for AI/ML algorithms and core logic',
        ai: 'TensorFlow for ML models, spaCy for NLP',
        database: 'MongoDB for flexible candidate and job data',
        cloud: 'Microsoft Azure for enterprise-grade scalability and security'
      },
      techRationale: 'React provided the complex dashboard capabilities needed for recruiters, while React Native ensured a seamless candidate experience. Python/Flask offered the AI/ML flexibility required for sophisticated matching algorithms, and MongoDB handled the diverse data structures of resumes and job descriptions effectively.',
      impact: [
        'Reduced average time-to-hire by 30% across client organizations',
        'Improved candidate quality by 25% based on post-hire performance metrics',
        'Decreased recruiter workload by 50% in initial screening phases',
        'Processed 1M+ resumes with 92% parsing accuracy',
        'Helped clients achieve 40% improvement in diversity hiring'
      ],
      postLaunch: 'The platform includes comprehensive analytics for continuous optimization and A/B testing capabilities for improving matching algorithms. We established partnerships with major job boards for broader candidate reach and implemented feedback loops to continuously improve prediction accuracy.',
      images: [
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Recruiter+Dashboard',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Candidate+Matching',
        'https://placehold.co/800x500/0ea5e9/ffffff?text=Analytics+Overview'
      ]
    }
  };

  const project = projectData[projectId || ''];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary-600 hover:text-primary-700">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/portfolio" 
            className="text-primary-600 hover:text-primary-700 flex items-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {project.industry}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-600">
              <div>
                <span className="font-semibold">Client:</span><br />
                {project.client}
              </div>
              <div>
                <span className="font-semibold">Duration:</span><br />
                {project.duration}
              </div>
              <div>
                <span className="font-semibold">Team Size:</span><br />
                {project.teamSize}
              </div>
              <div>
                <span className="font-semibold">Industry:</span><br />
                {project.industry}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                className="rounded-2xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features Developed</h2>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Unique/Cutting-Edge Features</h2>
              <ul className="space-y-3">
                {project.uniqueFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-3 mt-1">⚡</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Object.entries(project.techStack).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 capitalize">{key}:</h4>
                  <p className="text-gray-600 text-sm">{value as string}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-semibold text-primary-900 mb-2">Technical Rationale</h4>
              <p className="text-primary-700 text-sm">{project.techRationale}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quantifiable Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.impact.map((result: string, index: number) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {result.split(' ')[0]}
                </div>
                <div className="text-gray-700 text-sm">
                  {result.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Launch */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Post-Launch Preparedness</h2>
          <p className="text-gray-600 leading-relaxed">
            {project.postLaunch}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can create similar results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;
