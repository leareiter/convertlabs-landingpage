import DesignMVPAppointment from "@/components/design-mvp/appointment";
import DesignMVPHero from "@/components/design-mvp/hero";
import DesignMVPProblem from "@/components/design-mvp/problem";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import DesignMVPCalculator from "@/components/design-mvp/calculator";

const DesignMVPApproach = dynamic(() => import("@/components/design-mvp/approach"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPOffers = dynamic(() => import("@/components/design-mvp/offers"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPUseCases = dynamic(() => import("@/components/design-mvp/use-cases"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});


export const metadata: Metadata = {
  title: "Design & MVP - ConvertLabs",
  description: "De l'idée au produit vivant rapidement avec ConvertLabs. Design UX/UI, développement MVP, prototypage et validation d'idées. Déjà 10+ startups qui décollent.",
  keywords: [
    "design MVP", "développement MVP", "prototypage", "UX design", "UI design", 
    "validation d'idée", "startup MVP", "développement rapide", "wireframing",
    "Figma", "React", "Next.js", "MVP development", "product design"
  ],
  openGraph: {
    title: "Design & MVP - ConvertLabs",
    description: "De l'idée au produit vivant rapidement avec ConvertLabs. Design UX/UI, développement MVP, prototypage et validation d'idées.",
    url: "https://convertlabs.fr/design-mvp",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Design & MVP - ConvertLabs",
      },
    ],
  },
  twitter: {
    title: "Design & MVP - ConvertLabs",
    description: "De l'idée au produit vivant rapidement avec ConvertLabs. Design UX/UI, développement MVP, prototypage et validation d'idées.",
    images: ["/og_image.png"],
  },
  alternates: {
    canonical: "/design-mvp",
  },
};

export default function DesignMVPPage() {
  return (
    <>
      <DesignMVPHero />
      <DesignMVPProblem />
      <DesignMVPApproach />
      <DesignMVPOffers />
      <DesignMVPUseCases />
      <DesignMVPCalculator />
      <DesignMVPAppointment />
    </>
  );
}