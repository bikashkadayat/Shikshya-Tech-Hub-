import type { Metadata } from 'next';
import { EditableBadge } from '@/components/ui/Badge';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CeoMessage } from '@/components/tutors/CeoMessage';
import { TutorCard } from '@/components/tutors/TutorCard';
import { TutorProfile } from '@/components/tutors/TutorProfile';
import { publishedTutors, tutors } from '@/data/tutors';

export const metadata: Metadata = {
  title: 'Tutors',
  description:
    'Meet the technology tutors at Sikshya Tech Hub. Profiles that are still marked as editable are placeholders, not real people.',
  alternates: { canonical: '/tutors' },
  openGraph: {
    title: 'Meet Our Technology Tutors | Sikshya Tech Hub',
    description: 'The people who teach our technology courses and workshops.',
    url: '/tutors',
  },
};

export default function TutorsPage() {
  // Placeholder cards are optional — the copy below only mentions them when
  // there is actually one on the page.
  const hasPlaceholders = tutors.some((tutor) => tutor.isPlaceholder);

  return (
    <>
      <PageHero
        eyebrow="Our Tutors"
        title="Meet Our Technology Tutors"
        description={
          hasPlaceholders
            ? 'Courses are taught by people who work with these technologies directly. Cards marked “editable profile” are placeholders. No invented names, credentials or experience appear on this page.'
            : 'Courses are taught by people who work with these technologies directly. Every name, credential and year of experience on this page was supplied by the tutor it describes.'
        }
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tutors' }]}
      />

      {/* ---------------- Message from the CEO ---------------- */}
      <CeoMessage />

      {/* ---------------- Tutor grid ---------------- */}
      <Section tone="mist" size="md">
        <SectionHeading
          eyebrow="The Team"
          title="Tutor Profiles"
          subtitle={
            hasPlaceholders
              ? `${publishedTutors.length} published profiles, and open slots ready for the tutors who join next.`
              : `${publishedTutors.length} published profiles, every one of them teaching at Sikshya Tech Hub.`
          }
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor, index) => (
            <Reveal as="li" key={tutor.slug} delay={Math.min(index, 5) * 70}>
              <TutorCard tutor={tutor} />
            </Reveal>
          ))}
        </ul>

        {hasPlaceholders ? (
          <p className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-muted">
            <EditableBadge>Editable profile</EditableBadge>
            means the card is a placeholder. Replace it in{' '}
            <code className="rounded bg-mist2 px-1.5 py-0.5 font-mono text-[13px] text-ink">
              src/data/tutors.ts
            </code>
            .
          </p>
        ) : null}
      </Section>

      {/* ---------------- Full profiles ---------------- */}
      {publishedTutors.map((tutor, index) => (
        <Section key={tutor.slug} tone={index % 2 === 0 ? 'white' : 'mist'} size="md">
          <SectionHeading
            eyebrow="Tutor Profile"
            title={tutor.name}
            subtitle={
              index === 0
                ? 'Every detail below was supplied by the tutor. Nothing has been added beyond it.'
                : undefined
            }
            className="mb-12"
          />

          <TutorProfile tutor={tutor} />
        </Section>
      ))}
    </>
  );
}
