import type { Metadata } from 'next';
import { CourseExplorer } from '@/components/courses/CourseExplorer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SchoolsCTA } from '@/components/sections/SchoolsCTA';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore nine practical technology courses — AI & Machine Learning, Web and App Development, Video Editing, Graphic Design, Prompt Engineering, Digital Marketing, Cyber Security and Robotics.',
  alternates: { canonical: '/courses' },
  openGraph: {
    title: 'Practical Technology Courses | Shikshya Tech Hub',
    description:
      'Nine hands-on technology courses for school and college students, each one project-based from the first session.',
    url: '/courses',
  },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore Courses"
        title="Practical Technology Courses"
        description="Every course is hands-on and project-based. Search by keyword or filter by category to find the right starting point."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
      />

      <Section tone="mist" size="md">
        <CourseExplorer />
      </Section>

      <SchoolsCTA />
    </>
  );
}
