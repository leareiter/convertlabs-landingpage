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
      description="On construit ton système de prospection LinkedIn multi-comptes : ciblage laser, séquences testées, leads qualifiés livrés dans ton calendrier.
Pas de spam. Pas de ban. Juste un pipeline qui se remplit pendant que tu bosses."
      primaryCta="Générer des leads"
      secondaryCta="Télécharge le ICP Checklist"
      primaryCtaLink="#rendez-vous"
      secondaryCtaDialog={{ leadMagnetType: "linkedinLM" }}
      brandColor="bg-brand-blue"
      showBadge={true}
      sectionId="hero"
      forceFourLines={false}
      showValidation={true}
    />
  );
}