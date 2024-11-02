import Image from "next/image";
import { Header } from './_components/Header';
import { Acceuil } from "./_components/Acceuil";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/StatusSection";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size="md" />

      <Acceuil />

      <Spacing size="md" />

      <Status />
    </main>
  );
}
