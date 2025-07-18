import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
// import { url } from "inspector";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link href={props.url ?? ""} target="blank" className={cn("w-full", props.className)}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4 rounded-2xl">
        <div className="relative">
          <Image
            src={props.image}
            alt={props.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-contain"
          />
          <Image
            src={props.mediumImage}
            alt={props.name}
            width={16}
            height={16}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          {/* <div className="flex items-center gap-2"> */}
          <div>
            <p className="text-base font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
