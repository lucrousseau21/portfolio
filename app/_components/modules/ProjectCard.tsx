import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Code } from "@/app/_components/modules/Code";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { Project, ProjectCategory } from "@/lib/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  project: Project;
  index?: number;
  isReversed?: boolean;
  className?: string;
};

// Liste des mots-clés techniques à mettre en valeur avec <Code>
const TECH_KEYWORDS = [
  "WordPress",
  "Wordpress",
  "WooCommerce",
  "Divi",
  "GSAP",
  "ScrollTrigger",
  "SCSS",
  "HTML5",
  "CSS",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "Stripe",
  "Laravel",
  "Symfony",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Swagger",
  "MySQL",
  "Doctrine ORM",
  "REST API",
  "PHP",
  "JWT",
  "RBAC",
];

// Helper pour formater automatiquement les paragraphes avec <Code>
function FormattedParagraph({ text }: { text: string }) {
  const escaped = TECH_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {parts.map((part, idx) => {
        if (TECH_KEYWORDS.includes(part)) {
          return <Code key={idx}>{part}</Code>;
        }
        return <span key={idx}>{part}</span>;
      })}
    </p>
  );
}

// Couleurs de badges selon la catégorie
export function getCategoryBadgeClass(category: ProjectCategory) {
  switch (category) {
    case "Ecole":
      return "border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10";
    case "Pro":
      return "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10";
    case "Perso":
      return "border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/10";
    default:
      return "";
  }
}

export const ProjectCard = ({
  project,
  index = 0,
  isReversed: isReversedProp,
  className,
}: ProjectCardProps) => {
  // L'alternance gauche / droite est gérée automatiquement côté composant
  const isReversed =
    isReversedProp !== undefined ? isReversedProp : index % 2 === 1;

  return (
    <Card
      className={cn(
        "rounded-3xl bg-card border border-border shadow-sm hover:border-primary/25 transition-all overflow-hidden flex flex-col md:flex-row items-stretch group",
        isReversed && "md:flex-row-reverse",
        className
      )}
    >
      {/* Visuel / Image du projet en pleine hauteur (40% de la largeur du bloc) */}
      <div className="w-full md:w-[40%] relative min-h-[260px] md:min-h-full shrink-0 overflow-hidden bg-accent/10">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />

        {project.isTemplate && (
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-background/85 backdrop-blur-md border border-border/70 text-xs shadow-sm flex items-center gap-1 z-10"
          >
            <Sparkles className="size-3 text-amber-500" />
            Template
          </Badge>
        )}
      </div>

      {/* Contenu textuel directement dans la case principale (sans cellule carrée en dessous) */}
      <div className="w-full md:w-[60%] flex-1 flex flex-col justify-between p-6 sm:p-7 md:p-8 gap-5">
        <div className="flex flex-col gap-3">
          {/* Ligne des badges (Catégorie, Sous-catégorie, Date) */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={cn("text-xs font-medium", getCategoryBadgeClass(project.category))}
            >
              {project.category}
            </Badge>

            <Badge variant="outline" className="text-xs font-mono">
              {project.subcategory}
            </Badge>

            <span className="text-xs text-muted-foreground ml-auto font-mono">
              {project.date}
            </span>
          </div>

          {/* Titre du projet */}
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight font-fredoka text-foreground">
            {project.title}
          </h2>

          {/* Paragraphes de description avec mise en valeur des technologies */}
          <div className="flex flex-col gap-2">
            {project.description.map((paragraph, pIdx) => (
              <FormattedParagraph key={pIdx} text={paragraph} />
            ))}
          </div>
        </div>

        {/* Technologies et Liens d'action */}
        <div className="flex flex-col gap-3 pt-3 border-t border-border/40">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground mr-1 font-medium">Stack :</span>
            {project.technologies.map((tech) => (
              <Code key={tech} className="text-xs">
                {tech}
              </Code>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-xl text-xs gap-1.5"
                )}
              >
                <span>Visiter le site</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-xl text-xs gap-1.5"
                )}
              >
                <GithubIcon size={14} className="text-foreground" />
                <span>Code source</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

