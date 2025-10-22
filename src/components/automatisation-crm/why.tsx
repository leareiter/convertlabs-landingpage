"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Code, Users, Shield } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AutomatisationCRMWhy() {
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
      icon: <Target className="w-6 h-6" />,
      title: "Vision business avant outil",
      description: "On structure vos process avant de parler technique.",
      benefit: "Process optimisés dès le départ"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatisation mesurée",
      description: "Des workflows utiles, pas des usines à gaz.",
      benefit: "Efficacité réelle, pas de complexité"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Expertise cross-stack",
      description: "CRM, Make, API, reporting : tout est connecté et cohérent.",
      benefit: "Écosystème unifié"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Méthode agile",
      description: "Cadrage rapide, sprints courts, résultats mesurables.",
      benefit: "Livraison rapide et itérative"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accompagnement durable",
      description: "Nous restons en support pour faire évoluer votre système.",
      benefit: "Support continu et évolutif"
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
