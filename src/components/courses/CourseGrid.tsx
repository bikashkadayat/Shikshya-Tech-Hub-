import { Reveal } from '@/components/ui/Reveal';
import type { Course } from '@/data/courses';
import { cn } from '@/lib/utils';
import { CourseCard } from './CourseCard';

/** Responsive 1 → 2 → 3 column course grid (the reference's 3×3 at desktop). */
export function CourseGrid({
  courses,
  className,
  animate = true,
}: {
  courses: Course[];
  className?: string;
  /** Disable the stagger when the grid re-renders on every keystroke. */
  animate?: boolean;
}) {
  return (
    <ul className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {courses.map((course, index) =>
        animate ? (
          <Reveal as="li" key={course.slug} delay={Math.min(index, 5) * 70}>
            <CourseCard course={course} />
          </Reveal>
        ) : (
          <li key={course.slug}>
            <CourseCard course={course} />
          </li>
        ),
      )}
    </ul>
  );
}
