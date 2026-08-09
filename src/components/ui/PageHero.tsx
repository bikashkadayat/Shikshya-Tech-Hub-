import { Breadcrumb, type Crumb } from './Breadcrumb';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { cn } from '@/lib/utils';

/**
 * Page header band, shared by every page except Home (which has its own hero).
 * `tone` picks between the light mist wash and the navy treatment.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  tone = 'light',
  actions,
  aside,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb: Crumb[];
  tone?: 'light' | 'navy';
  actions?: React.ReactNode;
  /** Optional visual placed to the right on large screens. */
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const isNavy = tone === 'navy';

  return (
    <section
      className={cn('relative overflow-hidden', isNavy ? 'g-navy' : 'g-mist border-b border-line')}
    >
      {/* Ambient decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            'absolute -top-32 -right-24 size-[420px] rounded-full opacity-70',
            isNavy ? 'g-glow' : 'g-glow',
          )}
        />
        <div className="absolute -bottom-40 -left-32 size-[380px] rounded-full g-glow-purple opacity-50" />
        {!isNavy ? <div className="absolute inset-0 dot-grid opacity-40" /> : null}
      </div>

      <Container className="relative py-12 lg:py-16">
        <Breadcrumb items={breadcrumb} tone={isNavy ? 'dark' : 'light'} className="mb-7" />

        <div
          className={cn(
            'flex flex-col gap-10',
            aside && 'lg:flex-row lg:items-center lg:justify-between lg:gap-14',
          )}
        >
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow tone={isNavy ? 'dark' : 'light'}>{eyebrow}</Eyebrow>

            <h1 className={cn('t-hero', isNavy ? 'text-white' : 'text-ink')}>{title}</h1>

            {description ? (
              <p className={cn('t-body max-w-xl', isNavy ? 'text-onmute' : 'text-muted')}>
                {description}
              </p>
            ) : null}

            {actions ? <div className="mt-2 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {aside ? <div className="shrink-0">{aside}</div> : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
