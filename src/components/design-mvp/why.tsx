"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Code, Target, Shield } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignMVPWhy() {
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

  const advantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapidité d'exécution",
      description: "Vous passez du concept au produit en quelques semaines, pas en plusieurs mois.",
      benefit: "Time-to-market réduit de 60%"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expertise produit complète",
      description: "Une équipe design + dev + produit, pas des prestataires isolés.",
      benefit: "Vision cohérente et alignée"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code propre et scalable",
      description: "Vous obtenez une base technique solide, prête à évoluer.",
      benefit: "Évolutivité garantie"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Vision orientée ROI",
      description: "Chaque livrable est pensé pour la validation du marché ou la croissance.",
      benefit: "ROI mesurable dès le lancement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accompagnement transparent",
      description: "Process clair, suivi en temps réel sur Notion et Slack.",
      benefit: "Zéro surprise, 100% transparence"
    }
  ];

  const results = [
    {
      metric: "MVP livré en",
      value: "< 8 semaines",
      description: "Délai moyen de livraison"
    },
    {
      metric: "Taux de satisfaction",
      value: "> 90%",
      description: "Clients satisfaits"
    },
    {
      metric: "Prototype validé par",
      value: "Investisseurs / utilisateurs",
      description: "Taux de validation"
    },
    {
      metric: "Temps moyen idée → mise en ligne",
      value: "< 2 mois",
      description: "Time-to-market"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-surface-muted">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="POURQUOI CONVERTLABS"
          title="5 atouts qui font la différence"
        />

        <div className="max-w-6xl mx-auto">
          {/* Avantages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-brand-blue mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium font-be-vietnam-pro text-text-hero mb-3">
                  {advantage.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                <div className="text-xs text-brand-green font-medium bg-brand-green/10 px-3 py-1 rounded-full inline-block">
                  {advantage.benefit}
                </div>
              </Card>
            ))}
          </div>

          {/* Résultats et indicateurs */}
          <div className="bg-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Résultats & indicateurs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-blue mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm font-medium text-text-hero mb-1">
                    {result.metric}
                  </div>
                  <div className="text-xs text-text-muted">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Livrables */}
          <div className="bg-brand-black text-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro mb-8 text-center">
              Livrables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Prototype cliquable (Figma)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Code source documenté (GitHub)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Version hébergée (Vercel / Netlify)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Documentation produit (Notion)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Design system complet</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Rapport de tests utilisateurs</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Plan d&apos;optimisation ASO (optionnel)</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-brand-green text-black text-lg px-8 py-6 rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
              asChild
            >
              <a href="#rendez-vous">
                Découvrir nos résultats
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
