import { Card } from "@/components/ui/card";
import { Section } from "./Section";
// import { LucideIcon } from "lucide-react";
import { Code, Home, Link, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <Card className="flex-[2] w-full p-4 flex flex-col gap-2">
        <p className="text-lg text-muted-foreground">Side, fun projects.</p>
        <div className="flex flex-col gap-4">
          {SIDE_PROJECTS.map((project, index) => (
            <SideProject
              key={index}
              Logo={project.Logo}
              title={project.title}
              description={project.description}
              url="/"
            />
          ))}
        </div>
      </Card>
      <div className="flex-1 w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">work</Card>
        <Card className="p-4 flex-1">contact me</Card>
      </div>
      {/* probleme d'aligmenent -> voir vidéo partie avant 48:37*/}
      {/* <div className="flex-[3]">
        <Card className="w-full p-4 flex flex-col gap-2">Side project</Card>
      </div>
      <div className="flex-[2]flex flex-co gap-4">
        <Card className="p-4 flex-1">work</Card>
        <Card className="p-4 flex-1">contact me</Card>
      </div>  */}
    </Section>
  );
};

const SIDE_PROJECTS = [
  {
    Logo: Code,
    title: "Portfolio",
    description: "The website you're currently on.",
  },
  {
    Logo: StickyNote,
    title: "powernode",
    description: "The website you're currently on.",
  },
  {
    Logo: Rss,
    title: "Powerpost",
    description: "The website you're currently on.",
  },
  {
    Logo: MessageCircle,
    title: "ProjetIUT",
    description: "The website you're currently on.",
  },
]

type SideProjectsProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectsProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors">
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};


// arret à 54:22 bug d'affichage des cases
// time code copilot sur lui 53:48