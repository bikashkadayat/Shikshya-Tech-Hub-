import { cn } from '@/lib/utils';

/** Tint pill used for skills, tools and benefit lists. */
export function Chip({
  children,
  tone = 'light',
  className,
}: {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'onBrand';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium',
        tone === 'light' && 'bg-mist2 text-ink',
        tone === 'dark' && 'bg-white/8 text-ondark ring-1 ring-white/12',
        tone === 'onBrand' && 'bg-white/15 text-white ring-1 ring-white/25',
        className,
      )}
    >
      {children}
    </span>
  );
}
