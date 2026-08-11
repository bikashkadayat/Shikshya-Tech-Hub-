import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { EditableBadge } from '@/components/ui/Badge';
import { IconTile } from '@/components/ui/IconTile';
import type { Workshop } from '@/data/workshops';
import { cn } from '@/lib/utils';

export function WorkshopCard({ workshop, className }: { workshop: Workshop; className?: string }) {
  return (
    <article
      className={cn(
        'group card-hover relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-6 shadow-softsm hover:border-electric/25',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
          workshop.gradient,
        )}
      />

      <IconTile icon={workshop.icon} gradient={workshop.gradient} />

      <h3 className="t-card-title mt-5 text-ink">{workshop.title}</h3>

      {/* Duration — a labelled editable placeholder until a real one is set. */}
      <p className="mt-2 flex items-center gap-2">
        <Clock className="size-4 shrink-0 text-muted" aria-hidden="true" />
        {workshop.duration ? (
          <span className="text-sm font-semibold text-ink">{workshop.duration}</span>
        ) : (
          <EditableBadge>Add duration</EditableBadge>
        )}
      </p>

      <p className="t-small mt-3 text-muted">{workshop.description}</p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
        {workshop.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-1.5 text-[13px] text-muted">
            <span className="size-1.5 rounded-full bg-electric" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric transition-colors hover:text-royal"
        >
          Request a Workshop
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="sr-only"> for {workshop.title}</span>
        </Link>
      </div>
    </article>
  );
}

/** The eighth tile in the workshops grid — a navy "custom workshop" prompt. */
export function CustomWorkshopCard({ className }: { className?: string }) {
  return (
    <article
      className={cn(
        'g-navy card-hover relative flex h-full flex-col overflow-hidden rounded-card p-6 shadow-soft',
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-12 size-52 rounded-full g-glow opacity-60" />

      <div className="relative flex h-full flex-col">
        <IconTile icon="sparkles" gradient="g-green" />

        <h3 className="t-card-title mt-5 text-white">Need a Custom Workshop?</h3>

        <p className="t-small mt-3 text-onmute">
          Tell us your topic, the age group and how long you have. We will design a session around
          it and deliver it at your institution.
        </p>

        <div className="mt-auto pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric2 transition-colors hover:text-white"
          >
            Tell us what you need
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
