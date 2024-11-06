import { Button, buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./Section"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { LucRousseauLogo } from "./icons/LucRousseauLogo"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 backdrop-blur-xl bg-background/60 ">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    luc-rousseau.com
                </h1>
                <LucRousseauLogo size={250} />
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link
                        href="https://github.com/lucrousseau21" 
                        className={cn(buttonVariants({variant: "outline"}), "size-6")} 
                        target="_blank">
                            <GithubIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/luc-rousseau/" 
                        className={cn(buttonVariants({variant: "outline"}), "size-6")} 
                        target="_blank">
                            <LinkedinIcon size={16} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}