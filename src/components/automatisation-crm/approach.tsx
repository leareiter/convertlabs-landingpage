import HeaderSection from "@/components/header-section";
import MethodCards from "@/components/ui/method-cards";

export default function AutomatisationCRMApproach() {
  const methods = [
    {
      title: "Audit & Cartographie",
      description: "Analyser les processus existants, identifier les points de friction et cartographier les flux de données pour optimiser votre back-office."
    },
    {
      title: "Configuration CRM",
      description: "Configurer et personnaliser votre CRM (HubSpot, Salesforce, Pipedrive) selon vos besoins spécifiques et vos workflows métier."
    },
    {
      title: "Intégrations & Workflows",
      description: "Connecter vos outils (email, calendrier, comptabilité) et créer des séquences automatisées pour fluidifier vos processus."
    },
    {
      title: "Formation & Support",
      description: "Former vos équipes et mettre en place un support continu pour optimiser l'utilisation et maximiser le ROI."
    }
  ];

  return (
    <section id="approach" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE APPROCHE"
          title="4 étapes pour automatiser votre back-office"
        />

        <MethodCards 
          methods={methods} 
          activeColor="bg-brand-orange" 
          containerId="approach"
        />
      </div>
    </section>
  );
}