import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function CollaborationSection() {
  const process = [
    "Identifier la verticale la plus adaptée à votre besoin",
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
        
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12">
            <p className="text-lg text-text-secondary mb-6">
              Nos missions débutent toujours par un <strong className="text-foreground">appel de cadrage</strong> pour comprendre le contexte, les objectifs et le niveau d&apos;urgence du projet.
            </p>
            
            <p className="text-lg text-text-secondary mb-6">
              Cet échange nous permet de :
            </p>
            
            <ul className="space-y-2 mb-8">
              {process.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mr-3 mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-lg text-text-secondary mb-6">
              Une fois validé, on structure le projet en <strong className="text-foreground">sprints courts et mesurables</strong>, avec :
            </p>
            
            <ul className="space-y-2 mb-8">
              {features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mr-3 mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Notre process :</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 bg-surface-secondary border-border text-center">
                  <div className="w-12 h-12 bg-brand-blue text-background rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{step.name}</h4>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-surface-secondary border border-border rounded-lg p-6">
            <p className="text-text-secondary">
              On travaille via des outils collaboratifs (Notion, Slack, Figma, etc.) et on livre de la documentation claire à chaque étape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
