import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function WhyConvertLabsSection() {
  const features = [
    {
      title: "Vision produit",
      description: "Nous pensons chaque projet comme un produit à succès, pas comme une prestation isolée."
    },
    {
      title: "Méthode agile",
      description: "Cycles rapides, feedback en continu, amélioration permanente."
    },
    {
      title: "Stack moderne",
      description: "React, Next.js, HubSpot, Make, Waalaxy, Airtable."
    },
    {
      title: "Transparence totale",
      description: "Chiffrage clair, livrables définis, communication continue."
    },
    {
      title: "Scalabilité",
      description: "Chaque système est conçu pour grandir avec le client"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="POURQUOI CONVERTLABS"
          title="5 raisons de nous faire confiance"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-surface-secondary border-border">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-green mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
