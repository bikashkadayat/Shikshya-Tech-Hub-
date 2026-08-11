import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { IconTile } from '@/components/ui/IconTile';
import { getProgramImage } from '@/data/programGallery';
import type { IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

/**
 * The four subject badges that sit around the hero photograph.
 *
 * From `sm` up they are anchored just outside the photo's four corners, so
 * they frame the picture rather than cover it — nothing readable in the
 * photograph sits under a badge. Below `sm` there is not enough width to float
 * anything without crowding the picture or pushing past the viewport edge, so
 * the same four badges reflow into a plain centred row underneath it (see
 * `sm:contents` on their wrapper). They are rendered once either way: the same
 * elements simply change how they are laid out.
 */
const subjectBadges: { icon: IconName; label: string; gradient: string; position: string; delay: string }[] = [
  {
    icon: 'brain',
    label: 'AI & ML',
    gradient: 'g-blue',
    position: 'sm:-top-9 sm:-left-4 lg:-left-7',
    delay: '0s',
  },
  {
    icon: 'code',
    label: 'Web Development',
    gradient: 'g-cyan',
    position: 'sm:-top-9 sm:-right-4 lg:-right-7',
    delay: '1.5s',
  },
  {
    icon: 'shield',
    label: 'Cyber Security',
    gradient: 'g-blue',
    position: 'sm:-bottom-9 sm:-left-4 lg:-left-7',
    delay: '3s',
  },
  {
    icon: 'robot',
    label: 'Robotics',
    gradient: 'g-brand',
    position: 'sm:-bottom-9 sm:-right-4 lg:-right-7',
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

          {/* ---------------- Right: photograph + subject badges ---------------- */}
          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[520px] lg:max-w-[560px]">
            {/* Orbit dots — the accents kept from the illustration this panel
                replaced. Pulled outside the photo's corners so they read as
                ambient brand detail rather than marks on the picture. */}
            <div aria-hidden="true" className="pointer-events-none absolute -inset-6 hidden sm:block">
              <span className="absolute top-10 -right-1 size-2 rounded-full bg-electric/50" />
              <span className="absolute bottom-20 -left-1 size-1.5 rounded-full bg-purple/50" />
              <span className="absolute top-1/2 -right-2 size-1.5 rounded-full bg-cyan/60" />
            </div>

            <PracticalLearningCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * The hero's right-hand panel: one real photograph in a glass card.
 *
 * This replaces the "shikshya.dev" code-and-chart mock that used to sit here.
 * The badges around it already carry the technology signal, and layering a
 * synthetic dashboard behind a real picture of people learning read as clutter
 * competing with the photograph rather than supporting it. What is kept from
 * the old panel is its frame — the same glass card, rounding, border and
 * blue-tinted lift — so the hero's visual identity is unchanged.
 *
 * The photograph is the one eagerly-loaded image on the site: it is the only
 * one reliably above the fold. A fixed 4:3 frame reserves its space before it
 * arrives, so the hero never shifts while it loads.
 *
 * The caption is permanent visible text, not a hover reveal, and it claims
 * nothing about the event, institution, date, location or people shown. It
 * sits below the glass card rather than inside it: the two lower badges hang
 * off the card's bottom corners, and a caption inside the card ran straight
 * underneath them.
 */
function PracticalLearningCard() {
  const image = getProgramImage('hero-practical-learning');

  return (
    <figure className="flex flex-col gap-3 sm:gap-11">
      {/* The glass card is the badges' positioning context, so they anchor to
          the picture's own corners at every width instead of drifting with the
          caption underneath. */}
      <div className="group relative rounded-3xl border border-white/70 bg-white/80 p-3 shadow-softlg backdrop-blur-md transition-shadow duration-300 hover:shadow-lift sm:p-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line/70 bg-mist2">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 520px, 92vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: image.imagePosition ?? 'center' }}
          />
        </div>

        {/* One set of badges. Floating just outside the card's four corners
            from `sm` up — clear of the picture itself — and a plain centred row
            underneath it on phones, where floating anything would either crowd
            the picture or reach past the viewport edge. */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:contents">
          {subjectBadges.map((badge) => (
            <span
              key={badge.label}
              className={cn(
                'flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-2.5 py-1.5 shadow-soft backdrop-blur-sm',
                'sm:animate-float sm:absolute sm:px-3 sm:py-2',
                badge.position,
              )}
              style={{ animationDelay: badge.delay }}
            >
              <IconTile
                icon={badge.icon}
                gradient={badge.gradient}
                size="sm"
                className="size-7 rounded-lg sm:size-8"
              />
              <span className="text-[12px] font-semibold whitespace-nowrap text-ink">
                {badge.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      <figcaption className="t-small px-1 text-center text-muted">{image.caption}</figcaption>
    </figure>
  );
}
