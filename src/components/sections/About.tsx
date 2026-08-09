import { ArrowLink } from '@/components/ui/Button';
import { IconTile } from '@/components/ui/IconTile';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutPillars } from '@/data/content';

export function About() {
  return (
    <Section id="about" tone="mist">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        {/* Left: heading + copy */}
        <div className="flex flex-col gap-6 lg:pt-2">
          <SectionHeading
            eyebrow="About Shikshya"
            title={
              <>
                Technology Education
                <br />
                Beyond the Classroom
              </>
            }
          />

          <p className="t-body max-w-xl text-muted">
            Technology is not difficult — it is something students can learn, experiment with, and
            build. We teach it that way: concepts explained plainly, tools used first-hand, and a
            finished project at the end of every course.
          </p>

          <p className="t-body max-w-xl text-muted">
            We work directly with schools, colleges and individual students, adapting depth and pace
            to the group in the room rather than running one fixed syllabus for everyone.
          </p>

          <ArrowLink href="/courses" className="mt-1 w-fit">
            Learn More About Us
          </ArrowLink>
        </div>

        {/* Right: Learn / Practice / Create */}
        <ul className="flex flex-col gap-4">
          {aboutPillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 90}>
              <div className="card-hover flex items-start gap-5 rounded-card border border-line bg-white p-6 shadow-softsm">
                <IconTile icon={pillar.icon} gradient={['g-blue', 'g-cyan', 'g-brand'][index]} />

                <div className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="t-mono text-electric/70">{pillar.number}</span>
                    <h3 className="t-card-title text-ink">{pillar.title}</h3>
                  </div>
                  <p className="t-small mt-2 text-muted">{pillar.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
