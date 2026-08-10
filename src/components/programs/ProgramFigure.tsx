import Image from 'next/image';
import type { ProgramImage } from '@/data/programGallery';
import { cn } from '@/lib/utils';

/**
 * The one component that renders a program photograph.
 *
 * Every placement — the home page editorial block, the workshops band, the
 * schools highlight — goes through here, so cropping, rounding, borders and
 * caption styling stay identical across the site.
 *
 * The frame holds a fixed aspect ratio, so nothing shifts while the image
 * loads. Photos are never cropped tighter than the ratio given here, and no
 * text is ever laid over them.
 */
export function ProgramFigure({
  image,
  ratio = 'aspect-[3/2]',
  sizes,
  priority = false,
  showCaption = true,
  className,
  figureClassName,
}: {
  image: ProgramImage;
  /** Tailwind aspect-ratio class for the frame. Defaults to the source 3:2. */
  ratio?: string;
  /** Rendered widths, so the browser never fetches more pixels than needed. */
  sizes: string;
  /** Only for an image that is genuinely near the top of its page. */
  priority?: boolean;
  showCaption?: boolean;
  className?: string;
  figureClassName?: string;
}) {
  return (
    <figure className={cn('flex flex-col gap-3', figureClassName)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-card border border-line bg-mist2 shadow-soft',
          ratio,
          className,
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover object-center"
        />
      </div>

      {showCaption && image.caption ? (
        <figcaption className="t-small text-muted">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
