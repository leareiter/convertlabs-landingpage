import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Script from "next/script";
import { GridBackground } from "@/components/ui/grid-background";

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-surface-muted animate-pulse" />,
});

export const metadata: Metadata = {
  title: "ConvertLabs - On construit des produits digitaux qui bossent pour toi",
  description: "ConvertLabs construit des produits digitaux qui bossent pour toi. Design & MVP, CRM & Automatisation, Prospection LinkedIn. Déjà 10+ entreprises tech qui scalent avec nous.",
  keywords: [
    "développement web", "MVP", "CRM", "automatisation", "prospection LinkedIn",
    "startup", "PME", "digital", "conversion", "lead generation", "marketing automation",
    "développement sur mesure", "solutions digitales", "transformation digitale"
  ],
  authors: [{ name: "ConvertLabs", url: "https://convertlabs.fr" }],
  creator: "ConvertLabs",
  publisher: "ConvertLabs",
  category: "Technology",
  classification: "Business Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://convertlabs.fr"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    title: "ConvertLabs - Produits digitaux qui bossent pour toi",
    description: "ConvertLabs construit des produits digitaux qui bossent pour toi. Design & MVP, CRM & Automatisation, Prospection LinkedIn. Déjà 10+ entreprises tech qui scalent avec nous.",
    url: "https://convertlabs.fr",
    siteName: "ConvertLabs",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "ConvertLabs - On construit des produits digitaux qui bossent pour toi",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
    countryName: "France",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertLabs - Produits digitaux qui bossent pour toi",
    description: "ConvertLabs construit des produits digitaux qui bossent pour toi. Design & MVP, CRM & Automatisation, Prospection LinkedIn.",
    images: ["/og_image.png"],
    creator: "@convertlabs",
    site: "@convertlabs",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://app.rybbit.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-convertlabs.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ConvertLabs" />
        <meta name="application-name" content="ConvertLabs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={` font-sans antialiased`}
      >
        <div className="min-h-screen bg-background relative font-be-vietnam-pro">
          <Navbar />
          <div className="w-full">
            <div className="flex">
              <div className="hidden lg:block w-[10%] bg-white items-center justify-center border-r border-gray-200">
                <GridBackground />
              </div>

              <div className="w-full lg:w-[80%] flex flex-col">
                {children}
              </div>

              <div className="hidden lg:block w-[10%] items-center justify-center border-l border-gray-200">
                <GridBackground />
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="23859617b908"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
