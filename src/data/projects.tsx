import { ReactNode } from "react";
import {
  Bot,
  Building2,
  Code2,
  FlaskConical,
  Link2,
  Rocket,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  // One-line summary shown on the /projects page cards
  description?: string;
  // Cover image in /public. Without one, the card shows a gradient with the title
  src?: string;
  screenshots?: string[];
  skills?: { frontend: Skill[]; backend: Skill[] };
  content?: React.ReactNode;
  github?: string;
  live?: string;
  // Still in progress: the card gets a badge and the modal shows a "coming soon" note
  comingSoon?: boolean;
  // Generated background used when there is no `src` image
  cover?: ProjectCover;
};

export type ProjectCover = {
  from: string; // gradient start color (top-left)
  to: string; // gradient end color (bottom-right)
  icon: ReactNode; // lucide icon drawn large on the card
};

const projects: Project[] = [
  {
    id: "e-shop",
    category: "E-Commerce Website",
    title: "E-Shop",
    description:
      "An electronics e-commerce website with a product catalog, shopping interface, account pages, and an authentication API.",
    src: "/projects/eshop/hero.jpg",
    live: "https://e-shop-mci15.vercel.app/",
    screenshots: [
      "phone.jpg",
      "headphones.jpg",
      "watch.jpg",
      "laptop.jpg",
      "camera.jpg",
      "speaker.jpg",
    ],
    skills: {
      frontend: [
        {
          title: "HTML5",
          bg: "#e34f26",
          fg: "#ffffff",
          icon: <Code2 size={22} />,
        },
        {
          title: "CSS3",
          bg: "#1572b6",
          fg: "#ffffff",
          icon: <Code2 size={22} />,
        },
        {
          title: "JavaScript",
          bg: "#f7df1e",
          fg: "#111111",
          icon: <Code2 size={22} />,
        },
      ],
      backend: [
        {
          title: "Node.js / Express",
          bg: "#286b35",
          fg: "#ffffff",
          icon: <Server size={22} />,
        },
        {
          title: "JWT Authentication",
          bg: "#4b5563",
          fg: "#ffffff",
          icon: <ShieldCheck size={22} />,
        },
      ],
    },
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          An electronics e-commerce website featuring a product showcase and
          account pages for registration, login, and password recovery.
        </p>
        <div>
          <h5 className="font-semibold mb-2">Key features</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Product catalog with electronics imagery.</li>
            <li>Shopping interface with add-to-cart actions.</li>
            <li>Registration, login, and account-related pages.</li>
            <li>Node.js and Express authentication API.</li>
            <li>Password hashing and JWT-based authentication utilities.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "movexa",
    category: "Streaming Landing Page",
    title: "Movexa",
    description:
      "A responsive landing page for a video streaming service, with an FAQ section and English / Arabic language support.",
    src: "/projects/movexa/hero.jpg",
    live: "https://omai5.github.io/Movexa/",
    github: "https://github.com/omai5/Movexa",
    skills: {
      frontend: [
        {
          title: "HTML5",
          bg: "#e34f26",
          fg: "#ffffff",
          icon: <Code2 size={22} />,
        },
        {
          title: "CSS3",
          bg: "#1572b6",
          fg: "#ffffff",
          icon: <Code2 size={22} />,
        },
        {
          title: "JavaScript",
          bg: "#f7df1e",
          fg: "#111111",
          icon: <Code2 size={22} />,
        },
      ],
      backend: [],
    },
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          A landing page for a video streaming service offering films, series,
          and documentaries, with English and Arabic language support.
        </p>
        <div>
          <h5 className="font-semibold mb-2">Key features</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hero section with an email sign-up call to action.</li>
            <li>Sections for multi-device viewing, offline downloads, and kids profiles.</li>
            <li>Interactive FAQ accordion.</li>
            <li>English / Arabic language toggle.</li>
            <li>Responsive layout for desktop, tablet, and mobile.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ai-chatbot",
    category: "AI Assistant",
    title: "AI ChatBot",
    comingSoon: true,
    cover: { from: "#7c3aed", to: "#1e1b4b", icon: <Bot /> },
  },
  {
    id: "amongo",
    category: "Web App",
    title: "Amongo",
    comingSoon: true,
    cover: { from: "#f97316", to: "#7c2d12", icon: <Rocket /> },
  },
  {
    id: "crm",
    category: "Customer Relationship Management",
    title: "CRM",
    comingSoon: true,
    cover: { from: "#0ea5e9", to: "#0c4a6e", icon: <Users /> },
  },
  {
    id: "erp",
    category: "Enterprise Resource Planning",
    title: "ERP",
    comingSoon: true,
    cover: { from: "#10b981", to: "#064e3b", icon: <Building2 /> },
  },
  {
    id: "lis",
    category: "Laboratory Information System",
    title: "LIS",
    comingSoon: true,
    cover: { from: "#ec4899", to: "#500724", icon: <FlaskConical /> },
  },
  {
    id: "url-shortener",
    category: "Web Tool",
    title: "URL Shortener",
    comingSoon: true,
    cover: { from: "#eab308", to: "#422006", icon: <Link2 /> },
  },
];

export default projects;
