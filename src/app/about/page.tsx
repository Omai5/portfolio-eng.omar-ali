"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaAws,
} from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiCsharp,
  SiPhp,
  SiPrettier,
  SiFirebase,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiSqlite,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbBrandReactNative, TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "omar.ali.set@gmail.com",
    href: "mailto:omar.ali.set@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/omar-ali-4074673b7",
    content: "/Omai5",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Omai5",
    content: "/Omai5",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "A core programming language for modern web applications",
    icon: <RiJavascriptFill size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "A strongly typed superset of JavaScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "The structural foundation of web pages",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "The language used to style web interfaces",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "React",
    content: "A component based UI library",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "React Native",
    content: "A framework for building mobile applications",
    icon: <TbBrandReactNative size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "A React framework for full stack applications",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Node.js",
    content: "A JavaScript runtime for server side applications",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Express.js",
    content: "A web framework for Node.js",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Laravel",
    content: "A framework for PHP web applications",
    icon: <SiLaravel size={"50px"} color="#ff2d20" />,
    color: "#ff2d20",
  },
  {
    name: "Python",
    content: "A general purpose language widely used in AI and data",
    icon: <SiPython size={"50px"} color="#3776ab" />,
    color: "#3776ab",
  },
  {
    name: ".NET Core",
    content: "A cross platform application framework",
    icon: <SiDotnet size={"50px"} color="#512bd4" />,
    color: "#512bd4",
  },
  {
    name: "MongoDB",
    content: "A document oriented NoSQL database",
    icon: <SiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "PostgreSQL",
    content: "A relational database management system",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "SQLite",
    content: "A lightweight embedded database",
    icon: <SiSqlite size={"50px"} color="#003b57" />,
    color: "#003b57",
  },
  {
    name: "Socket.io",
    content: "A library for real time communication",
    icon: <SiSocketdotio size={"50px"} color="#fff" />,
    color: "#010101",
  },
  {
    name: "Redis",
    content: "An in memory data store",
    icon: <SiRedis size={"50px"} color="#dc382d" />,
    color: "#dc382d",
  },
  {
    name: "Tailwind CSS",
    content: "A utility first CSS framework",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Docker",
    content: "A containerization platform",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Git",
    content: "A distributed version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Code hosting and collaboration platform",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "A source code editor",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Linux",
    content: "An open source operating system",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Vercel",
    content: "A platform for frontend deployment",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "A command line interface",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "C#",
    content: "A modern object oriented language",
    icon: <SiCsharp size={"50px"} color="#9b4993" />,
    color: "#9b4993",
  },
  {
    name: "PHP",
    content: "A server side language for web development",
    icon: <SiPhp size={"50px"} color="#777bb4" />,
    color: "#777bb4",
  },
  {
    name: "Prettier",
    content: "Code formatting and consistency",
    icon: <SiPrettier size={"50px"} color="#f7b93e" />,
    color: "#f7b93e",
  },
  {
    name: "AWS",
    content: "A cloud computing platform",
    icon: <FaAws size={"50px"} color="#ff9900" />,
    color: "#ff9900",
  },
  {
    name: "Firebase",
    content: "Backend as a Service platform",
    icon: <SiFirebase size={"50px"} color="#ffca28" />,
    color: "#ffca28",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <Image
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="Omar Ali"
                  src="/assets/me.jpg"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Omar Ali</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Engineer & Cloud Computing
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full lg:w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About Me</h1>
            <p className="mb-10 text-roboto">
              I am Omar Ali, a Software Engineer with 3+ years of experience in software development.
              My focus is backend engineering, APIs, system design, scalable architectures,
              performance optimization, and clean maintainable code.
            </p>
            <p className="mb-10">
              I work with JavaScript, Go, Rust, C, C++, PHP, Laravel, PostgreSQL, MongoDB,
              Docker, Kubernetes, and CI/CD. I also have a strong foundation in cloud computing
              and deployment without specializing in cloud engineering.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Technologies I Work With</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Technology Icons"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 flex justify-center items-center drop-shadow-lg"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
