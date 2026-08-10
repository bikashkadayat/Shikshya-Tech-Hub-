import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CategoryBadge, LevelBadge } from '@/components/ui/Badge';
import { CourseDuration } from '@/components/courses/CourseDuration';
import { IconTile } from '@/components/ui/IconTile';
import { categoryGradient, type Course } from '@/data/courses';
import { cn } from '@/lib/utils';

/**
 * The course card used in every grid on the site.
 *
 * The whole card is one link, so the entire surface is clickable and there is
 * only a single tab stop per card.
 */
export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const gradient = categoryGradient[course.category];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        'group card-hover relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-6 shadow-softsm',
        'hover:border-electric/25',
        className,
      )}
    >
      {/* Gradient top bar, revealed on hover — the reference's hover state. */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
          gradient,
        )}
      />

      <div className="flex items-start justify-between gap-3">
        <IconTile icon={course.icon} gradient={gradient} />
        <CategoryBadge>{course.category}</CategoryBadge>
      </div>

      <h3 className="t-card-title mt-5 text-ink transition-colors group-hover:text-electric">
        {course.title}
      </h3>

      <p className="t-small mt-2.5 line-clamp-3 text-muted">{course.summary}</p>

      <CourseDuration duration={course.duration} className="mt-4" />

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <LevelBadge level={course.level} />

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
          View Course
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
