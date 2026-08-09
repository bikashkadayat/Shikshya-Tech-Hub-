import type { IconName } from '@/lib/icons';

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

export type CourseCategory =
  | 'AI & Data'
  | 'Design & Media'
  | 'Development'
  | 'Cybersecurity'
  | 'Marketing'
  | 'Robotics';

export type CourseLevel = 'Beginner' | 'Beginner–Intermediate' | 'Intermediate' | 'All levels';

export type CourseProject = {
  title: string;
  description: string;
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  level: CourseLevel;
  icon: IconName;
  /** One-line description used on cards. */
  summary: string;
  /** `null` renders as an editable placeholder — set it once you fix a schedule. */
  duration: string | null;
  /** Number of hands-on projects. `null` renders as an editable placeholder. */
  projects: number | null;
  certificate: string;
  overview: string[];
  /** "What students will learn" — rendered as a two-column checklist. */
  learn: string[];
  projectList: CourseProject[];
  tools: string[];
  outcomes: string[];
  faqs: CourseFaq[];
};

/* -------------------------------------------------------------------------- */
/* Category → accent gradient (reference Section 3.2)                          */
/* -------------------------------------------------------------------------- */

export const categoryGradient: Record<CourseCategory, string> = {
  'AI & Data': 'g-blue',
  'Design & Media': 'g-brand',
  Development: 'g-cyan',
  Cybersecurity: 'g-blue',
  Marketing: 'g-green',
  Robotics: 'g-brand',
};

/** Filter chips, in the order the reference specifies. */
export const courseFilters = [
  'All',
  'AI & Data',
  'Design & Media',
  'Development',
  'Cybersecurity',
  'Marketing',
  'Robotics',
] as const;

export type CourseFilter = (typeof courseFilters)[number];

/* -------------------------------------------------------------------------- */
/* The nine courses                                                            */
/* -------------------------------------------------------------------------- */

export const courses: Course[] = [
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    category: 'AI & Data',
    level: 'Intermediate',
    icon: 'brain',
    summary:
      'Understand how artificial intelligence works and build your first machine learning models with real data.',
    duration: '6–8 weeks',
    projects: 4,
    certificate: 'On completion',
    overview: [
      'This course takes students from "AI is magic" to "I built one". We start with what machine learning actually is — a program that finds patterns in data instead of following rules someone typed in — and then work upward through real, runnable projects.',
      'Everything is taught hands-on in Python. Students train their own models, look at where the models get things wrong, and learn to explain their results in plain language. No prior machine learning experience is expected; comfort with basic programming and school-level mathematics is enough to keep up.',
    ],
    learn: [
      'What artificial intelligence, machine learning and deep learning actually mean',
      'Python fundamentals for working with data',
      'Loading, cleaning and exploring a real dataset',
      'Supervised learning: classification and regression',
      'Training, testing and validating a model properly',
      'Reading accuracy, precision and recall without being fooled by them',
      'An introduction to neural networks and how they learn',
      'Using pre-trained AI models and APIs in your own projects',
      'Recognising bias in data and the ethics of automated decisions',
      'Presenting a model and its results to a non-technical audience',
    ],
    projectList: [
      {
        title: 'Image Classifier',
        description:
          'Train a model that sorts images into categories, then test it on pictures it has never seen.',
      },
      {
        title: 'Prediction Model',
        description:
          'Use a real tabular dataset to predict an outcome, and measure how much to trust the prediction.',
      },
      {
        title: 'Text Sentiment Analyser',
        description:
          'Build a tool that reads short pieces of text and decides whether the tone is positive or negative.',
      },
      {
        title: 'AI-Powered Mini App',
        description:
          'Wrap a trained or pre-trained model in a small interface so anyone can use it in the browser.',
      },
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'scikit-learn',
      'TensorFlow',
      'Google Colab',
      'Hugging Face',
    ],
    outcomes: [
      'Explain in your own words how a machine learning model is trained and evaluated',
      'Build, train and test a working model end to end on a real dataset',
      'Judge whether a model is good enough for the job it is meant to do',
      'Carry a portfolio of four finished AI projects into college applications or interviews',
    ],
    faqs: [
      {
        question: 'Do I need to know programming before I start?',
        answer:
          'Some basic programming helps, but it is not a hard requirement. The course begins with the Python you need for data work, and students who have written any code before — in any language — usually pick it up quickly.',
      },
      {
        question: 'How much mathematics is involved?',
        answer:
          'School-level algebra and a little statistics. We explain the mathematics behind each method in plain language and focus on using it correctly rather than deriving it from scratch.',
      },
      {
        question: 'What kind of computer do I need?',
        answer:
          'Any laptop that can run a browser is enough. The heavier training runs are done in Google Colab, which runs in the cloud, so no powerful hardware is required.',
      },
      {
        question: 'Can this course be delivered at our school?',
        answer:
          'Yes. The full course, or a shortened version of it, can be delivered on-site and scheduled around your academic calendar. Use the request form to start the conversation.',
      },
    ],
  },

  {
    slug: 'video-editing',
    title: 'Video Editing',
    category: 'Design & Media',
    level: 'Beginner',
    icon: 'video',
    summary:
      'Turn raw footage into clean, watchable video — cutting, sound, colour and export, from scratch.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'Editing is the part of video that most people never get taught. This course covers the craft: how to structure a story on a timeline, when to cut, how to fix bad audio, and how to make footage look deliberate rather than accidental.',
      'Students work on their own footage from the first session. By the end they can take a shoot from raw clips to a finished, correctly exported video ready for YouTube, Instagram or a school presentation.',
    ],
    learn: [
      'How a video editing timeline actually works',
      'Importing, organising and managing project media',
      'Cutting for rhythm, pace and story',
      'Transitions that support the edit instead of distracting from it',
      'Cleaning up audio, balancing levels and adding music',
      'Titles, lower thirds and simple motion graphics',
      'Colour correction and basic colour grading',
      'Editing vertical video for short-form platforms',
      'Export settings for different platforms and file sizes',
    ],
    projectList: [
      {
        title: 'Short Film Edit',
        description: 'Cut a supplied set of clips into a coherent 60-second story with sound.',
      },
      {
        title: 'Social Media Reel',
        description: 'Produce a vertical short-form video with captions, music and a strong hook.',
      },
      {
        title: 'School Event Recap',
        description: 'Edit event footage into a highlight video suitable for a school channel.',
      },
      {
        title: 'Personal Showreel',
        description: 'Assemble your best work into a showreel you can share with anyone.',
      },
    ],
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut', 'Audacity', 'Canva'],
    outcomes: [
      'Edit raw footage into a finished, watchable video on your own',
      'Fix common audio and colour problems instead of living with them',
      'Export correctly for any platform you are publishing to',
      'Leave with a personal showreel of finished work',
    ],
    faqs: [
      {
        question: 'Which editing software will we use?',
        answer:
          'The techniques are taught so they transfer between tools. Sessions can be run on Premiere Pro, DaVinci Resolve or CapCut depending on what your school or students already have access to.',
      },
      {
        question: 'Do I need my own camera?',
        answer:
          'No. A phone camera is more than enough for every project in this course, and practice footage is provided if you would rather focus purely on editing.',
      },
      {
        question: 'Is this suitable for complete beginners?',
        answer:
          'Yes. The course assumes no previous editing experience and starts from the very first import.',
      },
    ],
  },

  {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'AI & Data',
    level: 'Beginner',
    icon: 'chat',
    summary:
      'Learn to work with AI tools properly — writing prompts that produce useful, reliable, honest results.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'AI tools respond to how you ask. This course teaches students to move past one-line questions and into structured prompting: giving context, setting constraints, asking for a format, and iterating when the first answer is not good enough.',
      'It also covers the part that matters most for students — checking the output. We spend real time on verifying claims, spotting confident-sounding mistakes, and using AI as an assistant for schoolwork rather than a shortcut around it.',
    ],
    learn: [
      'How large language models generate text, at a useful level of detail',
      'The anatomy of a good prompt: context, task, constraints, format',
      'Role prompting and giving the model a clear job',
      'Few-shot prompting — teaching by example',
      'Step-by-step reasoning prompts for harder problems',
      'Iterating and refining instead of accepting the first answer',
      'Recognising hallucinations and verifying what you are told',
      'Prompting for images, code, study notes and summaries',
      'Ethical and honest use of AI in schoolwork',
    ],
    projectList: [
      {
        title: 'Prompt Library',
        description: 'Build a personal, tested library of prompts for your own recurring tasks.',
      },
      {
        title: 'AI Study Assistant',
        description: 'Design a prompt system that helps you revise a subject without doing the thinking for you.',
      },
      {
        title: 'Content Generation Workflow',
        description: 'Chain several prompts together to take an idea through to a finished draft.',
      },
      {
        title: 'Fact-Check Challenge',
        description: 'Deliberately break an AI tool, catch the errors, and document how you caught them.',
      },
    ],
    tools: ['Claude', 'ChatGPT', 'Google Gemini', 'Microsoft Copilot', 'Image generation tools'],
    outcomes: [
      'Get consistently better results out of any AI assistant',
      'Structure complex tasks into prompts that actually work',
      'Spot and verify incorrect AI output rather than repeating it',
      'Use AI tools honestly and effectively alongside your studies',
    ],
    faqs: [
      {
        question: 'Is this just about ChatGPT?',
        answer:
          'No. The principles are tool-independent and are practised across several assistants, so they keep working as the tools change.',
      },
      {
        question: 'Does this encourage students to let AI do their homework?',
        answer:
          'The opposite. A significant part of the course is about honest use, verification, and understanding why an unchecked AI answer is a liability.',
      },
      {
        question: 'Do students need paid AI accounts?',
        answer:
          'No. Every exercise is designed to work on the free tiers of the major assistants.',
      },
    ],
  },

  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    level: 'Beginner',
    icon: 'chart',
    summary:
      'Understand how brands grow online — content, social platforms, search and reading the numbers.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'This course explains what digital marketing really is beneath the buzzwords: finding the right audience, saying something worth their attention, and measuring whether it worked.',
      'Students plan and run a small campaign of their own. They write the content, publish it, look at the analytics honestly, and learn why most campaigns need a second version.',
    ],
    learn: [
      'How digital marketing fits together: audience, message, channel, measurement',
      'Defining a target audience instead of guessing at one',
      'Content marketing and writing that people actually read',
      'Social media strategy across the major platforms',
      'Search engine optimisation fundamentals',
      'The basics of paid advertising and what a budget buys',
      'Email marketing and building a list ethically',
      'Reading analytics: reach, engagement, conversion',
      'Building a simple, realistic campaign plan',
    ],
    projectList: [
      {
        title: 'Brand Content Plan',
        description: 'Build a one-month content calendar for a brand of your choosing.',
      },
      {
        title: 'Social Media Campaign',
        description: 'Design and publish a small campaign, then report on what the numbers say.',
      },
      {
        title: 'SEO Audit',
        description: 'Audit a real web page and write up prioritised, specific improvements.',
      },
      {
        title: 'Analytics Report',
        description: 'Turn raw campaign data into a short report a decision-maker could act on.',
      },
    ],
    tools: [
      'Google Analytics',
      'Google Search Console',
      'Meta Business Suite',
      'Canva',
      'Mailchimp',
      'Google Trends',
    ],
    outcomes: [
      'Plan a digital campaign from audience through to measurement',
      'Write and schedule content that suits each platform',
      'Read analytics without being misled by vanity metrics',
      'Present campaign results clearly and honestly',
    ],
    faqs: [
      {
        question: 'Do I need a business to take this course?',
        answer:
          'No. Students can work on a personal project, a school club, a cause they care about, or a fictional brand.',
      },
      {
        question: 'Will we need to spend money on ads?',
        answer:
          'No. Paid advertising is explained and planned, but every project is designed to be completed with organic, no-budget channels.',
      },
    ],
  },

  {
    slug: 'graphic-designing',
    title: 'Graphic Designing',
    category: 'Design & Media',
    level: 'Beginner',
    icon: 'pen',
    summary:
      'Learn the rules behind good design — layout, type, colour and visual hierarchy — then use them.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'Good design is not taste, it is decisions. This course teaches the underlying rules — hierarchy, alignment, contrast, spacing, colour relationships and type pairing — so students stop guessing at why something looks wrong.',
      'Every principle is applied immediately to real briefs: a poster, a logo, a social set and a small brand system. Students finish with work they can show, not just theory they can recite.',
    ],
    learn: [
      'The core principles: hierarchy, alignment, contrast, repetition, proximity',
      'Colour theory and building a palette that holds together',
      'Typography and choosing type that suits the message',
      'Layout, grids and using whitespace on purpose',
      'The difference between raster and vector, and when each belongs',
      'Logo design and the basics of a brand identity',
      'Designing for print versus designing for screen',
      'Preparing and exporting files correctly for handoff',
      'Giving and taking design feedback usefully',
    ],
    projectList: [
      {
        title: 'Event Poster',
        description: 'Design a poster with a clear hierarchy that reads correctly from across a room.',
      },
      {
        title: 'Logo & Mark',
        description: 'Develop a logo through sketches and iterations, not a single lucky first attempt.',
      },
      {
        title: 'Social Media Kit',
        description: 'Produce a consistent set of templates that stay recognisable across posts.',
      },
      {
        title: 'Mini Brand System',
        description: 'Assemble colour, type and logo usage into a small, usable brand sheet.',
      },
    ],
    tools: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Coolors'],
    outcomes: [
      'Explain why a design works or fails using specific principles',
      'Produce print- and screen-ready artwork that exports correctly',
      'Build a small brand system that stays consistent',
      'Leave with a portfolio of finished design pieces',
    ],
    faqs: [
      {
        question: 'Do I need to be able to draw?',
        answer:
          'No. Graphic design is about arranging and communicating, not illustration. Drawing is a nice extra, never a requirement here.',
      },
      {
        question: 'Do we need paid Adobe software?',
        answer:
          'No. Every project can be completed in Figma and Canva, both of which have capable free tiers. Adobe tools are covered for students who already have access.',
      },
    ],
  },

  {
    slug: 'web-development',
    title: 'Web Development',
    category: 'Development',
    level: 'Beginner–Intermediate',
    icon: 'code',
    summary:
      'Build real websites from the ground up — HTML, CSS and JavaScript, then publish them live.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'Students write their first line of HTML in the first session and have a page on the public internet not long after. The course moves through structure, styling and behaviour in that order, so nothing ever feels like copied magic.',
      'Responsive design is treated as a default rather than a final polish, and every project is deployed live so students can send someone a link to something they made.',
    ],
    learn: [
      'How the web actually works: browsers, servers, requests and responses',
      'HTML structure and writing semantic, accessible markup',
      'CSS for layout, styling and visual hierarchy',
      'Flexbox and CSS Grid for real layouts',
      'Responsive design that works from phone to desktop',
      'JavaScript fundamentals: variables, functions, events, the DOM',
      'Making pages interactive and handling user input',
      'Working with a CSS framework to move faster',
      'Version control with Git and GitHub',
      'Deploying a site so it is live on a real URL',
    ],
    projectList: [
      {
        title: 'Personal Portfolio',
        description: 'Build and publish a responsive personal site that works properly on a phone.',
      },
      {
        title: 'Landing Page',
        description: 'Recreate a polished multi-section landing page from a design reference.',
      },
      {
        title: 'Interactive Web App',
        description: 'Write a small JavaScript app that stores and updates data in the browser.',
      },
      {
        title: 'Deployed Team Project',
        description: 'Collaborate through Git and ship a shared project to a live URL.',
      },
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Netlify'],
    outcomes: [
      'Build a complete, responsive website without a template',
      'Read and debug your own HTML, CSS and JavaScript',
      'Use Git and GitHub the way working developers do',
      'Have live, shareable URLs for everything you have built',
    ],
    faqs: [
      {
        question: 'Is this suitable for someone who has never coded?',
        answer:
          'Yes. It starts from nothing. The Beginner–Intermediate level reflects where students finish, not where they need to start.',
      },
      {
        question: 'Do we cover React or other frameworks?',
        answer:
          'The focus is on the fundamentals that frameworks are built on. Framework concepts are introduced at the end so students know what comes next.',
      },
      {
        question: 'What do we need installed?',
        answer:
          'A browser, a free code editor and a GitHub account. All of it is free, and setup is done together in the first session.',
      },
    ],
  },

  {
    slug: 'app-development',
    title: 'App Development',
    category: 'Development',
    level: 'Intermediate',
    icon: 'smartphone',
    summary:
      'Design, build and run your own mobile app — screens, navigation, data and device features.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'This course takes students from an idea to an app running on an actual phone. It covers how mobile apps are structured, how screens connect, how state is managed, and how data survives being closed and reopened.',
      'Some prior programming experience makes this much smoother — the web development course is a natural route in. Students finish with apps installed on their own devices.',
    ],
    learn: [
      'How mobile apps are structured and how they differ from websites',
      'Designing screens and user flows before writing code',
      'Building interfaces from reusable components',
      'Navigation between multiple screens',
      'Managing state as an app grows',
      'Storing data locally so it survives a restart',
      'Connecting to an external API and handling the response',
      'Using device features such as the camera and location',
      'Testing on a real device and debugging what breaks',
      'What is actually involved in publishing to an app store',
    ],
    projectList: [
      {
        title: 'Multi-Screen App',
        description: 'Build an app with working navigation between several screens.',
      },
      {
        title: 'Task Manager',
        description: 'Create an app that saves data locally and still has it after a restart.',
      },
      {
        title: 'API-Connected App',
        description: 'Fetch live data from a public API and display it cleanly.',
      },
      {
        title: 'Final Portfolio App',
        description: 'Design, build and demonstrate an app of your own on a real device.',
      },
    ],
    tools: ['React Native', 'Expo', 'JavaScript', 'Figma', 'REST APIs', 'Android Studio'],
    outcomes: [
      'Build a multi-screen mobile app that runs on a real phone',
      'Handle app state and local data storage confidently',
      'Consume an external API and deal with errors properly',
      'Understand the real path from finished app to app store',
    ],
    faqs: [
      {
        question: 'Do I need a Mac or an iPhone?',
        answer:
          'No. The course is built around tools that run on Windows, macOS and Linux, and projects can be tested on an Android device or an emulator.',
      },
      {
        question: 'What should I know before joining?',
        answer:
          'Basic programming, ideally some JavaScript. Students who have completed the Web Development course are well prepared.',
      },
      {
        question: 'Will my app be published to the Play Store?',
        answer:
          'Publishing is explained end to end, but actually listing an app requires a developer account and fees that sit outside the course.',
      },
    ],
  },

  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    category: 'Cybersecurity',
    level: 'All levels',
    icon: 'shield',
    summary:
      'Learn how attacks actually happen and how to defend accounts, devices and data against them.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'Security makes sense once you see it from both sides. This course explains how common attacks work — phishing, weak passwords, unsafe networks, social engineering — and then how each one is defended against.',
      'The framing is defensive throughout. Students learn to secure their own accounts and devices, recognise a scam before clicking, and think clearly about privacy and their digital footprint. It runs at all levels because the fundamentals matter to everyone.',
    ],
    learn: [
      'The core ideas of information security and why they hold',
      'How attackers actually get in, in practice',
      'Passwords, password managers and multi-factor authentication',
      'Recognising phishing and social engineering attempts',
      'Malware types and how devices get infected',
      'Network safety, public Wi-Fi and safe browsing habits',
      'What encryption does and where it is used',
      'Privacy, digital footprint and data protection',
      'Responding sensibly when an account is compromised',
      'Careers and pathways in cybersecurity',
    ],
    projectList: [
      {
        title: 'Personal Security Audit',
        description: 'Audit and harden your own accounts and devices, then document what changed.',
      },
      {
        title: 'Phishing Detection Lab',
        description: 'Analyse real-world phishing examples and identify the tells in each one.',
      },
      {
        title: 'Password Strength Study',
        description: 'Investigate what makes passwords weak and build a policy you can defend.',
      },
      {
        title: 'School Safety Guide',
        description: 'Produce a practical digital-safety guide for your school community.',
      },
    ],
    tools: [
      'Password managers',
      'Two-factor authentication apps',
      'VPN basics',
      'Browser security tools',
      'Have I Been Pwned',
    ],
    outcomes: [
      'Secure your own accounts, devices and data properly',
      'Spot phishing and social engineering before you act on it',
      'Explain common attacks and defences in plain language',
      'Help your school or family raise its baseline security',
    ],
    faqs: [
      {
        question: 'Does this teach hacking?',
        answer:
          'It teaches how attacks work so that they can be recognised and prevented. The course is defensive, and it does not provide tooling or instruction for attacking systems you do not own.',
      },
      {
        question: 'Why is this listed as all levels?',
        answer:
          'The fundamentals are genuinely useful to everyone, and the material scales — younger students focus on safe habits while advanced students go deeper into the technical side.',
      },
      {
        question: 'Is this appropriate for school students?',
        answer:
          'Yes, and it is one of the most requested school workshops. The content is age-appropriate and built around protecting yourself.',
      },
    ],
  },

  {
    slug: 'robotics',
    title: 'Robotics',
    category: 'Robotics',
    level: 'Beginner–Intermediate',
    icon: 'robot',
    summary:
      'Build and program machines that sense and react — electronics, sensors, motors and code together.',
    duration: null,
    projects: 4,
    certificate: 'On completion',
    overview: [
      'Robotics is where code stops being abstract. Students wire circuits, read sensors, drive motors and write the logic that connects them, so a change in a line of code becomes something moving on the desk.',
      'The course covers electronics fundamentals alongside programming, because a robot that will not move is usually an electrical problem rather than a software one. Teams build up to an autonomous robot that solves a real task.',
    ],
    learn: [
      'Electronics fundamentals: voltage, current, circuits and safety',
      'Microcontrollers and what they can and cannot do',
      'Reading sensors: distance, light, temperature, motion',
      'Driving motors and controlling movement precisely',
      'Programming a microcontroller from scratch',
      'Combining sensor input with motor output into behaviour',
      'Writing autonomous logic and decision loops',
      'Debugging hardware and software together',
      'Designing and building a chassis that survives use',
      'Working as a team to a build deadline',
    ],
    projectList: [
      {
        title: 'Traffic Light System',
        description: 'Build a timed, working circuit and program its sequence.',
      },
      {
        title: 'Obstacle-Avoiding Robot',
        description: 'Use distance sensors so a robot navigates around obstacles by itself.',
      },
      {
        title: 'Line-Following Robot',
        description: 'Tune sensors and logic until the robot reliably follows a track.',
      },
      {
        title: 'Team Challenge Build',
        description: 'Design and build a robot that solves a task set at the start of the challenge.',
      },
    ],
    tools: [
      'Arduino',
      'Arduino IDE',
      'Breadboards',
      'Ultrasonic & IR sensors',
      'DC & servo motors',
      'Tinkercad Circuits',
    ],
    outcomes: [
      'Build a working circuit and understand every component in it',
      'Program a microcontroller to respond to sensor input',
      'Debug problems across hardware and software together',
      'Deliver a finished autonomous robot as part of a team',
    ],
    faqs: [
      {
        question: 'Is equipment provided?',
        answer:
          'Component kits are part of how the course is delivered. Exact arrangements are agreed per batch or per school — get in touch and we will confirm what is included.',
      },
      {
        question: 'Do students need programming experience?',
        answer:
          'No. The programming needed is taught from the beginning and stays focused on what the robot has to do.',
      },
      {
        question: 'Can this run as a school club?',
        answer:
          'Yes. Robotics works particularly well as an ongoing club or an inter-school challenge, and the schedule can be shaped around that.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

/** Course titles used to populate the contact form's "Interested Course" select. */
export function getCourseTitles(): string[] {
  return courses.map((course) => course.title);
}
