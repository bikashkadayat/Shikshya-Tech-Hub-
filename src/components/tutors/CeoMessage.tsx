import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { ceoMessage, type LeadershipMessage } from '@/data/leadership';

/**
 * Leadership message block at the top of the Tutors page.
 *
 * All content comes from `src/data/leadership.ts` — the copy is never
 * duplicated in a page file. This is deliberately separate from `TutorAvatar`,
 * which stays dedicated to tutor cards and tutor profiles.
 *
 * The portrait is a full-body composition on a dark background, so the card
 * uses `object-contain` on black: the supplied image is shown whole, never
 * cropped into, and nothing is drawn over the person. It is deliberately a
 * fixed, modest size — the message is the focus of this section.
 */
export function CeoMessage({ message = ceoMessage }: { message?: LeadershipMessage }) {
  return (
    <Section tone="white" size="md">
      <Reveal>
        <div className="rounded-card border border-line bg-mist p-6 shadow-softsm sm:p-8 lg:p-10">
          {/* `items-start` keeps the portrait beside the heading and opening
              paragraphs instead of stretching to the full text height. */}
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-12">
            {/* ---------- Portrait ---------- */}
            <figure className="flex justify-center lg:pt-1">
              {/* Fixed portrait card — 170×215 / 210×265 / 240×300. The photo
                  sits on a black backdrop, so the card uses the same black:
                  `object-contain` shows the whole composition, uncropped and
                  with no visible letterbox seam. */}
              <div className="relative h-[215px] w-[170px] max-w-full overflow-hidden rounded-card border border-electric/25 bg-black shadow-soft sm:h-[265px] sm:w-[210px] lg:h-[300px] lg:w-[240px]">
                <Image
                  src={message.image}
                  alt={message.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 210px, 170px"
                  style={{ objectPosition: message.imagePosition }}
                  className="object-contain"
                />
              </div>
            </figure>

            {/* ---------- Message ---------- */}
            <div className="flex flex-col gap-5">
              <Eyebrow>Leadership Message</Eyebrow>

              <h2 className="t-h2 flex items-start gap-3 text-ink">
                <Quote className="mt-1.5 size-6 shrink-0 text-electric/35" aria-hidden="true" />
                {message.heading}
              </h2>

              <div className="flex max-w-[68ch] flex-col gap-4">
                {message.message.map((paragraph, index) => (
                  <p key={index} className="t-body text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature — closes the message at every width. */}
              <p className="mt-1 border-t border-line pt-5">
                <span className="block font-display text-[17px] font-bold text-ink">
                  {message.name}
                </span>
                <span className="t-small text-electric">
                  {message.position}, {message.organization}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
