"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Target, Zap } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignMVPApproach() {
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

  const approachSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Design Sprint",
      description: "Cadrer rapidement le besoin, aligner les équipes et poser les bases produit.",
      duration: "5 jours à 2 semaines"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prototypage Figma",
      description: "Visualiser, tester et valider les choix avant développement.",
      duration: "1 à 3 semaines"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Développement Front",
      description: "Développement web et mobile sur stack moderne (React, React Native, Next.js, Vue.js, Tailwind).",
      duration: "4 à 8 semaines"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Optimisation ASO",
      description: "Maximiser la visibilité et les téléchargements sur les stores.",
      duration: "1 à 3 semaines"
    }
  ];

  const methodology = [
    {
      step: "1. Cadrage & Design Sprint",
      objective: "Clarifier les besoins, définir le scope produit",
      deliverables: "Atelier, user flow, wireframes",
      duration: "5 jours à 2 semaines"
    },
    {
      step: "2. Prototype haute fidélité",
      objective: "Créer un prototype validé par les utilisateurs",
      deliverables: "Maquettes + prototype cliquable",
      duration: "1 à 3 semaines"
    },
    {
      step: "3. Développement MVP",
      objective: "Construire la première version fonctionnelle",
      deliverables: "MVP hébergé et testé",
      duration: "4 à 8 semaines"
    },
    {
      step: "4. Scale & maintenance",
      objective: "Améliorer et fiabiliser le produit",
      deliverables: "Nouvelles features, ASO, TMA",
      duration: "en continu"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE APPROCHE"
          title="Design → Prototype → Build → Scale"
        />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Nous combinons <strong>exigence technique</strong> et <strong>vitesse d&apos;exécution</strong>.
              Chaque projet suit un processus clair avec des sprints courts et des validations intermédiaires.
            </p>
          </div>

          {/* Étapes de l'approche */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {approachSteps.map((step, index) => (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-brand-blue mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium font-be-vietnam-pro text-text-hero mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="text-xs text-brand-blue font-medium">
                  {step.duration}
                </div>
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
