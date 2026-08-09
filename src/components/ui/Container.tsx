import { cn } from '@/lib/utils';

/**
 * The 1200px content column from the design reference, with side gutters that
 * hold up all the way down to a 320px viewport.
 */
export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'main';
}) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10', className)}>
      {children}
    </Tag>
  );
}
