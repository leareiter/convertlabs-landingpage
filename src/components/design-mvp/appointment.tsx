import AppointmentCard from "@/components/ui/appointment-card";

export default function DesignMVPAppointment() {
  const steps = [
    {
      title: "Audit de votre concept",
      description: "On analyse votre idée, votre marché et vos contraintes techniques."
    },
    {
      title: "Prototypage & validation",
      description: "Création d'un prototype fonctionnel pour valider votre concept."
    },
    {
      title: "Développement MVP",
      description: "Développement de votre produit avec les technologies modernes."
    },
    {
      title: "Lancement & optimisation",
      description: "Mise en ligne, tests utilisateurs et optimisations continues."
    }
  ];

  return (
    <AppointmentCard
      steps={steps}
      headerSubtitle="LANÇONS VOTRE MVP"
      headerTitle="Prêt à transformer votre idée en produit qui convertit ?"
      sectionId="rendez-vous"
    />
  );
}
