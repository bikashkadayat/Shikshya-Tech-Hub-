import { cn } from '@/lib/utils';

/**
 * THE SIGNATURE MOTIF.
 *
 * The "TECH HUB" underline in the logo is a circuit line ending in a node dot.
 * That device is reused here as the eyebrow above every section heading:
 * short rule + node dot + uppercase, letter-spaced mono label.
 *
 * Note the rule always sits to the LEFT of the label — it never strikes
 * through the text, including in the centred variant.
 */
export function Eyebrow({
  children,
  align = 'left',
  tone = 'light',
  className,
}: {
  children: React.ReactNode;
  align?: 'left' | 'center';
  /** 'light' = on light surfaces, 'dark' = on navy surfaces. */
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <span className="flex shrink-0 items-center" aria-hidden="true">
        <span
          className={cn(
            'h-[2px] w-[26px] rounded-full',
            tone === 'dark' ? 'bg-electric2' : 'bg-electric',
          )}
        />
        <span
          className={cn(
            'ml-1.5 h-[7px] w-[7px] rounded-full',
            tone === 'dark' ? 'bg-cyan' : 'bg-electric',
          )}
        />
      </span>
      <span className={cn('t-mono', tone === 'dark' ? 'text-electric2' : 'text-electric')}>
        {children}
      </span>
    </p>
  );
}
