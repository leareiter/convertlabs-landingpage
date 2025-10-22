"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Settings, Zap, Users } from "lucide-react";
import HeaderSection from "@/components/header-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AutomatisationCRMOffers() {
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
      icon: <Search className="w-8 h-8" />,
      title: "Audit & architecture CRM",
      features: [
        "Analyse des outils et process existants",
        "Cartographie du cycle de vie client (du lead au closing)",
        "Définition de l'architecture cible et des flux de données",
        "Recommandations d'outils et de connecteurs adaptés"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Implémentation CRM",
      features: [
        "Déploiement de CRM : HubSpot, Pipedrive ou Airtable CRM",
        "Création des pipelines, propriétés et dashboards",
        "Migration et nettoyage des données",
        "Mise en place du scoring et des automatisations"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intégration d'outils & automatisation",
      features: [
        "Connexion entre CRM, site web, Slack, Google Workspace, etc.",
        "Automatisation des tâches : relances, notifications, reportings",
        "Développements sur mesure via API si nécessaire",
        "Configuration de reporting automatisés (Data Studio, Notion, HubSpot Reports)"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Optimisation & formation",
      features: [
        "Suivi de l'usage réel du CRM et ajustements",
        "Formation des équipes commerciales et marketing",
        "Documentation et amélioration continue"
      ]
    }
  ];

  const formats = [
    {
      format: "Projet clé-en-main (implémentation CRM)",
      description: "Audit, setup complet, migration, formation",
      budget: "10–30 k€",
      delay: "3–6 semaines"
    },
    {
      format: "Audit / Conseil",
      description: "Diagnostic et recommandations",
      budget: "2–5 k€",
      delay: "1–2 semaines"
    },
    {
      format: "Abonnement optimisation",
      description: "Suivi mensuel, reporting, ajustements",
      budget: "3–8 k€/mois",
      delay: "Mensuel"
    },
    {
      format: "Formation / Coaching",
      description: "Sessions HubSpot / Make / CRM",
      budget: "1–3 k€",
      delay: "Selon besoin"
    }
  ];

  const stack = [
    {
      category: "CRM",
      tools: "HubSpot, Pipedrive, Airtable CRM, Salesforce (selon périmètre)"
    },
    {
      category: "Automatisation",
      tools: "Make, Zapier, n8n"
    },
    {
      category: "Data & reporting",
      tools: "Google Data Studio, HubSpot Reports, Airtable Interface"
    },
    {
      category: "Communication interne",
      tools: "Slack, Discord, Notion, Google Chat"
    },
    {
      category: "Autres intégrations",
      tools: "Lemlist, Apollo, Calendly, Google Sheets, Webflow"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="OFFRE & PÉRIMÈTRE"
          title="4 domaines d'expertise CRM"
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
          <div className="bg-surface-muted rounded-lg p-6 mb-16">
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
              *Les prix varient selon la complexité des intégrations et le nombre d&apos;utilisateurs.
            </p>
          </div>

          {/* Stack technique */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Stack technique
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stack.map((item, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-medium text-lg text-text-hero mb-3">{item.category}</h4>
                  <p className="text-text-muted text-sm">{item.tools}</p>
                </Card>
              ))}
            </div>
            <p className="text-sm text-text-muted mt-6 text-center">
              *(Nous restons outil-agnostiques : chaque configuration est conçue sur mesure selon la taille, le budget et la maturité du client.)*
            </p>
          </div>

          {/* Livrables */}
          <div className="bg-brand-black text-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro mb-8 text-center">
              Livrables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Cahier des charges complet du CRM</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Instance CRM configurée et testée</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Automatisations et intégrations prêtes à l&apos;emploi</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Tableau de bord de reporting (HubSpot, Airtable Interface, Data Studio)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Documentation Notion sur les process internes</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-green rounded-full mr-3 mt-2 shrink-0"></div>
                <span className="text-sm">Sessions de formation et support post-livraison</span>
              </div>
            </div>
          </div>

          {/* Résultats et indicateurs */}
          <div className="bg-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-medium font-be-vietnam-pro text-text-hero mb-8 text-center">
              Résultats & indicateurs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-sm font-medium text-text-hero mb-1">CRM opérationnel</div>
                <div className="text-xs text-text-muted">en moins de 30 jours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">80%</div>
                <div className="text-sm font-medium text-text-hero mb-1">Adoption utilisateur</div>
                <div className="text-xs text-text-muted">Taux d&apos;adoption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">–30%</div>
                <div className="text-sm font-medium text-text-hero mb-1">Temps de suivi</div>
                <div className="text-xs text-text-muted">Réduction du temps commercial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">0</div>
                <div className="text-sm font-medium text-text-hero mb-1">Perte de lead</div>
                <div className="text-xs text-text-muted">Zéro perte ou double saisie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-sm font-medium text-text-hero mb-1">Reporting automatisé</div>
                <div className="text-xs text-text-muted">En temps réel</div>
              </div>
            </div>
          </div>

          <div className="text-center">
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
