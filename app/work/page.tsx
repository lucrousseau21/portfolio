import type { Metadata } from "next";
import { WorksClient } from "../works/WorksClient";

export const metadata: Metadata = {
  title: "Mes projets | Luc Rousseau",
  description:
    "Découvrez les projets de Luc Rousseau : projets académiques, professionnels et personnels filtrables par catégories (Ecole, Pro, Perso) et sous-catégories (Front, Back, Fullstack).",
};

export default function WorkPage() {
  return <WorksClient />;
}
