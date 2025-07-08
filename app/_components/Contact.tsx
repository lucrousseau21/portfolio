import { Badge } from "@/components/ui/badge";
import { Section } from "./modules/Section";
import { ContactCard } from "./modules/ContactCard";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Card className="p-4 rounded-3xl w-full">
        <div className="ps-4 pb-4">
          <Badge variant={"outline"}>Contact me </Badge>
          <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            J&apos;adorerais travailler avec vous !
          </h2>
        </div>
        <div className="flex max-md:flex-col w-full gap-4">
          <ContactCard
            className="flex-1 rounded-2xl"
            name="Luc Rousseau"
            image="https://media.licdn.com/dms/image/v2/D4E03AQGhng3fGKg_lw/profile-displayphoto-shrink_200_200/B4EZPbT38GHkAY-/0/1734551240861?e=1757548800&v=beta&t=uf8Lk6XLTYvOR5Sc5NtcSa3V29Mmfj-jpIJSQ5yX6BA"
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
