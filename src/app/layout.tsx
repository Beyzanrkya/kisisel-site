import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { profil } from "@/data/profil";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: `${profil.ad} ${profil.soyad} | ${profil.unvan}`,
  description: profil.slogan,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${space.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
