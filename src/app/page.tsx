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
      <HeroCard brandColor="bg-brand-green"  showBadge={false} title="On construit des produits digitaux qui bossent pour toi." description="Pas de PowerPoint. Pas de wireframes qui dorment dans un Drive. Juste des outils opérationnels, des automatisations qui tournent en fond, et des systèmes d'acquisition qui rapportent." primaryCta="Réserver un appel de cadrage" secondaryCta="Découvrir nos services" primaryCtaLink="#rendez-vous" secondaryCtaLink="#services" />
      <TestimonialsSection />
      <OffersSection />
      <MethodSection />
      <PhilosophySection/> 
      <UseCaseSection />
      <ProjectCalculatorSection />
      <AppointmentSection />
      
    </>
  );
}
