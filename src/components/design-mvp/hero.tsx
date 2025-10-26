import HeroCard from "@/components/ui/hero-card";

export default function DesignMVPHero() {
  return (
    <HeroCard
      badgeText="Design, Développement, Maquettage, MVP & ASO"
      title="On transforme ton idée en MVP qui convertit."
      titlePart1="On transforme ton"
      titlePart2="ton idée en MVP"
      titlePart3="qui "
      titleHighlight="convertit."
      description="On transforme ton concept en MVP fonctionnel, testé par de vrais utilisateurs, et prêt à générer tes premiers revenus ou convaincre tes investisseurs.
Pas de tunnel noir. Pas de dette technique. Juste un produit qui tourne."
      primaryCta="Lancer mon MVP"
      secondaryCta="Télécharge le MVP Checklist"
      primaryCtaLink="#rendez-vous"
      secondaryCtaLink="#realisations"
      brandColor="bg-brand-purple"
      showBadge={true}
      sectionId="hero"
      forceFourLines={false}
      showValidation={true}
    />
  );
}