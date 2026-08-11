import type { IconName } from '@/lib/icons';

export type Workshop = {
  slug: string;
  title: string;
  icon: IconName;
  /** Gradient class from globals.css — g-blue | g-brand | g-cyan | g-green */
  gradient: string;
  /**
   * `null` renders as an editable placeholder. Set a real duration per workshop
   * once you have fixed your programme (for example '2 hours' or 'Half day').
   */
  duration: string | null;
  description: string;
  /** Short bullets shown on the workshop card. */
  highlights: string[];
};

export const workshops: Workshop[] = [
  {
    slug: 'ai-awareness',
    title: 'AI Awareness',
    icon: 'brain',
    gradient: 'g-blue',
    duration: null,
    description:
      'What artificial intelligence really is, where students already meet it every day, and what it can and cannot do, without the hype.',
    highlights: ['How AI works, in plain language', 'Live demonstrations', 'Using AI honestly'],
  },
  {
    slug: 'cyber-safety',
    title: 'Cyber Safety',
    icon: 'shield',
    gradient: 'g-blue',
    duration: null,
    description:
      'Everyday digital safety for students: strong accounts, spotting scams, safe sharing, and what to do when something goes wrong.',
    highlights: ['Passwords & 2FA', 'Spotting phishing', 'Privacy and footprint'],
  },
  {
    slug: 'build-your-first-website',
    title: 'Build Your First Website',
    icon: 'code',
    gradient: 'g-cyan',
    duration: null,
    description:
      'Every student writes real HTML and CSS and leaves the session with a web page they built themselves.',
    highlights: ['Hands-on from minute one', 'No setup required', 'Everyone finishes a page'],
  },
  {
    slug: 'introduction-to-robotics',
    title: 'Introduction to Robotics',
    icon: 'robot',
    gradient: 'g-brand',
    duration: null,
    description:
      'A first hands-on session with circuits, sensors and motors, where students wire something up and make it move.',
    highlights: ['Build a live circuit', 'Sensors and motors', 'Team challenge'],
  },
  {
    slug: 'digital-content-creation',
    title: 'Digital Content Creation',
    icon: 'camera',
    gradient: 'g-brand',
    duration: null,
    description:
      'Planning, shooting and editing content that people actually watch, using the phone already in their pocket.',
    highlights: ['Shoot on a phone', 'Editing basics', 'Publish a finished piece'],
  },
  {
    slug: 'prompt-engineering-workshop',
    title: 'Prompt Engineering',
    icon: 'chat',
    gradient: 'g-blue',
    duration: null,
    description:
      'How to ask AI tools for what you actually want, and how to check the answer before you rely on it.',
    highlights: ['Prompt structure', 'Iterating for better results', 'Verifying output'],
  },
  {
    slug: 'digital-marketing-basics',
    title: 'Digital Marketing Basics',
    icon: 'chart',
    gradient: 'g-green',
    duration: null,
    description:
      'How brands find an audience online through content, platforms and the numbers that matter.',
    highlights: ['Audience and message', 'Platform basics', 'Reading analytics'],
  },
];
