import HeroCard from "@/components/ui/hero-card";

export default function DesignMVPHero() {
  return (
    <HeroCard
      badgeText="Design, Développement Front, Maquettage, MVP & ASO"
      title="On transforme ton idée en MVP qui convertit."
      titlePart1="On transforme ton"
      titlePart2="ton idée en MVP"
      titlePart3="qui "
      titleHighlight="convertit."
      description="Pas de développement à l'aveugle. Pas de features inutiles. Juste un prototype testé, un design qui convertit, et un produit prêt pour le marché."
      primaryCta="Lancer mon MVP"
      secondaryCta="Voir nos réalisations"
      primaryCtaLink="#rendez-vous"
      secondaryCtaLink="#realisations"
      brandColor="bg-brand-purple"
      showBadge={true}
      sectionId="hero"
      forceFourLines={false}
    />
  );
}