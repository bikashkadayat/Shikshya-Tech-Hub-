import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TutorCard } from '@/components/tutors/TutorCard';
import { tutors } from '@/data/tutors';

export function TutorsPreview() {
  const preview = tutors.slice(0, 3);

  return (
    <Section id="tutors" tone="white">
      <SectionHeading
        eyebrow="Our Tutors"
        title="Taught by People Who Build With These Tools"
        subtitle="Profiles marked as editable are placeholders — real tutor details are added as the team grows."
      >
        <ArrowLink href="/tutors">View All Tutors</ArrowLink>
      </SectionHeading>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((tutor, index) => (
          <Reveal as="li" key={tutor.slug} delay={index * 80}>
            <TutorCard tutor={tutor} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
