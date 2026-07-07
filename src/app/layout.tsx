import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextPageButton from "@/components/ui/NextPageButton";
import ChatWidget from "@/components/ui/ChatWidget";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import { SITE } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Precision Software Studio`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "digital agency",
    "web design",
    "software development",
    "SaaS development",
    "mobile app development",
    "UI/UX design",
    "engineering support",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Browser extensions (Grammarly, ColorZilla, etc.) inject attributes
        // onto <body> after SSR, which would otherwise trip a hydration warning.
        suppressHydrationWarning
        className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} grain bg-base text-foreground antialiased`}
      >
        <SmoothScroll>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <NextPageButton />
          <ChatWidget />
          <WhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
