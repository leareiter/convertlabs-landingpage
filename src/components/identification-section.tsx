"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "./header-section";

gsap.registerPlugin(ScrollTrigger);

interface IdentificationCard {
  title: string;
  description: string;
  cta: string;
  targetId: string;
}

const identificationCards: IdentificationCard[] = [
  {
    title: "J'ai une idée, je veux tester le marché",
    description: "Tu as un concept validé sur papier, mais tu ne veux pas perdre 6 mois et 50k€ avec une agence qui te livre un truc inutilisable. Tu veux un MVP fonctionnel pour pitcher devant des investisseurs ou tester avec de vrais utilisateurs.",
    cta: "Voir l'offre MVP",
    targetId: "offer-mvp"
  },
  {
    title: "J'ai des clients, mais je ne scale pas",
    description: "Tes leads sont éparpillés entre Google Sheets, emails et Trello. Tu perds 30% des opportunités dans la nature, et tu passes 3h/jour en saisie manuelle. Tu veux un CRM qui fonctionne vraiment.",
    cta: "Voir l'offre CRM",
    targetId: "offer-crm"
  },
  {
    title: "Je veux remplir mon agenda de RDV",
    description: "Tu fais de la prospection manuelle depuis des mois pour 2-3 RDV/mois. Tu n'as pas le budget pour un SDR, mais tu veux un pipeline constant de conversations qualifiées sans risquer le ban.",
    cta: "Voir l'offre LinkedIn",
    targetId: "offer-linkedin"
  }
];

export default function IdentificationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const scrollToOffer = () => {
    const targetElement = document.getElementById('offers');
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        gsap.fromTo(cardsRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section id="identification" className="py-16 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="TU TE RECONNAIS ?"
          title="Choisis le scénario qui correspond à ta situation"
        />

        <div className="grid md:grid-cols-3 gap-2 max-w-7xl mx-auto bg-gray-100 rounded-md p-2 tracking-[-0.05em]" ref={sectionRef}>
          {identificationCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex flex-col h-full relative"
            >
              <Card className="rounded-md p-8 flex flex-col h-full relative overflow-hidden shadow-xs border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-medium font-be-vietnam-pro text-text-hero mb-4 tracking-[-0.05em] leading-tight">
                    {card.title}
                  </h3>
                </div>

                <div className="grow flex flex-col">
                  <div className="mb-6 min-h-[120px]">
                    <p className="text-text-secondary text-base text-center">
                      {card.description}
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={() => scrollToOffer()} 
                  size="lg" 
                  className="w-full cursor-pointer -translate-y-1 hover:-translate-y-2 transition-all duration-200 mt-auto text-base bg-text-hero text-white hover:bg-text-hero/90"
                >
                  {card.cta}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
