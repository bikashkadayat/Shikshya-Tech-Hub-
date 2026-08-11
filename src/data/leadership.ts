/**
 * Leadership message shown at the top of the Tutors page.
 *
 * ---------------------------------------------------------------------------
 * CONTENT RULE
 *
 * The name, position and portrait below were supplied by the website owner and
 * are published as owner-supplied content. Nothing else about this person is
 * stated anywhere on the site — no qualifications, employers, achievements,
 * dates, credentials or social links — because none has been supplied.
 *
 * The message itself is newly drafted website copy. It makes no claim about
 * rankings, awards, partnerships, numbers, certificates, placements or
 * outcomes. Keep it that way unless the owner supplies verified facts.
 *
 * The spelling "APIL Kunwar" is exactly as supplied. Do not "correct" it.
 * ---------------------------------------------------------------------------
 */

export type LeadershipMessage = {
  name: string;
  position: string;
  organization: string;
  image: string;
  imageAlt: string;
  /** CSS `object-position` for the portrait panel. */
  imagePosition: string;
  heading: string;
  message: string[];
};

export const ceoMessage: LeadershipMessage = {
  name: 'APIL Kunwar',
  position: 'CEO',
  organization: 'Sikshya Tech Hub',
  image: '/images/leadership/apil-kunwar-ceo.jpeg',
  imageAlt: 'Portrait accompanying the message from APIL Kunwar',
  imagePosition: 'center',
  heading: 'Message from the CEO',
  message: [
    'At Sikshya Tech Hub, we believe that meaningful education should connect knowledge with practical experience. Our goal is to create an accessible learning environment where students can explore technology, strengthen their skills, and develop the confidence to apply what they learn.',
    'Through our courses, workshops, and learning initiatives, we aim to make technical education clear, engaging, and relevant. We are committed to supporting learners at different stages of their journey while encouraging curiosity, responsible use of technology, collaboration, and continuous improvement.',
    'I welcome students, parents, schools, educators, and community partners to connect with Sikshya Tech Hub. Together, we can help learners build practical capabilities and prepare for opportunities in an increasingly digital world.',
  ],
};
