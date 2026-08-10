import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeaturedLeader } from '@/components/team/FeaturedLeader';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { coreTeam } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the leadership and core team supporting Shikshya Tech Hub’s learning, operations, technical direction, finance, marketing, workforce management, human resources, and logistics.',
  alternates: { canonical: '/our-team' },
  openGraph: {
    title: 'Our Team | Shikshya Tech Hub',
    description:
      'The leadership and core team behind Shikshya Tech Hub’s learning programs and day-to-day activities.',
    url: '/our-team',
  },
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the Team Behind Shikshya Tech Hub"
        description="Meet the people contributing to the leadership, operations, technical direction, finance, marketing, workforce management, human resources, and logistics of Shikshya Tech Hub."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]}
      />

      {/* ---------------- Leadership ---------------- */}
      <FeaturedLeader />

      {/* ---------------- Core team ---------------- */}
      <Section tone="mist" size="md">
        <SectionHeading
          eyebrow="Team Members"
          title="Our Core Team"
          subtitle="Our team works across key organizational functions to support the learning programs and day-to-day activities of Shikshya Tech Hub."
        />

        {/* One per row on phones, two from 640px, four only from 1280px. At
            1024px four columns leave ~170px of content width, which wraps the
            longer names mid-name; the balanced two-column grid reads better
            there and the row of four returns as soon as the container is wide
            enough to carry it. */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {coreTeam.map((member, index) => (
            <Reveal as="li" key={member.slug} delay={Math.min(index, 5) * 70}>
              <TeamMemberCard member={member} />
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
