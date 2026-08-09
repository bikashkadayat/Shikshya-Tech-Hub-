import type { Metadata } from 'next';
import { EditableBadge } from '@/components/ui/Badge';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TutorCard } from '@/components/tutors/TutorCard';
import { TutorProfile } from '@/components/tutors/TutorProfile';
import { featuredTutor, tutors } from '@/data/tutors';

export const metadata: Metadata = {
  title: 'Tutors',
  description:
    'Meet the technology tutors at Shikshya Tech Hub. Profiles that are still marked as editable are placeholders, not real people.',
  alternates: { canonical: '/tutors' },
  openGraph: {
    title: 'Meet Our Technology Tutors | Shikshya Tech Hub',
    description: 'The people who teach our technology courses and workshops.',
    url: '/tutors',
  },
};

export default function TutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Tutors"
        title="Meet Our Technology Tutors"
        description="Courses are taught by people who work with these technologies directly. Cards marked “editable profile” are placeholders — no invented names, credentials or experience appear on this page."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tutors' }]}
      />

      {/* ---------------- Tutor grid ---------------- */}
      <Section tone="mist" size="md">
        <SectionHeading
          eyebrow="The Team"
          title="Tutor Profiles"
          subtitle="One published profile, and open slots ready for the tutors who join next."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor, index) => (
            <Reveal as="li" key={tutor.slug} delay={Math.min(index, 5) * 70}>
              <TutorCard tutor={tutor} />
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 flex flex-wrap items-center gap-2.5 text-sm text-muted">
          <EditableBadge>Editable profile</EditableBadge>
          means the card is a placeholder. Replace it in{' '}
          <code className="rounded bg-mist2 px-1.5 py-0.5 font-mono text-[13px] text-ink">
            src/data/tutors.ts
          </code>
          .
        </p>
      </Section>

      {/* ---------------- Featured profile ---------------- */}
      <Section tone="white" size="md">
        <SectionHeading
          eyebrow="Tutor Profile"
          title={featuredTutor.name}
          subtitle="The details below are the only ones on record — nothing has been added beyond what was supplied."
          className="mb-12"
        />

        <TutorProfile tutor={featuredTutor} />
      </Section>
    </>
  );
}
