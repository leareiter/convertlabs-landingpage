import HeroCard from "@/components/ui/hero-card";

export default function AutomatisationCRMHero() {
  return (
    <HeroCard
      badgeText="CRM, Intégration d'outils & Optimisation de workflows"
      title="On automatise ta gestion pour qu'elle tourne toute seule."
      titlePart1="On automatise"
      titlePart2="ta gestion pour"
      titlePart3="qu'elle tourne"
      titleHighlight="toute seule."
      description="Fini les tâches répétitives. Fini les leads qui tombent dans les trous. Juste des workflows fluides, des données synchronisées, et une équipe qui se concentre sur l'essentiel."
      primaryCta="Automatiser mon CRM"
      secondaryCta="Découvrir nos intégrations"
      primaryCtaLink="#rendez-vous"
      secondaryCtaLink="#integrations"
      brandColor="bg-brand-orange"
      showBadge={true}
      sectionId="hero"
      forceFourLines={true}
    />
  );
}