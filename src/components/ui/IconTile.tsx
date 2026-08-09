import { getIcon, type IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

/**
 * Rounded gradient square with a white icon — the primary visual unit of every
 * card in the system.
 */
export function IconTile({
  icon,
  gradient = 'g-blue',
  size = 'md',
  className,
}: {
  icon: IconName;
  /** Gradient class from globals.css: g-blue | g-brand | g-cyan | g-green */
  gradient?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const Icon = getIcon(icon);

  const box = {
    sm: 'size-11 rounded-xl',
    md: 'size-[58px] rounded-tile',
    lg: 'size-[68px] rounded-2xl',
    xl: 'size-[92px] rounded-3xl',
  }[size];

  const glyph = {
    sm: 'size-5',
    md: 'size-7',
    lg: 'size-8',
    xl: 'size-11',
  }[size];

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center shadow-softsm',
        gradient,
        box,
        className,
      )}
      aria-hidden="true"
    >
      <Icon className={cn('text-white', glyph)} strokeWidth={1.9} />
    </span>
  );
}
