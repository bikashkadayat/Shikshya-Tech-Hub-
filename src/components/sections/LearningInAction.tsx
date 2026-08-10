import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProgramFigure } from '@/components/programs/ProgramFigure';
import { getProgramImage } from '@/data/programGallery';

/**
 * Home page editorial block pairing the programme photograph with general
 * copy about how the teaching works.
 *
 * The copy is deliberately about Shikshya Tech Hub's approach, not about the
 * people, event, institution or date in the photograph — none of which is
 * verified in this repository.
 */
export function LearningInAction() {
  const image = getProgramImage('learning-program-group-01');

  return (
    <Section tone="mist">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Text first in the DOM, so it also reads first on mobile. */}
        <Reveal className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Learning in Action"
            title="Practical Learning Beyond the Classroom"
            subtitle="Our programs are designed to encourage participation, practical exploration, and the confident use of technology."
          />

          <ArrowLink href="/workshops">See How Workshops Run</ArrowLink>
        </Reveal>

        <Reveal delay={80}>
          <ProgramFigure
            image={image}
            ratio="aspect-[3/2]"
            sizes="(min-width: 1024px) 46vw, (min-width: 640px) 88vw, 92vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
