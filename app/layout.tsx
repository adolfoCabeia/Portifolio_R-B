import { assets } from "@/public/assets";
import type { Metadata } from "next";
import { Space_Grotesk, Cormorant } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Justify Juéurio – R&B Angolano",
  description: "Descubra as músicas, vídeos e novidades de Justify Juéurio, a nova voz do R&B angolano",
  keywords: ["Justify Juéurio", "R&B Angolano", "Música", "Cantor Angolano","Justify"],
  authors: [{ name: "Justify Juéurio" }],
  openGraph: {
    title: "Justify Juéurio – R&B Angolano",
    description: "Descubra as músicas, vídeos e novidades de Justify Juéurio.",
    url: "https://www.seusite.com/",
    siteName: "Justify Juéurio",
    images: [
      {
        url: `${assets.Logo}`,
        width: 800,
        height: 800,
        alt: "Logo Justify Juéurio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justify Juéurio – R&B Angolano",
    description: "Descubra as músicas, vídeos e novidades de Justify Juéurio.",
    images: ["https://www.seusite.com/logo.png"],
  },
  metadataBase: new URL("https://www.seusite.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
