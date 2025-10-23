import AppointmentCard from "@/components/ui/appointment-card";

export default function AutomatisationCRMAppointment() {
  const steps = [
    {
      title: "Audit de vos processus",
      description: "On analyse vos workflows actuels et identifie les points d'amélioration."
    },
    {
      title: "Configuration CRM",
      description: "Setup et personnalisation de votre CRM selon vos besoins spécifiques."
    },
    {
      title: "Automatisation & intégrations",
      description: "Connexion de vos outils et création de workflows automatisés."
    },
    {
      title: "Formation & support",
      description: "Formation de vos équipes et mise en place d'un support continu."
    }
  ];

  return (
    <AppointmentCard
      steps={steps}
      headerSubtitle="AUTOMATISONS VOTRE BACK-OFFICE"
      headerTitle="Prêt à transformer votre gestion en machine bien huilée ?"
      sectionId="rendez-vous"
    />
  );
}
