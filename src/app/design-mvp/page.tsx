import AppointmentSection from "@/components/appointment-section";
import dynamic from "next/dynamic";

const DesignMVPHero = dynamic(() => import("@/components/design-mvp/hero"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPApproach = dynamic(() => import("@/components/design-mvp/approach"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPOffers = dynamic(() => import("@/components/design-mvp/offers"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPWhy = dynamic(() => import("@/components/design-mvp/why"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

const DesignMVPUseCases = dynamic(() => import("@/components/design-mvp/use-cases"), {
  loading: () => <div className="h-96 bg-surface-muted animate-pulse rounded-md" />,
});

export default function DesignMVPPage() {
  return (
    <>
      <DesignMVPHero />
      <DesignMVPApproach />
      <DesignMVPOffers />
      <DesignMVPWhy />
      <DesignMVPUseCases />
      <AppointmentSection />
    </>
  );
}