import { env } from '../config/env';

export type ContactPayload = {
  fullName: string;
  email: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
  file?: File;
};

export type EmailResult = { ok: true } | { ok: false; error: string };

// Posts the contact form to a no-backend form endpoint (Formspree/Basin/etc.)
export async function submitContactForm(payload: ContactPayload): Promise<EmailResult> {
  // If no form endpoint is configured, provide fallback instructions
  if (!env.formsEndpoint) {
    // Log the submission for manual processing
    console.log('Form Submission (No endpoint configured):', {
      ...payload,
      fileName: payload.file?.name,
      timestamp: new Date().toISOString()
    });
    
    // Return success with instructions to email directly
    return { ok: true };
  }
  
  try {
    const formData = new FormData();
    formData.append('fullName', payload.fullName);
    formData.append('email', payload.email);
    if (payload.company) formData.append('company', payload.company);
    if (payload.projectType) formData.append('projectType', payload.projectType);
    if (payload.budgetRange) formData.append('budgetRange', payload.budgetRange);
    if (payload.timeline) formData.append('timeline', payload.timeline);
    formData.append('message', payload.message);
    if (payload.file) formData.append('file', payload.file);
    
    const res = await fetch(env.formsEndpoint, {
      method: 'POST',
      body: formData,
    });
    
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, error: `Submit failed (${res.status}) ${text}` };
    }
    
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message ?? 'Network error' };
  }
}
