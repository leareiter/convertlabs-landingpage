"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import HeaderSection from "./header-section";
import { gsap } from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin();
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
  }[];
  context?: string;
  solution?: string | string[];
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
    solution: ["Design Sprint pour cadrer", "Prototype Figma pour tester", "MVP en sprints courts (delivery 4 à 8 semaines)", "Feedback utilisateurs", "Documentation et transfert."],
    kpis: [
      {
        label: "MVP livré",
        value: "4-6 semaines",
      },
      {
        label: "Budget maîtrisé",
        value: "24k€",
      },
      {
        label: "Beta utilisateurs",
        value: "200+",
      },
      {
        label: "Préparation levée",
        value: "100%",
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
    solution: ["Audit du pipeline", "Architecture CRM", "Implémentation structurée", "Automatisations", "Dashboards", "Formation", "Puis amélioration continue."],
    kpis: [
      {
        label: "Taux de closing",
        value: "+30%",
      },
      {
        label: "Temps admin",
        value: "-70%",
      },
      {
        label: "Perte de leads",
        value: "0%",
      },
      {
        label: "Pipeline temps réel",
        value: "100%",
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
    solution: ["ICP + messages", "Multi-comptes", "Séquences", "Qualification", "Reporting hebdo", "A/B tests", "Optimisation du reply rate jusqu'à atteindre les RDV cibles."],
    kpis: [
      {
        label: "RDV qualifiés",
        value: "12-20/mois",
      },
      {
        label: "Taux d'acceptation",
        value: "25-35%",
      },
      {
        label: "Taux de réponse",
        value: "12-20%",
      },
      {
        label: "ROI",
        value: "< 30 jours",
      }
    ]
  }
];

export default function UseCaseSection() {
  const [expandedUseCase, setExpandedUseCase] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const toggleUseCase = (useCaseId: string) => {
    const isCurrentlyExpanded = expandedUseCase === useCaseId;
    
    if (isCurrentlyExpanded) {
      // Fermer le dropdown
      const contentElement = contentRefs.current[useCaseId];
      if (contentElement) {
        gsap.to(contentElement, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            setExpandedUseCase(null);
          }
        });
      } else {
        setExpandedUseCase(null);
      }
    } else {
      // Ouvrir le dropdown
      setExpandedUseCase(useCaseId);
      
      // Attendre que le DOM soit mis à jour
      setTimeout(() => {
        const contentElement = contentRefs.current[useCaseId];
        if (contentElement) {
          // Définir la hauteur initiale à 0
          gsap.set(contentElement, { height: 0, opacity: 0 });
          
          // Animer vers la hauteur complète
          gsap.to(contentElement, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      }, 10);
    }
  };

  return (
    <section ref={sectionRef}  id="use-cases" className="py-16 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="CAS D'USAGE TYPIQUES"
          title="Nos clients nous font confiance"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-surface-muted p-2 rounded-md">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className={`bg-white border border-surface-muted overflow-hidden ${
                index === 0 ? 'rounded-t-md' : 
                index === useCases.length - 1 ? 'rounded-b-md' : 
                ''
              }`}>
                {/* Header du dropdown */}
                <button
                  onClick={() => toggleUseCase(useCase.id)}
                  className={`w-full p-6 transition-all duration-300 text-left relative overflow-hidden flex items-center justify-between ${
                    expandedUseCase === useCase.id
                      ? "bg-white text-gray-900"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-28">
                      {useCase.logo.startsWith('/') ? (
                        <img 
                          src={useCase.logo} 
                          alt={useCase.company} 
                          className={`object-contain h-16 w-24 ${
                            expandedUseCase === useCase.id ? '' : 'grayscale'
                          }`}
                        />
                      ) : (
                        <div className={`bg-gray-100 flex items-center justify-center text-2xl h-16 w-24 ${
                          expandedUseCase === useCase.id ? '' : 'grayscale'
                        }`}>
                          {useCase.logo}
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-regular text-brand-black mb-1">
                        {useCase.company}
                      </h3>
                      <div className="inline-block px-2 py-1 text-black text-xs uppercase rounded-full bg-brand-green">
                        {useCase.verticale}
                      </div>
                    </div>
                  </div>
                  
                  {/* Icône de chevron */}
                  <div className={`transform transition-transform duration-300 ${
                    expandedUseCase === useCase.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {expandedUseCase === useCase.id && (
                    <BorderBeam
                      size={200}
                      duration={2}
                      colorFrom="#adff02"
                      colorTo="transparent"
                      delay={0}
                    />
                  )}
                </button>

                {/* Contenu du dropdown */}
                {expandedUseCase === useCase.id && (
                  <div 
                    ref={(el) => {
                      contentRefs.current[useCase.id] = el;
                    }}
                    className="px-6 pb-6 border-t border-surface-muted font-be-vietnam-pro tracking-[-0.05em]"
                  >
                    <div className="pt-6">
                      {/* Contexte */}
                      <div className="mb-8">
                        <p className="text-text-muted text-lg">
                          {useCase.context}
                        </p>
                      </div>

                      {/* Objectifs */}
                      {useCase.problems && (
                        <div className="mb-8">
                          <h4 className="font-regular text-2xl text-brand-black mb-6">
                            Objectifs
                          </h4>
                          <div className="grid gap-3">
                            {useCase.problems.map((problem, problemIndex) => (
                              <div key={problemIndex} className="flex items-start p-4 border border-gray-200 rounded-lg">
                                <div className="w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                                </div>
                                <span className="text-text-muted text-lg">{problem}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Méthode */}
                      {useCase.solution && (
                        <div className="mb-8">
                          <h4 className="font-regular text-2xl text-brand-black mb-6">
                            Méthode
                          </h4>
                          <div className="grid gap-3">
                            {Array.isArray(useCase.solution) ? (
                              useCase.solution.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start p-4 border border-gray-200 rounded-lg">
                                  <div className="w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0">
                                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                                  </div>
                                  <span className="text-gray-700 text-lg leading-relaxed">{step}</span>
                                </div>
                              ))
                            ) : (
                              <div className="p-6 border border-gray-200 rounded-lg">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                  {useCase.solution}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* KPIs */}
                      {useCase.kpis && (
                        <div>
                          <h4 className="font-regular text-2xl text-brand-black mb-6">
                            Résultats
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {useCase.kpis.map((kpi, kpiIndex) => (
                              <div key={kpiIndex} className="bg-brand-black rounded-lg p-6 text-white hover:bg-brand-black/90 transition-all duration-300 group">
                                <div className="text-5xl font-regular text-white mb-3 group-hover:text-brand-green transition-colors duration-300">
                                  {kpi.value}
                                </div>
                                <div className="text-lg font-regular text-white/90 mb-2">
                                  {kpi.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
