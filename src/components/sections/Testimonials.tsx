import { Quote } from 'lucide-react';
import { EditableBadge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/content';

/**
 * CONTENT RULE: there are no invented testimonials on this site.
 *
 * Until real quotes are supplied, each card renders as a deliberate, labelled
 * skeleton. Fill in `quote`, `author` and `role` in src/data/content.ts and the
 * card switches to the published layout automatically.
 */
export function Testimonials() {
  return (
    <Section tone="mist">
      <SectionHeading
        eyebrow="Voices"
        align="center"
        title="What Students and Schools Say"
        subtitle="This section is reserved for real feedback from students, parents and partner institutions. Nothing here is written on their behalf."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const isPublished = Boolean(testimonial.quote && testimonial.author);

          return (
            <Reveal as="li" key={index} delay={index * 80}>
              <figure
                className={cardClass(isPublished)}
              >
                <Quote
                  className={isPublished ? 'size-8 text-electric/30' : 'size-8 text-muted/25'}
                  aria-hidden="true"
                />

                {isPublished ? (
                  <>
                    <blockquote className="t-body mt-4 flex-1 text-ink/85">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4">
                      <span className="block font-display text-[15px] font-bold text-ink">
                        {testimonial.author}
                      </span>
                      {testimonial.role ? (
                        <span className="t-small text-muted">{testimonial.role}</span>
                      ) : null}
                    </figcaption>
                  </>
                ) : (
                  <>
                    {/* Skeleton bars — clearly a slot awaiting real content. */}
                    <div className="mt-4 flex flex-1 flex-col gap-2.5" aria-hidden="true">
                      <span className="block h-2.5 w-full rounded-full bg-mist2" />
                      <span className="block h-2.5 w-[92%] rounded-full bg-mist2" />
                      <span className="block h-2.5 w-[78%] rounded-full bg-mist2" />
                      <span className="block h-2.5 w-[60%] rounded-full bg-mist2" />
                    </div>

                    <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                      <span
                        aria-hidden="true"
                        className="size-9 shrink-0 rounded-full border border-dashed border-line bg-mist"
                      />
                      <span className="min-w-0">
                        <EditableBadge>Student / School testimonial</EditableBadge>
                      </span>
                    </figcaption>
                  </>
                )}
              </figure>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

function cardClass(isPublished: boolean) {
  return [
    'flex h-full flex-col rounded-card bg-white p-6 shadow-softsm',
    isPublished ? 'border border-line card-hover' : 'border border-dashed border-line',
  ].join(' ');
}
