import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { ContactCard } from "./ContactCard";
import { url } from "inspector";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me </Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'adorerais travailler avec vous !
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="flex-1"
          name="Luc Rousseau"
          image="https://avatars.githubusercontent.com/u/147161957?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
          description="Linkedin"
          url="https://www.linkedin.com/in/luc-rousseau/"
        />
        <ContactCard
          className="flex-1"
          name="luc.rousseaupro@gmail.com"
          image="https://avatars.githubusercontent.com/u/147161957?v=4"
          mediumImage="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
          description="Mail"
          url="mailto:luc.rousseaupro@gmail.com"
        />
      </div>
    </Section>
  );
};
