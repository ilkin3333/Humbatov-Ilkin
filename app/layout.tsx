import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/pageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Ilkin Humbatov"};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
