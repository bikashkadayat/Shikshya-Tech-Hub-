import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TutorCard } from '@/components/tutors/TutorCard';
import { publishedTutors, tutors } from '@/data/tutors';

export function TutorsPreview() {
  // Show real tutors first, then top up with placeholders only if needed.
  const preview = [...publishedTutors, ...tutors.filter((t) => t.isPlaceholder)].slice(0, 3);
  const showsPlaceholder = preview.some((tutor) => tutor.isPlaceholder);

  return (
    <Section id="tutors" tone="white">
      <SectionHeading
        eyebrow="Our Tutors"
        title="Taught by People Who Build With These Tools"
        subtitle={
          showsPlaceholder
            ? 'Profiles marked as editable are placeholders — real tutor details are added as the team grows.'
            : 'Every detail on a tutor profile was supplied by the tutor it describes.'
        }
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
