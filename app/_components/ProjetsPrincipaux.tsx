import { Section } from "./modules/Section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./modules/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function ProjetsPrincipaux() {
  // Les 2 projets principaux de la page d'accueil
  const mainProjects = PROJECTS.slice(0, 2);

  return (
    <Section className="flex flex-col w-full gap-4">
      <div className="ps-4 pb-2 flex items-center justify-between">
        <div>
          <Badge variant={"outline"}>Main Projects</Badge>
          <h2 className="pb-1 text-xl font-semibold tracking-tight first:mt-0">
            Mes principaux projets
          </h2>
        </div>
        <Link
          href="/works"
          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-medium pe-2 hover:underline"
        >
          <span>Voir tous les projets</span>
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {mainProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
