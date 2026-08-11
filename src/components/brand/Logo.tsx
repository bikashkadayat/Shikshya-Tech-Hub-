import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

/**
 * Sikshya Tech Hub wordmark.
 *
 * ---------------------------------------------------------------------------
 * USING YOUR REAL LOGO FILE
 * ---------------------------------------------------------------------------
 * This renders a CSS/SVG reconstruction of the wordmark so the site ships with
 * a correct-looking mark and zero image requests. To use the original artwork
 * instead:
 *
 *   1. Put your files in /public:
 *        public/logo.png        — transparent background, for light surfaces
 *        public/logo-white.png  — white knockout, for navy surfaces
 *   2. Change LOGO_MODE below to 'image'.
 *
 * Nothing else needs to change — every navbar and footer uses this component.
 * ---------------------------------------------------------------------------
 */
const LOGO_MODE: 'wordmark' | 'image' = 'image';

/** Aspect ratio of the supplied artwork (public/logo.png, 608 × 200). */
const LOGO_ASPECT = 608 / 200;

type LogoProps = {
  /** Rendered height in pixels. Width follows the logo's aspect ratio. */
  height?: number;
  /** Use the white-knockout treatment for navy / dark surfaces. */
  variant?: 'light' | 'dark';
  className?: string;
};

export function Logo({ height = 34, variant = 'light', className }: LogoProps) {
  const isDark = variant === 'dark';

  if (LOGO_MODE === 'image') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={isDark ? '/logo-white.png' : '/logo.png'}
        alt={siteConfig.name}
        width={Math.round(height * LOGO_ASPECT)}
        height={height}
        className={cn('w-auto', className)}
        style={{ height }}
      />
    );
  }

  // The wordmark is sized from a single em value so it scales cleanly.
  const wordSize = height * 0.62;

  return (
    <span
      className={cn('inline-flex flex-col justify-center leading-none select-none', className)}
      style={{ height }}
      role="img"
      aria-label={siteConfig.name}
    >
      {/* --- SIKSHYA + graduation cap ------------------------------------ */}
      <span
        className="relative inline-flex items-baseline font-display font-extrabold"
        style={{ fontSize: wordSize, letterSpacing: '-0.02em' }}
      >
        <span className={isDark ? 'text-white' : 'text-ink'}>SIK</span>
        <span className={isDark ? 'text-white' : 'g-text'}>SHYA</span>

        {/* The cap sits over the S, as in the original mark. */}
        <GraduationCapMark
          className={cn('absolute', isDark ? 'text-white' : 'text-electric')}
          style={{
            width: wordSize * 0.46,
            height: 'auto',
            left: '38%',
            top: `-${wordSize * 0.44}px`,
          }}
        />
      </span>

      {/* --- TECH HUB with the circuit underline ------------------------- */}
      <span
        className="mt-[0.28em] flex w-full items-center"
        style={{ fontSize: wordSize * 0.245, gap: wordSize * 0.14 }}
      >
        <CircuitRule side="left" dark={isDark} />
        <span
          className={cn('font-display font-semibold whitespace-nowrap', isDark ? 'text-white' : 'text-navy')}
          style={{ letterSpacing: '0.34em', paddingLeft: '0.34em' }}
        >
          TECH HUB
        </span>
        <CircuitRule side="right" dark={isDark} />
      </span>
    </span>
  );
}

/** One half of the logo's circuit underline: a hairline ending in a node dot. */
function CircuitRule({ side, dark }: { side: 'left' | 'right'; dark: boolean }) {
  return (
    <span className="relative flex h-[2px] min-w-[10px] flex-1 items-center">
      <span
        className={cn('h-[2px] w-full rounded-full', dark ? 'bg-white/80' : 'bg-electric')}
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute h-[0.62em] w-[0.62em] rounded-full border-2 bg-transparent',
          side === 'left' ? 'left-0' : 'right-0',
          dark ? 'border-white/80' : 'border-electric',
        )}
      />
    </span>
  );
}

/** Small graduation-cap mark taken from the logo. */
function GraduationCapMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 34"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* mortarboard */}
      <path d="M24 2 46 11 24 20 2 11 24 2Z" fill="currentColor" />
      {/* upward arrow inside the cap — the "rise" in the original mark */}
      <path
        d="M24 25v-9m0 0-4 4m4-4 4 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* tassel */}
      <path
        d="M41 13v9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="41" cy="24" r="2.6" fill="currentColor" />
    </svg>
  );
}
