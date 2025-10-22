"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OffersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
      // Animation d'apparition des cards
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
  }, []);

  const offers = [
    {
      title: "Design & MVP",
      subtitle: "De l'idée au produit vivant. Rapidement.",
      description: "Tu arrives avec un concept. On te livre un prototype fonctionnel, testable, et prêt à générer du chiffre.",
      timeframe: "En quelques semaines.",
      result: "MVP validé en 3-5 semaines, avec premiers utilisateurs payants sous 60 jours.",
      perfectFor: [
        "Valider ton marché sans brûler 6 mois et 50k€",
        "Lancer une nouvelle offre sans dépendre d'une dev team",
        "Tester avant d'industrialiser"
      ],
      accentColor: "persian-blue",
      accentHex: "#1b4d3e"
    },
    {
      title: "Prospection LinkedIn",
      subtitle: "Besoin de leads qualifiés ? On met la machine en route.",
      description: "Ciblage des bons profils (ICP précis). Messages optimisés et personnalisés. Automatisations + tracking + CRM intégré. Suivi des réponses et qualification. Prise de RDV automatique.",
      result: "10-15 RDV qualifiés par mois, en pilote automatique, sans risque de ban.",
      perfectFor: [
        "Générer un flux constant de leads",
        "Automatiser la prospection",
        "Éviter les bannissements LinkedIn"
      ],
      accentColor: "eerie-black",
      accentHex: "#1b1b1b"
    },
    {
      title: "CRM & Automatisation",
      subtitle: "On organise ton back-office pour qu'il tourne sans toi.",
      description: "Connexion de tes outils (Hubspot, Airtable, Notion, Zapier...). Workflows d'onboarding et relance. Suivi client automatisé. Dashboards personnalisés pour piloter en un coup d'œil.",
      result: "-60% de temps passé sur la gestion, +40% de deals fermés grâce à un suivi structuré.",
      perfectFor: [
        "Structurer tes processus commerciaux",
        "Automatiser les tâches répétitives",
        "Avoir une vue d'ensemble de ton business"
      ],
      accentColor: "spring-bud",
      accentHex: "#adff02"
    },
  ];

  return (
    <section ref={sectionRef} id="offres" className="border-y py-16 border-border font-be-vietnam-pro tracking-[-0.06em]">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="NOS OFFRES"
          title="3 solutions pour faire décoller ton business"
        />

        <div className="grid md:grid-cols-3 gap-2 max-w-7xl mx-auto bg-gray-100 rounded-2xl p-2">
          {offers.map((offer, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex flex-col h-full relative"
            >
              {index === 1 && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative p-1">
                    <div className="absolute inset-0 bg-brand-green/40 rounded-full"></div>
                    <div className="relative bg-brand-green text-black px-4 py-1.5 text-base rounded-full tracking-tight text-sm font-medium">
                      La plus populaire
                    </div>
                  </div>
                </div>
              )}
              <Card className="rounded-xl p-8 flex flex-col h-full relative overflow-hidden shadow-xs border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero mb-2 tracking-[-0.06em]">{offer.title}</h3>
                <p className="text-text-muted font-regular font-be-vietnam-pro mb-6 min-h-[60px] flex items-center justify-center">{offer.subtitle}</p>

                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
                  <div className="mx-4 w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
                </div>
              </div>

              <div className="grow flex flex-col">
                <div className="mb-6 min-h-[100px]">
                  <h4 className="font-semibold text-text-hero mb-4">Ce que tu reçois :</h4>
                  <ul className="space-y-2">
                    {offer.description.split('. ').map((sentence, sentenceIndex) => (
                      sentence.trim() && (
                        <li key={sentenceIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-text-hero rounded-full mr-3 mt-2 shrink-0"></div>
                          <span className="text-text-secondary leading-relaxed">{sentence.trim()}</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-black text-white border border-brand-green/20 rounded-lg p-4 mb-6">
                  <p className="text-base font-medium font-be-vietnam-pro mb-2">
                    Résultat moyen :
                  </p>
                  <p className="text-sm text-white font-medium font-be-vietnam-pro">{offer.result}</p>
                </div>

                <div className="mb-6 grow min-h-[140px]">
                  <h4 className="font-semibold text-text-hero mb-4">Parfait pour :</h4>
                  <ul className="space-y-3">
                    {offer.perfectFor.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-text-hero rounded-full mr-3 mt-2 shrink-0"></div>
                        <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button size="lg" className={`w-full cursor-pointer -translate-y-1 hover:-translate-y-2 transition-all duration-200 mt-auto ${
                index === 1 
                  ? "bg-brand-green text-black hover:bg-brand-green/90" 
                  : "bg-text-hero text-white hover:bg-text-hero/90"
              }`}>
                En savoir plus
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
