import { Clock } from 'lucide-react';
import type { CourseDuration as CourseDurationValue } from '@/data/courses';
import { cn } from '@/lib/utils';

/**
 * The one place a course duration is rendered.
 *
 * Cards and the course detail page both use this, so the wording — and the
 * "Suggested duration" qualifier on estimates — can never drift between them.
 * The value itself always comes from `src/data/courses.ts`.
 */

/** Shown under an estimate so it never reads as a committed timetable. */
const PROPOSED_QUALIFIER = 'Suggested duration';

export function CourseDuration({
  duration,
  variant = 'card',
  className,
}: {
  duration: CourseDurationValue;
  /**
   * `card` — compact line with the clock icon, on white cards.
   * `hero` — the navy quick-facts tile on a course page.
   * `row`  — a label/value row in the light enrol panel; inherits its colours.
   */
  variant?: 'card' | 'hero' | 'row';
  className?: string;
}) {
  const isProposed = duration.status === 'proposed';

  if (variant === 'hero') {
    return (
      <span className={cn('block', className)}>
        <span className="font-display text-[17px] font-bold text-white">{duration.label}</span>
        {isProposed ? (
          <span className="mt-0.5 block text-[12px] font-medium text-onmute/80">
            {PROPOSED_QUALIFIER}
          </span>
        ) : null}
      </span>
    );
  }

  if (variant === 'row') {
    return (
      <span className={cn('block', className)}>
        {/* Colour comes from the surrounding row, so this works on any surface. */}
        <span>{duration.label}</span>
        {isProposed ? (
          <span className="mt-0.5 block text-[12px] font-medium text-muted">
            {PROPOSED_QUALIFIER}
          </span>
        ) : null}
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-[13px] text-muted', className)}>
      <Clock className="size-4 shrink-0 text-electric" aria-hidden="true" />
      <span className="font-semibold text-ink">{duration.label}</span>
      {isProposed ? (
        <span className="truncate">· {PROPOSED_QUALIFIER.toLowerCase()}</span>
      ) : null}
    </span>
  );
}
