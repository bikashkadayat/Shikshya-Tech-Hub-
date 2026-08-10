'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * The one place tutor portraits are rendered.
 *
 * Every tutor card, profile header and preview section uses this component —
 * there is no second copy of the photo/initials logic anywhere in the app.
 *
 * Behaviour:
 * - `profileImage` set  → the photo, cropped with `object-fit: cover`.
 * - missing / null / '' → the tutor's initials on their brand gradient tile.
 * - photo fails to load → the same initials tile (never a broken image icon).
 *
 * The outer box is identical in both states — same responsive size, radius,
 * border and shadow — so a card with a photo and a card with initials line up
 * exactly and the card height never shifts.
 */

export type TutorAvatarSize = 'card' | 'profile';

/**
 * Fixed size steps, in one place.
 *
 * card    — 64px mobile · 72px tablet · 80px laptop and up
 * profile — 130px mobile · 145px tablet · 160px laptop and up
 */
const SIZES: Record<
  TutorAvatarSize,
  { box: string; radius: string; shadow: string; text: string; sizes: string }
> = {
  card: {
    box: 'size-16 sm:size-[72px] lg:size-20',
    radius: 'rounded-2xl',
    shadow: 'shadow-softsm',
    text: 'text-xl sm:text-[22px] lg:text-2xl',
    sizes: '(min-width: 1024px) 80px, (min-width: 640px) 72px, 64px',
  },
  profile: {
    box: 'size-[130px] sm:size-[145px] lg:size-40',
    radius: 'rounded-3xl',
    shadow: 'shadow-soft',
    text: 'text-4xl sm:text-[42px] lg:text-5xl',
    sizes: '(min-width: 1024px) 160px, (min-width: 640px) 145px, 130px',
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

export type TutorAvatarProps = {
  name: string;
  /** Explicit initials. Derived from `name` when omitted. */
  initials?: string;
  /** Public path, e.g. `/images/tutors/bikash-kadayat.jpg`. */
  profileImage?: string | null;
  /** Alt text. Defaults to `<name> profile picture`. */
  imageAlt?: string;
  /** CSS `object-position` for the crop. Defaults to `center top`. */
  imagePosition?: string;
  /** Gradient utility class for the initials tile (`g-blue`, `g-brand`, …). */
  gradient?: string;
  size?: TutorAvatarSize;
  className?: string;
};

export function TutorAvatar({
  name,
  initials,
  profileImage,
  imageAlt,
  imagePosition,
  gradient = 'g-blue',
  size = 'card',
  className,
}: TutorAvatarProps) {
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
        'relative block shrink-0 overflow-hidden border border-line/80',
        step.box,
        step.radius,
        step.shadow,
        // The gradient sits on the box itself, so it also backs the photo while
        // it decodes — no white flash, no layout shift when it swaps in.
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
          className="object-cover"
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
