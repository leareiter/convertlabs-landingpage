import HeaderSection from "@/components/header-section";
import PricingCards from "@/components/ui/pricing-cards";

export default function OffersSection() {
  const offers = [
    {
      title: "Design & MVP",
      subtitle: "De l'idée au produit vivant. Rapidement.",
      description: "Tu arrives avec un concept. On te livre un prototype fonctionnel, testable, et prêt à générer du chiffre. En 4 à 8 semaines. (Budget : 10-50k€)",
      result: "MVP validé en 3-5 semaines, avec premiers utilisateurs payants sous 60 jours.",
      perfectFor: [
        "Valider ton marché sans brûler 6 mois et 50k€",
        "Lancer une nouvelle offre sans dépendre d'une dev team",
        "Tester avant d'industrialiser"
      ],
      link: "/design-mvp",
      slotsLeft: 3,
    },
    {
      title: "Prospection LinkedIn",
      subtitle: "Besoin de leads qualifiés ? On met la machine en route.",
      description: "Ciblage des bons profils (ICP précis). Messages optimisés et personnalisés. Automatisations + tracking + CRM intégré. Suivi des réponses et qualification. Prise de RDV automatique.",
      result: "10-15 RDV qualifiés par mois, en pilote automatique, sans risque de ban.",
      perfectFor: [
        "Générer un flux constant de leads",
        "Automatiser la prospection",
        "Éviter les bannissements LinkedIn"
      ],
      link: "/prospection-linkedin",
      slotsLeft: 5,
    },
    {
      title: "CRM & Automatisation",
      subtitle: "On organise ton back-office pour qu'il tourne sans toi.",
      description: "Connexion de tes outils (Hubspot, Airtable, Notion, Zapier...). Workflows d'onboarding et relance. Suivi client automatisé. Dashboards personnalisés pour piloter en un coup d'œil.",
      result: "-60% de temps passé sur la gestion, +40% de deals fermés grâce à un suivi structuré.",
      perfectFor: [
        "Structurer tes processus commerciaux",
        "Automatiser les tâches répétitives",
        "Avoir une vue d'ensemble de ton business"
      ],
      link: "/automatisation-crm",
      slotsLeft: 1,
    },
  ];

  return (
    <section id="offers" className="border-b py-16 border-border font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOS OFFRES"
          title="3 solutions pour faire décoller ton business"
        />

        <PricingCards 
          offers={offers} 
          sectionId="offers"
          brandColor="bg-brand-green"
          showPopularBadge={true}
          showSlotsLeft={true}
        />
      </div>
    </section>
  );
}