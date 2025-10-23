import AppointmentCard from "@/components/ui/appointment-card";

export default function ProspectionLinkedInAppointment() {
  const steps = [
    {
      title: "Définition de votre cible",
      description: "Création d'ICP précis et identification de vos prospects idéaux."
    },
    {
      title: "Stratégie de prospection",
      description: "Élaboration d'une approche personnalisée et de messages optimisés."
    },
    {
      title: "Automatisation LinkedIn",
      description: "Mise en place de séquences automatisées et tracking des performances."
    },
    {
      title: "Optimisation continue",
      description: "Analyse des résultats et amélioration constante de votre approche."
    }
  ];

  return (
    <AppointmentCard
      steps={steps}
      headerSubtitle="GÉNÉRONS VOS LEADS"
      headerTitle="Prêt à transformer LinkedIn en machine à leads qualifiés ?"
      sectionId="rendez-vous"
    />
  );
}
