import { Card } from "@/components/ui/card";
import { Section } from "./modules/Section";
// import {
//   ArrowUpRight,
//   Code,
//   Home,
//   LucideIcon,
//   MessageCircle,
//   Rss,
//   StickyNote,
// } from "lucide-react";
// import Link from "next/link";
import { Badge } from "@/components/ui/badge";
// import { SideProject, SideProjectsProps } from "./modules/SideProject";
// import { ContactCard } from "./modules/ContactCard";
import { Work, WorkProps } from "./modules/Work";
import { Formation, FormationProps } from "./modules/Formation";

export const Status = () => {
  return (
    <Section>
      <div className="ps-8 pb-4">
        <Badge variant={"outline"}>Career</Badge>
      </div>
      <div className="flex max-md:flex-col items-start gap-4">
        {/* <Card className="flex-[2] w-full flex flex-col gap-2">
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
      </Card> */}
        <div className="flex-1 w-full flex h-full gap-4">
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="ps-4 pb-2 text-xl font-semibold first:mt-0">Fomations</p>
            <div className="flex flex-col gap-4">
              {FORMATION.map((formation, index) => (
                <Formation key={index} {...formation} />
              ))}
            </div>
          </Card>
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="ps-4 pb-2 text-xl font-semibold first:mt-0">Expériences</p>
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
      </div>
    </Section>
  );
};

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

const FORMATION: FormationProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQF8kdymOV9tEw/company-logo_100_100/company-logo_100_100/0/1654587431357/iut_de_lens_logo?e=1738800000&v=beta&t=we17e_23bkAOUWNLeFNmsEWtbUy7GzO9hakQ9lTteNA",
    title: "IUT de Lens",
    role: "BUT MMI",
    date: "2022 - 2025",
    url: "https://www.univ-tours.fr/formations/licence-sciences-technologies-sante-mention-informatique-parcours-sciences-informatiques",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEvuszUtf2HXw/company-logo_100_100/company-logo_100_100/0/1631362602210/universit_franois_rabelais_de_tours_logo?e=1738800000&v=beta&t=MGY1ORIt5hg_r9bQMtPpKQ0fBoZi2gzd8cj3y_ynORM",
    title: "Université de Tours",
    role: "Licence Informatique",
    date: "2020 - 2022",
    url: "https://www.iut-lens.univ-artois.fr/formations/but-mmi/",
  },
];

const WORK: WorkProps[] = [
  {
    image:
      "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/315409352_501316775353541_3042814502722726920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4A-qKrCOPswQ7kNvgEiWuDU&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=A6C3vuyAuvwj0OYhlSvDPoG&oh=00_AYATddxRuxS-b3IM78lRGJN4f803fsVDJghk1kCXI7COQA&oe=6731CF9B",
    title: "Distillerie Gueules Noires",
    role: "Stagiaire - Communication et réalisation d'un site WordPress",
    date: "2023",
    url: "https://www.facebook.com/distillerie.gueules.noires",
    stage: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEJIrLeIu3hgg/company-logo_100_100/company-logo_100_100/0/1630551662594/cefim_logo?e=1738800000&v=beta&t=jGINOeYihgVKMKIZIipBeIW2s9QiH6qzMuSCCqqD0jI",
    title: "CEFIM Tours",
    role: "Stage de seconde - découvertes des différents métiers de l'informatique",
    date: "2018",
    url: "https://www.cefim.eu",
    stage: true,
  },
];