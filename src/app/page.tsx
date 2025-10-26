import dynamic from "next/dynamic";
import HeroCard from "@/components/ui/hero-card";
import { Metadata } from "next";

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const OffersSection = dynamic(() => import("@/components/offers-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const MethodSection = dynamic(() => import("@/components/method-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const PhilosophySection = dynamic(() => import("@/components/philosophy-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});
const AppointmentSection = dynamic(() => import("@/components/appointment-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const ProjectCalculatorSection = dynamic(() => import("@/components/project-calculator-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const UseCaseSection = dynamic(() => import("@/components/use-case-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const IdentificationSection = dynamic(() => import("@/components/identification-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

export const metadata: Metadata = {
  title: "ConvertLabs - On construit des produits digitaux qui bossent pour vous",
  description: "ConvertLabs construit des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn. Déjà 10+ entreprises tech qui scalent avec nous.",
  keywords: [
    "développement web", "MVP", "CRM", "automatisation", "prospection LinkedIn", 
    "startup", "PME", "digital", "conversion", "lead generation", "marketing automation",
    "développement sur mesure", "solutions digitales", "transformation digitale"
  ],
  openGraph: {
    title: "ConvertLabs - On construit des produits digitaux qui bossent pour vous",
    description: "ConvertLabs construit des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn. Déjà 10+ entreprises tech qui scalent avec nous.",
    url: "https://convertlabs.fr",
    images: [
      {
        url: "/logo-convertlabs.png",
        width: 1200,
        height: 630,
        alt: "ConvertLabs - On construit des produits digitaux qui bossent pour vous",
      },
    ],
  },
  twitter: {
    title: "ConvertLabs - Produits digitaux qui bossent pour vous",
    description: "ConvertLabs construit des produits digitaux qui bossent pour vous. Design & MVP, CRM & Automatisation, Prospection LinkedIn.",
    images: ["/logo-convertlabs.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroCard brandColor="bg-brand-green" showBadge={false} showStats={true} title="On construit des produits digitaux qui bossent pour toi." description="Tu veux lancer vite sans sacrifier la qualité ?
Design UX/UI, développement full-stack, automatisation CRM et prospection LinkedIn multicomptes.
Nos process sont calibrés pour exécuter vite et bien : prototype en 5 jours, MVP en 6 semaines, croissance activée en 30 jours." primaryCta="Parle-nous de ton projet" secondaryCta="Estime ton projet" primaryCtaLink="#rendez-vous" secondaryCtaLink="#calculator" />
      <MethodSection />
      <PhilosophySection/> 
      <IdentificationSection />
      <UseCaseSection />
      <OffersSection />
      <TestimonialsSection />
      <ProjectCalculatorSection />
      <AppointmentSection />
      
    </>
  );
}
