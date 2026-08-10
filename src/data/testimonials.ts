/**
 * Testimonial data.
 *
 * ---------------------------------------------------------------------------
 * DEVELOPMENT ONLY — NOT VERIFIED FEEDBACK
 *
 * The names below are real people, but the quotations are placeholder wording
 * used so the section can be previewed and tested with realistic layout. No
 * one has confirmed they said these words.
 *
 * A quotation may only lose its `isSample: true` flag once the website owner
 * confirms that the named person supplied and approved that exact wording.
 * Until then every entry renders with a visible "Sample Testimonial" badge,
 * and nothing on the page may present it as verified feedback.
 *
 * No organisation, school, photo, course, job title, location or rating is
 * attached to any entry — do not add one without approval either.
 * ---------------------------------------------------------------------------
 *
 * PUBLISHING REAL FEEDBACK — data change only, no component edit:
 *
 *   {
 *     id: 'approved-feedback-id',
 *     quote: 'Exact approved feedback',
 *     displayName: 'Approved display name',
 *     audienceType: 'Student',
 *     organization: 'Approved institution name',
 *     image: '/images/testimonials/approved-file.jpg',  // optional
 *     imageAlt: 'Approved testimonial profile image',
 *     isSample: false,
 *   }
 *
 * With `isSample: false` the badge disappears and the card reads as published
 * feedback. Only publish quotes you have written approval for.
 */

export type Testimonial = {
  id: string;
  quote: string;
  displayName: string;
  audienceType: 'Student' | 'Parent' | 'School';
  /** Rendered only when a real, non-empty value is supplied. */
  organization?: string | null;
  /** Public path to an approved portrait. `null` renders a neutral avatar. */
  image?: string | null;
  imageAlt?: string;
  /** `true` renders the visible "Sample Testimonial" badge. */
  isSample: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: 'sample-sambridhi-ghimire',
    quote:
      'The practical learning sessions made technical concepts easier to understand and encouraged active participation.',
    displayName: 'Sambridhi Ghimire',
    audienceType: 'Student',
    organization: null,
    image: null,
    imageAlt: 'Testimonial avatar placeholder for Sambridhi Ghimire',
    isSample: true,
  },
  {
    id: 'sample-kapil-bastola',
    quote:
      'The workshop structure was clear, interactive, and focused on practical digital skills that learners could apply.',
    displayName: 'Kapil Bastola',
    audienceType: 'Student',
    organization: null,
    image: null,
    imageAlt: 'Testimonial avatar placeholder for Kapil Bastola',
    isSample: true,
  },
  {
    id: 'sample-mohan-bishwarma',
    quote:
      'The learning activities provided a helpful introduction to responsible and practical use of digital technology.',
    displayName: 'Mohan Bishwarma',
    audienceType: 'Student',
    organization: null,
    image: null,
    imageAlt: 'Testimonial avatar placeholder for Mohan Bishwarma',
    isSample: true,
  },
];

/** True while any sample entry is still on the page — drives the section copy. */
export const hasSampleTestimonials = testimonials.some((testimonial) => testimonial.isSample);
