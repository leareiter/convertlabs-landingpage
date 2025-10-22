import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import HeaderSection from "@/components/header-section";

export default function MethodSection() {
  const methods = [
    {
      title: "On va vite",
      description: "Parce que le marché ne t'attend pas."
    },
    {
      title: "On fait propre",
      description: "Chaque livrable peut grandir avec ton business."
    },
    {
      title: "On reste clairs",
      description: "Pas de jargon. Pas de dépendance au no-code magique. Tu comprends ce qu'on fait, tu peux le reprendre si tu veux."
    }
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE MÉTHODE"
          title="3 principes qui font la différence"
        />

        <div className="bg-surface-muted rounded-2xl p-2 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {methods.map((method, index) => (
              <div key={index} className="flex-1 flex flex-col md:flex-row items-center gap-4">
                <Card className={`p-6 border-border rounded-xl shadow-xs hover:shadow-md transition-shadow duration-300 w-full h-full flex flex-col ${
                  index === 1 
                    ? "bg-brand-black text-white" 
                    : "bg-background"
                }`}>
                  <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center">
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${
                        index === 1 ? "text-white" : "text-foreground"
                      }`}>{method.title}</h3>
                      <p className={`text-sm leading-relaxed ${
                        index === 1 ? "text-gray-300" : "text-text-secondary"
                      }`}>{method.description}</p>
                    </div>
                  </div>
                </Card>

                {/* Flèche après chaque carte sauf la dernière */}
                {index < methods.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <div className="relative p-1">
                      <div className="absolute inset-0 bg-brand-green/40 rounded-full"></div>
                      <div className="relative bg-brand-green text-black p-2 rounded-full animate-pulse">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}