/**
 * Tutor data.
 *
 * CONTENT RULE — read before editing:
 * The only real tutor profile is Bikash Kadayat, and it contains ONLY the
 * information that was actually supplied. Do not add years of experience,
 * employers, awards, certifications or student numbers to any profile unless
 * you can verify them.
 *
 * Every other entry is `isPlaceholder: true` and renders as a clearly-labelled
 * editable card. Replace the fields and flip the flag to publish a real tutor.
 */

export type Tutor = {
  slug: string;
  name: string;
  /** Role line, e.g. 'IT Support · Web Developer · Technology Educator'. */
  roles: string[];
  /** Short specialisation line shown under the role. */
  specialisation: string | null;
  /** Academic background — only when supplied. */
  education: string | null;
  skills: string[];
  /** Longer bio for the profile section. Empty for placeholders. */
  bio: string[];
  /** Gradient class used for the avatar tile. */
  gradient: string;
  /** Social links — `null` renders as a disabled placeholder. */
  linkedin: string | null;
  github: string | null;
  /** Placeholder cards are visually marked as editable. */
  isPlaceholder: boolean;
};

export const tutors: Tutor[] = [
  {
    slug: 'bikash-kadayat',
    name: 'Bikash Kadayat',
    roles: ['IT Support', 'Web Developer', 'Technology Educator'],
    specialisation: 'Web Development · IT Support · Digital Technology',
    education: 'B.Sc. CSIT',
    skills: [
      'Web Development',
      'IT Support',
      'Digital Technology',
      'Graphic Design',
      'AI Tools',
      'Networking',
      'Technology Education',
    ],
    bio: [
      'Bikash Kadayat works across IT support, web development and technology education, and holds a B.Sc. CSIT.',
      'His teaching covers web development, IT support, digital technology, graphic design, AI tools and networking — taught the way he works with them, hands-on and applied rather than theoretical.',
    ],
    gradient: 'g-blue',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },

  /* ---------------------------------------------------------------------- */
  /* Editable placeholders — replace with real tutors, then set              */
  /* isPlaceholder: false                                                    */
  /* ---------------------------------------------------------------------- */

  {
    slug: 'tutor-ai-ml',
    name: 'Tutor name',
    roles: ['AI & Machine Learning'],
    specialisation: 'Add specialisation',
    education: null,
    skills: ['Add skill', 'Add skill', 'Add skill'],
    bio: [],
    gradient: 'g-brand',
    linkedin: null,
    github: null,
    isPlaceholder: true,
  },
  {
    slug: 'tutor-web-development',
    name: 'Tutor name',
    roles: ['Web Development'],
    specialisation: 'Add specialisation',
    education: null,
    skills: ['Add skill', 'Add skill', 'Add skill'],
    bio: [],
    gradient: 'g-cyan',
    linkedin: null,
    github: null,
    isPlaceholder: true,
  },
  {
    slug: 'tutor-cybersecurity',
    name: 'Tutor name',
    roles: ['Cybersecurity'],
    specialisation: 'Add specialisation',
    education: null,
    skills: ['Add skill', 'Add skill', 'Add skill'],
    bio: [],
    gradient: 'g-blue',
    linkedin: null,
    github: null,
    isPlaceholder: true,
  },
  {
    slug: 'tutor-design-media',
    name: 'Tutor name',
    roles: ['Design & Media'],
    specialisation: 'Add specialisation',
    education: null,
    skills: ['Add skill', 'Add skill', 'Add skill'],
    bio: [],
    gradient: 'g-brand',
    linkedin: null,
    github: null,
    isPlaceholder: true,
  },
  {
    slug: 'tutor-technology',
    name: 'Tutor name',
    roles: ['Technology Specialist'],
    specialisation: 'Add specialisation',
    education: null,
    skills: ['Add skill', 'Add skill', 'Add skill'],
    bio: [],
    gradient: 'g-green',
    linkedin: null,
    github: null,
    isPlaceholder: true,
  },
];

export const featuredTutor = tutors[0];

/** Initials for the avatar tile — placeholders show a neutral mark instead. */
export function tutorInitials(tutor: Tutor): string {
  if (tutor.isPlaceholder) return '+';
  return tutor.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}
