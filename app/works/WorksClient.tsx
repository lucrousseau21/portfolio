"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { Section } from "@/app/_components/modules/Section";
import { Spacing } from "@/app/_components/modules/Spacing";
import { Code } from "@/app/_components/modules/Code";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";
import { cn } from "@/lib/utils";
import {
  ProjectCategory,
  ProjectSubcategory,
  PROJECTS,
  CATEGORIES,
  SUBCATEGORIES,
} from "@/lib/projects";
import {
  ArrowUpRight,
  RotateCcw,
  Sparkles,
  SearchX,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Liste des mots-clés techniques à mettre en valeur avec <Code>
const TECH_KEYWORDS = [
  "WordPress",
  "Wordpress",
  "WooCommerce",
  "Divi",
  "GSAP",
  "ScrollTrigger",
  "SCSS",
  "HTML5",
  "CSS",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "Stripe",
  "Laravel",
  "Symfony",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Swagger",
  "MySQL",
  "Doctrine ORM",
  "REST API",
  "PHP",
  "JWT",
  "RBAC",
];

// Helper pour formater automatiquement le texte avec les tags <Code>
function FormattedParagraph({ text }: { text: string }) {
  const escaped = TECH_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <p className="text-sm text-muted-foreground leading-relaxed">
      {parts.map((part, index) => {
        if (TECH_KEYWORDS.includes(part)) {
          return <Code key={index}>{part}</Code>;
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

export function WorksClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<ProjectSubcategory | null>(null);
  // Enregistre l'ordre de sélection pour placer le premier paramètre à gauche et le second à droite
  const [firstSelected, setFirstSelected] = useState<"category" | "subcategory" | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isAllSelected = selectedCategory === null && selectedSubcategory === null;
  const isBothSelected = selectedCategory !== null && selectedSubcategory !== null;

  // Filtrage réactif des projets
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchCategory = selectedCategory === null || project.category === selectedCategory;
      const matchSubcategory =
        selectedSubcategory === null || project.subcategory === selectedSubcategory;
      return matchCategory && matchSubcategory;
    });
  }, [selectedCategory, selectedSubcategory]);

  // Gestion du défilement du slider
  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [selectedCategory, selectedSubcategory]);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -160 : 160,
        behavior: "smooth",
      });
    }
  };

  // Sélectionner une catégorie
  const handleSelectCategory = (cat: ProjectCategory) => {
    if (selectedSubcategory === null) {
      setFirstSelected("category");
    }
    setSelectedCategory(cat);
  };

  // Sélectionner une sous-catégorie
  const handleSelectSubcategory = (sub: ProjectSubcategory) => {
    if (selectedCategory === null) {
      setFirstSelected("subcategory");
    }
    setSelectedSubcategory(sub);
  };

  // Réinitialiser vers "Tous"
  const handleClearAll = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setFirstSelected(null);
  };

  const handleDeselectCategory = () => {
    setSelectedCategory(null);
    if (selectedSubcategory !== null) {
      setFirstSelected("subcategory");
    } else {
      setFirstSelected(null);
    }
  };

  const handleDeselectSubcategory = () => {
    setSelectedSubcategory(null);
    if (selectedCategory !== null) {
      setFirstSelected("category");
    } else {
      setFirstSelected(null);
    }
  };

  const firstParam = firstSelected === "category" ? selectedCategory : selectedSubcategory;
  const secondParam = firstSelected === "category" ? selectedSubcategory : selectedCategory;
  const handleDeselectFirst =
    firstSelected === "category" ? handleDeselectCategory : handleDeselectSubcategory;
  const handleDeselectSecond =
    firstSelected === "category" ? handleDeselectSubcategory : handleDeselectCategory;

  const getCategoryBadgeClass = (category: ProjectCategory) => {
    switch (category) {
      case "Ecole":
        return "border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/10";
      case "Pro":
        return "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10";
      case "Perso":
        return "border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/10";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Spacing size="sm" />

      {/* Hero / Grand Titre */}
      <Section className="w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Mes projets
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base font-light">
            Découvrez une sélection de mes réalisations académiques, professionnelles et
            personnelles. Filtrez par catégorie et spécialité pour explorer mon travail.
          </p>
        </div>
      </Section>

      <Spacing size="sm" />

      {/* Barre de Filtres style Spotify adaptée à la DA du site (sans vert) */}
      <Section className="w-full">
        <div className="relative w-full flex items-center group/slider">
          {/* Bouton défilement gauche (desktop) */}
          {canScrollLeft && (
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Défiler vers la gauche"
              className="absolute -left-3 z-10 size-7 rounded-full bg-[#26282b]/95 text-white shadow-md flex items-center justify-center hover:bg-[#34373d] transition-all max-md:hidden border border-border/40"
            >
              <ChevronLeft className="size-4" />
            </button>
          )}

          {/* Slider horizontal de pilules */}
          <div
            ref={sliderRef}
            onScroll={updateScrollButtons}
            className="w-full flex items-center gap-2.5 overflow-x-auto py-2 px-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {/* Bouton X rond pour tout réinitialiser */}
              {!isAllSelected && (
                <motion.button
                  key="reset-x"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  onClick={handleClearAll}
                  aria-label="Effacer les filtres"
                  className="size-8 sm:size-9 rounded-full bg-[#26282b] hover:bg-[#34373d] text-white flex items-center justify-center shrink-0 transition-colors border border-border/50 cursor-pointer"
                >
                  <X className="size-4" strokeWidth={2.5} />
                </motion.button>
              )}

              {/* État 1 : "Tous" actif par défaut (clair / blanc avec texte noir) */}
              {isAllSelected && (
                <motion.button
                  key="pill-tous"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="h-8 sm:h-9 px-4 rounded-full text-xs sm:text-sm font-semibold bg-white text-black shadow-sm shrink-0 flex items-center justify-center cursor-default"
                >
                  Tous
                </motion.button>
              )}

              {/* État 4 : Les deux sont sélectionnés -> Capsule avec bulle de gauche arrondie aussi à sa droite */}
              {isBothSelected && (
                <motion.div
                  key="capsule-both-selected"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center rounded-full bg-[#8e95a0] h-8 sm:h-9 shadow-sm shrink-0"
                >
                  {/* Premier paramètre (bulle blanche arrondie à gauche ET à droite) */}
                  <button
                    onClick={handleDeselectFirst}
                    title={`Désélectionner ${firstParam}`}
                    className="h-full px-4 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm flex items-center transition-colors cursor-pointer shadow-xs"
                  >
                    {firstParam}
                  </button>

                  {/* Deuxième paramètre (sur fond plus foncé, arrondi à droite) */}
                  <button
                    onClick={handleDeselectSecond}
                    title={`Désélectionner ${secondParam}`}
                    className="h-full pl-3 pr-4 rounded-r-full text-black font-semibold text-xs sm:text-sm flex items-center hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    {secondParam}
                  </button>
                </motion.div>
              )}

              {/* État 2 : Catégorie sélectionnée seule (claire / blanche avec texte noir) */}
              {selectedCategory !== null && selectedSubcategory === null && (
                <motion.button
                  key={`selected-cat-${selectedCategory}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={handleDeselectCategory}
                  className="h-8 sm:h-9 px-4 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-neutral-100 text-black shadow-sm shrink-0 flex items-center justify-center transition-colors cursor-pointer"
                >
                  {selectedCategory}
                </motion.button>
              )}

              {/* État 3 : Sous-catégorie sélectionnée seule (claire / blanche avec texte noir) */}
              {selectedSubcategory !== null && selectedCategory === null && (
                <motion.button
                  key={`selected-sub-${selectedSubcategory}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={handleDeselectSubcategory}
                  className="h-8 sm:h-9 px-4 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-neutral-100 text-black shadow-sm shrink-0 flex items-center justify-center transition-colors cursor-pointer"
                >
                  {selectedSubcategory}
                </motion.button>
              )}

              {/* Catégories disponibles / compatibles (pilules sombres) */}
              {(isAllSelected || (selectedSubcategory !== null && selectedCategory === null)) &&
                CATEGORIES.map((cat) => (
                  <motion.button
                    key={`cat-${cat}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => handleSelectCategory(cat)}
                    className="h-8 sm:h-9 px-4 rounded-full text-xs sm:text-sm font-medium bg-[#26282b] hover:bg-[#34373d] text-white/90 border border-border/50 transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    {cat}
                  </motion.button>
                ))}

              {/* Sous-catégories disponibles / compatibles (pilules sombres) */}
              {(isAllSelected || (selectedCategory !== null && selectedSubcategory === null)) &&
                SUBCATEGORIES.map((sub) => (
                  <motion.button
                    key={`sub-${sub}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => handleSelectSubcategory(sub)}
                    className="h-8 sm:h-9 px-4 rounded-full text-xs sm:text-sm font-medium bg-[#26282b] hover:bg-[#34373d] text-white/90 border border-border/50 transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    {sub}
                  </motion.button>
                ))}
            </AnimatePresence>
          </div>

          {/* Bouton défilement droite (desktop) */}
          {canScrollRight && (
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Défiler vers la droite"
              className="absolute -right-3 z-10 size-7 rounded-full bg-[#26282b]/95 text-white shadow-md flex items-center justify-center hover:bg-[#34373d] transition-all max-md:hidden border border-border/40"
            >
              <ChevronRight className="size-4" />
            </button>
          )}
        </div>
      </Section>

      <Spacing size="sm" />

      {/* Liste des projets */}
      <Section className="w-full flex flex-col gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Card
                key={project.id}
                className="p-4 sm:p-6 rounded-3xl bg-card border border-border shadow-sm hover:border-primary/25 transition-all overflow-hidden"
              >
                <div
                  className={cn(
                    "flex flex-col lg:flex-row gap-6 items-stretch",
                    isReversed && "lg:flex-row-reverse"
                  )}
                >
                  {/* Visuel / Image du projet */}
                  <div className="w-full lg:w-5/12 h-64 sm:h-72 lg:h-72 min-h-[240px] rounded-2xl overflow-hidden relative border border-border/60 bg-accent/10 group p-2 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />

                    {project.isTemplate && (
                      <Badge
                        variant="secondary"
                        className="absolute top-4 left-4 bg-background/85 backdrop-blur-md border border-border/70 text-xs shadow-sm flex items-center gap-1"
                      >
                        <Sparkles className="size-3 text-amber-500" />
                        Template
                      </Badge>
                    )}
                  </div>

                  {/* Contenu textuel et détails */}
                  <Card className="p-4 sm:p-5 w-full lg:w-7/12 bg-accent/10 hover:bg-accent/20 transition-colors rounded-2xl border border-border/50 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      {/* Ligne des badges (Catégorie, Sous-catégorie, Date) */}
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className={cn("text-xs font-medium", getCategoryBadgeClass(project.category))}
                        >
                          {project.category}
                        </Badge>

                        <Badge variant="outline" className="text-xs font-mono">
                          {project.subcategory}
                        </Badge>

                        <span className="text-xs text-muted-foreground ml-auto font-mono">
                          {project.date}
                        </span>
                      </div>

                      {/* Titre */}
                      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight font-fredoka text-foreground">
                        {project.title}
                      </h2>

                      {/* Paragraphes de description */}
                      <div className="flex flex-col gap-2">
                        {project.description.map((paragraph, pIdx) => (
                          <FormattedParagraph key={pIdx} text={paragraph} />
                        ))}
                      </div>
                    </div>

                    {/* Technologies et Liens */}
                    <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-muted-foreground mr-1">Stack :</span>
                        {project.technologies.map((tech) => (
                          <Code key={tech} className="text-xs">
                            {tech}
                          </Code>
                        ))}
                      </div>

                      {/* Liens d'action */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {project.url && (
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "rounded-xl text-xs gap-1.5"
                            )}
                          >
                            <span>Visiter le site</span>
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        )}

                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "rounded-xl text-xs gap-1.5"
                            )}
                          >
                            <GithubIcon size={14} className="text-foreground" />
                            <span>Code source</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            );
          })
        ) : (
          /* État vide si aucun projet ne correspond aux filtres */
          <Card className="p-8 sm:p-12 text-center rounded-3xl bg-card border border-border flex flex-col items-center justify-center gap-4">
            <div className="size-14 rounded-full bg-accent/20 flex items-center justify-center text-muted-foreground">
              <SearchX className="size-7" />
            </div>

            <div className="flex flex-col gap-1 max-w-md">
              <h3 className="text-lg font-semibold font-fredoka text-foreground">
                Aucun projet trouvé
              </h3>
              <p className="text-sm text-muted-foreground">
                Aucun projet ne correspond actuellement à la combinaison{" "}
                {selectedCategory && (
                  <span className="font-semibold text-foreground">
                    Catégorie : {selectedCategory}
                  </span>
                )}
                {selectedCategory && selectedSubcategory && " et "}
                {selectedSubcategory && (
                  <span className="font-semibold text-foreground">
                    Spécialité : {selectedSubcategory}
                  </span>
                )}
                .
              </p>
            </div>

            <button
              onClick={handleClearAll}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-2xl text-xs gap-2 mt-2"
              )}
            >
              <RotateCcw className="size-3.5" />
              <span>Voir tous les projets</span>
            </button>
          </Card>
        )}
      </Section>

      <Spacing size="lg" />

      <Footer />
    </main>
  );
}
