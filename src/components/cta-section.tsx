import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Calendar, FileText, Zap } from "lucide-react";

export default function CTASection() {
  const steps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Réserve un appel de cadrage (20 min, gratuit)",
      description: "On analyse ton besoin, on te dit si on peut t'aider, et tu décides."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "On te propose un plan d'action",
      description: "Périmètre, calendrier, budget. Tout est clair avant de commencer."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "On produit, tu valides, on itère",
      description: "Sprints courts. Reporting transparent. Livraison documentée."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Travaillons ensemble
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            Tu as un produit à lancer, un process à structurer ou un pipe à faire grandir ?
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-surface-secondary border-border text-center">
                <div className="w-12 h-12 bg-brand-blue text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Étape {index + 1} : {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-surface-secondary border border-border rounded-lg p-8 mb-8">
            <p className="text-text-secondary italic">
              *Réponse sous 48h. Sans engagement.*
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-brand-green text-foreground hover:bg-brand-green-hover text-lg px-12 py-6"
            asChild
          >
            <a href="https://cal.com/benjamin-convertlabs/30min" target="_blank" rel="noopener noreferrer">
              Réserver un appel de cadrage
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
