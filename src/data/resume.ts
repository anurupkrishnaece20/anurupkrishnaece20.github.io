// ---------------------------------------------------------------------------
// All real content for the site lives in this file. To update your portfolio
// (add a job, tweak a bullet point, add a skill, etc.) edit the values below —
// you should not need to touch any file inside src/components for a content
// change. Components only read from here and render it.
// ---------------------------------------------------------------------------

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  /** Leave as '' to hide the corresponding link/button on the site. */
  linkedinUrl: string;
  /** Leave as '' to hide the corresponding link/button on the site. */
  githubUrl: string;
}

// TODO: this resume did not list LinkedIn/GitHub profile URLs. Fill them in
// below (linkedinUrl / githubUrl) and the Cover and Contact sections will
// automatically show those buttons — until then they stay hidden.
export const personalInfo: PersonalInfo = {
  name: 'Anurup Krishna',
  initials: 'AK',
  title: 'AI/ML Engineer',
  tagline: 'AI/ML Engineer | LLM Systems, RAG Pipelines & Agentic Workflows',
  location: 'Ann Arbor, MI',
  email: 'krishnau@umich.edu',
  phone: '+1 (469) 662-8562',
  linkedinUrl: '',
  githubUrl: '',
};

export const summary =
  'AI/ML Engineer with production-facing experience building LLM-based systems, RAG pipelines, ' +
  'and agentic workflows. Strong Python expertise, end-to-end ML pipelines, evaluation and ' +
  'observability, and cloud deployment (AWS/Azure). Experienced translating ambiguous product ' +
  'requirements into deployed systems, presenting technical results to stakeholders, and shipping ' +
  'production-grade code.';

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: 'Completed' | 'Pursuing';
  highlight: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Electrical and Computer Engineering',
    institution: 'University of Michigan',
    location: 'Ann Arbor, MI',
    duration: 'Dec 2025',
    status: 'Completed',
    highlight: 'GPA: 3.66 / 4.00',
  },
  {
    degree: "Bachelor's Degree in Electronics Engineering",
    institution: 'Indian Institute of Technology (IIT BHU), Varanasi',
    location: 'Varanasi, India',
    duration: 'May 2024',
    status: 'Completed',
    highlight: 'GPA: 8.65 / 10.00',
  },
];

export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  duration: string;
  current: boolean;
  bullets: string[];
}

// Most recent first.
export const experience: ExperienceEntry[] = [
  {
    role: 'Marketing and Business Development',
    organization: 'Giving to the Nations, Inc.',
    location: 'Oak Creek, WI',
    duration: 'Feb 2026 - Present',
    current: true,
    bullets: [
      'Worked with the board on data-driven consumer research, demand analysis, and refining outreach strategies.',
      'Suggested website design changes on WordPress and created social media content using Canva to improve engagement.',
    ],
  },
  {
    role: 'Digital Accessibility Student Associate',
    organization: 'University of Michigan – School of Social Work',
    location: 'Ann Arbor, MI',
    duration: 'Aug 2025 - Dec 2025',
    current: false,
    bullets: [
      'Remediated 5+ online courses to achieve 90%+ Panorama accessibility scores and WCAG 2.1 AA compliance for course materials.',
      'Remediated PDF and Word documents using Adobe Acrobat and Grackle; collaborated with faculty to improve accessibility practices.',
    ],
  },
  {
    role: 'Programmer / Research Support Intern',
    organization: 'University of Michigan Arts Engine',
    location: 'Ann Arbor, MI',
    duration: 'Jan 2025 - Dec 2025',
    current: false,
    bullets: [
      'Contributed to TAMIE (Trainable Accessible Music Instruments and Environments) research; designed and tested digital musical instruments for individuals with physical disabilities.',
      'Applied DSP, filtering, ML and statistical methods to map movement patterns to musical outputs and improve auditory rendering.',
      'Implemented version-controlled Python pipelines; used Git when integrating research code into shared repositories.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    organization: 'University of Michigan Multidisciplinary Design Program',
    location: 'Ann Arbor, MI',
    duration: 'Jan 2025 - Dec 2025',
    current: false,
    bullets: [
      'Developed an AI review agent to detect inconsistencies in NSF research proposal PDFs using Azure AI, OpenAI SDK, and LangChain; implemented RAG with embeddings and vector retrieval for context-aware reasoning. Reached a detection accuracy of more than 70%.',
      'Containerized services with Docker and built CI/CD-friendly Python pipelines; supported deployment on AWS Fargate for production testing.',
      'Designed evaluation and benchmarking frameworks (ground-truth datasets, automated tests, metric dashboards) to measure retrieval quality, hallucination rates, and end-to-end accuracy.',
      'Presented weekly demos and technical readouts to program leads, translating technical findings for non-technical stakeholders.',
    ],
  },
];

export interface SkillCategory {
  category: string;
  /** One of the keys mapped to an icon inside Skills.tsx */
  iconKey: 'programming' | 'llm' | 'ml' | 'cloud' | 'tools';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    iconKey: 'programming',
    skills: ['Python', 'TypeScript (familiar)', 'JavaScript', 'R'],
  },
  {
    category: 'LLMs / Agents',
    iconKey: 'llm',
    skills: ['OpenAI SDK', 'LangChain', 'LangGraph', 'RAG', 'Embeddings', 'Vector DBs'],
  },
  {
    category: 'ML / Eval',
    iconKey: 'ml',
    skills: ['NumPy', 'SciPy', 'Pandas', 'Scikit-learn', 'LangSmith', 'W&B', 'Arize (concepts)'],
  },
  {
    category: 'Cloud / DevOps',
    iconKey: 'cloud',
    skills: ['AWS (Fargate)', 'Azure AI', 'Docker', 'Git', 'CI/CD basics'],
  },
  {
    category: 'Tools',
    iconKey: 'tools',
    skills: ['OpenAI API', 'Anthropic API', 'LangChain', 'GitHub'],
  },
];

export interface ProjectEntry {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  type: string;
  status: string;
  /** Leave as '' to hide the button. */
  githubUrl: string;
  /** Leave as '' to hide the button. */
  liveUrl: string;
}

// TODO: no public repo/demo links were listed on the resume. Add real URLs to
// githubUrl / liveUrl below and the matching buttons will appear automatically.
export const projects: ProjectEntry[] = [
  {
    title: 'AI Review Agent for NSF Research Proposals',
    description:
      'Built a RAG-based review agent that detects inconsistencies in NSF research proposal PDFs, using Azure AI, the OpenAI SDK, and LangChain for embeddings, vector retrieval, and context-aware reasoning. Reached a detection accuracy of more than 70%.',
    tech: ['Azure AI', 'OpenAI SDK', 'LangChain', 'RAG', 'Docker', 'AWS Fargate'],
    features: [
      'Embeddings & vector retrieval',
      'Ground-truth eval & benchmarking framework',
      'Dockerized, deployed on AWS Fargate',
      'Weekly technical demos to program leads',
    ],
    type: 'Software Engineering Internship',
    status: 'Completed',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'TAMIE — Trainable Accessible Music Instruments and Environments',
    description:
      'Contributed to research designing and testing digital musical instruments for individuals with physical disabilities, applying DSP, filtering, ML, and statistical methods to map movement patterns to musical output.',
    tech: ['Python', 'DSP', 'Machine Learning', 'Git'],
    features: [
      'Movement-to-sound mapping',
      'Signal filtering & DSP pipeline',
      'Version-controlled Python pipelines',
      'Assistive / accessible technology focus',
    ],
    type: 'Research Project',
    status: 'Completed',
    githubUrl: '',
    liveUrl: '',
  },
];

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  /** Leave as '' to hide the link button. */
  url: string;
}

export const researchProject = {
  title: 'Electric Vehicle Battery State of Health (SoH) Estimation',
  organization: 'Multi-disciplinary Research Project',
  location: 'India',
  duration: 'Oct 2022 - Dec 2023',
  role: 'Research Intern',
  bullets: [
    'Designed ML-inspired linear state estimators and data pipelines for tracking State of Health (SoH) of Li-ion batteries using Sandia National Labs cycling datasets; achieved less than 10% relative error across models.',
    'Produced performance analyses and visualizations with Matplotlib and Tableau; contributed to two co-authored peer-reviewed publications.',
  ],
};

export const publications: Publication[] = [
  {
    authors: 'Das, Kaushik, Roushan Kumar, and Anurup Krishna',
    title: 'Analyzing electric vehicle battery health performance using supervised machine learning',
    venue: 'Renewable and Sustainable Energy Reviews',
    year: '2024',
    url: '',
  },
  {
    authors: 'Kumar, R., Das, K., & Krishna, A.',
    title: 'Comparative analysis of data-driven electric vehicle battery health models across different operating conditions',
    venue: 'Energy',
    year: '2024',
    url: '',
  },
];
