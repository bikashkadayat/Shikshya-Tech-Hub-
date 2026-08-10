import { ceoMessage } from './leadership';

/**
 * The people listed on /our-team.
 *
 * ---------------------------------------------------------------------------
 * CONTENT RULE
 *
 * Every name and role below was supplied by the website owner and is published
 * as owner-supplied content. Nothing else about these people is stated anywhere
 * on the site — no biographies, qualifications, degrees, years of experience,
 * achievements, employment history, social links, email addresses, phone
 * numbers or awards — because none has been supplied.
 *
 * The spellings are exactly as supplied. Do not "correct" them:
 *   APIL Kunwar  (not Kapil)
 *   Anuzz Kunwar (not Anuz — note the tutor "Anuz Kunwar" is a different entry
 *                 in src/data/tutors.ts and must not be merged with this one)
 *   Prabin Khadkaa (not Prabin Khadka — note the tutor "Prabin Rokaya" is a
 *                 different person)
 *   Bibek Tamata (note the tutor "Ramesh Tamata" is a different person)
 *
 * These five are NOT tutors. Tutor data lives in src/data/tutors.ts and the two
 * lists are deliberately kept apart.
 * ---------------------------------------------------------------------------
 *
 * ADDING A PROFILE PHOTO LATER — two steps, no component or page changes:
 *
 *   1. Save the photo as `public/images/team/<slug>.jpeg`
 *      (served at `/images/team/<slug>.jpeg`).
 *
 *   2. Set `profileImage: '/images/team/<slug>.jpeg'` on that member below.
 *
 * Notes:
 *   - Use the member's exact `slug` as the filename, so no two members can
 *     overwrite each other's image.
 *   - JPEG for photographs; square (1:1) crops look best. A different
 *     extension is fine — just write the real filename.
 *   - `imagePosition` adjusts the crop anchor, e.g. 'center 30%'.
 *   - Confirm you have that person's permission to publish their photo.
 *
 * Until a photo is added, `profileImage` stays `null` and `TeamAvatar` renders
 * the member's initials on a brand gradient tile at exactly the same size, so
 * card height and alignment never change. A missing file or a wrong path falls
 * back to the same tile — never a broken-image icon.
 *
 * These instructions live here, in a source file, rather than in `public/`,
 * because anything under `public/` is copied into the published site.
 */

export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  /** Exactly as supplied by the owner. Shown verbatim on the card. */
  role: string;
  /** Public path, e.g. `/images/team/roshan-kunwar.jpeg`. `null` → initials. */
  profileImage: string | null;
  imageAlt: string;
  /** CSS `object-position` for the crop. Defaults to `center top`. */
  imagePosition?: string;
  initials: string;
  /** Rendered in the featured leadership block instead of the card grid. */
  isExecutive?: boolean;
  /** Gradient utility for the initials tile (`g-blue`, `g-brand`, …). */
  gradient?: string;
  order: number;
};

/**
 * The CEO's name, role and portrait path are NOT retyped here — they are read
 * from `src/data/leadership.ts`, which the "Message from the CEO" block on
 * /tutors also uses. One source of truth: editing that file updates both
 * places, and the two can never drift apart.
 *
 * The alt text is the one field written locally, because it describes this
 * page's use of the portrait rather than the message block's.
 */
export const executiveLeader: TeamMember = {
  id: 'apil-kunwar',
  slug: 'apil-kunwar',
  name: ceoMessage.name,
  role: `${ceoMessage.position}, ${ceoMessage.organization}`,
  profileImage: ceoMessage.image,
  imageAlt: `Portrait accompanying the profile of ${ceoMessage.name}`,
  imagePosition: ceoMessage.imagePosition,
  initials: 'AK',
  isExecutive: true,
  gradient: 'g-brand',
  order: 1,
};

/** The four core team members, in display order. */
export const coreTeam: TeamMember[] = [
  {
    id: 'roshan-kunwar',
    slug: 'roshan-kunwar',
    name: 'Roshan Kunwar',
    role: 'Finance Head and Marketing',
    profileImage: '/images/team/roshan-kunwar.jpeg',
    imageAlt: 'Profile picture of Roshan Kunwar',
    // Full-length portrait: the top edge sits a little above the head, so the
    // square crop is nudged down slightly to close the gap.
    imagePosition: 'center 10%',
    initials: 'RK',
    isExecutive: false,
    gradient: 'g-blue',
    order: 2,
  },
  {
    id: 'anuzz-kunwar',
    slug: 'anuzz-kunwar',
    name: 'Anuzz Kunwar',
    role: 'Operation Lead and Workforce Management',
    // Deliberately points at the file already published under /images/tutors —
    // the owner confirmed the same photo is used in both places, so there is
    // one physical image on disk and no copy in /images/team. The path is
    // written out rather than imported from `tutors.ts`: the two lists stay
    // independent, and neither record can be changed by editing the other.
    profileImage: '/images/tutors/anuz-kunwar.webp',
    imageAlt: 'Profile picture of Anuzz Kunwar',
    // The tutor card uses 'center 45%' in a taller frame. This square frame is
    // shorter, so 45% leaves a band of empty wall above the head; anchoring
    // lower brings the head into the upper third. The tutor's own position is
    // untouched.
    imagePosition: 'center 75%',
    initials: 'AK',
    isExecutive: false,
    gradient: 'g-brand',
    order: 3,
  },
  {
    id: 'bibek-tamata',
    slug: 'bibek-tamata',
    name: 'Bibek Tamata',
    role: 'Technical Lead',
    profileImage: '/images/team/bibek-tamata.jpeg',
    imageAlt: 'Profile picture of Bibek Tamata',
    // Studio head-and-shoulders portrait: `center top` clips the top of the
    // hair, so the crop is anchored just below the frame edge.
    imagePosition: 'center 10%',
    initials: 'BT',
    isExecutive: false,
    gradient: 'g-cyan',
    order: 4,
  },
  {
    id: 'prabin-khadkaa',
    slug: 'prabin-khadkaa',
    name: 'Prabin Khadkaa',
    role: 'HR and Logistics Manager',
    profileImage: '/images/team/prabin-khadkaa.jpeg',
    imageAlt: 'Profile picture of Prabin Khadkaa',
    // Full-length portrait with generous headroom: anchored lower than the
    // others so the head-and-shoulders area fills the square frame.
    imagePosition: 'center 15%',
    initials: 'PK',
    isExecutive: false,
    gradient: 'g-green',
    order: 5,
  },
];

/** Everyone on the page, executive first, then the core team by `order`. */
export const teamMembers: TeamMember[] = [executiveLeader, ...coreTeam].sort(
  (a, b) => a.order - b.order,
);
