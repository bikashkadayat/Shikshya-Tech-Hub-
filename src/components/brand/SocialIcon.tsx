import type { SocialLink } from '@/data/site';

/**
 * Brand glyphs. Lucide removed brand icons in v1, so these are drawn here to
 * keep the dependency list short.
 */
const paths: Record<SocialLink['icon'], React.ReactNode> = {
  facebook: (
    <path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.6A17 17 0 0 0 15 2.5c-2.5 0-4.2 1.5-4.2 4.3v1.7H8v3.2h2.8V21h3.4v-9.3h2.6l.5-3.2H14Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" strokeWidth="1.9" stroke="currentColor" />
      <circle cx="12" cy="12" r="3.8" fill="none" strokeWidth="1.9" stroke="currentColor" />
      <circle cx="17.2" cy="6.8" r="1.2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M4.5 8.9h3.2V20H4.5V8.9ZM6.1 3.6a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Z" />
      <path d="M10 8.9h3.06v1.52h.04a3.36 3.36 0 0 1 3-1.62c3.2 0 3.8 2.05 3.8 4.72V20h-3.2v-4.84c0-1.16-.02-2.65-1.65-2.65-1.66 0-1.91 1.26-1.91 2.57V20H10V8.9Z" />
    </>
  ),
  youtube: (
    <>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8Z" />
      <path d="M10.2 15.1 15.4 12l-5.2-3.1v6.2Z" fill="#fff" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
};

export function SocialIcon({ name, className }: { name: SocialLink['icon']; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
