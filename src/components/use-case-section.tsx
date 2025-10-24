"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface UseCase {
  id: string;
  company: string;
  logo: string;
  testimonial: string;
  author: string;
  position: string;
  rating: number;
  active?: boolean;
}

const useCases: UseCase[] = [
  {
    id: "submagic",
    company: "Submagic",
    logo: "🚀",
    testimonial: "Notre collaboration avec Florian a été une réussite: ultra efficace, réactif et un design de qualité. On a pu déployer rapidement, démultiplier nos pages et booster notre SEO.",
    author: "Elie Lechanoine",
    position: "CMO @ Submagic",
    rating: 5,
    active: true
  },
  {
    id: "vt-netzwelt",
    company: "vt netzwelt",
    logo: "🌐",
    testimonial: "Une approche méthodique et des résultats concrets. Notre système d'automatisation CRM a transformé notre processus de vente.",
    author: "Marie Dubois",
    position: "Directrice Commerciale @ vt netzwelt",
    rating: 5
  },
  {
    id: "magicpost",
    company: "MagicPost_",
    logo: "✨",
    testimonial: "La prospection LinkedIn automatisée nous a fait gagner un temps précieux. ROI immédiat sur nos campagnes.",
    author: "Thomas Martin",
    position: "CEO @ MagicPost_",
    rating: 5
  },
  {
    id: "mahd",
    company: "mahd.",
    logo: "🎯",
    testimonial: "Design MVP exceptionnel qui nous a permis de valider notre concept rapidement. Interface intuitive et conversion optimisée.",
    author: "Sarah Chen",
    position: "Fondatrice @ mahd.",
    rating: 5
  }
];

export default function UseCaseSection() {
  const [activeUseCase, setActiveUseCase] = useState("submagic");

  const currentUseCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos clients nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé ces entreprises à transformer leur vision en réalité digitale.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Logos empilés à gauche */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveUseCase(useCase.id)}
                    className={`w-full p-4 rounded-lg border-xs transition-all duration-200 text-left ${
                      activeUseCase === useCase.id
                        ? "border-brand-green bg-brand-green/5"
                        : "border-surface-muted hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{useCase.logo}</div>
                      <div>
                        <div className={`font-medium ${
                          activeUseCase === useCase.id ? "text-brand-green" : "text-gray-900"
                        }`}>
                          {useCase.company}
                        </div>
                        <div className="text-sm text-gray-500">
                          {useCase.position.split('@')[1]?.trim()}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Témoignage principal */}
            <div className="lg:col-span-3">
              <Card className="p-8 border border-surface-muted rounded-md bg-white">
                <div className="text-center">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(currentUseCase.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Témoignage */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    &ldquo;{currentUseCase.testimonial}&rdquo;
                  </blockquote>

                  {/* Auteur */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {currentUseCase.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {currentUseCase.author}
                      </div>
                      <div className="text-gray-600">
                        {currentUseCase.position}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
