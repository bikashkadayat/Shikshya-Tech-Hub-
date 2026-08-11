/**
 * Tutor data.
 *
 * CONTENT RULE — read before editing:
 * Every fact in a published profile below was supplied by the person it
 * describes. Do not add years of experience, employers, awards, certifications
 * or student numbers to any profile unless you can verify them.
 *
 * Entries with `isPlaceholder: true` render as clearly-labelled editable cards.
 * Replace the fields and flip the flag to publish a real tutor.
 *
 * PHOTOS — two steps, no component change:
 *   1. save the photo as `public/images/tutors/<slug>.<ext>` (.webp, .jpg, .png)
 *   2. set `profileImage: '/images/tutors/<slug>.<ext>'` on that tutor below
 * Until then leave `profileImage: null`; `TutorAvatar` shows the gradient
 * initials tile at exactly the same size, so nothing in the layout moves.
 */

export type Tutor = {
  slug: string;
  name: string;
  /**
   * Initials for the avatar fallback tile. Omit and the first letters of the
   * name are used instead.
   */
  initials?: string;
  /**
   * Public path to the portrait, e.g. `/images/tutors/bikash-kadayat.jpg`.
   * `null` (or left out) shows the initials tile instead.
   */
  profileImage?: string | null;
  /** Alt text for the portrait. Defaults to `<name> profile picture`. */
  imageAlt?: string;
  /** CSS `object-position` for the crop. Defaults to `center top`. */
  imagePosition?: string;
  /** Role line, joined with " · " on the card. */
  roles: string[];
  /** Short specialisation line shown under the role. */
  specialisation: string | null;
  /** Academic background — only when supplied. */
  education: string | null;
  /** Professional experience — only when supplied. */
  experience: string | null;
  skills: string[];
  /** Short factual bullets shown on the detailed profile. */
  highlights: string[];
  /** Longer bio for the profile section. Empty for placeholders. */
  bio: string[];
  /** Gradient class used for the avatar fallback tile. */
  gradient: string;
  /** Social links — `null` renders a disabled placeholder. */
  linkedin: string | null;
  github: string | null;
  /** Placeholder cards are visually marked as editable. */
  isPlaceholder: boolean;
};

export const tutors: Tutor[] = [
  {
    slug: 'bikash-kadayat',
    name: 'Bikash Kadayat',
    initials: 'BK',
    profileImage: '/images/tutors/bikash-kadayat.webp',
    imageAlt: 'Bikash Kadayat profile picture',
    imagePosition: 'center top',
    roles: ['Technology Specialist', 'Digital Literacy Trainer', 'Technology Educator'],
    specialisation: 'Digital Literacy · Cybersecurity Awareness · Internet Technologies',
    education: 'BSc CSIT (pursuing)',
    experience: '3+ years',
    skills: [
      'Digital Literacy',
      'Internet Safety',
      'Cybersecurity Awareness',
      'Internet Technologies',
      'Networking',
      'Digital Technology',
      'Technology Education',
      'IT Support',
      'Web Development',
      'Graphic Design',
      'AI Tools',
    ],
    highlights: [
      'Tutor at Sikshya Tech Hub',
      '400+ students reached through digital literacy and awareness programs',
      'Participant in APNIC networking and Internet infrastructure training',
    ],
    bio: [
      'Bikash Kadayat is a Technology Specialist, Digital Literacy Trainer and Technology Educator with over 3 years of experience in technology, digital education and community-focused initiatives. He is currently pursuing a Bachelor of Science in Computer Science and Information Technology (BSc CSIT) and works as a Tutor at Sikshya Tech Hub.',
      'He has trained and engaged with more than 400 students through digital literacy and awareness programs, helping learners develop practical knowledge of computers, Internet safety, cybersecurity awareness and the responsible use of digital technologies.',
      'He has also participated in networking and Internet infrastructure training programs conducted by the Asia Pacific Network Information Centre (APNIC).',
      'Bikash is passionate about digital education, Internet technologies, cybersecurity awareness, and empowering young people through practical and accessible technology.',
    ],
    gradient: 'g-blue',
    linkedin: 'https://www.linkedin.com/in/bikash-kadayat-978852273/',
    github: 'https://github.com/bikashkadayat',
    isPlaceholder: false,
  },

  {
    slug: 'anuz-kunwar',
    name: 'Anuz Kunwar',
    initials: 'AK',
    profileImage: '/images/tutors/anuz-kunwar.webp',
    imageAlt: 'Anuz Kunwar profile picture',
    // Wide full-body source photo — anchored lower so the head sits in frame.
    imagePosition: 'center 45%',
    roles: ['AI & Machine Learning Specialist'],
    specialisation: 'Artificial Intelligence · Machine Learning · Intelligent Systems',
    education: 'Computer Engineering',
    experience: '2+ years',
    skills: [
      'Artificial Intelligence (AI)',
      'Machine Learning (ML)',
      'Data Analysis & Predictive Modeling',
      'Intelligent Systems',
      'AI-based Applications and Solutions',
      'Emerging AI Technologies',
    ],
    highlights: [
      "Completed a Bachelor's degree in Computer Science",
      '2+ years of professional experience in Artificial Intelligence and Machine Learning',
    ],
    bio: [
      "Anuzz Kunwar is an Artificial Intelligence and Machine Learning Specialist with a completed Bachelor's degree in Computer Science and over 2 years of professional experience in AI and Machine Learning.",
      'With a strong academic foundation in computer science and practical experience in AI and ML, he has developed expertise in understanding, designing and working with intelligent systems and data-driven technologies. His professional interests include applying Artificial Intelligence and Machine Learning to real-world problems and developing innovative technology solutions.',
      'Anuzz is passionate about Artificial Intelligence, Machine Learning and emerging technologies, with a focus on continuous learning, practical implementation, and using technology to create meaningful solutions.',
    ],
    gradient: 'g-brand',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },

  {
    slug: 'prabin-rokaya',
    name: 'Prabin Rokaya',
    initials: 'PR',
    profileImage: '/images/tutors/prabin-rokaya.webp',
    imageAlt: 'Prabin Rokaya profile picture',
    imagePosition: 'center top',
    roles: ['Web Development Specialist'],
    specialisation: 'Frontend & Backend · Responsive Design · Web Applications',
    education: 'Diploma in Computer Engineering',
    experience: '3+ years',
    skills: [
      'Web Development',
      'Frontend & Backend Development',
      'Responsive Web Design',
      'Web Applications',
      'Website Maintenance & Optimization',
      'Modern Web Technologies',
    ],
    highlights: [
      'Completed a Diploma in Computer Engineering',
      '3+ years of professional experience in web development',
    ],
    bio: [
      'Prabin Rokaya is a Web Development Specialist with a completed Diploma in Computer Engineering and over 3 years of professional experience in web development.',
      'With a strong technical foundation and practical industry experience, he has worked on developing, maintaining and improving modern web solutions. He is passionate about building user-friendly, responsive and efficient websites and web applications, while continuously exploring emerging trends and technologies in web development.',
      'Prabin is committed to delivering practical, scalable and user-focused web solutions, and to sharing his knowledge and experience with students and aspiring developers.',
    ],
    gradient: 'g-cyan',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },

  {
    slug: 'kabir-chand',
    name: 'Kabir Chand',
    initials: 'KC',
    profileImage: '/images/tutors/kabir-chand.webp',
    imageAlt: 'Kabir Chand profile picture',
    imagePosition: 'center top',
    roles: ['Graphic Designer', 'Video Editing Specialist'],
    specialisation: 'Graphic Design · Video Editing · Visual Content',
    education: 'Professional courses in Graphic Designing and Video Editing',
    // No length of experience was supplied, so none is stated here.
    experience: null,
    skills: [
      'Graphic Design',
      'Video Editing',
      'Social Media Creatives',
      'Promotional Materials',
      'Branding Assets',
      'Visual Communication',
      'Creative Storytelling',
    ],
    highlights: [
      'Completed professional courses in Graphic Designing and Video Editing',
      'Extensive practical experience in graphic design and video production',
    ],
    bio: [
      'Kabir Chand is a professional Graphic Designer and Video Editing Specialist who has completed professional courses in Graphic Designing and Video Editing, and has extensive practical experience in the field.',
      'He specialises in creating creative and professional visual content, including graphic designs, social media creatives, promotional materials, branding assets and engaging video content.',
      'With a strong understanding of visual communication and creative storytelling, Kabir is passionate about turning ideas into impactful designs and high-quality video productions.',
    ],
    gradient: 'g-brand',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },

  {
    slug: 'ramesh-tamata',
    name: 'Ramesh Tamata',
    initials: 'RT',
    profileImage: '/images/tutors/ramesh-tamata.webp',
    imageAlt: 'Ramesh Tamata profile picture',
    imagePosition: 'center top',
    roles: ['Cybersecurity Specialist', 'Prompt Engineering Specialist'],
    specialisation: 'Cybersecurity · Digital Security · Prompt Engineering',
    education: "Bachelor's degree in Information Technology (BIT)",
    experience: '5+ years',
    skills: [
      'Cybersecurity Awareness',
      'Digital Security',
      'Artificial Intelligence Tools',
      'Prompt Engineering',
      'Secure Technology Practices',
      'Responsible Technology Use',
    ],
    highlights: [
      "Completed a Bachelor's degree in Information Technology (BIT)",
      '5+ years of professional experience in cybersecurity and prompt engineering',
    ],
    bio: [
      "Ramesh Tamata is a Cybersecurity and Prompt Engineering Specialist with a completed Bachelor's degree in Information Technology (BIT) and over 5 years of professional experience in the field.",
      'He has expertise in cybersecurity awareness, digital security, Artificial Intelligence tools and prompt engineering.',
      'With a strong technical background and extensive experience, Ramesh focuses on promoting the secure and responsible use of technology, while helping individuals use AI effectively through practical prompt engineering techniques.',
    ],
    gradient: 'g-blue',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },

  {
    slug: 'chhatra-kadayat',
    name: 'Chhatra Kadayat',
    initials: 'CK',
    profileImage: '/images/tutors/chhatra-kadayat.webp',
    imageAlt: 'Chhatra Kadayat profile picture',
    imagePosition: 'center top',
    roles: ['Robotics Specialist'],
    specialisation: 'Robotics · Hands-on Projects · Emerging Technologies',
    education: "Bachelor's degree in Information Technology (BIT)",
    experience: '2+ years',
    skills: [
      'Robotics',
      'Robotics Concepts',
      'Hands-on Robotics Projects',
      'Technology-based Problem Solving',
      'Emerging Technologies',
      'Practical Technology Applications',
    ],
    highlights: [
      "Completed a Bachelor's degree in Information Technology (BIT)",
      '2+ years of experience in Robotics',
      'Hands-on experience in robotics projects and technology-based problem solving',
    ],
    bio: [
      "Chhatra Kadayat is a Robotics Specialist with a completed Bachelor's degree in Information Technology (BIT) and over 2 years of experience in Robotics.",
      'He has practical experience in robotics concepts, hands-on projects and technology-based problem solving.',
      'With a strong interest in emerging technologies, Chhatra is passionate about robotics, innovation, and inspiring learners to explore practical applications of technology.',
    ],
    gradient: 'g-green',
    linkedin: null,
    github: null,
    isPlaceholder: false,
  },
];

/** Every published (non-placeholder) tutor, in order. */
export const publishedTutors = tutors.filter((tutor) => !tutor.isPlaceholder);

