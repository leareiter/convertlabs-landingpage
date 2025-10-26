import HeaderSection from "@/components/header-section";
import PricingCards from "@/components/ui/pricing-cards";

export default function AutomatisationCRMOffers() {
  const offers = [
    {
      title: "Configuration CRM",
      subtitle: "HubSpot, Salesforce, Pipedrive",
      description: "Setup complet de ton CRM. Champs personnalisés et pipelines. Automatisations de base. Formation des équipes. Intégration avec vos outils existants.",
      result: "CRM opérationnel en 2-3 semaines avec équipes formées.",
      perfectFor: [
        "Centraliser vos données clients",
        "Automatiser le suivi commercial",
        "Avoir une vue d'ensemble de vos prospects"
      ],
      link: "#rendez-vous",
      slotsLeft: 2,
    },
    {
      title: "Intégrations & Workflows",
      subtitle: "Connecter tous vos outils",
      description: "Intégration email, calendrier, comptabilité. Workflows d'onboarding automatiques. Relances programmées. Dashboards personnalisés. API et webhooks.",
      result: "Système automatisé qui fait gagner 10h/semaine.",
      perfectFor: [
        "Éliminer les tâches répétitives",
        "Synchroniser vos outils",
        "Automatiser vos processus"
      ],
      link: "#rendez-vous",
      slotsLeft: 1,
    },
    {
      title: "Optimisation & Formation",
      subtitle: "Maximiser l'efficacité",
      description: "Audit de vos processus existants. Optimisation des workflows. Formation avancée des équipes. Support continu et maintenance. Reporting et analytics.",
      result: "Équipes autonomes avec processus optimisés.",
      perfectFor: [
        "Améliorer l'efficacité de vos équipes",
        "Formaliser vos processus",
        "Avoir un support continu"
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