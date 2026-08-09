import { IconTile } from '@/components/ui/IconTile';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { whyUsFeatures } from '@/data/content';

const gradients = ['g-blue', 'g-cyan', 'g-brand', 'g-green', 'g-blue', 'g-cyan'];

export function WhyUs() {
  return (
    <Section id="why-us" tone="navy" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 size-[420px] rounded-full g-glow opacity-40" />
        <div className="absolute -bottom-32 -left-20 size-[360px] rounded-full g-glow-purple opacity-35" />
      </div>

      <div className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          tone="dark"
          align="center"
          title="Built Around How Students Actually Learn"
          subtitle="Six things we hold to in every course, workshop and school programme we run."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsFeatures.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={Math.min(index, 5) * 70}>
              <div className="card-hover flex h-full flex-col rounded-card bg-navy-tile p-6 ring-1 ring-white/8">
                <IconTile icon={feature.icon} gradient={gradients[index]} />
                <h3 className="t-card-title mt-5 text-white">{feature.title}</h3>
                <p className="t-small mt-2.5 text-onmute">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
