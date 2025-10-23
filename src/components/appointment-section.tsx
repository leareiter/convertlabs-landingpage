import AppointmentCard from "@/components/ui/appointment-card";

export default function AppointmentSectionPage() {
  const steps = [
    {
      title: "Réserve un appel de cadrage gratuit",
      description: "On analyse ton besoin, on te dit si on peut t'aider, et tu décides."
    },
    {
      title: "On te propose un plan d'action",
      description: "Périmètre, calendrier, budget. Tout est clair avant de commencer."
    },
    {
      title: "On produit, tu valides, on itère",
      description: "Sprints courts. Reporting transparent. Livraison documentée."
    },
    {
      title: "Livraison, recettage et documentation",
      description: "Livraison du produit, recettage et documentation. Tout est clair avant de vous laisser la main."
    }
  ];

  return (
    <AppointmentCard
      steps={steps}
      headerSubtitle="TRAVAILLONS ENSEMBLE"
      headerTitle="Tu as un produit à lancer, un process à structurer ou un pipe à faire grandir ?"
    />
  );
}
