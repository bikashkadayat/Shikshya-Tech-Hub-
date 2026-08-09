import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Crumb = {
  label: string;
  /** Omit on the current page. */
  href?: string;
};

export function Breadcrumb({
  items,
  tone = 'light',
  className,
}: {
  items: Crumb[];
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'transition-colors',
                    tone === 'dark' ? 'text-onmute hover:text-white' : 'text-muted hover:text-electric',
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={cn('font-medium', tone === 'dark' ? 'text-white' : 'text-ink')}
                >
                  {item.label}
                </span>
              )}

              {!isLast ? (
                <ChevronRight
                  className={cn('size-3.5 shrink-0', tone === 'dark' ? 'text-onmute/70' : 'text-muted/60')}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
