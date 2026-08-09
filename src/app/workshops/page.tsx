import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CustomWorkshopCard, WorkshopCard } from '@/components/workshops/WorkshopCard';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { workshops } from '@/data/workshops';

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'Hands-on technology workshops for schools and colleges — AI Awareness, Cyber Safety, Build Your First Website, Introduction to Robotics, Digital Content Creation, Prompt Engineering and Digital Marketing Basics.',
  alternates: { canonical: '/workshops' },
  openGraph: {
    title: 'Hands-On Technology Workshops | Shikshya Tech Hub',
    description:
      'Short, practical workshops delivered at your school or college — students build something in every session.',
    url: '/workshops',
  },
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hands-On Workshops"
        title="Learn by Doing"
        description="Short, focused sessions delivered at your school or college. Every workshop is practical — students use the tools themselves and finish with something they made."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Workshops' }]}
        actions={
          <Button href="/contact" kind="accent" size="lg" withArrow>
            Request a Workshop
          </Button>
        }
      />

      <Section tone="mist" size="md">
        <SectionHeading
          eyebrow="Workshop Topics"
          title="Sessions We Run"
          subtitle="Each workshop can be delivered on its own or combined into a longer programme. Durations are set per booking."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <Reveal as="li" key={workshop.slug} delay={Math.min(index, 5) * 70}>
              <WorkshopCard workshop={workshop} />
            </Reveal>
          ))}

          {/* Eighth tile — the custom workshop prompt. */}
          <Reveal as="li" delay={Math.min(workshops.length, 5) * 70}>
            <CustomWorkshopCard />
          </Reveal>
        </ul>
      </Section>

      <HowItWorks />

      {/* Closing CTA */}
      <Section tone="navy" size="sm" className="overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-1/4 size-96 rounded-full g-glow opacity-40" />
        </div>

        <div className="relative flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Book a Session"
            tone="dark"
            align="center"
            title="Ready to Run a Workshop at Your Institution?"
            subtitle="Tell us the topic, the year group and how much time you have. We will shape a session around it."
          />

          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" kind="accent" size="lg" withArrow>
              Request a Workshop
            </Button>
            <Button href="/schools" kind="outlineWhite" size="lg">
              For Schools &amp; Institutions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
