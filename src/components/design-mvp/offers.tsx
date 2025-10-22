"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Code, Smartphone, TrendingUp } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DesignMVPOffers() {
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

  const offers = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & UX/UI",
      features: [
        "Création ou refonte d'interfaces",
        "Audit d'expérience et design system complet",
        "Maquettes haute fidélité sous Figma",
        "Tests utilisateurs rapides pour valider les choix d'interface"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Prototype & Maquettage",
      features: [
        "Conception d'un prototype cliquable haute fidélité",
        "Simulation complète du parcours utilisateur",
        "Présentation investisseur / test utilisateur"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Développement Front & MVP",
      features: [
        "Développement React / Next.js (web) ou React Native (mobile)",
        "Intégration pixel-perfect à partir des maquettes",
        "Architecture front + API légère (Node.js, Django, Laravel, Nest.js)",
        "Livraison d'un MVP complet et documenté"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ASO (App Store Optimization)",
      features: [
        "Audit complet des fiches App Store / Play Store",
        "Optimisation des métadonnées, visuels et descriptions",
        "A/B testing visuel et suivi de la performance"
      ]
    }
  ];

  const formats = [
    {
      format: "Prototype / Design Sprint",
      description: "Maquettes + prototype testable",
      budget: "4–10 k€",
      delay: "2–3 semaines"
    },
    {
      format: "MVP complet",
      description: "Développement web ou mobile fonctionnel",
      budget: "10–50 k€",
      delay: "4–8 semaines"
    },
    {
      format: "App complexe",
      description: "Produit sur mesure avec back-end complet",
      budget: "50–250 k€",
      delay: "2–6 mois"
    },
    {
      format: "ASO",
      description: "Audit + optimisation store",
      budget: "1,5–5 k€",
      delay: "1 à 3 semaines"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="OFFRE & PÉRIMÈTRE"
          title="4 domaines d'expertise"
        />

        <div className="max-w-6xl mx-auto">
          {/* Offres principales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {offers.map((offer, index) => (
              <Card
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-brand-blue mb-4">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-medium font-be-vietnam-pro text-text-hero mb-4">
                  {offer.title}
                </h3>
                <ul className="space-y-2">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 mt-2 shrink-0"></div>
                      <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Formats et budgets */}
          <div className="bg-surface-muted rounded-lg p-6">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Formats & budgets
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Format</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Description</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Budget moyen</th>
                    <th className="text-left py-4 px-4 font-medium text-text-hero">Délai moyen</th>
                  </tr>
                </thead>
                <tbody>
                  {formats.map((format, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium text-text-hero">{format.format}</td>
                      <td className="py-4 px-4 text-text-muted">{format.description}</td>
                      <td className="py-4 px-4 text-brand-blue font-medium">{format.budget}</td>
                      <td className="py-4 px-4 text-brand-green font-medium">{format.delay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-muted mt-4 text-center">
              *Les budgets varient selon la complexité, la stack et le périmètre défini en amont.
            </p>
          </div>

          {/* Stack technique */}
          <div className="mt-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Stack technique
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">Design & prototypage</h4>
                <p className="text-text-muted text-sm">Figma, FigJam, Maze (tests utilisateurs)</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">Front-end</h4>
                <p className="text-text-muted text-sm">React, Next.js, Vue.js, Tailwind CSS</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">Mobile</h4>
                <p className="text-text-muted text-sm">React Native</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">Backend (léger)</h4>
                <p className="text-text-muted text-sm">Node.js, Django, Laravel</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">CI/CD & hébergement</h4>
                <p className="text-text-muted text-sm">GitHub, Vercel, Netlify, Docker</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-medium text-lg text-text-hero mb-3">ASO</h4>
                <p className="text-text-muted text-sm">AppAnnie, SensorTower, MobileAction</p>
              </Card>
            </div>
            <p className="text-sm text-text-muted mt-6 text-center">
              *(Aucun outil no-code n&apos;est utilisé pour les produits ou SaaS. Le no-code est réservé aux sites marketing simples si le projet le justifie.)*
            </p>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-brand-black text-white text-lg px-8 py-6 rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
              asChild
            >
              <a href="#rendez-vous">
                Obtenir un devis personnalisé
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
