import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clarityrev.com"),
  title:
    "ClarityRev: Generate qualified pipeline, move active deals, optimize workflows",
  description:
    "ClarityRev is a GTM engineering company. We redesign how revenue work gets done, connect the data and tools around it, and implement what is missing: pipeline generation, deal execution and revenue workflow systems.",
  openGraph: {
    title: "ClarityRev: GTM engineering and signal-based outbound",
    description:
      "We generate qualified pipeline, move active deals forward and automate recurring revenue work, delivered inside the CRM your team already uses.",
    url: "https://clarityrev.com",
    siteName: "ClarityRev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ClarityRev: GTM engineering and signal-based outbound",
    description:
      "Generate qualified pipeline, move active deals forward, optimize your workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
