import { Card } from "@/components/ui/card";
import HeaderSection from "@/components/header-section";

export default function PricingSection() {
  const pricing = [
    {
      type: "Prototype / Maquette",
      duration: "2 à 3 semaines",
      budget: "4–10 k€"
    },
    {
      type: "MVP complet",
      duration: "4 à 8 semaines",
      budget: "10–50 k€"
    },
    {
      type: "Intégration CRM & Automatisation",
      duration: "3 à 6 semaines",
      budget: "2–30 k€"
    },
    {
      type: "Prospection LinkedIn automatisée",
      duration: "Campagne mensuelle",
      budget: "3–6 k€/mois"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="TARIFS"
          title="Délais moyens par type de mission"
        />
        
        <div className="text-center mb-16">
          <p className="text-lg text-text-secondary">
            *(Les budgets sont donnés à titre indicatif et varient selon la complexité et le périmètre défini en amont.)*
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-muted">
                  <tr>
                    <th className="text-left p-6 font-semibold text-foreground">Type de projet</th>
                    <th className="text-left p-6 font-semibold text-foreground">Durée moyenne</th>
                    <th className="text-left p-6 font-semibold text-foreground">Budget indicatif</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-6 text-foreground font-medium">{item.type}</td>
                      <td className="p-6 text-text-secondary">{item.duration}</td>
                      <td className="p-6 text-text-secondary">{item.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
