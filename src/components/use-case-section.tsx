"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import HeaderSection from "./header-section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseCase {
  id: string;
  company: string;
  logo: string;
  testimonial: string;
  author: string;
  verticale: string;
  verticaleDetail: string;
  position: string;
  rating: number;
  active?: boolean;
  problems?: string[];
  kpis?: {
    label: string;
    value: string;
    description: string;
  }[];
  context?: string;
  solution?: string;
  results?: string;
}

const useCases: UseCase[] = [
  {
    id: "healthsyncr",
    company: "HealthSyncr",
    logo: "/healthsyncr.png",
    verticale: "Design / Developpement Front-End / MVP",
    verticaleDetail: "Développement d'un MVP",
    testimonial: "En 4 semaines, on est passés de l'idée au MVP validé avec 200 early adopters. ConvertLabs a compris qu'on n'avait pas besoin de perfection, mais d'un produit testable rapidement. Aujourd'hui on lève notre pré-seed grâce à cette traction.",
    author: "Julien Marceau",
    position: "Founder @ HealthSyncr",
    rating: 5,
    context: "SaaS MedTech early-stage qui développe une plateforme pour structurer et digitaliser les entretiens et suivis médicaux au sein des PME.",
    problems: [
      "Concevoir et livrer un MVP fonctionnel en 4 à 8 semaines",
      "Permettre à la startup de tester le marché",
      "Lever des fonds rapidement",
      "Budget maîtrisé et délais courts"
    ],
    solution: "Méthode ConvertLabs : Design Sprint pour cadrer, Prototype Figma pour tester, MVP en sprints courts (delivery 4 à 8 semaines), feedback utilisateurs, documentation et transfert.",
    kpis: [
      {
        label: "MVP livré",
        value: "4-6 semaines",
        description: "délai respecté"
      },
      {
        label: "Budget maîtrisé",
        value: "24k€",
        description: "vs 60-80k€ agence classique"
      },
      {
        label: "Beta utilisateurs",
        value: "200+",
        description: "recrutés en beta"
      },
      {
        label: "Préparation levée",
        value: "✅",
        description: "fonds prête"
      }
    ],
    active: true
  },
  {
    id: "impulse-conseil",
    company: "Impulse Conseil",
    logo: "/impulse_conseil.png",
    verticale: "CRM & Automatisation",
    verticaleDetail: "CRM",
    testimonial: "Avant ConvertLabs, notre CRM était un cimetière de données. Maintenant, chaque lead est automatiquement qualifié, relancé et suivi. On a gagné 15h par semaine sur l'admin et augmenté notre taux de closing de 40%. C'est une machine bien huilée.",
    author: "Sarah Bentayeb",
    position: "CEO @ Impulse Conseil",
    rating: 5,
    context: "Agence de conseil en transformation digitale de 12 consultants, accompagnant une quarantaine de clients actifs sur leurs enjeux d'efficacité opérationnelle.",
    problems: [
      "Structurer leur CRM et automatiser le pipeline",
      "Éliminer la perte de leads",
      "Augmenter le taux de closing",
      "Améliorer la visibilité commerciale"
    ],
    solution: "Méthode ConvertLabs : Audit du pipeline, architecture CRM, implémentation structurée, automatisations, dashboards, formation, puis amélioration continue.",
    kpis: [
      {
        label: "Taux de closing",
        value: "+30%",
        description: "amélioration significative"
      },
      {
        label: "Temps admin",
        value: "-70%",
        description: "de 3h/jour à 50 min/jour"
      },
      {
        label: "Perte de leads",
        value: "0%",
        description: "vs 30% avant"
      },
      {
        label: "Pipeline temps réel",
        value: "✅",
        description: "visibilité complète"
      }
    ]
  },
  {
    id: "afc-stab",
    company: "AFC-Stab",
    logo: "/afc_stab.png",
    verticale: "Prospection LinkedIn multi-comptes",
    verticaleDetail: "Prospection LinkedIn multi-comptes",
    testimonial: "On faisait de la prospection manuelle depuis 2 ans. Résultat : 2-3 RDV par mois, pour un temps fou. Depuis qu'on bosse avec ConvertLabs, on a 12 à 14 rendez-vous qualifiés chaque mois, en pilote automatique. Je ne touche plus à rien, je me connecte juste pour prendre les appels.",
    author: "Henrick Merle",
    position: "Président @ AFC-Stab",
    rating: 5,
    context: "Entreprise d'usinage numérique de précision fournissant des pièces techniques pour de grands acteurs de l'aéronautique et du spatial.",
    problems: [
      "Mettre en place un système de prospection LinkedIn",
      "Générer 12 à 20 rendez-vous qualifiés par mois",
      "Cibler le secteur aéro/spatial",
      "Sans SDR interne"
    ],
    solution: "Méthode ConvertLabs : ICP + messages, multi-comptes, séquences, qualification, reporting hebdo, A/B tests et optimisation du reply rate jusqu'à atteindre les RDV cibles.",
    kpis: [
      {
        label: "RDV qualifiés",
        value: "12-20/mois",
        description: "objectif atteint"
      },
      {
        label: "Taux d'acceptation",
        value: "25-35%",
        description: "performance LinkedIn"
      },
      {
        label: "Taux de réponse",
        value: "12-20%",
        description: "engagement élevé"
      },
      {
        label: "ROI",
        value: "<30 jours",
        description: "retour rapide"
      }
    ]
  }
];

export default function UseCaseSection() {
  const [activeUseCase, setActiveUseCase] = useState("healthsyncr");
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentUseCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];
  
  // GSAP Animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animation d'entrée de la section
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Reprendre le timer quand la section entre dans la vue
              if (!isHovered) {
                intervalRef.current = setInterval(() => {
                  setActiveUseCase(prev => {
                    const currentIndex = useCases.findIndex(uc => uc.id === prev);
                    const nextIndex = (currentIndex + 1) % useCases.length;
                    return useCases[nextIndex].id;
                  });
                }, 5000);
              }
            },
            onLeave: () => {
              // Arrêter le timer quand la section sort de la vue
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
            }
          }
        }
      );

      // Animation de la navigation sticky
      if (navigationRef.current) {
        gsap.fromTo(navigationRef.current,
          { opacity: 0, x: -50, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: navigationRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }


      // Animation des cartes de navigation au hover
      const navCards = navigationRef.current?.querySelectorAll('button');
      navCards?.forEach((card, index) => {
        gsap.set(card, { transformOrigin: "center center" });
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });

    }, [sectionRef, navigationRef, contentRef]);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveUseCase(prev => {
          const currentIndex = useCases.findIndex(uc => uc.id === prev);
          const nextIndex = (currentIndex + 1) % useCases.length;
          return useCases[nextIndex].id;
        });
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const handleUseCaseChange = (useCaseId: string) => {
    if (useCaseId !== activeUseCase) {
      setActiveUseCase(useCaseId);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 5s linear infinite;
        }
      `}</style>
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="CAS D'USAGE TYPIQUES"
          title="Nos clients nous font confiance"
        />
        
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Navigation des cas d'usage - Sticky avec header */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                  <div ref={navigationRef} className="bg-white rounded-md border border-surface-muted overflow-hidden">
                  {useCases.map((useCase, index) => (
                    <div
                      key={useCase.id}
                      data-use-case={useCase.id}
                      className="relative"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        // Délai de 300ms pour un hover plus smooth
                        hoverTimeoutRef.current = setTimeout(() => {
                          handleUseCaseChange(useCase.id);
                        }, 300);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                        // Annuler le changement si on quitte avant le délai
                        if (hoverTimeoutRef.current) {
                          clearTimeout(hoverTimeoutRef.current);
                        }
                      }}
                    >
                      <button
                        onClick={() => handleUseCaseChange(useCase.id)}
                        className={`w-full h-32 p-6 transition-all duration-300 text-left relative overflow-hidden flex items-center justify-center ${
                          index === 0 ? "rounded-t-md" : 
                          index === useCases.length - 1 ? "rounded-b-md" : 
                          "rounded-none"
                        } ${
                          index < useCases.length - 1 ? "border-b border-surface-muted" : ""
                        } ${
                          activeUseCase === useCase.id
                            ? "bg-white text-gray-900"
                            : "bg-white text-gray-900 opacity-30 hover:opacity-50"
                        }`}
                      >
                        <BorderBeam
                          size={200}
                          duration={2}
                          colorFrom="#adff02"
                          colorTo="transparent"
                          delay={0}
                        />
                        <div className="relative z-10">
                          {useCase.logo.startsWith('/') ? (
                            <img 
                              src={useCase.logo} 
                              alt={useCase.company} 
                              className={`w-full object-contain ${
                                useCase.id === 'afc-stab' ? 'h-10' : 'h-28'
                              } ${
                                activeUseCase === useCase.id ? '' : 'grayscale'
                              }`}
                            />
                          ) : (
                            <div className={`w-full bg-gray-100 flex items-center justify-center text-2xl ${
                              useCase.id === 'afc-stab' ? 'h-10' : 'h-28'
                            } ${
                              activeUseCase === useCase.id ? '' : 'grayscale'
                            }`}>
                              {useCase.logo}
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu principal - Scroll normal */}
            <div className="lg:col-span-3">
              <div className="p-2 bg-surface-muted rounded-md">
                <div 
                  ref={contentRef} 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="bg-white rounded-md p-8  border border-surface-muted">
                  {/* En-tête avec hiérarchie claire */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-4xl font-regular text-brand-black mb-2">
                          {currentUseCase.company}
                        </h2>
                        <div className={`inline-block px-4 py-2 text-white text-sm  uppercase rounded-full ${
                          currentUseCase.verticale.includes('Design') || currentUseCase.verticale.includes('MVP') 
                            ? 'bg-brand-purple' 
                            : currentUseCase.verticale.includes('LinkedIn') || currentUseCase.verticale.includes('Prospection')
                            ? 'bg-brand-blue'
                            : currentUseCase.verticale.includes('CRM') || currentUseCase.verticale.includes('Automatisation')
                            ? 'bg-brand-orange'
                            : 'bg-brand-green'
                        }`}>
                          {currentUseCase.verticale}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {currentUseCase.context}
                    </p>
                  </div>


                  {/* Objectifs - Structure améliorée */}
                  {currentUseCase.problems && (
                    <div className="mb-8">
                      <h3 className="font-regular text-2xl text-brand-black mb-4">
                        Objectifs
                      </h3>
                      <div className="grid gap-3">
                        {currentUseCase.problems.map((problem, index) => (
                          <div key={index} className="flex items-start p-4 bg-white border border-gray-200 rounded-md">
                            <div className="w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                            </div>
                            <span className="text-gray-700 font-medium">{problem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Méthode - Présentation claire */}
                  {currentUseCase.solution && (
                    <div className="mb-8">
                      <h3 className="font-regular text-2xl text-brand-black mb-4">
                        Méthode
                      </h3>
                      <div className="p-6 bg-brand-black/5 rounded-md border border-brand-black/10">
                        <p className="text-gray-700 leading-relaxed">
                          {currentUseCase.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* KPIs - Hiérarchie visuelle renforcée */}
                  {currentUseCase.kpis && (
                    <div>
                      <h3 className="font-regular text-2xl text-brand-black mb-6">
                        Résultats
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentUseCase.kpis.map((kpi, index) => (
                          <div key={index} className="bg-linear-to-br from-white to-gray-50 border-2 border-surface-muted rounded-md p-6 text-center hover:border-brand-green/30 transition-all duration-300">
                            <div className="text-4xl font-bold text-brand-black mb-2">{kpi.value}</div>
                            <div className="text-lg font-semibold text-gray-800 mb-1">{kpi.label}</div>
                            <div className="text-sm text-gray-600">{kpi.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
