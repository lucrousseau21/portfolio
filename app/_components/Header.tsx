// import { Button, buttonVariants } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon"
import { Section } from "./modules/Section"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"
// import { LucRousseauLogo } from "./icons/LucRousseauLogo"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 backdrop-blur-xl bg-background/80 z-50">
            <Section className="flex items-center">
                {/* <h1 className="text-lg font-bold text-primary"> */}
                <h1 className="font-fredoka font-light tracking-tight text-xl">
                    <Link href="/"><b className="font-medium">luc</b>rousseau</Link>
                </h1>
                <nav className="ml-6 flex items-center gap-1 sm:gap-2">
                    <Link
                        href="/works"
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors"
                    >
                        Projets
                    </Link>
                </nav>
                {/* <LucRousseauLogo size={250} /> */}
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