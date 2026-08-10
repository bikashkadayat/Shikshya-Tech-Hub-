import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { CoursesPreview } from '@/components/sections/CoursesPreview';
import { WhyUs } from '@/components/sections/WhyUs';
import { LearningInAction } from '@/components/sections/LearningInAction';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TutorsPreview } from '@/components/sections/TutorsPreview';
import { SchoolsCTA } from '@/components/sections/SchoolsCTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Shikshya Tech Hub — Learn Technology. Build Skills. Create the Future.',
  description:
    'Practical, project-based technology courses and workshops for school and college students — AI, web and app development, design, digital marketing, cybersecurity and robotics.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <CoursesPreview />
      <WhyUs />
      <LearningInAction />
      <HowItWorks />
      <TutorsPreview />
      <SchoolsCTA />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
