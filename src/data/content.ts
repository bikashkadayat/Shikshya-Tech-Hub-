import type { IconName } from '@/lib/icons';

/* -------------------------------------------------------------------------- */
/* About — Learn / Practice / Create                                           */
/* -------------------------------------------------------------------------- */

export const aboutPillars: { number: string; title: string; description: string; icon: IconName }[] =
  [
    {
      number: '01',
      title: 'Learn',
      description:
        'Concepts explained in plain language, from the ground up. Nothing is assumed and nothing is hand-waved.',
      icon: 'book',
    },
    {
      number: '02',
      title: 'Practice',
      description:
        'Guided, hands-on work in every session. Students use the real tools rather than watching someone else use them.',
      icon: 'wrench',
    },
    {
      number: '03',
      title: 'Create',
      description:
        'Every course ends in something built and finished — a project students can show, explain and be proud of.',
      icon: 'rocket',
    },
  ];

/* -------------------------------------------------------------------------- */
/* Why Choose Us — six features on navy                                        */
/* -------------------------------------------------------------------------- */

export const whyUsFeatures: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Practical First',
    description:
      'Sessions are built around doing. Theory is introduced when it is needed to make the next step work, not before.',
    icon: 'wrench',
  },
  {
    title: 'Project-Based Learning',
    description:
      'Every course produces finished work. Students leave with a portfolio, not just a completed syllabus.',
    icon: 'blocks',
  },
  {
    title: 'Built for Students',
    description:
      'Pacing, examples and language are pitched at school and college students — clear enough to follow, real enough to matter.',
    icon: 'graduation',
  },
  {
    title: 'School Partnerships',
    description:
      'Courses and workshops can be delivered on-site and shaped around your academic calendar and facilities.',
    icon: 'school',
  },
  {
    title: 'Current Tools',
    description:
      'Students work with the tools the industry is actually using today, including modern AI assistants.',
    icon: 'sparkles',
  },
  {
    title: 'Ongoing Support',
    description:
      'Guidance continues between sessions, so students are not left stuck between one class and the next.',
    icon: 'headphones',
  },
];

/* -------------------------------------------------------------------------- */
/* How It Works — a real four-step sequence                                    */
/* -------------------------------------------------------------------------- */

export const howItWorksSteps: { number: string; title: string; description: string; icon: IconName }[] =
  [
    {
      number: '01',
      title: 'Connect',
      description: 'Tell us who the learners are and what you want them to be able to do.',
      icon: 'handshake',
    },
    {
      number: '02',
      title: 'Choose',
      description: 'Pick a course or workshop, and we adjust the depth and schedule to fit.',
      icon: 'compass',
    },
    {
      number: '03',
      title: 'Learn',
      description: 'Hands-on sessions where students use the tools themselves from the start.',
      icon: 'monitor',
    },
    {
      number: '04',
      title: 'Build',
      description: 'Students finish and present real projects, and receive a certificate on completion.',
      icon: 'rocket',
    },
  ];

/* -------------------------------------------------------------------------- */
/* Schools & Institutions                                                      */
/* -------------------------------------------------------------------------- */

export const schoolBenefits: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Customized Courses',
    description: 'Content shaped around your students, your subjects and your goals.',
    icon: 'puzzle',
  },
  {
    title: 'On-site Workshops',
    description: 'Sessions delivered at your campus, using your facilities.',
    icon: 'presentation',
  },
  {
    title: 'Practical Projects',
    description: 'Every programme produces work students can show and explain.',
    icon: 'blocks',
  },
  {
    title: 'Student Assessments',
    description: 'Clear checkpoints so you can see what students actually gained.',
    icon: 'check',
  },
  {
    title: 'Certificates',
    description: 'Certificates issued to students on completion of a programme.',
    icon: 'award',
  },
  {
    title: 'Flexible Schedules',
    description: 'Timings arranged around your academic calendar and exam periods.',
    icon: 'calendar',
  },
  {
    title: 'Expert Instructors',
    description: 'Sessions led by people who work with these technologies directly.',
    icon: 'userCheck',
  },
  {
    title: 'Ongoing Support',
    description: 'Continued guidance for students and staff after a programme ends.',
    icon: 'refresh',
  },
];

export const partnershipProcess: { number: string; title: string; description: string; icon: IconName }[] =
  [
    {
      number: '01',
      title: 'Reach Out',
      description: 'Get in touch and tell us about your institution and what you need.',
      icon: 'handshake',
    },
    {
      number: '02',
      title: 'Co-design',
      description: 'We shape the content, depth and schedule together with your team.',
      icon: 'puzzle',
    },
    {
      number: '03',
      title: 'Deliver',
      description: 'Sessions run on-site or online, hands-on from the first day.',
      icon: 'presentation',
    },
    {
      number: '04',
      title: 'Review',
      description: 'We review outcomes with you and plan what comes next.',
      icon: 'refresh',
    },
  ];

/** Short benefit chips used on the home page schools band. */
export const schoolChips = [
  'Customized Courses',
  'On-site Workshops',
  'Practical Projects',
  'Student Assessments',
  'Certificates',
  'Flexible Schedules',
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export const homeFaqs: { question: string; answer: string }[] = [
  {
    question: 'Who are these courses for?',
    answer:
      'School and college students, and schools or institutions that want to run technology programmes for their students. Most courses assume no prior experience — the level shown on each course tells you where it finishes, not where you need to start.',
  },
  {
    question: 'Do students need prior technical experience?',
    answer:
      'For most courses, no. Anything that does expect a background — App Development, for example — says so on its course page, and there is usually a course that leads into it.',
  },
  {
    question: 'Can courses be delivered at our school or college?',
    answer:
      'Yes. Courses and workshops can be delivered on-site, and the content, depth and schedule are agreed with your team beforehand. Start with the Schools & Institutions page or the contact form.',
  },
  {
    question: 'What equipment do students need?',
    answer:
      'For most courses a laptop with a browser is enough, and the required software is free. Robotics uses component kits, and those arrangements are confirmed per batch or per school.',
  },
  {
    question: 'Do students receive a certificate?',
    answer: 'Yes — a certificate is issued on completion of a course or programme.',
  },
  {
    question: 'How do I enrol or request a workshop?',
    answer:
      'Use the contact form on this site, or the request button on any course or workshop. Tell us which programme you are interested in and we will follow up with the details.',
  },
];

/* -------------------------------------------------------------------------- */
/* Testimonials — deliberately empty                                           */
/* -------------------------------------------------------------------------- */

/**
 * CONTENT RULE: no invented testimonials, ever. These render as clearly
 * labelled skeleton placeholders. To publish a real one, fill in `quote`,
 * `author` and `role`, and the card switches to the real layout automatically.
 */
export type Testimonial = {
  quote: string | null;
  author: string | null;
  role: string | null;
};

export const testimonials: Testimonial[] = [
  { quote: null, author: null, role: null },
  { quote: null, author: null, role: null },
  { quote: null, author: null, role: null },
];
