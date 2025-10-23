import dynamic from "next/dynamic";
import HeroCard from "@/components/ui/hero-card";

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

export default function Home() {
  return (
    <>
      <HeroCard brandColor="bg-brand-green"  showBadge={false} title="On construit des produits digitaux qui bossent pour toi." description="Pas de PowerPoint. Pas de wireframes qui dorment dans un Drive. Juste des outils opérationnels, des automatisations qui tournent en fond, et des systèmes d'acquisition qui rapportent." primaryCta="Réserver un appel de cadrage" secondaryCta="Découvrir nos services" primaryCtaLink="#rendez-vous" secondaryCtaLink="#services" />
      <TestimonialsSection />
      <OffersSection />
      <MethodSection />
      <PhilosophySection/> 
      <AppointmentSection />
    </>
  );
}
