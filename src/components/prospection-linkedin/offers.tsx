import HeaderSection from "@/components/header-section";
import PricingCards from "@/components/ui/pricing-cards";

export default function ProspectionLinkedInOffers() {
  const offers = [
    {
      title: "Stratégie & Personas",
      subtitle: "Définir ton cible précise",
      description: "Création d'ICP détaillés. Recherche et qualification des prospects. Personas et messages personnalisés. Stratégie de prospection multi-canaux",
      result: "Cible précise avec taux de réponse 3x supérieur",
      perfectFor: [
        "Identifier vos prospects idéaux",
        "Personnaliser vos approches",
        "Maximiser les taux de conversion"
      ],
      link: "#rendez-vous",
      slotsLeft: 2,
    },
    {
      title: "Séquences LinkedIn",
      subtitle: "Messages et automatisations",
      description: "Création de séquences personnalisées. Messages optimisés par industrie. Automatisation des relances. A/B testing et optimisation continue",
      result: "10-15 RDV qualifiés par mois en pilote automatique",
      perfectFor: [
        "Automatiser ton prospection",
        "Éviter les bannissements",
        "Générer des leads qualifiés"
      ],
      link: "#rendez-vous",
      slotsLeft: 1,
    },
    {
      title: "Contenu & Engagement",
      subtitle: "Positionnement et visibilité",
      description: "Stratégie de contenu LinkedIn. Posts optimisés pour l'engagement. Networking et relations. Branding personnel et expertise",
      result: "Positionnement d'expert avec communauté engagée",
      perfectFor: [
        "Développer ton notoriété",
        "Générer de l'engagement naturel",
        "Construire ton réseau"
      ],
      link: "#rendez-vous",
      slotsLeft: 4,
    },
  ];

  return (
    <section id="offers" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="OFFRE & PÉRIMÈTRE"
          title="3 domaines d'expertise LinkedIn"
        />

        <PricingCards 
          offers={offers} 
          sectionId="offers"
          brandColor="bg-brand-blue"
          showSlotsLeft={false}
        />
      </div>
    </section>
  );
}