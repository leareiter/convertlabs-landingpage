import dynamic from "next/dynamic";

const AutomatisationCRMHero = dynamic(() => import("@/components/automatisation-crm/hero"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMApproach = dynamic(() => import("@/components/automatisation-crm/approach"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMOffers = dynamic(() => import("@/components/automatisation-crm/offers"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMWhy = dynamic(() => import("@/components/automatisation-crm/why"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AutomatisationCRMUseCases = dynamic(() => import("@/components/automatisation-crm/use-cases"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const AppointmentSection = dynamic(() => import("@/components/appointment-section"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

export default function AutomatisationCRMPage() {
  return (
    <>
      <AutomatisationCRMHero />
      <AutomatisationCRMApproach />
      <AutomatisationCRMOffers />
      <AutomatisationCRMWhy />
      <AutomatisationCRMUseCases />
      <AppointmentSection />
    </>
  );
}