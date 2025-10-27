import HeroCard from "@/components/ui/hero-card";

export default function AutomatisationCRMHero() {
  return (
    <HeroCard
      badgeText="CRM, Intégration d'outils & Optimisation de workflows"
      title="On structure, connecte et automatise ta gestion client"
      titlePart1="On structure, connecte"
      titlePart2="et automatise"
      titlePart3="ta"
      titleHighlight="gestion client."
      description="On construit ton système CRM + automatisations qui gère tes leads, relance tes prospects, et fait tourner ton back-office pendant que tu te concentres sur la vente et la croissance.
Pas de formation interminable. Pas de consultant qui disparaît après 2 semaines. Juste un système qui tourne."
      primaryCta="Automatiser mon CRM"
      secondaryCta="Télécharge le guide nurturing"
      primaryCtaLink="#rendez-vous"
      secondaryCtaLink="#integrations"
      brandColor="bg-brand-orange"
      showBadge={true}
      sectionId="hero"
      forceFourLines={true}
      showValidation={true}
    />
  );
}