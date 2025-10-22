"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Zap, Users } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AutomatisationCRMApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
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

  const approachPillars = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Clarté des process",
      description: "Comprendre comment l'entreprise fonctionne avant d'automatiser.",
      step: "1"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Outils adaptés",
      description: "Choisir la stack idéale (HubSpot, Pipedrive, Airtable, Make, etc.).",
      step: "2"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatisation intelligente",
      description: "Supprimer les tâches manuelles sans complexifier.",
      step: "3"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Adoption durable",
      description: "Former les équipes et documenter chaque flux.",
      step: "4"
    }
  ];

  const methodology = [
    {
      step: "1. Audit & discovery",
      objective: "Comprendre les besoins et cartographier les process",
      deliverables: "Diagnostic complet + plan d'architecture cible",
      duration: "1–2 semaines"
    },
    {
      step: "2. Conception & architecture",
      objective: "Structurer les flux et la stack outils",
      deliverables: "Cahier des charges CRM",
      duration: "1 semaine"
    },
    {
      step: "3. Implémentation & intégration",
      objective: "Déployer le CRM et automatiser les workflows",
      deliverables: "CRM opérationnel + intégrations",
      duration: "2–4 semaines"
    },
    {
      step: "4. Tests & formation",
      objective: "Valider le système et former les équipes",
      deliverables: "Formation + support",
      duration: "1 semaine"
    },
    {
      step: "5. Optimisation continue (optionnel)",
      objective: "Améliorer les process et le reporting",
      deliverables: "Itérations mensuelles",
      duration: "En continu"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE APPROCHE"
          title="4 piliers pour un CRM qui fonctionne"
        />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Nous considérons le CRM comme le <strong>cœur opérationnel de l&apos;entreprise</strong>.
              L&apos;objectif n&apos;est pas seulement d&apos;installer un outil, mais de <strong>créer un système qui soutient la croissance commerciale</strong>.
            </p>
          </div>

          {/* Piliers de l'approche */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {approachPillars.map((pillar, index) => (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-brand-blue mb-4 flex justify-center">
                  {pillar.icon}
                </div>
                <div className="text-xs text-brand-blue font-medium mb-2">
                  Étape {pillar.step}
                </div>
                <h3 className="text-xl font-medium font-be-vietnam-pro text-text-hero mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Méthodologie détaillée */}
          <div className="bg-surface-muted rounded-lg p-6">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Méthodologie projet
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Étape</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Objectif</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Livrables</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Durée typique</th>
                  </tr>
                </thead>
                <tbody>
                  {methodology.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium text-text-hero">{item.step}</td>
                      <td className="py-4 px-4 text-text-muted">{item.objective}</td>
                      <td className="py-4 px-4 text-text-muted">{item.deliverables}</td>
                      <td className="py-4 px-4 text-brand-blue font-medium">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-brand-green text-black text-lg px-8 py-6 rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
              asChild
            >
              <a href="#rendez-vous">
                Découvrir notre méthodologie
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
