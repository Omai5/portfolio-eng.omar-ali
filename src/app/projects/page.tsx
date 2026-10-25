"use client";

import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen px-4 pb-20 pt-28 text-zinc-300 md:px-[50px] xl:px-[150px]">
      <h1 className="mb-6 text-center text-4xl font-bold md:text-6xl">Projects</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-zinc-400">
        Selected projects showcasing web development and backend engineering.
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image src={project.src} alt={`${project.title} preview`} fill className="object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-wide text-zinc-400">{project.category}</p>
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                An electronics e-commerce website with a product catalog, shopping interface, account pages, and an authentication API.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[...project.skills.frontend, ...project.skills.backend].map((skill) => (
                  <span key={skill.title} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{skill.title}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {project.live && <Link href={project.live} target="_blank" rel="noreferrer" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black">Live Demo</Link>}
                {project.github && <Link href={project.github} target="_blank" rel="noreferrer" className="rounded-md border border-white/20 px-4 py-2 text-sm">GitHub</Link>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
