import Image from 'next/image';
import { Quote, User } from 'lucide-react';
import { EditableBadge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { hasSampleTestimonials, testimonials, type Testimonial } from '@/data/testimonials';

/**
 * CONTENT RULE: nothing on this site is presented as real feedback unless it
 * is real, approved feedback.
 *
 * DEVELOPMENT ONLY: the entries currently rendered here are sample/demo
 * content for layout preview and testing. Every card with `isSample: true`
 * shows a visible "Sample Testimonial" badge, and the section subtitle says so
 * in plain language. All sample entries must be replaced with approved real
 * feedback in src/data/testimonials.ts before production launch.
 *
 * Publishing real feedback is a data change only — set `isSample: false` and
 * the badge disappears; add an `image` and the avatar uses it.
 */
export function Testimonials() {
  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Voices"
        align="center"
        title="What Students and Schools Say"
        subtitle={
          hasSampleTestimonials
            ? 'Sample testimonials are displayed for layout preview. Names and feedback will be published as verified testimonials only after approval.'
            : 'Feedback from students, parents and partner institutions, published with their approval.'
        }
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal as="li" key={testimonial.id} delay={index * 80}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, displayName, audienceType, organization, image, imageAlt, isSample } = testimonial;

  return (
    <figure className="card-hover flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-softsm">
      <div className="flex items-start justify-between gap-3">
        <Quote className="size-8 shrink-0 text-electric/30" aria-hidden="true" />
        {isSample ? <EditableBadge>Sample Testimonial</EditableBadge> : null}
      </div>

      <blockquote className="t-body mt-4 flex-1 text-ink/85">“{quote}”</blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        {/* No fabricated portraits: without an approved image this stays a
            neutral, non-identifying avatar rather than initials of a name
            that does not belong to a real person. */}
        <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-line bg-mist">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || `${displayName} profile image`}
              fill
              sizes="36px"
              className="object-cover"
            />
          ) : (
            <span className="flex size-full items-center justify-center text-muted/60">
              <User className="size-4" aria-hidden="true" />
            </span>
          )}
        </span>

        <span className="min-w-0">
          <cite className="block font-display text-[15px] font-bold text-ink not-italic">
            {displayName}
          </cite>
          <span className="t-small text-muted">
            {audienceType}
            {organization ? ` · ${organization}` : null}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
