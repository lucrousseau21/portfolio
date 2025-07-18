import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  formation?: boolean;
  alternance?: boolean;
  stage?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-2xl"
      target="_blank"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        {/* <div className="flex items-center gap-2"> */}
        <div>
          {props.formation && <Badge variant="outline">Formation</Badge>}
          {props.alternance && <Badge variant="outline">Alternance</Badge>}
          {props.stage && <Badge variant="outline">Stage</Badge>}
          <p className="text-base font-semibold">{props.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground min-w-[80px] max-w-[100px]">{props.date}</p>
    </Link>
  );
};
