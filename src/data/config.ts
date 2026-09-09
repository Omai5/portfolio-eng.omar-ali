const config = {
  title: "Omar Ali | Software Engineer & Cloud Computing",
  description: {
    long: "Software Engineer with 3+ years of experience in software development, focused on backend engineering, APIs, system design, scalable architectures, performance optimization, and clean maintainable code. Experienced with JavaScript, Go, Rust, C, C++, PHP, Laravel, PostgreSQL, MongoDB, Docker, Kubernetes, and CI/CD. Strong foundation in cloud computing and deployment without specializing in cloud engineering.",
    short:
      "Omar Ali — Software Engineer focused on backend engineering, scalable systems, APIs, and cloud computing fundamentals.",
  },
  keywords: [
    "Omar Ali",
    "portfolio",
    "software engineer",
    "backend engineer",
    "backend development",
    "system design",
    "scalable architecture",
    "APIs",
    "JavaScript",
    "Go",
    "Rust",
    "C",
    "C++",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "cloud computing",
  ],
  author: "Omar Ali",
  email: "omar.ali.set@gmail.com",
  site: "https://github.com/Omai5/Omai5",

  githubUsername: "Omai5",
  githubRepo: "Omai5",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/omar-ali-4074673b7",
    instagram: "",
    facebook: "",
    github: "https://github.com/Omai5/Omai5",
  },
};
export { config };
