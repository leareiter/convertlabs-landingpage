"use client";
import HeaderSection from "@/components/header-section";
import UseCaseCard from "@/components/ui/use-case-card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AutomatisationCRMUseCases() {
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
          {/* Cas d'usage Impulse Conseil */}
          <div ref={useCaseRef} className="mb-16">
            <UseCaseCard
              client="Impulse Conseil"
              founder="Sarah Bentayeb, CEO"
              avatar="/avatar_sarah.jpg"
              context="Agence de conseil en transformation digitale (12 personnes, 40 clients actifs)."
              problem={[
                "Leads éparpillés (Google Sheets, emails, Trello)",
                "30% des leads perdus dans la nature",
                "Aucune visibilité sur le pipe commercial",
                "3h/jour en saisie manuelle",
                "Taux de closing : 15% (vs 30% moyenne marché)"
              ]}
              solution={{
                week1: "Cartographie des outils existants, Analyse du cycle de vie client, Recommandation : HubSpot CRM + Make + Slack",
                week2to4: "Setup HubSpot (pipelines, propriétés, dashboards), Migration de 800 contacts depuis Google Sheets, Création de 4 pipelines (Lead → Signature → Livraison → Renouvellement)",
                week5to6: "Scoring automatique des leads et assignation aux bons commerciaux. Relances multi-canales (email, LinkedIn, SMS) selon statut et délais. Onboarding client automatisé (docs, tâches, accès, notifications). Suivi rétention + alertes renouvellement à J-30. Reporting dynamique sur taux de conversion et revenus projetés."
              }}
              results={[
                "Temps de saisie : -70% (de 3h/jour à 50 min/jour)",
                "Taux de closing : +35% (de 15% à 23%)",
                "Zéro perte de lead (vs 30% avant)",
                "ROI : récupéré en 2 mois"
              ]}
              category="crm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
