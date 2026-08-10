/**
 * Photographs from learning and community programs.
 *
 * ---------------------------------------------------------------------------
 * PUBLISHING RULES — read before adding or changing an entry
 *
 * 1. These photographs show identifiable participants, including children.
 *    Publication permission is the website owner's to confirm, per photo.
 * 2. Nothing here states an event name, organiser, institution, date,
 *    location, participant count or outcome, because none of that is
 *    verified in this repository. Captions stay general on purpose.
 * 3. Alt text describes what is visible and nothing more — no names, roles,
 *    identities, ethnicity, gender or emotions.
 * 4. Visible watermarks in the supplied files are left exactly as they are.
 * ---------------------------------------------------------------------------
 */

export type ProgramImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  /** Marks the one image intended for prominent, above-the-fold-ish use. */
  featured?: boolean;
};

/** Every supplied file is 1080 × 720 (3:2). */
const PHOTO_WIDTH = 1080;
const PHOTO_HEIGHT = 720;

export const programImages: ProgramImage[] = [
  {
    id: 'learning-program-group-01',
    src: '/images/programs/learning-program-group-01.jpeg',
    alt: 'Participants displaying certificates during a learning program',
    caption: 'Program activity highlight',
    width: PHOTO_WIDTH,
    height: PHOTO_HEIGHT,
    featured: true,
  },
  {
    id: 'community-program-01',
    src: '/images/programs/community-program-01.jpeg',
    alt: 'Participants seated in a hall during a program session',
    caption: 'Community learning activity',
    width: PHOTO_WIDTH,
    height: PHOTO_HEIGHT,
    featured: true,
  },
  {
    id: 'learning-program-group-02',
    src: '/images/programs/learning-program-group-02.jpeg',
    alt: 'Participants holding certificates in front of a presentation screen',
    caption: 'Program activity highlight',
    width: PHOTO_WIDTH,
    height: PHOTO_HEIGHT,
    featured: false,
  },
];

/** Look one up by id, so a page never hardcodes a file path. */
export function getProgramImage(id: string): ProgramImage {
  const image = programImages.find((item) => item.id === id);
  if (!image) throw new Error(`Unknown program image: ${id}`);
  return image;
}
