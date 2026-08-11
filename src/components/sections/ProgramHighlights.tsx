import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProgramFigure } from '@/components/programs/ProgramFigure';
import { getProgramImage, type ProgramImage } from '@/data/programGallery';

/**
 * A short band of programme photographs near the foot of the home page.
 *
 * Two cards, not a gallery: enough to show that the programmes are real
 * without turning the page into a photo wall or pushing the testimonials and
 * the closing call to action further down than they should be.
 *
 * The hover treatment is decorative only. Each caption is permanently visible
 * text rendered by `ProgramFigure`'s own `<figcaption>`, so nothing is hidden
 * behind a pointer, and the reduced-motion rule in `globals.css` flattens both
 * the lift and the zoom for anyone who asks for it. The cards are not links:
 * no destination was supplied for them, and a clickable card with nowhere to
 * go is worse than a static one.
 */
const highlightIds = ['program-highlight-01', 'program-highlight-02'];

export function ProgramHighlights() {
  const images: ProgramImage[] = highlightIds.map(getProgramImage);

  return (
    <Section tone="mist" size="sm">
      <SectionHeading
        eyebrow="Program Highlights"
        title="Moments From Our Programs"
        subtitle="A short look at the sessions we run with students, schools, and community groups."
      />

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {images.map((image, index) => (
          <Reveal as="li" key={image.id} delay={index * 80}>
            {/* The figure's own frame is the card — `cn` is a plain joiner with
                no tailwind-merge, so restyling that frame from here would leave
                two conflicting radius utilities resolved by stylesheet order.
                The wrapper only carries the hover lift. */}
            <div className="card-hover group h-full">
              <ProgramFigure
                image={image}
                ratio="aspect-[4/3]"
                sizes="(min-width: 1024px) 44vw, (min-width: 640px) 46vw, 92vw"
                zoomOnHover
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

