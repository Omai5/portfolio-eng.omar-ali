// Skills and Experience data
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VERCEL = "vercel",
  LINUX = "linux",
  LARAVEL = "laravel",
  PYTHON = "python",
  DOTNET = "dotnet",
  SOCKETIO = "socketio",
  REDIS = "redis",
  SQLITE = "sqlite",
  CSHARP = "csharp",
  PHP = "php",
  PRETTIER = "prettier",
  AWS = "aws",
  FIREBASE = "firebase",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "A versatile language used across modern web applications",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "A strongly typed superset of JavaScript for safer development",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The structural foundation of the web",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "The language for styling and presenting web interfaces",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "A component based library for building user interfaces",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "A React framework for full stack and production ready applications",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "A utility first CSS framework for fast and consistent interfaces",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "A JavaScript runtime for server side applications",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express.js",
    shortDescription: "A minimal web framework for Node.js APIs and services",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "A powerful open source relational database",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "A document oriented NoSQL database for flexible data models",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription:
      "Distributed version control for reliable software development",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription:
      "A platform for source control collaboration and software delivery",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 14,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Containerization for consistent development and deployment environments",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 15,
    name: "vercel",
    label: "Vercel",
    shortDescription: "A platform for deploying modern web applications",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription:
      "An open source operating system widely used for servers and infrastructure",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 17,
    name: "laravel",
    label: "Laravel",
    shortDescription:
      "A PHP framework for structured and maintainable web applications",
    color: "#ff2d20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription:
      "A general purpose language widely used in automation data and AI",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DOTNET]: {
    id: 19,
    name: "dotnet",
    label: ".NET Core",
    shortDescription:
      "A cross platform framework for building modern applications",
    color: "#512bd4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 20,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "A library for real time bidirectional communication",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 21,
    name: "redis",
    label: "Redis",
    shortDescription:
      "An in memory data store commonly used for caching and fast data access",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 22,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "A lightweight embedded relational database",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.CSHARP]: {
    id: 23,
    name: "csharp",
    label: "C# / .NET",
    shortDescription:
      "A modern object oriented language for application development",
    color: "#9b4993",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  [SkillNames.PHP]: {
    id: 24,
    name: "php",
    label: "PHP",
    shortDescription: "A server side language widely used for web development",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 25,
    name: "prettier",
    label: "Prettier",
    shortDescription:
      "An opinionated code formatter for consistent source code",
    color: "#f7b93e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription:
      "A major cloud platform for infrastructure and application services",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 27,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "A backend as a service platform for application development",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,

    startDate: "3+ Years",
    endDate: "Present",

    title: "Software Engineer",

    company: "Backend Engineering & Cloud Computing",

    description: [
      "3+ years of software development experience through continuous learning, hands-on projects, and practical application.",
      "Focused on backend engineering, APIs, system design, and scalable architectures.",
      "Experienced with JavaScript, Go, Rust, C, C++, PHP, Laravel, PostgreSQL, MongoDB, Docker, Kubernetes, and CI/CD.",
      "Strong understanding of software architecture, performance optimization, and clean maintainable code.",
      "Cloud computing fundamentals and deployment experience without specializing in cloud engineering.",
    ],

    skills: [
      SkillNames.REACT,
      SkillNames.LARAVEL,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode is extremely bright",
    "Light mode is active. You may want sunglasses.",
    "Only professionals can handle this level of brightness",
    "Light mode is activating. Are your eyes ready?",
    "Switching to light mode. Brighter than your future.",
  ],
  dark: [
    "Dark mode is active. Welcome back to the dark side.",
    "Welcome back to dark mode. How was life on the light side?",
    "Dark mode is active. Your eyes will thank you.",
    "Welcome back to the shadows. How was the outside world?",
    "Dark mode is on. Someone finally understands elegance.",
  ],
};
