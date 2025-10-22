import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function WhyConvertLabsSection() {
  const features = [
    {
      title: "Vision produit",
      description: "Chaque projet est conçu comme un produit à impact, pas une prestation.",
    },
    {
      title: "Méthode agile",
      description: "Sprints courts, feedback continu, livrables mesurables.",
    },
    {
      title: "Stack moderne",
      description: "React, Next.js, HubSpot, Make, Airtable.",
    },
    {
      title: "Transparence & scalabilité",
      description: "Chiffrage clair, reporting Notion/Slack, livrables vérifiables.",
    },
    {
      title: "Prêt à démarrer ?",
      description: "Réserve ton appel de cadrage gratuit.",
      isCTA: true
    },
    {
      title: "Garantie",
      description: "On t'aide ou on te le dit.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand" id="why-convertlabs">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="POURQUOI CONVERTLABS ?"
          title="5 raisons de nous faire confiance"
        />

        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-muted p-2 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className={`p-6 h-48 ${feature.isCTA ? 'bg-brand-black text-white' : 'bg-white'} ${
                  index === 0 ? '!rounded-tl-md !rounded-tr-none !rounded-bl-none !rounded-br-none border-r border-b' : 
                  index === 1 ? 'border-x-none rounded-none' :
                  index === 2 ? '!rounded-tr-md !rounded-br-none !rounded-tl-none !rounded-bl-none border-b' : 
                  index === 3 ? '!rounded-tr-md !rounded-tl-none !rounded-tr-none !rounded-br-none border-x-none border-t-none' :
                  index === 4 ? 'border-none rounded-none' :
                  index === 5 ? '!rounded-tr-none !rounded-br-md !rounded-tl-none !rounded-bl-none' : 
                  '!rounded-none'
                }`}>
                  {feature.isCTA ? (
                    <div className="text-center">
                      <h3 className="font-regular text-xl font-be-vietnam-pro mb-2">{feature.title}</h3>
                      <p className="text-base mb-4 opacity-90">{feature.description}</p>
                      <Button 
                        asChild
                        className="w-full bg-white text-brand-black hover:bg-gray-100"
                      >
                        <a href="#rendez-vous" className="flex items-center justify-center">
                          Réserver un appel
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <div>
                        <h3 className="font-regular text-2xl font-be-vietnam-pro mb-2">{feature.title}</h3>
                        <p className="text-text-secondary   text-base mb-2">{feature.description}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
