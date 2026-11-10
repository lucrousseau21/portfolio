"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { Section } from "@/app/_components/modules/Section";
import { Spacing } from "@/app/_components/modules/Spacing";
import { ProjectCard } from "@/app/_components/modules/ProjectCard";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ProjectCategory,
  ProjectSubcategory,
  PROJECTS,
  CATEGORIES,
  SUBCATEGORIES,
} from "@/lib/projects";
import {
  RotateCcw,
  SearchX,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

      {/* Barre de Filtres style Spotify adaptée à la DA du site */}
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

      {/* Liste des projets déléguée au composant modulaire ProjectCard */}
      <Section className="w-full flex flex-col gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
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
