export const personalData = {
  name: "Deepika",
  role: "Python & Django Developer | AI-Integrated Web Applications",
  location: "Prayagraj, Uttar Pradesh, India",
  email: "deepikayadav123786@gmail.com",
  phone: "8303532583",
  linkedin: "https://linkedin.com/in/deepikay1207",
  linkedinDisplay: "linkedin.com/in/deepikay1207",
  github: "https://github.com/Deepika1523",
  githubDisplay: "github.com/Deepika1523",
  bio: "B.Sc. Computer Science student (2023–2026) with a strong interest in full-stack web development, backend systems, and AI technologies. Enjoy building practical, database-driven applications and continuously learning modern development tools.",
  avatar: "/assets/images/deepika.jpg",
  signature: "/assets/images/about-me-signature.png",
  formspreeEndpoint: "https://formspree.io/f/xanyqzvg", // Formspree integration URL
};

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: "Advanced", percentage: 95 },
      { name: "JavaScript", level: "Intermediate", percentage: 85 },
      { name: "TypeScript", level: "Intermediate", percentage: 80 },
      { name: "SQL", level: "Advanced", percentage: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", level: "Advanced", percentage: 95 },
      { name: "FastAPI", level: "Intermediate", percentage: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced", percentage: 90 },
      { name: "HTML5", level: "Advanced", percentage: 95 },
      { name: "CSS3", level: "Advanced", percentage: 90 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Advanced", percentage: 90 },
      { name: "MySQL", level: "Advanced", percentage: 90 },
      { name: "MongoDB", level: "Basics", percentage: 65 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Advanced", percentage: 90 },
      { name: "GitHub", level: "Advanced", percentage: 90 },
      { name: "Docker", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    category: "Concepts & Architecture",
    skills: [
      { name: "REST APIs", level: "Advanced", percentage: 95 },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", percentage: 95 },
      { name: "Agile Development", level: "Intermediate", percentage: 85 },
    ],
  },
];

export const projectsData = [
  {
    id: "legalmind",
    title: "LegalMind – Contract Intelligence Platform",
    subtitle: "In Progress, 2026",
    category: "AI & Web",
    badge: "Featured / AI-Integrated",
    image: "/assets/images/project-legalmind.svg",
    tech: ["Python", "Django", "PostgreSQL", "OpenAI API", "LangGraph"],
    highlights: [
      "Building a Django web app for AI-assisted contract analysis with a PostgreSQL database to manage contracts, clauses, and risk assessments.",
      "Integrating the OpenAI API to generate clause-level risk summaries with robust error handling for AI responses.",
      "Applying LangGraph to build modular AI workflows for clause extraction, compliance checking, and automated risk scoring.",
    ],
    github: "https://github.com/Deepika1523",
    liveDemo: "#",
  },
  {
    id: "event-management",
    title: "Event Management System",
    subtitle: "2025",
    category: "Full-Stack",
    badge: "Full-Stack Web App",
    image: "/assets/images/project-event.svg",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Developed a full-stack web app using Django and MySQL for event registration and management.",
      "Implemented role-based authentication, event scheduling, participant registration, and organizer workflows.",
      "Designed modular backend architecture and integrated database operations for secure, efficient data management.",
    ],
    github: "https://github.com/Deepika1523",
    liveDemo: "#",
  },
  {
    id: "donor-management",
    title: "Donor Management System",
    subtitle: "2024",
    category: "Backend & DB",
    badge: "Database System",
    image: "/assets/images/project-donor.svg",
    tech: ["Python", "Django", "MySQL"],
    highlights: [
      "Developed a donor management system with secure authentication, donor registration, and recipient management.",
      "Implemented donor search, filtering, and dashboard features using Django and MySQL.",
      "Designed normalized database tables and optimized backend queries for performance and maintainability.",
    ],
    github: "https://github.com/Deepika1523",
    liveDemo: "#",
  },
];

export const educationData = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS)",
    location: "Prayagraj",
    period: "Jul 2023 – Jun 2026",
    status: "Pursuing",
    details: "Focusing on full-stack web architecture, database design, machine learning algorithms, and software engineering principles.",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Kendriya Vidyalaya, Prayagraj",
    location: "Prayagraj",
    period: "2021",
    score: "86%",
    details: "Senior Secondary Education with specialization in Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    degree: "Class X (CBSE)",
    institution: "DAV Public School",
    location: "Prayagraj",
    period: "2019",
    score: "93.6%",
    details: "Secondary School Examination with Distinction in Science and Mathematics.",
  },
];

export const certificationsData = [
  {
    title: "Step into Machine Learning",
    issuer: "GUVI × HCL",
    year: "2025",
    description: "Hands-on certification covering fundamental ML algorithms, data preprocessing, model training, and Python predictive workflows.",
  },
  {
    title: "Software Engineering & Agile Software Development",
    issuer: "Infosys Springboard",
    year: "2024",
    description: "Comprehensive training in Agile methodologies, Scrum sprints, SDLC patterns, and modern enterprise software practices.",
  },
  {
    title: "Python Programming & Object-Oriented Programming",
    issuer: "Infosys Springboard",
    year: "2024",
    description: "In-depth OOP principles, data structures, backend logic development, and clean coding standards in Python.",
  },
];
