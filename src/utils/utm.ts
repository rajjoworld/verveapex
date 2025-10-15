export type UTMParams = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  ref: string;
}>;

const STORAGE_KEY = 'va:utm';

export function parseUtmFromUrl(url: string): UTMParams {
  try {
    const u = new URL(url, window.location.origin);
    const p = u.searchParams;
    const utm: UTMParams = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'].forEach((k) => {
      const v = p.get(k);
      if (v) (utm as any)[k] = v;
    });
    return utm;
  } catch {
    return {};
  }
}

export function storeUtm(params: UTMParams) {
  if (!params || Object.keys(params).length === 0) return;
  try {
    // Don't overwrite existing unless new values provided
    const existing = getStoredUtm();
    const merged = { ...existing, ...params };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {}
}

export function getStoredUtm(): UTMParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UTMParams) : {};
  } catch {
    return {};
  }
}
