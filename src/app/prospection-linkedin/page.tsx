import ProspectionLinkedInAppointment from "@/components/prospection-linkedin/appointment";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const ProspectionLinkedInHero = dynamic(() => import("@/components/prospection-linkedin/hero"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const ProspectionLinkedInApproach = dynamic(() => import("@/components/prospection-linkedin/approach"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const ProspectionLinkedInOffers = dynamic(() => import("@/components/prospection-linkedin/offers"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const ProspectionLinkedInWhy = dynamic(() => import("@/components/prospection-linkedin/why"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const ProspectionLinkedInUseCases = dynamic(() => import("@/components/prospection-linkedin/use-cases"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

export const metadata: Metadata = {
  title: "Prospection LinkedIn - ConvertLabs",
  description: "Besoin de leads qualifiés ? ConvertLabs met la machine en route. Prospection LinkedIn automatisée, lead generation et conversion optimisée. Déjà 10+ entreprises qui génèrent des leads.",
  keywords: [
    "prospection LinkedIn", "lead generation", "LinkedIn automation", "lead nurturing", 
    "sales prospecting", "LinkedIn outreach", "lead qualification", "B2B prospecting",
    "LinkedIn Sales Navigator", "lead scoring", "prospection commerciale", "génération de leads"
  ],
  openGraph: {
    title: "Prospection LinkedIn - ConvertLabs",
    description: "Besoin de leads qualifiés ? ConvertLabs met la machine en route. Prospection LinkedIn automatisée, lead generation et conversion optimisée.",
    url: "https://convertlabs.fr/prospection-linkedin",
    images: [
      {
        url: "/logo-convertlabs.png",
        width: 1200,
        height: 630,
        alt: "Prospection LinkedIn - ConvertLabs",
      },
    ],
  },
  twitter: {
    title: "Prospection LinkedIn - ConvertLabs",
    description: "Besoin de leads qualifiés ? ConvertLabs met la machine en route. Prospection LinkedIn automatisée, lead generation et conversion optimisée.",
    images: ["/logo-convertlabs.png"],
  },
  alternates: {
    canonical: "/prospection-linkedin",
  },
};

export default function ProspectionLinkedInPage() {
  return (
    <>
      <ProspectionLinkedInHero />
      <ProspectionLinkedInApproach />
      <ProspectionLinkedInOffers />
      <ProspectionLinkedInWhy />
      <ProspectionLinkedInUseCases />
      <ProspectionLinkedInAppointment />
    </>
  );
}