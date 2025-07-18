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
            <p className="ps-4 pb-2 text-xl font-semibold first:mt-0">
              Formations
            </p>
            <div className="flex flex-col gap-4">
              {FORMATION.map((formation, index) => (
                <Formation key={index} {...formation} />
              ))}
            </div>
          </Card>
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="ps-4 pb-2 text-xl font-semibold first:mt-0">
              Expériences
            </p>
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

const FORMATION: FormationProps[] = [
  {
    image: "images/logo_iut_lens.png",
    title: "IUT de Lens",
    role: "BUT MMI Parcours Web - Métiers du Multimedia et Internet",
    date: "2022 - 2025",
    url: "https://www.iut-lens.univ-artois.fr/formations/but-mmi",
  },
  {
    image: "images/logo_universite_tours.png",
    title: "Université de Tours",
    role: "Licence Informatique",
    date: "2020 - 2022",
    url: "https://www.univ-tours.fr/formations/licence-sciences-technologies-sante-mention-informatique-parcours-sciences-informatiques",
  },
];

const WORK: WorkProps[] = [
  {
    image: "images/logo_efficienceit.jpg",
    title: "Efficience IT",
    role: "Développeur front-end avec Next.js et Material UI, manipulation d'API construites avec Symfony",
    date: "2025",
    url: "https://www.itefficience.com",
    stage: true,
  },
  {
    image: "images/logo_gueules-noires.jpg",
    title: "Distillerie Gueules Noires",
    role: "Communication et réalisation d'un site WordPress",
    date: "2024",
    url: "https://www.facebook.com/distillerie.gueules.noires",
    stage: true,
  },
  {
    image: "images/logo_cefim.png",
    title: "CEFIM Tours",
    role: "Semaine découverte des différents métiers de l'informatique",
    date: "2018",
    url: "https://www.cefim.eu",
    stage: true,
  },
];
