import { Card } from "@/components/ui/card";
import { Section } from "./modules/Section";
import { Badge } from "@/components/ui/badge";
import { Code } from "./modules/Code";
import Image from "next/image";

export default function ProjetsPrincipaux() {
  return (
    <Section className="flex w-full items-start gap-4">
      <Card className="p-4 rounded-3xl w-full h-full flex flex-col">
        <div className="ps-4 pb-4">
          <Badge variant={"outline"}>Main Projects</Badge>
          <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Mes principaux projets
          </h2>
        </div>
        <div className="flex flex-col h-full w-full gap-4">
          <div className="flex flex-1 justify-center items-center max-md:flex-col gap-4 h-80">
            <Card className="w-3/5 h-full p-2">
              <Image
                src="/images/IllustrationStageGN.png"
                alt="Illustration de mon stage chez Gueules Noires"
                className="object-fill rounded-2xl"
                width={500}
                height={300}
              />
            </Card>
            <Card className="p-3 w-2/5  h-full bg-accent/10 hover:bg-accent/30 transition-colors gap-4 flex-1 rounded-2xl">
              <h1 className="text-xl font-semibold tracking-tight pb-2">
                Stage chez Gueules Noires
              </h1>
              <p className="text-sm text-muted-foreground">
                Lors de ce stage, j&lsquo;ai pu réaliser la communication et le
                site <Code>Wordpress</Code> de la distillerie.
              </p>
              <p className="text-sm text-muted-foreground">
                Un stage très inspirant qui m&lsquo;a permis de développer pour
                un projet réel avec des échanges constants avec le
                commanditaire.
              </p>
              <p className="text-sm text-muted-foreground">
                J&lsquo;ai pu expérimenter plusieurs casquettes du développement
                Wordpress comme la gestion d&lsquo;une boutique en ligne avec{" "}
                <Code>WooCommerce</Code>, la gestion d&lsquo;un blog mais aussi
                la mise en page avec un module de bloc, ici <Code>Divi</Code>.
              </p>
            </Card>
          </div>

          <div className="flex flex-1 justify-center items-center max-md:flex-col gap-4 h-80">
            <Card className="p-3 w-2/5  h-full bg-accent/10 hover:bg-accent/30 transition-colors gap-4 flex-1 rounded-2xl">
              <h1 className="text-xl font-semibold tracking-tight pb-2">
                Initiation au SCSS et à l’animation dans les site web
              </h1>
              <p className="text-sm text-muted-foreground">
                Ce projet de groupe institutionnel a permis d’apprendre comment
                fonctionnait l’animation des sites internet à l’aide d’outils
                comme <Code>GSAP</Code> ou <Code>ScrollTrigger</Code> mais nous
                a aussi initié au <Code>SCSS</Code>
              </p>
              <p className="text-sm text-muted-foreground">
                Le but était de proposer un site interactif pour une exposition
                fictive.
              </p>
            </Card>
            <Card className="w-3/5 h-full p-2">
              <Image
                src="/images/IllustrationProjetIntegration.png"
                alt="Illustration de mon stage chez Gueules Noires"
                className="object-fill rounded-2xl"
                width={500}
                height={300}
              />
            </Card>
          </div>
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
