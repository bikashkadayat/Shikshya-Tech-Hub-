import { cn } from '@/lib/utils';
import { Container } from './Container';

/**
 * Standard section shell — one place controls vertical rhythm and the four
 * background treatments used across the site.
 */
export function Section({
  children,
  id,
  tone = 'white',
  className,
  containerClassName,
  size = 'md',
}: {
  children: React.ReactNode;
  id?: string;
  tone?: 'white' | 'mist' | 'navy' | 'gradientMist';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
}) {
  const tones = {
    white: 'bg-white',
    mist: 'bg-mist',
    navy: 'g-navy text-ondark',
    gradientMist: 'g-mist',
  } as const;

  const sizes = {
    sm: 'py-14 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-28',
  } as const;

  return (
    <section id={id} className={cn('relative', tones[tone], className)}>
      <Container className={cn(sizes[size], containerClassName)}>{children}</Container>
    </section>
  );
}
