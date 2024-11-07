import { Badge } from "@/components/ui/badge";
import { Section } from "./modules/Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./modules/Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { ContactCard } from "./modules/ContactCard";
import { url } from "inspector";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Card className="p-4 rounded-3xl w-full">
        <div className="ps-4 pb-4">
          <Badge variant={"outline"}>Contact me </Badge>
          <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            J'adorerais travailler avec vous !
          </h2>
        </div>
        <div className="flex max-md:flex-col w-full gap-4">
          <ContactCard
            className="flex-1 rounded-2xl"
            name="Luc Rousseau"
            image="https://media.licdn.com/dms/image/v2/D4E35AQFCFtBSZtILjg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730218902045?e=1731542400&v=beta&t=trQFIZqzkKUzMCNeR98WFwCReE04W_BYpVaS5AQDFRU"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
            description="Linkedin"
            url="https://www.linkedin.com/in/luc-rousseau/"
          />
          <ContactCard
            className="flex-1 rounded-2xl"
            name="luc.rousseaupro@gmail.com"
            image="https://avatars.githubusercontent.com/u/147161957?v=4"
            mediumImage="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
            description="Mail"
            url="mailto:luc.rousseaupro@gmail.com"
          />
        </div>
      </Card>
    </Section>
  );
};
