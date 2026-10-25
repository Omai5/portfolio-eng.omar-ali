import { ReactNode } from "react";
import { Code2, Server, ShieldCheck } from "lucide-react";

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
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "e-shop",
    category: "E-Commerce Website",
    title: "E-Shop",
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
];

export default projects;
