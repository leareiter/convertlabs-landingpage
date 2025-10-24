"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Building, Lightbulb, Smartphone, TrendingUp } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignMVPUseCases() {
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
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup",
      description: "qui veut présenter un MVP solide à des investisseurs",
      challenge: "Besoin d'un prototype crédible rapidement",
      solution: "Design Sprint + Prototype haute fidélité + MVP fonctionnel",
      result: "Présentation investisseur réussie en 4-6 semaines"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "PME",
      description: "qui digitalise un process interne via une web app",
      challenge: "Automatiser des processus manuels",
      solution: "Audit UX + Développement sur mesure + Formation équipe",
      result: "Gain de temps de 70% sur les tâches répétitives"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Porteur de projet",
      description: "qui veut tester son idée sans surinvestir",
      challenge: "Valider le marché avant d'investir massivement",
      solution: "Prototype rapide + Tests utilisateurs + Itérations",
      result: "Validation du concept avec un budget maîtrisé"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Éditeur SaaS",
      description: "qui veut refaire son front-end sans toucher à son back",
      challenge: "Moderniser l'interface sans casser l'existant",
      solution: "Audit UX + Refonte front + Migration progressive",
      result: "Interface moderne sans interruption de service"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Créateur d'app mobile",
      description: "qui veut booster sa visibilité via l'ASO",
      challenge: "Augmenter les téléchargements et la visibilité",
      solution: "Audit ASO + Optimisation store + A/B testing",
      result: "+150% de téléchargements en 3 mois"
    }
  ];


  return (
    <section ref={sectionRef} id="use-cases" className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="CAS D'USAGE TYPIQUES"
          title="Ils nous ont fait confiance"
        />

        <div className="max-w-6xl mx-auto">
          {/* Cas d'usage */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                Prêt à transformer votre idée en produit ?
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
