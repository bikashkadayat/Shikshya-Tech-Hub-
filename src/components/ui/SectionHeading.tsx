import { cn } from '@/lib/utils';
import { Eyebrow } from './Eyebrow';

/**
 * Eyebrow + heading + optional subtitle. Used at the top of every major
 * section so spacing and rhythm stay identical site-wide.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
  className,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  className?: string;
  /** Trailing slot — e.g. a "View all" link on the right. */
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        children && 'md:flex-row md:items-end md:justify-between md:gap-8',
        className,
      )}
    >
      <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center')}>
        <Eyebrow align={align} tone={tone}>
          {eyebrow}
        </Eyebrow>

        <Tag
          className={cn(
            Tag === 'h1' ? 't-hero' : 't-h2',
            tone === 'dark' ? 'text-white' : 'text-ink',
            align === 'center' && 'max-w-3xl',
          )}
        >
          {title}
        </Tag>

        {subtitle ? (
          <p
            className={cn(
              't-body max-w-2xl',
              tone === 'dark' ? 'text-onmute' : 'text-muted',
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>

      {children ? <div className="shrink-0">{children}</div> : null}
    </div>
  );
}
