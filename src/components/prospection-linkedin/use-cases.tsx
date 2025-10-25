"use client";
import HeaderSection from "@/components/header-section";
import UseCaseCard from "@/components/ui/use-case-card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProspectionLinkedInUseCases() {
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
          {/* Cas d'usage AFC-Stab */}
          <div ref={useCaseRef} className="mb-16">
            <UseCaseCard
              client="AFC-Stab"
              founder="Henrick Merle, Président"
              avatar="/avatar_henrick.png"
              context="Cabinet de conseil en ingénierie structurelle (béton armé, stabilité des constructions). Clientèle : bureaux d'études, architectes, promoteurs immobiliers."
              problem={[
                "Prospection manuelle depuis 2 ans",
                "Résultat : 2-3 RDV/mois pour un temps énorme",
                "Pas de SDR en interne (budget limité)",
                "Besoin de 15-20 RDV qualifiés/mois pour tenir les objectifs"
              ]}
              solution={{
                week1: "Définition ICP précis : Directeurs de bureaux d'études techniques (France), Secteur : construction, génie civil, Entreprises : 10-200 salariés, Optimisation profil LinkedIn du président, Création de 3 séquences de messages",
                week2: "Déploiement système multi-comptes ConvertLabs (3 comptes), Configuration CRM léger (Notion) pour suivi des leads",
                week3to10: "600 invitations/semaine (200 par compte), Messages personnalisés automatiques à J+2, Qualification des réponses par ConvertLabs, Transmission des leads qualifiés (calendrier Calendly)"
              }}
              results={[
                "Pipeline : +400% (de 2-3 démos à 12-14/mois)",
                "Coût par RDV : 300€ (vs 800€ avec SDR interne)",
                "Taux de closing : 35% → 4-5 nouveaux clients/mois",
                "Retour sur investissement : 3 semaines"
              ]}
              category="linkedin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
