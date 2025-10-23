import HeaderSection from "@/components/header-section";
import MethodCards from "@/components/ui/method-cards";

export default function DesignMVPApproach() {
  const methods = [
    {
      title: "Design Sprint",
      description: "Cadrer rapidement le besoin, aligner les équipes et poser les bases produit. User flow, wireframes et validation en 5 jours."
    },
    {
      title: "Prototypage Figma",
      description: "Visualiser, tester et valider les choix avant développement. Maquettes haute fidélité et prototype cliquable."
    },
    {
      title: "Développement Front",
      description: "Développement web et mobile sur stack moderne (React, React Native, Next.js, Vue.js, Tailwind). Code propre et scalable."
    },
    {
      title: "Optimisation ASO",
      description: "Maximiser la visibilité et les téléchargements sur les stores. A/B testing et amélioration continue."
    }
  ];

  return (
    <section id="approach" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE APPROCHE"
          title="4 étapes pour un MVP qui convertit"
        />

        <MethodCards 
          methods={methods} 
          activeColor="bg-brand-purple" 
          containerId="approach"
        />
      </div>
    </section>
  );
}
