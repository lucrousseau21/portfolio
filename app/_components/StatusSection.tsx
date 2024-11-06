import { Card } from "@/components/ui/card";
import { Section } from "./modules/Section";
import {
  ArrowUpRight,
  Code,
  Home,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SideProject, SideProjectsProps } from "./modules/SideProject";
import { ContactCard } from "./modules/ContactCard";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <Card className="flex-[2] w-full flex flex-col gap-2">
        <div className="p-4">
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
        </div>
      </Card>
      <div className="flex-1 w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORK.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        {/* <Card className="p-4 flex-1 rounded-3xl">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@luc-rousseau"
            image="https://avatars.githubusercontent.com/u/147161957?v=4"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
            description="Linkedin"
          />
        </Card> */}
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

const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Code,
    title: "Portfolio",
    description: "The website you're currently on.",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "powernode",
    description: "The website you're currently on.",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Powerpost",
    description: "The website you're currently on.",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "ProjetIUT",
    description: "The website you're currently on.",
    url: "/",
  },
];

const WORK: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQF8kdymOV9tEw/company-logo_100_100/company-logo_100_100/0/1654587431357/iut_de_lens_logo?e=1738800000&v=beta&t=we17e_23bkAOUWNLeFNmsEWtbUy7GzO9hakQ9lTteNA",
    title: "IUT de Lens",
    role: "BUT MMI",
    date: "2022 - 2025",
    url: "https://www.univ-tours.fr/formations/licence-sciences-technologies-sante-mention-informatique-parcours-sciences-informatiques",
    formation: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEvuszUtf2HXw/company-logo_100_100/company-logo_100_100/0/1631362602210/universit_franois_rabelais_de_tours_logo?e=1738800000&v=beta&t=MGY1ORIt5hg_r9bQMtPpKQ0fBoZi2gzd8cj3y_ynORM",
    title: "Université de Tours",
    role: "Licence Informatique",
    date: "2020 - 2022",
    url: "https://www.iut-lens.univ-artois.fr/formations/but-mmi/",
    formation: true,
  },
];
