import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function CollaborationSection() {
  const process = [
    "Identifier la verticale la plus adaptée à ton besoin",
    "Évaluer les contraintes techniques",
    "Définir un périmètre, un calendrier et un budget précis"
  ];

  const features = [
    "Un point de contact unique",
    "Des reportings clairs à chaque étape",
    "Aucun engagement long"
  ];

  const steps = [
    { name: "Cadrage", description: "Comprendre le contexte et les objectifs" },
    { name: "Production", description: "Développement en sprints courts" },
    { name: "Validation", description: "Tests et ajustements" },
    { name: "Itération", description: "Amélioration continue" }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="COLLABORATION"
          title="Comment on travaille ensemble"
        />
        
        <div className="max-w-6xl mx-auto">
          
          {/* 3 Black Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Cadrage */}
            <Card className="p-8 bg-brand-black text-white rounded-md">
              <h3 className="text-xl text-center font-bold font-be-vietnam-pro">Appel de cadrage</h3>
              <p className="text-gray-300 mb-2 text-center">
                Nos missions débutent toujours par un appel de cadrage pour comprendre le contexte, les objectifs et le niveau d'urgence du projet.
              </p>
              <p className="text-gray-300 font-be-vietnam-pro font-bold mb-2">Cet échange nous permet de :</p>
              <ul className="space-y-2">
                {process.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Card 2: Sprints */}
            <Card className="p-8 bg-brand-black text-white rounded-md">
              <h3 className="text-xl text-center font-bold font-be-vietnam-pro">Sprints courts et mesurables</h3>
              <p className="text-gray-300 mb-6 text-center">
                Une fois validé, on structure le projet en sprints courts et mesurables, avec :
              </p>
              <ul className="space-y-2">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-brand-green mr-3 mt-0.5 rounded-full shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
