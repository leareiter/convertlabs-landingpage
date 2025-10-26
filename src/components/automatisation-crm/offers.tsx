import HeaderSection from "@/components/header-section";
import PricingCards from "@/components/ui/pricing-cards";

export default function AutomatisationCRMOffers() {
  const offers = [
    {
      title: "Audit & Stratégie CRM",
      subtitle: "Vision claire de votre écosystème",
      description: "Audit complet de ton écosystème. Analyse de la performance produit. Recommandations concrètes et chiffrées sur les leviers prioritaires. Feuille de route 90 jours (actions, impact)",
      result: "Vision claire, priorités validées, plan d'action activable immédiatement",
      perfectFor: [
        "Comprendre où tu perds du temps ou de l'argent",
        "Identifier les quick wins à fort ROI",
        "Construire une stratégie produit et growth cohérente avant d'exécuter"
      ],
      link: "#rendez-vous",
      slotsLeft: 1,
    },
    {
      title: "Configuration CRM",
      subtitle: "HubSpot, Salesforce, Pipedrive",
      description: "Setup complet de ton CRM. Champs personnalisés et pipelines. Automatisations de base. Formation des équipes. Intégration avec vos outils existants",
      result: "CRM opérationnel en 2-3 semaines avec équipes formées",
      perfectFor: [
        "Centraliser vos données clients",
        "Automatiser le suivi commercial",
        "Avoir une vue d'ensemble de vos prospects"
      ],
      link: "#rendez-vous",
      slotsLeft: 2,
    },
    {
      title: "Conseil & Stratégie CRM",
      subtitle: "Aligner vision, outils et performance",
      description: "Audit global de ton écosystème commercial. Analyse des points de friction. Reco sur la stack CRM et les automatisations. Feuille de route priorisée sur 90 jours. Sessions de conseil stratégique mensuelles",
      result: "Stratégie CRM claire, stack optimisée et plan d'action concret sur 3 mois",
      perfectFor: [
        "(Re)penser ton organisation commerciale avant d'automatiser",
        "Prioriser les bons leviers avant d'investir dans des outils",
        "Structurer ta croissance autour d'un système clair et mesurable"
      ],
      link: "#rendez-vous",
      slotsLeft: 3,
    },
  ];

  return (
    <section id="offers" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="OFFRE & PÉRIMÈTRE"
          title="3 domaines d'expertise CRM"
        />

        <PricingCards 
          offers={offers} 
          sectionId="offers"
          brandColor="bg-brand-orange"
          showSlotsLeft={false}
        />
      </div>
    </section>
  );
}