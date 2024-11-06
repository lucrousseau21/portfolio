import { Badge } from "@/components/ui/badge";
import { Section } from "./modules/Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./modules/Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Card className="p-4 rounded-3xl">
        <div className="ps-4 pb-4">
          <Badge variant={"outline"}>Skills</Badge>
          <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            J'adore travailler sur...
          </h2>
        </div>

        <div className="flex max-md:flex-col gap-4">
          <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex gap-4 flex-1 rounded-2xl">
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

          <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex gap-4 flex-1 rounded-2xl">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-6 items-center">
                <LaravelLogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">
                  Laravel
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                J'ai réalisé plusieurs projet avec ce framework <Code>PHP</Code>{" "}
                lors de ma formation, dont la manipulation d'<Code>API</Code>
              </p>
            </div>
          </Card>

          <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex gap-4 flex-1 rounded-2xl">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex gap-6 items-center">
                <TailwindLogo size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">
                  Tailwind
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Je peux <i>rapidement</i> créer un <i>magnifique</i> site !
                J'affectionne également <Code>shadcn/ui</Code> pour les
                composans.
              </p>
            </div>
          </Card>
        </div>
      </Card>
    </Section>
  );
};
