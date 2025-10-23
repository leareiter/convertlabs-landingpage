import DesignMVPAppointment from "@/components/design-mvp/appointment";
import DesignMVPHero from "@/components/design-mvp/hero";
import dynamic from "next/dynamic";

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
      <DesignMVPAppointment />
    </>
  );
}