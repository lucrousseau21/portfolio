import { Card } from "@/components/ui/card";
import { Section } from "./modules/Section";
import { SideProject, SideProjectsProps } from "./modules/SideProject";
import {
  ArrowUpRight,
  Home,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
} from "lucide-react";
import { ReactLogo } from "./icons/ReactLogo";
import { Badge } from "@/components/ui/badge";
import { Code } from "./modules/Code";

export default function ProjetsPrincipaux() {
  return (
    <Section className="flex w-full items-start gap-4 h-448">
      <Card className="p-4 rounded-3xl w-full h-full overflow-hidden flex flex-col">
        {/* <div className="p-4">
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
        </div> */}
        <div className="ps-4 pb-4">
          <Badge variant={"outline"}>Main Projects</Badge>
          <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Mes principaux projets
          </h2>
        </div>
        <div className="flex h-full w-full overflow-scroll gap-4">
          <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex gap-4 flex-1 rounded-2xl w-full flex-grow h-full overflow-scroll">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-6 items-center">
            <ReactLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
              </div>
              <p className="text-sm text-muted-foreground">
            Mon framework préféré est <Code>React</Code>. J'utilise aussi
            <Code>Next.js</Code> en backend comme en frontend.
              </p>
            </div>
          </Card>
          <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex gap-4 flex-1 rounded-2xl w-0 flex-grow-0 h-full overflow-scroll">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-6 items-center">
            <ReactLogo size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
              </div>
              <p className="text-sm text-muted-foreground">
            Mon framework préféré est <Code>React</Code>. J'utilise aussi
            <Code>Next.js</Code> en backend comme en frontend.
              </p>
            </div>
          </Card>
        </div>
      </Card>
    </Section>
  );
}

// const SIDE_PROJECTS: SideProjectsProps[] = [
//   {
//     Logo: Code,
//     title: "Portfolio",
//     description: "The website you're currently on.",
//     url: "/",
//   },
//   {
//     Logo: StickyNote,
//     title: "powernode",
//     description: "The website you're currently on.",
//     url: "/",
//   },
//   {
//     Logo: Rss,
//     title: "Powerpost",
//     description: "The website you're currently on.",
//     url: "/",
//   },
//   {
//     Logo: MessageCircle,
//     title: "ProjetIUT",
//     description: "The website you're currently on.",
//     url: "/",
//   },
// ];
