"use client";
import HeaderSection from "@/components/header-section";
import UseCaseCard from "@/components/ui/use-case-card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignMVPUseCases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const useCaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (useCaseRef.current) {
      gsap.fromTo(useCaseRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: useCaseRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);


  return (
    <section ref={sectionRef} id="use-cases" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="CAS D'USAGE"
          title="Ils nous ont fait confiance"
        />

        <div className="max-w-6xl mx-auto">
          {/* Cas d'usage HealthSyncr */}
          <div ref={useCaseRef} className="mb-16">
            <UseCaseCard
              client="HealthSyncr"
              founder="Julien Marceau, Founder"
              avatar="/avatar_julien.jpg"
              context="Startup en pré-seed avec un concept validé : plateforme de gestion des entretiens annuels pour PME (5-50 salariés)."
              problem={[
                "Fondateurs non-tech",
                "Budget limité (25k€)",
                "Besoin de pitcher devant 3 fonds d'ici 2 mois",
                "Pas le temps de recruter une équipe dev"
              ]}
              solution={{
                week1: "Atelier de cadrage, user flows, wireframes",
                week2to3: "Maquettes haute fidélité (15 écrans), Prototype cliquable pour tests utilisateurs, Design system complet",
                week4to8: "Authentification Google SSO, Dashboard RH : création et suivi des entretiens, Interface employé : préparation et validation, Export PDF automatique, Hébergement Vercel + documentation"
              }}
              results={[
                "MVP livré en 4 semaines (vs 6 mois prévus)",
                "Budget final : 24k€ (vs 60-80k€ agence classique)",
                "200 early adopters recrutés en beta",
                "Pitch validé par 2 fonds, levée de 300k€"
              ]}
              category="design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
