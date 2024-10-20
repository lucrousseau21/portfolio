import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogoIUTIcon } from "./icons/LogoIUTIcon";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm",className)}{...props} />
  );
}

export const Acceuil = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl text-primary">Luc Rousseau</h2>
        <h3 className="text-3xl font-caption">Student Web Developer</h3>
        <p>
          J'aspire à être developpeur web. <br />
          Actuellement étudiant à l'<Code className="inline-flex items-center gap-1"><LogoIUTIcon size={16} className="inline"/>IUT de Lens</Code> en Métiers du Multimédia et Internet parcour Web et à la recherche d'une alternance. 
        </p>
      </div>
      <div className="flex-1">
        {/* <img
          src="http://luc-rousseau.com/media/portrait1.png"
          alt="image luc rousseau"
          className="w-full h-auto"
        /> */}
        <Image
          src="/images/IMG_2693-min.jpg" 
          alt="image luc rousseau"
          width={500} 
          height={300} 
          className="w-full h-auto max-w-xs"
        />
      </div>
    </Section>
  );
};
