import type { CourseLevel } from '@/data/courses';
import { cn } from '@/lib/utils';

/**
 * Level badge — tinted pill + dot + label.
 * Colour mapping comes straight from the reference (Section 3.1).
 */
const levelStyles: Record<CourseLevel, { pill: string; dot: string }> = {
  Beginner: { pill: 'bg-green/12 text-green-dark', dot: 'bg-green' },
  Intermediate: { pill: 'bg-electric/10 text-royal', dot: 'bg-electric' },
  'All levels': { pill: 'bg-yellow/22 text-[#8A6400]', dot: 'bg-yellow' },
  'Beginner–Intermediate': { pill: 'bg-cyan/14 text-[#0F7C93]', dot: 'bg-cyan' },
};

export function LevelBadge({ level, className }: { level: CourseLevel; className?: string }) {
  const style = levelStyles[level];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap',
        style.pill,
        className,
      )}
    >
      <span className={cn('size-1.5 shrink-0 rounded-full', style.dot)} aria-hidden="true" />
      {level}
    </span>
  );
}

/** Neutral category badge used on course cards. */
export function CategoryBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-mist2 px-2.5 py-1 text-xs font-semibold text-muted whitespace-nowrap',
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * "Editable placeholder" marker. Used everywhere a real value has not been
 * supplied, so placeholders read as intentional rather than broken.
 */
export function EditableBadge({ children = 'Editable', className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-dashed border-electric/40 bg-electric/6 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-electric uppercase',
        className,
      )}
    >
      {children}
    </span>
  );
}
