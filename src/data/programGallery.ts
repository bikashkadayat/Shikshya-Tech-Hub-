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
  /**
   * CSS `object-position` for the crop, when the frame's aspect ratio differs
   * from the file's own. Defaults to `center` in `ProgramFigure`.
   */
  imagePosition?: string;
  /** Marks the one image intended for prominent, above-the-fold-ish use. */
  featured?: boolean;
};

/** The first three supplied files are all 1080 × 720 (3:2). */
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

  /* ---------------------------------------------------------------------
     Later additions. These arrived without any accompanying label, so they
     are described only by what is visible — no event, institution, date,
     location or person is named, and none is inferred.
     --------------------------------------------------------------------- */

  {
    id: 'community-learning-01',
    src: '/images/programs/community-learning-01.jpeg',
    alt: 'Participants working at computers in a classroom with a presentation screen at the front of the room',
    width: 1080,
    height: 811,
    featured: false,
  },
  {
    id: 'program-highlight-01',
    src: '/images/programs/program-highlight-01.jpeg',
    alt: 'Participants working at computers in a learning space with a projected presentation',
    caption: 'Program activity highlight',
    width: 1080,
    height: 810,
    featured: false,
  },
  {
    id: 'program-highlight-02',
    src: '/images/programs/program-highlight-02.jpeg',
    alt: 'Participants working at computer workstations during a learning session',
    caption: 'Program activity highlight',
    width: 1080,
    height: 1350,
    // Taller than the 4:3 highlight frame, so the crop is anchored above
    // centre to keep the workstations rather than the empty floor.
    imagePosition: 'center 35%',
    featured: false,
  },
];

/** Look one up by id, so a page never hardcodes a file path. */
export function getProgramImage(id: string): ProgramImage {
  const image = programImages.find((item) => item.id === id);
  if (!image) throw new Error(`Unknown program image: ${id}`);
  return image;
}
