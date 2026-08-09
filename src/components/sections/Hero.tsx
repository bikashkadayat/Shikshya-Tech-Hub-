import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconTile } from '@/components/ui/IconTile';
import type { IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

/**
 * The four labelled cards that float around the device visual.
 *
 * They are anchored to the device's corners and offset outwards, so the only
 * part of the device they ever cover is its own padding — never the title bar,
 * the code, or the chart.
 */
const floatingCards: { icon: IconName; label: string; gradient: string; position: string; delay: string }[] = [
  {
    icon: 'brain',
    label: 'AI & ML',
    gradient: 'g-blue',
    position: '-top-8 -left-6 lg:-left-10',
    delay: '0s',
  },
  {
    icon: 'code',
    label: 'Web Development',
    gradient: 'g-cyan',
    position: '-top-8 -right-6 lg:-right-10',
    delay: '1.5s',
  },
  {
    icon: 'shield',
    label: 'Cyber Security',
    gradient: 'g-blue',
    position: '-bottom-8 -left-6 lg:-left-10',
    delay: '3s',
  },
  {
    icon: 'robot',
    label: 'Robotics',
    gradient: 'g-brand',
    position: '-bottom-8 -right-6 lg:-right-10',
    delay: '2.2s',
  },
];

export function Hero() {
  return (
    <section className="g-mist relative overflow-hidden">
      {/* Ambient blobs + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-45" />
        <div className="absolute -top-40 -right-24 size-[520px] rounded-full g-glow opacity-70" />
        <div className="absolute top-1/3 -left-40 size-[420px] rounded-full g-glow-purple opacity-40" />
      </div>

      <Container className="relative py-14 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div className="flex flex-col gap-6">
            <Eyebrow>Practical Tech Education</Eyebrow>

            <h1 className="t-hero text-ink">
              Learn Technology.
              <br />
              <span className="g-text">Build Skills.</span>
              <br />
              Create the Future.
            </h1>

            <p className="t-body max-w-xl text-muted">
              Shikshya Tech Hub teaches practical, future-ready technology skills to school and
              college students — and partners with institutions to run courses and workshops on
              site. Every course is hands-on, and every student finishes something they built.
            </p>

            {/* Stacked and full-width on phones, side by side from `sm` up. */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/courses" kind="primary" size="lg" withArrow className="max-sm:w-full">
                Explore Our Courses
              </Button>
              <Button href="/workshops" kind="accent" size="lg" className="max-sm:w-full">
                Book a Workshop
              </Button>
            </div>

            <p className="flex items-start gap-2.5 text-sm text-muted">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green/16 text-green-dark"
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              For schools, colleges &amp; curious students — no prior experience needed.
            </p>
          </div>

          {/* ---------------- Right: device + floating cards ---------------- */}
          <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[420px]">
            {/* Orbit dots */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <span className="absolute top-6 right-10 size-2 rounded-full bg-electric/50" />
              <span className="absolute bottom-16 right-4 size-1.5 rounded-full bg-purple/50" />
              <span className="absolute top-1/2 left-2 size-1.5 rounded-full bg-cyan/60" />
            </div>

            <DeviceCard />

            {/* Floating course chips — hidden below sm so nothing overlaps. */}
            {floatingCards.map((card) => (
              <div
                key={card.label}
                aria-hidden="true"
                className={cn(
                  'animate-float absolute hidden items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-soft backdrop-blur-sm sm:flex',
                  card.position,
                )}
                style={{ animationDelay: card.delay }}
              >
                <IconTile icon={card.icon} gradient={card.gradient} size="sm" className="size-8 rounded-lg" />
                <span className="text-[12px] font-semibold whitespace-nowrap text-ink">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * The "shikshya.dev" glass device card — decorative, so it is hidden from
 * assistive technology rather than read out as meaningless code fragments.
 */
function DeviceCard() {
  const codeLines: { text: string; className: string }[][] = [
    [
      { text: 'const ', className: 'text-purple' },
      { text: 'student ', className: 'text-ink' },
      { text: '= ', className: 'text-muted' },
      { text: 'new ', className: 'text-purple' },
      { text: 'Learner', className: 'text-electric' },
      { text: '()', className: 'text-muted' },
    ],
    [
      { text: 'student', className: 'text-ink' },
      { text: '.', className: 'text-muted' },
      { text: 'learn', className: 'text-electric' },
      { text: '(', className: 'text-muted' },
      { text: "'ai'", className: 'text-green-dark' },
      { text: ')', className: 'text-muted' },
    ],
    [
      { text: 'student', className: 'text-ink' },
      { text: '.', className: 'text-muted' },
      { text: 'build', className: 'text-electric' },
      { text: '(', className: 'text-muted' },
      { text: "'project'", className: 'text-green-dark' },
      { text: ')', className: 'text-muted' },
    ],
    [{ text: '// ready to create', className: 'text-muted/70' }],
  ];

  const bars = [46, 68, 54, 82, 62, 94];

  return (
    <div
      aria-hidden="true"
      className="relative rounded-3xl border border-white/70 bg-white/80 p-5 shadow-softlg backdrop-blur-md sm:p-6"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF6058]" />
          <span className="size-2.5 rounded-full bg-yellow" />
          <span className="size-2.5 rounded-full bg-green" />
        </span>
        <span className="font-mono text-[12px] tracking-wide text-muted">shikshya.dev</span>
      </div>

      {/* Code.
          `whitespace-pre` matters here: as flex children the spans would have
          their leading/trailing spaces collapsed and the code would run together. */}
      <div className="flex flex-col gap-2 overflow-hidden pt-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {codeLines.map((parts, index) => (
          <p key={index} className="whitespace-pre">
            <span className="mr-3 inline-block w-4 text-right text-muted/40 select-none">
              {index + 1}
            </span>
            {parts.map((part, partIndex) => (
              <span key={partIndex} className={part.className}>
                {part.text}
              </span>
            ))}
          </p>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="mt-5 rounded-2xl bg-mist p-4">
        <div className="flex items-center justify-between">
          <span className="t-mono text-muted">Skill growth</span>
          <span className="t-mono text-electric">Project-based</span>
        </div>

        <div className="mt-3 flex h-20 items-end gap-2">
          {bars.map((height, index) => (
            <span
              key={index}
              className="g-blue flex-1 rounded-t-md"
              style={{ height: `${height}%`, opacity: 0.45 + index * 0.09 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
