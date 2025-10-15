// Email templates for outreach and lead nurturing
// These templates are designed for different stages of the customer journey

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  category: 'cold-outreach' | 'follow-up' | 'nurture' | 'case-study' | 'webinar';
  recipientType: 'founder' | 'cto' | 'product-manager' | 'startup' | 'enterprise';
  content: {
    greeting: string;
    body: string;
    cta: string;
    signature: string;
  };
  personalizationTags: string[];
  successMetrics?: {
    expectedOpenRate: number;
    expectedClickRate: number;
    expectedReplyRate: number;
  };
}

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'cold-founder-mvp',
    name: 'Cold Outreach - Founder MVP Interest',
    subject: 'From idea to live product in 8 weeks - interested?',
    category: 'cold-outreach',
    recipientType: 'founder',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `I noticed {{company}} is working on {{industry}} solutions. As someone who's helped 50+ founders launch their MVPs, I wanted to share how we can get your product from concept to users in just 8 weeks.

Our process is founder-focused:
• Free 30-min discovery call to understand your vision
• Transparent pricing (no hidden fees)
• Full product team: design, development, testing
• 1 month free support after launch

Would you be open to a quick chat about your project? We're currently booking slots for Q1 launches.

Best case: One founder we worked with went from idea to $50K MRR in 3 months post-launch.`,
      cta: 'Book 15-min Discovery Call → [Calendly Link]',
      signature: `Rajkumar
Founder, Verve Apex
contact@verveapex.com
+91 98765 43210`
    },
    personalizationTags: ['firstName', 'company', 'industry'],
    successMetrics: {
      expectedOpenRate: 35,
      expectedClickRate: 8,
      expectedReplyRate: 12
    }
  },
  {
    id: 'follow-up-no-response',
    name: 'Follow-up - No Response to Initial Outreach',
    subject: 'Following up on MVP development - still interested?',
    category: 'follow-up',
    recipientType: 'founder',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `I reached out last week about helping {{company}} build your MVP. I understand you're busy building something amazing.

Quick question: Are you currently looking for a development partner, or do you have this handled internally?

If you're still exploring options, we'd love to show you how we've helped similar {{industry}} companies launch in 6-8 weeks with:
• Expert product team (design + development)
• Transparent pricing and timelines
• Proven process used by 50+ startups

No pressure - just want to make sure you have all the information you need.`,
      cta: 'Quick 10-min chat? → [Calendly Link]',
      signature: `Rajkumar
Founder, Verve Apex
P.S. We're booking fast for Q1 - limited early partner slots available.`
    },
    personalizationTags: ['firstName', 'company', 'industry'],
    successMetrics: {
      expectedOpenRate: 25,
      expectedClickRate: 6,
      expectedReplyRate: 8
    }
  },
  {
    id: 'case-study-share',
    name: 'Case Study Share - Relevant Industry',
    subject: '{{industry}} startup went from idea to $2.5M GMV in 6 months',
    category: 'case-study',
    recipientType: 'founder',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `Hope you're having a great week. I wanted to share a case study that might be relevant to {{company}}'s journey.

We recently helped a {{industry}} marketplace go from concept to $2.5M monthly GMV in just 6 months. Here's what made it work:

**The Challenge:** They needed a scalable multi-vendor platform with real-time inventory, payment processing, and vendor management.

**Our Solution:** Built with modern tech stack, automated vendor onboarding, and real-time analytics.

**The Results:**
• 200+ vendors onboarded
• $2.5M monthly GMV achieved
• 98% order fulfillment accuracy

The founder mentioned: "{{testimonial}}"

If you're working on something similar, we'd love to hear about your vision and share how we can help accelerate your timeline.

Would 15 minutes work for a quick call this week?`,
      cta: 'See the full case study → [Case Study Link]',
      signature: `Rajkumar
Founder, Verve Apex
contact@verveapex.com`
    },
    personalizationTags: ['firstName', 'company', 'industry', 'testimonial'],
    successMetrics: {
      expectedOpenRate: 42,
      expectedClickRate: 12,
      expectedReplyRate: 15
    }
  },
  {
    id: 'nurture-qualified-lead',
    name: 'Nurture - Qualified Lead with Specific Needs',
    subject: 'Custom proposal for {{company}} - {{projectType}} development',
    category: 'nurture',
    recipientType: 'founder',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `Following up on our conversation about {{company}}'s {{projectType}} project. I put together a custom proposal based on what you shared:

**Project Scope:** {{projectScope}}
**Timeline:** {{timeline}}
**Team:** {{teamComposition}}
**Total Investment:** {{pricing}}

Key advantages of working with us:
• Founder-focused process (we've built 50+ MVPs)
• Transparent pricing, no hidden fees
• Full product team under one roof
• 1 month free support post-launch

I also attached our NDA template for your review.

Would you like to schedule a technical deep-dive call to discuss the implementation details? We're happy to adjust the scope based on your budget and timeline.`,
      cta: 'Review Proposal & Schedule Call → [Calendly Link]',
      signature: `Rajkumar
Founder, Verve Apex
contact@verveapex.com
+91 98765 43210`
    },
    personalizationTags: ['firstName', 'company', 'projectType', 'projectScope', 'timeline', 'teamComposition', 'pricing'],
    successMetrics: {
      expectedOpenRate: 55,
      expectedClickRate: 18,
      expectedReplyRate: 25
    }
  },
  {
    id: 'webinar-invitation',
    name: 'Webinar - MVP Development Masterclass',
    subject: 'Free Masterclass: Build Your MVP in 8 Weeks (Real Examples)',
    category: 'webinar',
    recipientType: 'founder',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `As someone building in {{industry}}, you might find this relevant:

**Free Masterclass: From Idea to Live MVP in 8 Weeks**
Date: {{webinarDate}}
Time: {{webinarTime}} IST
Duration: 45 minutes

What you'll learn:
• How to validate your idea before building
• MVP development process (real case studies)
• Common pitfalls and how to avoid them
• Pricing and timeline expectations
• Q&A with successful founders

We'll share examples from fintech, healthcare, and e-commerce startups that launched successfully.

Space is limited to 50 attendees. Would you like to reserve your spot?`,
      cta: 'Reserve Your Spot → [Registration Link]',
      signature: `Rajkumar
Founder, Verve Apex
P.S. We'll send the recording if you can't make it live.`
    },
    personalizationTags: ['firstName', 'industry', 'webinarDate', 'webinarTime'],
    successMetrics: {
      expectedOpenRate: 38,
      expectedClickRate: 15,
      expectedReplyRate: 5
    }
  },
  {
    id: 'cto-technical-deep-dive',
    name: 'CTO Outreach - Technical Deep Dive',
    subject: 'Technical architecture for {{company}} - thoughts on your {{techStack}}',
    category: 'cold-outreach',
    recipientType: 'cto',
    content: {
      greeting: 'Hi {{firstName}},',
      body: `I see {{company}} is building {{productType}} with {{techStack}}. As a CTO who's led development for 50+ products, I wanted to share some insights that might be helpful.

We've worked with several {{industry}} companies on similar architectures. Here are 3 technical considerations that often make or break scalability:

1. **Database Design:** How are you handling data relationships and query optimization?
2. **API Architecture:** REST vs GraphQL vs tRPC - which fits your use case?
3. **Deployment Strategy:** Monolith vs microservices vs serverless?

If you're open to it, I'd love to share how we've solved these challenges for companies in your space. No sales pitch - just technical insights from real projects.

Have 15 minutes for a technical discussion?`,
      cta: 'Technical Deep Dive Call → [Calendly Link]',
      signature: `Utkarsh
Backend Lead, Verve Apex
contact@verveapex.com`
    },
    personalizationTags: ['firstName', 'company', 'productType', 'techStack', 'industry'],
    successMetrics: {
      expectedOpenRate: 45,
      expectedClickRate: 10,
      expectedReplyRate: 18
    }
  }
];

// Helper functions for email personalization
export function personalizeEmail(template: EmailTemplate, data: Record<string, string>): string {
  let content = template.content.body;

  // Replace personalization tags
  template.personalizationTags.forEach(tag => {
    const regex = new RegExp(`{{${tag}}}`, 'g');
    content = content.replace(regex, data[tag] || `[${tag}]`);
  });

  return content;
}

export function generateEmailSubject(template: EmailTemplate, data: Record<string, string>): string {
  let subject = template.subject;

  template.personalizationTags.forEach(tag => {
    const regex = new RegExp(`{{${tag}}}`, 'g');
    subject = subject.replace(regex, data[tag] || `[${tag}]`);
  });

  return subject;
}

// Outreach sequences for different lead types
export const outreachSequences = {
  founder: {
    name: 'Founder Outreach Sequence',
    steps: [
      { templateId: 'cold-founder-mvp', delay: 0, channel: 'email' },
      { templateId: 'follow-up-no-response', delay: 5, channel: 'email' },
      { templateId: 'case-study-share', delay: 12, channel: 'email' }
    ]
  },
  cto: {
    name: 'CTO Technical Outreach',
    steps: [
      { templateId: 'cto-technical-deep-dive', delay: 0, channel: 'email' },
      { templateId: 'follow-up-no-response', delay: 7, channel: 'email' }
    ]
  },
  qualified: {
    name: 'Qualified Lead Nurture',
    steps: [
      { templateId: 'nurture-qualified-lead', delay: 0, channel: 'email' },
      { templateId: 'webinar-invitation', delay: 3, channel: 'email' }
    ]
  }
};

// LinkedIn outreach templates (shorter, more conversational)
export const linkedinTemplates = [
  {
    id: 'linkedin-founder-connect',
    message: `Hi {{firstName}}, I see {{company}} is working on {{industry}} solutions. We've helped 50+ founders launch MVPs in 6-8 weeks. If you're exploring development partners, I'd love to share some relevant case studies. Would you be open to a quick chat?`,
    followUp: `Following up on my connection request. We're currently booking Q1 MVP launches and have limited early partner slots. Would 15 minutes work for a call this week?`
  },
  {
    id: 'linkedin-cto-connect',
    message: `Hi {{firstName}}, noticed {{company}}'s work in {{techStack}}. We've built similar architectures for {{industry}} companies. If you're open to it, I'd love to share some technical insights from our experience. Thoughts?`,
    followUp: `Hi {{firstName}}, just following up on my previous message. We're always happy to share technical insights - no strings attached. Have 10 minutes for a quick technical discussion?`
  }
];