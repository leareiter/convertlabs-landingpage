import HeaderSection from "@/components/header-section";
import MethodCards from "@/components/ui/method-cards";

export default function ProspectionLinkedInApproach() {
  const methods = [
    {
      title: "Stratégie & Personas",
      description: "Définir ta cible, créer des personas détaillés et élaborer une stratégie de prospection personnalisée pour maximiser les conversions."
    },
    {
      title: "Séquences LinkedIn",
      description: "Créer des séquences de messages personnalisés, automatiser les relances et optimiser le timing pour engager vos prospects."
    },
    {
      title: "Suivi & Optimisation",
      description: "Mesurer les performances, analyser les données et optimiser continuellement ton approche pour améliorer les taux de conversion."
    }
  ];

  return (
    <section id="approach" className="py-16 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE APPROCHE"
          title="4 étapes pour une prospection qui convertit"
        />

        <MethodCards 
          methods={methods} 
          activeColor="bg-brand-blue" 
          containerId="approach"
        />
      </div>
    </section>
  );
}