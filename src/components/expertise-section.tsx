import { Card } from "@/components/ui/card";
import { Code, Zap, Linkedin } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function ExpertiseSection() {
  const expertise = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Design, Développement Front, Maquettage, MVP & ASO",
      objective: "Transformer une idée en produit fonctionnel, testable et scalable.",
      deliverables: "Prototype haute fidélité, design system, MVP complet, accompagnement ASO.",
      audience: "Startups early-stage, entreprises tech, PME en digitalisation."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CRM, Intégration d'outils & Optimisation de workflows",
      objective: "Structurer, connecter et automatiser vos outils pour fluidifier la croissance.",
      deliverables: "Audit complet, implémentation CRM (HubSpot / Pipedrive / Airtable), workflows automatisés, reporting data.",
      audience: "PME, scale-ups, entreprises en structuration commerciale."
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "Prospection LinkedIn multi-comptes automatisée",
      objective: "Industrialiser la génération de leads sur LinkedIn sans risque de ban.",
      deliverables: "Ciblage, séquences de messages, pilotage complet de la prospection et reporting.",
      audience: "Entreprises B2B cherchant à maintenir un flux constant de rendez-vous qualifiés."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="NOS EXPERTISES"
          title="3 verticales complémentaires pour votre croissance"
        />
        
        <div className="text-center mb-16">
          <p className="text-lg text-text-secondary">
            Convertlabs s'articule autour de <strong className="text-foreground">trois verticales</strong> complémentaires :
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {expertise.map((item, index) => (
            <Card key={index} className="p-8 bg-surface-secondary border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-blue text-background rounded-lg flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Objectif :</h4>
                <p className="text-text-secondary text-sm">{item.objective}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Livrables typiques :</h4>
                <p className="text-text-secondary text-sm">{item.deliverables}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Public :</h4>
                <p className="text-text-secondary text-sm">{item.audience}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
