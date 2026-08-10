'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * The one place team portraits are rendered.
 *
 * Deliberately separate from `TutorAvatar`: that component carries tutor
 * semantics (tutor cards, tutor profile headers, tutor gradients) and the two
 * lists are kept apart. The fallback behaviour is intentionally the same, so
 * both feel like one design system.
 *
 * Behaviour:
 * - `profileImage` set  → the photo.
 * - missing / null / '' → the member's initials on a brand gradient tile.
 * - photo fails to load → the same initials tile (never a broken-image icon).
 *
 * The outer box is identical in both states — same responsive size, radius,
 * border and shadow — so a card with a photo and a card with initials line up
 * exactly and the card height never shifts.
 */

export type TeamAvatarSize = 'card' | 'featured';

/**
 * Fixed size steps, in one place.
 *
 * card     — 112px mobile · 128px tablet · 144px laptop and up (square)
 * featured — 170×215 mobile · 210×265 tablet · 240×300 laptop and up
 */
const SIZES: Record<
  TeamAvatarSize,
  { box: string; radius: string; shadow: string; text: string; sizes: string }
> = {
  card: {
    box: 'size-28 sm:size-32 lg:size-36',
    radius: 'rounded-3xl',
    shadow: 'shadow-softsm',
    text: 'text-3xl sm:text-4xl lg:text-[40px]',
    sizes: '(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px',
  },
  featured: {
    box: 'h-[215px] w-[170px] sm:h-[265px] sm:w-[210px] lg:h-[300px] lg:w-[240px]',
    radius: 'rounded-card',
    shadow: 'shadow-soft',
    text: 'text-5xl sm:text-6xl',
    sizes: '(min-width: 1024px) 240px, (min-width: 640px) 210px, 170px',
  },
};

/** Default crop anchor — heads sit near the top of a portrait. */
const DEFAULT_IMAGE_POSITION = 'center top';

/** Last-resort initials: first letters of the first two words of the name. */
function initialsFromName(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export type TeamAvatarProps = {
  name: string;
  /** Explicit initials. Derived from `name` when omitted. */
  initials?: string;
  /** Public path, e.g. `/images/team/roshan-kunwar.jpeg`. */
  profileImage?: string | null;
  /** Alt text. Defaults to `<name> profile picture`. */
  imageAlt?: string;
  /** CSS `object-position` for the crop. Defaults to `center top`. */
  imagePosition?: string;
  /**
   * Background utility behind the photo and under the initials — a gradient
   * (`g-blue`, `g-brand`, …) for cropped square photos, or a flat colour such
   * as `bg-black` when `fit="contain"` needs to match the image's own backdrop.
   */
  gradient?: string;
  size?: TeamAvatarSize;
  /**
   * `cover` crops to fill the box — the right choice for square head-and-
   * shoulders photos. `contain` shows the whole composition uncropped, for a
   * portrait whose framing must not be cut into.
   */
  fit?: 'cover' | 'contain';
  className?: string;
};

export function TeamAvatar({
  name,
  initials,
  profileImage,
  imageAlt,
  imagePosition,
  gradient = 'g-blue',
  size = 'card',
  fit = 'cover',
  className,
}: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  /**
   * The pages are pre-rendered at build time, so an image can finish failing
   * before React hydrates — the `error` event then fires with no listener
   * attached and `onError` alone would never run. Re-check the element once on
   * mount: a request that finished with zero natural width already failed.
   *
   * `currentSrc` is the guard that makes this safe: a lazy image that has not
   * started fetching yet also reports `complete` with no natural width, and
   * treating that as a failure would hide perfectly good photos.
   */
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.currentSrc && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const src = typeof profileImage === 'string' ? profileImage.trim() : '';
  const showPhoto = src !== '' && !failed;
  const step = SIZES[size];

  return (
    <span
      className={cn(
        'relative block max-w-full shrink-0 overflow-hidden border border-line/80',
        step.box,
        step.radius,
        step.shadow,
        // The background sits on the box itself, so it also backs the photo
        // while it decodes — no white flash, no layout shift when it swaps in.
        gradient,
        className,
      )}
    >
      {showPhoto ? (
        <Image
          ref={imgRef}
          src={src}
          alt={imageAlt || `${name} profile picture`}
          fill
          sizes={step.sizes}
          onError={() => setFailed(true)}
          className={fit === 'contain' ? 'object-contain' : 'object-cover'}
          style={{ objectPosition: imagePosition || DEFAULT_IMAGE_POSITION }}
        />
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            'flex size-full items-center justify-center font-display font-extrabold text-white',
            step.text,
          )}
        >
          {initials?.trim() || initialsFromName(name)}
        </span>
      )}
    </span>
  );
}
