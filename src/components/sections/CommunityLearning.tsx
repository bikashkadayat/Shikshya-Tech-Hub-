import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ProgramFigure } from '@/components/programs/ProgramFigure';
import { getProgramImage } from '@/data/programGallery';

/**
 * Home page block about learning delivered for schools and community groups.
 *
 * Deliberately built differently from `LearningInAction`, which sits higher up
 * the page: there the text leads and the photograph follows on the right; here
 * the photograph takes the wider column on the left and the copy is carried by
 * short feature points. Two editorial image sections on one page would read as
 * a template repeat if they shared a layout.
 *
 * The copy describes how Shikshya Tech Hub works. It says nothing about the
 * institution, event, date, location or people in the photograph — none of
 * that is verified in this repository, and none of it is inferred from the
 * image.
 */
const points = [
  'Sessions designed around the school or group hosting them',
  'Activity-based learning with clear, practical outcomes',
  'Suitable for learners with no prior technical experience',
];

export function CommunityLearning() {
  const image = getProgramImage('community-learning-01');

  return (
    <Section tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        {/* Text is second on desktop but first in the DOM, so the reading
            order on phones stays heading → copy → photograph. */}
        <Reveal className="flex flex-col gap-6 lg:order-2">
          <div className="flex flex-col gap-4">
            <Eyebrow>Community Learning</Eyebrow>

            <h2 className="t-h2 text-ink">Learning Experiences for Schools and Communities</h2>

            <p className="t-body max-w-xl text-muted">
              We support accessible and activity-based technology learning for students, educators,
              schools, and community groups.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green/16 text-green-dark"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="t-small text-muted">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/schools" kind="primary" withArrow className="max-sm:w-full">
              Partner With Us
            </Button>
            <Button href="/workshops" kind="ghost" className="max-sm:w-full">
              Explore Workshops
            </Button>
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:order-1">
          <ProgramFigure
            image={image}
            ratio="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 88vw, 92vw"
            showCaption={false}
          />
        </Reveal>
      </div>
    </Section>
  );
}
