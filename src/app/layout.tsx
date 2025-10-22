import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConvertLabs - Produits digitaux qui bossent pour vous",
  description: "Nous construisons des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn. Déjà 10+ entreprises tech qui scalent avec nous.",
  keywords: ["développement web", "MVP", "CRM", "automatisation", "prospection LinkedIn", "startup", "PME", "digital"],
  authors: [{ name: "ConvertLabs" }],
  creator: "ConvertLabs",
  publisher: "ConvertLabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://convertlabs.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ConvertLabs - Produits digitaux qui bossent pour vous",
    description: "Nous construisons des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn.",
    url: "https://convertlabs.fr",
    siteName: "ConvertLabs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConvertLabs - Produits digitaux qui bossent pour vous",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertLabs - Produits digitaux qui bossent pour vous",
    description: "Nous construisons des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
