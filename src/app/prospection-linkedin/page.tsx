import ProspectionLinkedInAppointment from "@/components/prospection-linkedin/appointment";
import dynamic from "next/dynamic";

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