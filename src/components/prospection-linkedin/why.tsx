"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Target, Users, BarChart3 } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProspectionLinkedInWhy() {
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
      icon: <Shield className="w-6 h-6" />,
      title: "Protection LinkedIn garantie",
      description: "Zéro risque de bannissement grâce à nos méthodes éprouvées.",
      benefit: "Compte LinkedIn sécurisé"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ciblage ultra-précis",
      description: "Nous trouvons les bons prospects, pas juste des contacts.",
      benefit: "Taux de qualification élevé"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatisation intelligente",
      description: "Machine à leads qui tourne sans vous, 24h/24.",
      benefit: "Gain de temps considérable"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Messages personnalisés",
      description: "Chaque message est adapté au profil du prospect.",
      benefit: "Taux de réponse optimisé"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI mesurable",
      description: "Suivi précis des performances et du retour sur investissement.",
      benefit: "ROI transparent et mesurable"
    }
  ];

  return (
    <section ref={sectionRef} id="why" className="py-16 md:py-24 bg-surface-muted">
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
