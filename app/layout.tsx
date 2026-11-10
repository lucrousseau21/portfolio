import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Anek_Telugu } from "next/font/google";
import { Fredoka } from "next/font/google";
// import SmoothScroll from "@/components/SmoothScroll";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Luc Rousseau - Portfolio",
  description: "Portfolio of Luc Rousseau, a web developer based in France.",
  icons: {
    icon: "/favicon.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu.variable,
          GeistMono.variable,
          fredoka.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {/* <SmoothScroll>{children}</SmoothScroll> */}
        {children}
      </body>
    </html>
  );
}
