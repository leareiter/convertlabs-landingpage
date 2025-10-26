import HeaderSection from "@/components/header-section";
import PricingCards from "@/components/ui/pricing-cards";

export default function DesignMVPOffers() {
  const offers = [
    {
      title: "Design & UX/UI",
      subtitle: "Création ou refonte d'interfaces",
      description: "Audit d'expérience et design system complet. Maquettes haute fidélité sous Figma. Prototypes cliquables pour validation. Design responsive web et mobile",
      result: "Interfaces modernes et intuitives qui convertissent mieux",
      perfectFor: [
        "Améliorer l'expérience utilisateur",
        "Créer une identité visuelle cohérente",
        "Valider les choix avant développement"
      ],
      link: "#rendez-vous",
      slotsLeft: 2,
    },
    {
      title: "Développement Full-Stack",
      subtitle: "Développement web et mobile",
      description: "Développement sur stack moderne (React, Next.js, Vue.js, React Native). Code propre et scalable. Intégration API et bases de données. Déploiement et hébergement",
      result: "Application fonctionnelle et performante, prête pour la production",
      perfectFor: [
        "Transformer vos maquettes en réalité",
        "Développer rapidement et efficacement",
        "Avoir un code maintenable"
      ],
      link: "#rendez-vous",
      slotsLeft: 1,
    },
    {
      title: "MVP & Prototypage",
      subtitle: "De l'idée au produit testable",
      description: "Design Sprint et validation rapide. Prototype fonctionnel en 2-3 semaines. Tests utilisateurs et itérations. Roadmap produit et prioritisation",
      result: "MVP validé en 3-5 semaines avec premiers utilisateurs",
      perfectFor: [
        "Tester une idée rapidement",
        "Valider un marché avant d'investir",
        "Obtenir des retours utilisateurs"
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
          title="3 domaines d'expertise Design & MVP"
        />

        <PricingCards 
          offers={offers} 
          sectionId="offers"
          brandColor="bg-brand-purple"
          showSlotsLeft={false}
        />
      </div>
    </section>
  );
}