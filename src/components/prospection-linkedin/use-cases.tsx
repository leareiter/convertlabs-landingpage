"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Rocket, Users, TrendingUp } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProspectionLinkedInUseCases() {
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

  const useCases = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "PME B2B",
      description: "qui veut générer un flux constant de leads qualifiés",
      challenge: "Manque de visibilité et difficulté à toucher les bons prospects",
      solution: "Ciblage ICP + séquences personnalisées + automatisation",
      result: "15-20 RDV qualifiés par mois en pilote automatique"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup SaaS",
      description: "qui veut accélérer sa croissance commerciale",
      challenge: "Besoin de scaler rapidement la prospection",
      solution: "Machine à leads automatisée + optimisation continue",
      result: "Pipeline commercial multiplié par 3 en 2 mois"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agence de services",
      description: "qui veut diversifier ses canaux d&apos;acquisition",
      challenge: "Dépendance aux références et réseaux existants",
      solution: "Prospection LinkedIn + automatisation + formation équipe",
      result: "Nouveau canal d&apos;acquisition représentant 40% du CA"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consultant indépendant",
      description: "qui veut structurer sa prospection commerciale",
      challenge: "Prospection manuelle chronophage et peu efficace",
      solution: "Système automatisé + messages optimisés + suivi CRM",
      result: "Gain de 10h/semaine + 5x plus de prospects qualifiés"
    }
  ];


  return (
    <section ref={sectionRef} id="use-cases" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="CAS D&apos;USAGE TYPIQUES"
          title="4 profils qui nous font confiance"
        />

        <div className="max-w-6xl mx-auto">
          {/* Cas d&apos;usage */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-brand-blue mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-medium font-be-vietnam-pro text-text-hero mb-3">
                  {useCase.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-text-hero mb-1">Défi :</h4>
                    <p className="text-xs text-text-muted">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-text-hero mb-1">Solution :</h4>
                    <p className="text-xs text-text-muted">{useCase.solution}</p>
                  </div>
                  
                  <div className="bg-brand-green/10 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-brand-green mb-1">Résultat :</h4>
                    <p className="text-xs text-brand-black">{useCase.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>


          {/* CTA final */}
          <div className="text-center">
            <div className="bg-brand-black text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-medium font-be-vietnam-pro mb-4">
                Prêt à transformer votre prospection LinkedIn ?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Réservez un appel de cadrage gratuit pour discuter de votre projet
              </p>
              <Button
                size="lg"
                className="bg-brand-green text-brand-black text-lg px-8 py-6 rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
                asChild
              >
                <a href="#rendez-vous">
                  Réserver un appel gratuit
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
