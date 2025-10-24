'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { TabId } from '@/hooks/use-project-calculator';
import { gsap } from 'gsap';

interface ResultDisplayProps {
  result: {
    min: number;
    max: number;
    weeks?: number;
    accounts?: number;
  };
  brandClasses: {
    border: string;
    accent: string;
    text: string;
    button: string;
  };
  onReset: () => void;
  activeTab: TabId;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  brandClasses,
  onReset
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Animation d'apparition du container
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      // Animation de l'icône avec délai
      if (iconRef.current) {
        gsap.fromTo(iconRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, delay: 0.2, ease: "power2.out" }
        );
      }

      // Animation de la carte avec délai
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 0.4, ease: "power2.out" }
        );
      }

      // Animation du bouton avec délai
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, delay: 0.6, ease: "power2.out" }
        );
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="text-center mb-8">
        <div ref={iconRef} className={`inline-flex items-center justify-center w-16 h-16 ${brandClasses.accent} rounded-full mb-4 shadow-none`}>
          <Check className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Estimation terminée !</h2>
        <p className="text-text-muted">Voici votre estimation personnalisée</p>
      </div>

      <div ref={cardRef} className={`${brandClasses.accent} rounded-md p-8 shadow-none`}>
        <div className="text-center">
          <div className="text-4xl font-bold font-be-vietnam-pro text-white tracking-[-0.05em] mb-2">
            {result.min}€ - {result.max}€
          </div>
          <div className="text-white/80">Budget estimé</div>
        </div>
      </div>

      <div className="text-center">
        <button
          ref={buttonRef}
          onClick={onReset}
          className={`inline-flex items-center px-6 py-3 border ${brandClasses.border} rounded-lg ${brandClasses.text} ${brandClasses.button} hover:${brandClasses.accent} hover:text-white transition-colors shadow-none font-be-vietnam-pro tracking-[-0.05em]`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Nouvelle estimation
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
