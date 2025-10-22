import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Script from "next/script";

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-surface-muted animate-pulse" />,
});

const Squares = dynamic(() => import("@/components/Squares"), {
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />,
});

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
        <div className="min-h-screen bg-background relative font-be-vietnam-pro tracking-tight">
          <Navbar />
          <div className="w-full">
            <div className="flex">
              <div className="hidden lg:block w-[10%] bg-white items-center justify-center border-r border-gray-200">
                <Squares
                  speed={0.1}
                  squareSize={20}
                  direction='down'
                  borderColor='#f3f4f6'
                />
              </div>

              <div className="w-full lg:w-[80%] flex flex-col">
                {children}
              </div>

              <div className="hidden lg:block w-[10%] items-center justify-center border-l border-gray-200">
                <Squares
                  speed={0.1}
                  squareSize={20}
                  direction='down'
                  borderColor='#f3f4f6'
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="23859617b908"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
