import HeroCard from "@/components/ui/hero-card";

export default function HeroSection() {
  return (
    <HeroCard
      badgeText="Encore 3 places disponibles"
      title="On construit des produits digitaux qui bossent pour toi."
      description="Pas de PowerPoint. Pas de wireframes qui dorment dans un Drive. Juste des outils opérationnels, des automatisations qui tournent en fond, et des systèmes d'acquisition qui rapportent."
      primaryCta="Réserver un appel de cadrage"
      secondaryCta="Découvrir nos services"
      primaryCtaLink="#rendez-vous"
      brandColor="bg-brand-green"
      showBadge={true}
      showStats={true}
    />
  );
}