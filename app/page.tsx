import Image from "next/image";
import { Header } from './_components/Header';
import { Acceuil } from "./_components/Acceuil";

export default function Home() {
  return (
    <main>
      <Header />
      <Acceuil />
    </main>
  );
}
