import type { IconName } from '@/lib/icons';

/**
 * Site-wide configuration.
 *
 * IMPORTANT — content rule: nothing in this file may state a fact about the
 * company that has not been supplied. Anything still unknown is `null`, and the
 * UI renders it as a clearly-labelled editable placeholder. Fill the values in
 * and the placeholders disappear automatically.
 */

export const siteConfig = {
  name: 'Shikshya Tech Hub',
  shortName: 'Shikshya',
  tagline: 'Learn Technology. Build Skills. Create the Future.',
  description:
    'Shikshya Tech Hub is a practical technology education platform for students, schools and colleges — hands-on courses, school workshops and project-based learning in AI, development, design, cybersecurity and robotics.',
  /**
   * Used for canonical URLs, OpenGraph tags and the sitemap.
   * EDIT ME after you attach your custom domain in Cloudflare.
   */
  url: 'https://shikshya-tech-hub.pages.dev',
  locale: 'en_NP',
} as const;

/** The one-line promise used under the logo in the footer. */
export const brandStatement =
  'Technology is not difficult — it is something students can learn, experiment with, and build.';

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: string;
  /** Route prefix that marks this item active. Omit for in-page anchors. */
  match?: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', match: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/courses', match: '/courses' },
  { label: 'Workshops', href: '/workshops', match: '/workshops' },
  { label: 'Tutors', href: '/tutors', match: '/tutors' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/contact', match: '/contact' },
];

/* -------------------------------------------------------------------------- */
/* Contact details — editable placeholders until real values are supplied       */
/* -------------------------------------------------------------------------- */

export type ContactDetail = {
  icon: IconName;
  label: string;
  /** `null` renders as an editable placeholder. */
  value: string | null;
  /** Shown in the placeholder state so the owner knows what to type. */
  hint: string;
  /** `mailto:` / `tel:` / map link. Only used when `value` is set. */
  href?: string | null;
};

export const contactDetails: ContactDetail[] = [
  {
    icon: 'globe',
    label: 'Email',
    value: null,
    hint: 'Add your email address',
    href: null,
  },
  {
    icon: 'headphones',
    label: 'Phone',
    value: null,
    hint: 'Add your phone number',
    href: null,
  },
  {
    icon: 'building',
    label: 'Address',
    value: null,
    hint: 'Add your office address',
    href: null,
  },
  {
    icon: 'clock',
    label: 'Office hours',
    value: null,
    hint: 'Add your opening hours',
    href: null,
  },
];

export type SocialLink = {
  label: string;
  /** `null` renders as a disabled, clearly-labelled placeholder button. */
  href: string | null;
  icon: 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'github';
};

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: null, icon: 'facebook' },
  { label: 'Instagram', href: null, icon: 'instagram' },
  { label: 'LinkedIn', href: null, icon: 'linkedin' },
  { label: 'YouTube', href: null, icon: 'youtube' },
];

/* -------------------------------------------------------------------------- */
/* Stats strip                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Deliberately non-numeric except for "9+", which is simply the number of
 * courses actually listed on this site. No student counts, no invented metrics.
 */
export const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: 'graduation', value: '9+', label: 'Technology Courses' },
  { icon: 'wrench', value: 'Hands-on', label: 'Learning Approach' },
  { icon: 'school', value: 'School-focused', label: 'Training Programs' },
  { icon: 'rocket', value: 'Industry-ready', label: 'Skills' },
];

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

export const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Why Choose Us', href: '/#why-us' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { label: 'All Courses', href: '/courses' },
      { label: 'AI & Machine Learning', href: '/courses/ai-machine-learning' },
      { label: 'Web Development', href: '/courses/web-development' },
      { label: 'Cyber Security', href: '/courses/cyber-security' },
      { label: 'Robotics', href: '/courses/robotics' },
    ],
  },
  {
    title: 'For Institutions',
    links: [
      { label: 'Schools & Institutions', href: '/schools' },
      { label: 'Workshops', href: '/workshops' },
      { label: 'Partner With Us', href: '/contact' },
      { label: 'Request a Workshop', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Our Tutors', href: '/tutors' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];
