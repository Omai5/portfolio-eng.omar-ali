import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// Background for projects without a cover image: a gradient, a dot grid,
// a glow and the project's icon. Fills its (relative) parent.
const ProjectCover = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  const from = project.cover?.from ?? "#404040";
  const to = project.cover?.to ?? "#0a0a0a";

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, transparent 75%)",
        }}
      />
      {/* glow behind the icon */}
      <div
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl opacity-60"
        style={{ background: from }}
      />
      {project.cover?.icon ? (
        <div className="absolute right-6 top-1/2 -translate-y-[60%] text-white/80 drop-shadow-lg [&_svg]:h-24 [&_svg]:w-24 md:[&_svg]:h-28 md:[&_svg]:w-28 [&_svg]:stroke-[1.25]">
          {project.cover.icon}
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="px-4 text-center text-4xl font-bold text-white/15 select-none">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCover;
