// ─── SITE CONFIG ───────────────────────────────────────────────────────────
// To clone this site for a new niche: edit EVERY field in this file,
// swap out src/data/companies.ts, and you're done.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:          'Best AI Agent Development Services',
  domain:        'best-ai-agent-development-services.com',
  url:           'https://best-ai-agent-development-services.com',
  tagline:       'Independent reviews of the best AI agent development service providers',
  description:   'Compare the best AI agent development service providers by engagement model, pricing structure, and delivery approach. Independent reviews to help you choose the right services partner.',
  locale:        'en_US',
  twitterHandle: '',
  lastReviewed:  'August 2026',
};

export const NICHE = {
  label:          'AI Agent Development',
  providerLabel:  'provider',
  providersLabel: 'providers',
  verticalSlug:   'ai-agent-development',
};

export const BRANDING = {
  primaryColor: '#7c3aed',  // tailwind brand-600 (Violet); update tailwind.config.mjs too
  logoText:     'Best AI Agent Development Services',
  logoPath:     '/logos/site-logo.svg',
};

// ─── MONETIZATION ──────────────────────────────────────────────────────────
export const MONETIZATION = {
  enabled: false,
  // When enabled=true, companies with monetized:true get rel="sponsored" on outbound links.
  // Set to false site-wide to strip all sponsored rels (e.g. while testing).
  defaultRel: 'nofollow' as 'sponsored' | 'nofollow' | '',
  disclosurePath: '/affiliate-disclosure',
};

// ─── NAV ───────────────────────────────────────────────────────────────────
export const NAV = [
  { label: 'Home',        href: '/' },
  { label: 'Disclosure',  href: '/affiliate-disclosure/' },
  { label: 'Contact',     href: '/contact/' },
];
