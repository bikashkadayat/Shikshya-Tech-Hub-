import { Check } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { EditableBadge, LevelBadge } from '@/components/ui/Badge';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconTile } from '@/components/ui/IconTile';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { categoryGradient, type Course } from '@/data/courses';
import { getIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

/**
 * Reusable course detail template.
 *
 * Every course in `src/data/courses.ts` renders through this component, so
 * adding a course is a data change only — no new page files required.
 */
export function CourseDetail({ course }: { course: Course }) {
  const gradient = categoryGradient[course.category];

  const quickFacts = [
    { label: 'Duration', value: course.duration, hint: 'Set a duration' },
    { label: 'Skill level', value: course.level, hint: null },
    {
      label: 'Projects',
      value: course.projects ? `${course.projects} hands-on` : null,
      hint: 'Set project count',
    },
    { label: 'Certificate', value: course.certificate, hint: null },
  ];

  return (
    <>
      {/* ================= Navy hero ================= */}
      <section className="g-navy relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 size-[460px] rounded-full g-glow opacity-60" />
          <div className="absolute -bottom-40 -left-24 size-[360px] rounded-full g-glow-purple opacity-45" />
        </div>

        <Container className="relative py-12 lg:py-16">
          <Breadcrumb
            tone="dark"
            className="mb-7"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses' },
              { label: course.title },
            ]}
          />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="flex max-w-2xl flex-col gap-5">
              <Eyebrow tone="dark">{course.category} · Course</Eyebrow>

              <h1 className="t-hero text-white">{course.title}</h1>

              <p className="t-body max-w-xl text-onmute">{course.summary}</p>
            </div>

            <IconTile
              icon={course.icon}
              gradient={gradient}
              size="xl"
              className="shrink-0 max-lg:hidden"
            />
          </div>

          {/* Quick facts row */}
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="bg-navy-tile px-5 py-4">
                <dt className="t-mono text-onmute/80">{fact.label}</dt>
                <dd className="mt-1.5 font-display text-[17px] font-bold text-white">
                  {fact.value ?? <EditableBadge>{fact.hint}</EditableBadge>}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ================= Body ================= */}
      <Section tone="mist" size="md">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_368px] lg:gap-12">
          {/* ---------- Left column ---------- */}
          <div className="flex min-w-0 flex-col gap-8">
            {/* Overview */}
            <Reveal>
              <article className="rounded-card border border-line bg-white p-6 shadow-softsm sm:p-8">
                <Eyebrow>Course Overview</Eyebrow>
                <h2 className="t-h3 mt-4 text-ink">What this course is</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {course.overview.map((paragraph, index) => (
                    <p key={index} className="t-body text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* What students will learn */}
            <Reveal>
              <article className="rounded-card border border-line bg-white p-6 shadow-softsm sm:p-8">
                <Eyebrow>What You Will Learn</Eyebrow>
                <h2 className="t-h3 mt-4 text-ink">Skills covered in this course</h2>

                <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {course.learn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green/14 text-green-dark"
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="t-small text-ink/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Practical projects */}
            <Reveal>
              <article className="rounded-card border border-line bg-white p-6 shadow-softsm sm:p-8">
                <Eyebrow>Practical Projects</Eyebrow>
                <h2 className="t-h3 mt-4 text-ink">What you will build</h2>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {course.projectList.map((project, index) => (
                    <li
                      key={project.title}
                      className="card-hover rounded-tile border border-line bg-mist p-5"
                    >
                      <span className={cn('t-mono inline-block rounded-md px-2 py-0.5 text-white', gradient)}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-3 font-display text-[17px] font-bold text-ink">
                        {project.title}
                      </h3>
                      <p className="t-small mt-1.5 text-muted">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Tools & technologies */}
            <Reveal>
              <article className="rounded-card border border-line bg-white p-6 shadow-softsm sm:p-8">
                <Eyebrow>Tools &amp; Technologies</Eyebrow>
                <h2 className="t-h3 mt-4 text-ink">What you will work with</h2>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {course.tools.map((tool) => (
                    <li key={tool}>
                      <Chip>{tool}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* Learning outcomes */}
            <Reveal>
              <article className="rounded-card border border-line bg-white p-6 shadow-softsm sm:p-8">
                <Eyebrow>Learning Outcomes</Eyebrow>
                <h2 className="t-h3 mt-4 text-ink">Where you finish</h2>

                <ul className="mt-6 flex flex-col gap-3.5">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full g-blue text-white"
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="t-body text-ink/85">{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-start gap-3 rounded-tile bg-green/8 p-4">
                  <IconTile icon="award" gradient="g-green" size="sm" />
                  <p className="t-small text-ink/80">
                    <span className="font-semibold text-ink">Certificate:</span>{' '}
                    {course.certificate.toLowerCase().startsWith('on')
                      ? `Issued ${course.certificate.toLowerCase()} of the course.`
                      : course.certificate}
                  </p>
                </div>
              </article>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <div>
                <Eyebrow>Course FAQ</Eyebrow>
                <h2 className="t-h3 mt-4 mb-6 text-ink">Common questions</h2>
                <Accordion items={course.faqs} defaultOpen={0} />
              </div>
            </Reveal>
          </div>

          {/* ---------- Right sticky card ---------- */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-line bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <LevelBadge level={course.level} />
                <IconTile icon={course.icon} gradient={gradient} size="sm" />
              </div>

              <h2 className="t-card-title mt-4 text-ink">Enroll or Request Training</h2>
              <p className="t-small mt-2 text-muted">
                Join an upcoming batch, or ask us to run this course at your school or college.
              </p>

              <dl className="mt-5 flex flex-col divide-y divide-line border-y border-line">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between gap-3 py-3">
                    <dt className="t-small text-muted">{fact.label}</dt>
                    <dd className="text-right text-sm font-semibold text-ink">
                      {fact.value ?? <EditableBadge>{fact.hint}</EditableBadge>}
                    </dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="t-small text-muted">Category</dt>
                  <dd className="text-right text-sm font-semibold text-ink">{course.category}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" kind="primary" fullWidth withArrow>
                  Enroll / Request Training
                </Button>
                <Button href="/schools" kind="accent" fullWidth>
                  Request for Your School
                </Button>
              </div>

              <p className="t-small mt-4 text-center text-muted">
                No prior experience needed unless stated above.
              </p>
            </div>

            {/* Small supporting card */}
            <div className="mt-5 rounded-card border border-line bg-white p-5 shadow-softsm">
              <h3 className="font-display text-[15px] font-bold text-ink">Delivered your way</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {[
                  { icon: 'school' as const, text: 'On-site at your institution' },
                  { icon: 'users' as const, text: 'Small-group or class-sized batches' },
                  { icon: 'calendar' as const, text: 'Scheduled around your calendar' },
                ].map((row) => {
                  const Icon = getIcon(row.icon);
                  return (
                    <li key={row.text} className="flex items-center gap-2.5">
                      <Icon className="size-4 shrink-0 text-electric" aria-hidden="true" />
                      <span className="t-small text-muted">{row.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
