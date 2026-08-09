import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { courses } from '@/data/courses';

/** "What We Provide" — the full 3×3 course grid on the home page. */
export function CoursesPreview() {
  return (
    <Section id="courses" tone="mist">
      <SectionHeading
        eyebrow="What We Provide"
        align="center"
        title="Courses Built for the Next Generation"
        subtitle="Nine practical technology courses across AI, development, design, marketing, cybersecurity and robotics — each one project-based from the first session."
      />

      <CourseGrid courses={courses} className="mt-12" />

      <div className="mt-12 flex justify-center">
        <Button href="/courses" kind="primary" size="lg" withArrow>
          Explore All Courses
        </Button>
      </div>
    </Section>
  );
}
