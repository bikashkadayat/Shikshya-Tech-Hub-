import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CourseDetail } from '@/components/courses/CourseDetail';
import { CourseGrid } from '@/components/courses/CourseGrid';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { courses, getAllCourseSlugs, getCourseBySlug } from '@/data/courses';

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Static export: pre-render one page per course in the data file. */
export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course not found' };
  }

  const title = `${course.title} Course`;
  const description = course.summary;

  return {
    title,
    description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | Sikshya Tech Hub`,
      description,
      url: `/courses/${course.slug}`,
      type: 'article',
    },
    twitter: {
      title: `${course.title} | Sikshya Tech Hub`,
      description,
    },
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  // Related courses: same category first, then fill up to three.
  const related = [
    ...courses.filter((item) => item.slug !== course.slug && item.category === course.category),
    ...courses.filter((item) => item.slug !== course.slug && item.category !== course.category),
  ].slice(0, 3);

  return (
    <>
      <CourseDetail course={course} />

      <Section tone="white" size="md">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Related Courses"
          subtitle="Other courses students often take alongside this one."
        />
        <CourseGrid courses={related} className="mt-10" />
      </Section>
    </>
  );
}
