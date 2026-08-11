import type { IconName } from '@/lib/icons';
import { siteConfig } from './site';

/**
 * Official contact details — the single source of truth.
 *
 * Everything the site shows about how to reach Sikshya Tech Hub comes from
 * here: the contact page cards, the home page contact block and the inquiry
 * form's fallback links. Change a value once and it updates everywhere.
 *
 * Phone numbers are displayed exactly as supplied and dialled with Nepal's
 * +977 country code, so the links work from outside Nepal too.
 */
export const contactDetails = {
  email: 'sikshyatechhub@gmail.com',
  phones: [
    { display: '9765437327', href: 'tel:+9779765437327' },
    { display: '9768473119', href: 'tel:+9779768473119' },
  ],
  location: 'Kathmandu, Bagmati Province, Nepal',
  officeHours: '7:00 AM – 6:00 PM',
} as const;

/** Lead line shown above the contact cards. */
export const contactIntro = 'For more details, contact us at';

/** Where the inquiry form posts. FormSubmit needs no backend of our own. */
export const formSubmitAction = `https://formsubmit.co/${contactDetails.email}`;

export type ContactEntry = {
  /** Text shown to the visitor. */
  display: string;
  /** `mailto:` / `tel:` target. Omit for plain text such as the address. */
  href?: string;
  /** Accessible name for the link, when the display text alone is not enough. */
  ariaLabel?: string;
};

export type ContactCard = {
  icon: IconName;
  label: string;
  entries: ContactEntry[];
};

export const contactCards: ContactCard[] = [
  {
    icon: 'globe',
    label: 'Email',
    entries: [
      {
        display: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
        ariaLabel: `Email ${siteConfig.name}`,
      },
    ],
  },
  {
    icon: 'headphones',
    label: 'Phone',
    entries: contactDetails.phones.map((phone) => ({
      display: phone.display,
      href: phone.href,
      ariaLabel: `Call ${siteConfig.name} at ${phone.display}`,
    })),
  },
  {
    icon: 'building',
    label: 'Address',
    entries: [{ display: contactDetails.location }],
  },
  {
    icon: 'clock',
    label: 'Office hours',
    entries: [{ display: contactDetails.officeHours }],
  },
];
