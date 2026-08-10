import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { IconTile } from '@/components/ui/IconTile';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProgramFigure } from '@/components/programs/ProgramFigure';
import { getProgramImage } from '@/data/programGallery';
import { partnershipProcess, schoolBenefits } from '@/data/content';

export const metadata: Metadata = {
  title: 'Schools & Institutions',
  description:
    'Partner with Shikshya Tech Hub to bring future-ready technology education to your school or college — customized courses, on-site workshops, practical projects, assessments and certificates.',
  alternates: { canonical: '/schools' },
  openGraph: {
    title: 'For Schools & Institutions | Shikshya Tech Hub',
    description:
      'Customized technology courses and on-site workshops, designed with your team and delivered around your academic calendar.',
    url: '/schools',
  },
};

const benefitGradients = [
  'g-blue',
  'g-cyan',
  'g-brand',
  'g-green',
  'g-blue',
  'g-cyan',
  'g-brand',
  'g-green',
];

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="For Schools & Institutions"
        title={
          <>
            Bring Future-Ready
            <br />
            Technology Education
            <br />
            <span className="g-text-cyan">to Your School</span>
          </>
        }
        description="We design and deliver technology programmes with your team — shaped around your students, your subjects and your timetable, and taught hands-on from day one."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Schools & Institutions' }]}
        actions={
          <>
            <Button href="/contact" kind="primary" size="lg" withArrow>
              Partner With Us
            </Button>
            <Button href="/workshops" kind="outlineWhite" size="lg">
              Request a School Workshop
            </Button>
          </>
        }
        aside={<SchoolDiagram />}
      />

      {/* ---------------- Benefits 4×2 ---------------- */}
      <Section tone="mist" size="md">
        <SectionHeading
          eyebrow="What You Get"
          align="center"
          title="Everything a Technology Programme Needs"
          subtitle="Eight things included when you run a course or workshop series with us."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {schoolBenefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={Math.min(index, 5) * 60}>
              <div className="card-hover flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-softsm">
                <IconTile icon={benefit.icon} gradient={benefitGradients[index]} />
                <h3 className="t-card-title mt-5 text-ink">{benefit.title}</h3>
                <p className="t-small mt-2.5 text-muted">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------------- Partnership process ---------------- */}
      <Section tone="white" size="md">
        <SectionHeading
          eyebrow="Partnership Process"
          align="center"
          title="How a Partnership Works"
          subtitle="Four steps from first conversation to a programme running in your institution."
        />

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-[34px] right-[12%] left-[12%] hidden border-t-2 border-dashed border-line lg:block"
          />

          {partnershipProcess.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 90} className="relative">
              <div className="flex flex-col items-center text-center">
                <IconTile
                  icon={step.icon}
                  gradient={['g-blue', 'g-cyan', 'g-brand', 'g-green'][index]}
                  size="lg"
                  className="ring-8 ring-white"
                />
                <span className="t-mono mt-5 text-electric">{step.number}</span>
                <h3 className="t-card-title mt-1.5 text-ink">{step.title}</h3>
                <p className="t-small mt-2 max-w-[26ch] text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------------- Program highlight photograph ---------------- */}
      <Section tone="mist" size="sm">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Program Highlights"
            align="center"
            title="Programs in Progress"
            subtitle="A look at the kind of session we run with schools and community groups."
          />

          <Reveal className="w-full">
            <ProgramFigure
              image={getProgramImage('learning-program-group-02')}
              ratio="aspect-[3/2]"
              sizes="(min-width: 1024px) 768px, 92vw"
              figureClassName="items-center text-center"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Closing CTA band ---------------- */}
      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          <div className="g-brand relative overflow-hidden rounded-band px-6 py-12 text-center shadow-softlg sm:px-10 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 -right-16 size-72 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -left-10 size-64 rounded-full bg-white/8" />
            </div>

            <div className="relative flex flex-col items-center gap-5">
              <Eyebrow tone="dark" align="center" className="[&_span]:text-white">
                Let&rsquo;s Talk
              </Eyebrow>

              <h2 className="t-h2 max-w-3xl text-white">
                Start a Technology Programme at Your Institution
              </h2>

              <p className="t-body max-w-2xl text-white/85">
                Tell us about your students and what you would like them to be able to do. We will
                come back with a proposed programme, not a sales pitch.
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <Button href="/contact" kind="white" size="lg" withArrow>
                  Partner With Us
                </Button>
                <Button href="/courses" kind="outlineWhite" size="lg">
                  Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * Decorative hero diagram: a school tile connected by dashed lines to three
 * smaller programme tiles.
 */
function SchoolDiagram() {
  const nodes = [
    { icon: 'brain' as const, label: 'Courses', gradient: 'g-blue' },
    { icon: 'presentation' as const, label: 'Workshops', gradient: 'g-cyan' },
    { icon: 'award' as const, label: 'Certificates', gradient: 'g-green' },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative hidden w-[320px] flex-col items-center rounded-band border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:flex"
    >
      <IconTile icon="school" gradient="g-brand" size="xl" />
      <p className="t-mono mt-4 text-electric2">Your Institution</p>

      {/* Dashed connector */}
      <span className="my-6 h-10 w-px border-l-2 border-dashed border-white/25" />

      <ul className="grid w-full grid-cols-3 gap-3">
        {nodes.map((node) => (
          <li key={node.label} className="flex flex-col items-center gap-2 text-center">
            <IconTile icon={node.icon} gradient={node.gradient} size="sm" />
            <span className="text-[12px] font-medium text-onmute">{node.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
