import Image from "next/image";
import { Header } from './_components/Header';
import { Acceuil } from "./_components/Acceuil";
import { Spacing } from "./_components/modules/Spacing";
import { Status } from "./_components/StatusSection";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import Footer from './_components/Footer';
import ProjetsPrincipaux from "./_components/ProjetsPrincipaux";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Acceuil />

      <Spacing size="md" />

      <Skills />

      <Spacing size="md" />

      <ProjetsPrincipaux />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />

      <Contact />

      <Spacing size="md" />

      <Footer />
    </main>
  );
}
