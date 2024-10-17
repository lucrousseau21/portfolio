import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
// import { Poppins } from "next/font/google";
import { Anek_Telugu } from "next/font/google";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"],
  variable: "--font-caption",
 });

// const poppins = Poppins({ subsets = ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luc Rousseau - Web Developer",
  description: "Portfolio of Luc Rousseau, a web developer based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
