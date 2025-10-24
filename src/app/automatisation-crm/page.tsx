import AutomatisationCRMAppointment from "@/components/automatisation-crm/appointment";
import AutomatisationCRMHero from "@/components/automatisation-crm/hero";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import AutomatisationCRMCalculator from "@/components/automatisation-crm/calculator";

const AutomatisationCRMApproach = dynamic(() => import("@/components/automatisation-crm/approach"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMOffers = dynamic(() => import("@/components/automatisation-crm/offers"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMUseCases = dynamic(() => import("@/components/automatisation-crm/use-cases"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});


export const metadata: Metadata = {
  title: "CRM & Automatisation - ConvertLabs",
  description: "Automatisez votre CRM et boostez vos ventes avec ConvertLabs. Workflows automatisés, intégrations CRM, lead nurturing et conversion optimisée. Déjà 10+ entreprises qui scalent.",
  keywords: [
    "automatisation CRM", "workflow automation", "lead nurturing", "sales automation", 
    "CRM intégration", "marketing automation", "conversion optimization", "sales pipeline",
    "HubSpot", "Salesforce", "Pipedrive", "automatisation commerciale"
  ],
  openGraph: {
    title: "CRM & Automatisation - ConvertLabs",
    description: "Automatisez votre CRM et boostez vos ventes avec ConvertLabs. Workflows automatisés, intégrations CRM, lead nurturing et conversion optimisée.",
    url: "https://convertlabs.fr/automatisation-crm",
    images: [
      {
        url: "/logo-convertlabs.png",
        width: 1200,
        height: 630,
        alt: "CRM & Automatisation - ConvertLabs",
      },
    ],
  },
  twitter: {
    title: "CRM & Automatisation - ConvertLabs",
    description: "Automatisez votre CRM et boostez vos ventes avec ConvertLabs. Workflows automatisés, intégrations CRM, lead nurturing.",
    images: ["/logo-convertlabs.png"],
  },
  alternates: {
    canonical: "/automatisation-crm",
  },
};

export default function AutomatisationCRMPage() {
  return (
    <>
      <AutomatisationCRMHero />
      <AutomatisationCRMApproach />
      <AutomatisationCRMOffers />
      <AutomatisationCRMUseCases />
      <AutomatisationCRMCalculator />
      <AutomatisationCRMAppointment />
    </>
  );
}