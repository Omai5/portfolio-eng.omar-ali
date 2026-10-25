"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project, Skill } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130dvh]">
      <SectionHeader id='projects' title="Projects" />
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project) => (
            <Modall key={project.src} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[40vh] items-center justify-center px-6">
          <p className="max-w-2xl text-center text-base text-muted-foreground md:text-lg">
            Projects are being prepared. Detailed project case studies and links will be added soon.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[calc(100vw-3rem)] sm:w-[350px] md:w-[400px] h-auto rounded-lg overflow-hidden mx-auto"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%]">
          <SmoothScroll isInsideModal={true}>
            <ModalContent className="pt-10">
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-3">
            <CancelButton />
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none sm:w-28 text-center bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-2 rounded-md border border-black"
              >
                Visit
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none sm:w-28 text-center bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-2 rounded-md border border-black"
              >
                GitHub
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-6 mb-8">
        {project.skills.frontend?.length > 0 && (
          <SkillGroup label="Frontend" skills={project.skills.frontend} />
        )}
        {project.skills.backend?.length > 0 && (
          <SkillGroup label="Backend" skills={project.skills.backend} />
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      <div className="font-sans text-sm md:text-base">{project.content}</div>
    </>
  );
};

// The hover dock relies on a mouse, so touch screens get labeled chips instead
const SkillGroup = ({ label, skills }: { label: string; skills: Skill[] }) => {
  return (
    <div className="flex flex-col md:flex-col-reverse items-center gap-3">
      <p className="text-sm text-neutral-600 dark:text-neutral-500">{label}</p>
      <div className="hidden md:block">
        <FloatingDock items={skills} />
      </div>
      <div className="flex md:hidden flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill.title}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 text-xs font-sans text-neutral-700 dark:text-neutral-200 [&_svg]:h-4 [&_svg]:w-4"
          >
            {skill.icon}
            {skill.title}
          </span>
        ))}
      </div>
    </div>
  );
};

const CancelButton = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="flex-1 sm:flex-none sm:w-28 px-2 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm"
    >
      Cancel
    </button>
  );
};
