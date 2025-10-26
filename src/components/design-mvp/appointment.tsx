import AppointmentCard from "@/components/ui/appointment-card";

export default function DesignMVPAppointment() {
  const steps = [
    {
      title: "Audit de ton concept",
      description: "On analyse ton idée, ton marché et vos contraintes techniques."
    },
    {
      title: "Prototypage & validation",
      description: "Création d'un prototype fonctionnel pour valider ton concept."
    },
    {
      title: "Développement MVP",
      description: "Développement de ton produit avec les technologies modernes."
    },
    {
      title: "Lancement & optimisation",
      description: "Mise en ligne, tests utilisateurs et optimisations continues."
    }
  ];

  return (
    <AppointmentCard
      steps={steps}
      headerSubtitle="LANÇONS ton MVP"
      headerTitle="Prêt à transformer ton idée en produit qui convertit ?"
      sectionId="rendez-vous"
    />
  );
}
