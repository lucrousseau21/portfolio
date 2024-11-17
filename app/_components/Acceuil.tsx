// import { ComponentPropsWithoutRef } from "react";
import { Section } from "./modules/Section";
import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { LogoIUTIcon } from "./icons/LogoIUTIcon";
import { Code } from "./modules/Code";


// const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
//   return (
//     <span
//       className={cn(
//         "bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm",
//         className
//       )}
//       {...props}
//     />
//   );
// };

export const Acceuil = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Luc Rousseau</h2>
        <h3 className="text-3xl font-caption">Étudiant Web Développeur</h3>
        {/* <p>
          J'aspire à être developpeur web. <br />
          Actuellement étudiant à l'<Code className="inline-flex items-center gap-1"><LogoIUTIcon size={16} className="inline"/>IUT de Lens</Code> en Métiers du Multimédia et Internet parcour Web et à la recherche d'une alternance. 
        </p> */}
        <p>
          Futur développeur web. <br />
          Actuellement étudiant en troisième année à l&apos;
          <Code className="inline-flex items-center gap-1">IUT de Lens</Code> en
          Métiers du Multimédia et Internet parcours Web et à la recherche d&apos;une
          alternance.
        </p>
      </div>
      <div className="flex-1">
        {/* <img
          src="http://luc-rousseau.com/media/portrait1.png"
          alt="image luc rousseau"
          className="w-full h-auto"
        /> */}
        <Image
          src="images/portrait2.jpg"
          alt="image luc rousseau"
          width={500}
          height={300}
          className="w-full h-auto max-w-xs rounded-3xl"
        />
      </div>
    </Section>
  );
};