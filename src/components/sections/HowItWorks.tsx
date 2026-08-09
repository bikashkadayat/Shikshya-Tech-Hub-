import { IconTile } from '@/components/ui/IconTile';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howItWorksSteps } from '@/data/content';

const gradients = ['g-blue', 'g-cyan', 'g-brand', 'g-green'];

/**
 * Four-step timeline. The numbering is justified here because these steps
 * genuinely happen in sequence.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="white">
      <SectionHeading
        eyebrow="How It Works"
        align="center"
        title="From First Conversation to Finished Project"
        subtitle="The same four steps whether you are an individual student or a school booking a programme."
      />

      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Dashed connector — desktop only, sits behind the tiles. */}
        <span
          aria-hidden="true"
          className="absolute top-[34px] right-[12%] left-[12%] hidden border-t-2 border-dashed border-line lg:block"
        />

        {howItWorksSteps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={index * 90} className="relative">
            <div className="flex flex-col items-center text-center">
              <IconTile icon={step.icon} gradient={gradients[index]} size="lg" className="ring-8 ring-white" />

              <span className="t-mono mt-5 text-electric">{step.number}</span>
              <h3 className="t-card-title mt-1.5 text-ink">{step.title}</h3>
              <p className="t-small mt-2 max-w-[24ch] text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
