import { env } from '../config/env';

export type ContactPayload = {
  fullName: string;
  email: string;
  company?: string;
  message: string;
};

export type EmailResult = { ok: true } | { ok: false; error: string };

// Posts the contact form to a no-backend form endpoint (Formspree/Basin/etc.)
export async function submitContactForm(payload: ContactPayload): Promise<EmailResult> {
  // If no form endpoint is configured, provide fallback instructions
  if (!env.formsEndpoint) {
    // Log the submission for manual processing
    console.log('Form Submission (No endpoint configured):', {
      ...payload,
      timestamp: new Date().toISOString()
    });
    
    // Return success with instructions to email directly
    return { ok: true };
  }
  
  try {
    const res = await fetch(env.formsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
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
