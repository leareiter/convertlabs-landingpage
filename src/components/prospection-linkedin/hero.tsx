import HeroCard from "@/components/ui/hero-card";

export default function ProspectionLinkedInHero() {
  return (
    <HeroCard
      badgeText="Prospection LinkedIn multi-comptes automatisée"
      title="On transforme LinkedIn en machine à leads qualifiés."
      titlePart1="On transforme"
      titlePart2="LinkedIn en machine"
      titlePart3="à leads"
      titleHighlight="qualifiés."
      description="Fini les messages qui tombent dans le vide. Fini les connexions qui ne répondent jamais. Juste des séquences qui convertissent, des prospects qualifiés, et un pipeline qui se remplit tout seul."
      primaryCta="Générer des leads"
      secondaryCta="Voir nos résultats"
      primaryCtaLink="#rendez-vous"
      secondaryCtaLink="#resultats"
      brandColor="bg-brand-blue"
      showBadge={true}
      sectionId="hero"
      forceFourLines={false}
    />
  );
}