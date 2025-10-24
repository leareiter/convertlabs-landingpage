'use client';

import React from 'react';
import { Option, PrototypeType, FidelityType, TargetType } from '@/hooks/use-project-calculator';
import { Slider } from '@/components/ui/slider';

interface PrototypeFormProps {
  prototypeData: {
    type?: string;
    screens?: number;
    fidelity?: string;
    target?: string;
  };
  setPrototypeData: (data: {
    type?: string;
    screens?: number;
    fidelity?: string;
    target?: string;
  }) => void;
  step: number;
  brandClasses: {
    border: string;
    accent: string;
    text: string;
    button: string;
  };
  getTextColor: (isSelected: boolean, defaultColor?: string) => string;
}

const PrototypeForm: React.FC<PrototypeFormProps> = ({ prototypeData, setPrototypeData, step, brandClasses, getTextColor }) => {
  if (step === 1) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Quel livrable est prioritaire ?</h3>
        <p className="text-text-muted">Partez d&apos;un prototype ou d&apos;un Design System.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'figma', label: 'Prototype Figma', desc: 'Maquettes interactives, user flows, tests utilisateurs.' },
          { value: 'design', label: 'Design System', desc: 'Composants, guidelines, documentation complète.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setPrototypeData({ ...prototypeData, type: o.value as PrototypeType })}
            className={`w-full p-6 rounded-xl border text-left transition-all ${
              prototypeData.type === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-lg ${getTextColor(prototypeData.type === o.value)}`}>{o.label}</div>
            <div className={`mt-1 ${getTextColor(prototypeData.type === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Combien d&apos;écrans ?</h3>
        <p className="text-text-muted">Estimez le nombre d&apos;écrans nécessaires pour votre prototype.</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Slider
            value={[prototypeData.screens || 5]}
            onValueChange={(value) => setPrototypeData({ ...prototypeData, screens: value[0] })}
            className="w-full h-8"
            min={1}
            max={50}
            step={1}
          />
          <div className="flex justify-between text-sm text-text-muted mt-4">
            <span>1</span>
            <span className="font-medium text-lg">{prototypeData.screens || 5} écran{(prototypeData.screens || 5) > 1 ? 's' : ''}</span>
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (step === 3) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Niveau de fidélité</h3>
        <p className="text-text-muted">Choisissez le niveau de détail souhaité pour vos maquettes.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {[
          { value: 'wireframe', label: 'Wireframes', desc: 'Structure, hiérarchie, navigation. Idéal pour valider l&apos;UX.' },
          { value: 'high', label: 'Haute fidélité', desc: 'Design final, couleurs, typographie. Prêt pour le développement.' },
          { value: 'pixel', label: 'Pixel perfect', desc: 'Détails précis, animations, micro-interactions. Design System complet.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setPrototypeData({ ...prototypeData, fidelity: o.value as FidelityType })}
            className={`p-3 md:p-4 rounded-xl border text-left transition-all ${
              prototypeData.fidelity === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(prototypeData.fidelity === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(prototypeData.fidelity === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 4) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Plateforme cible</h3>
        <p className="text-text-muted">Pour quelle plateforme développez-vous ce prototype ?</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {[
          { value: 'lp', label: 'Landing Page', desc: 'Page unique, conversion optimisée.' },
          { value: 'web', label: 'Site Web', desc: 'Multi-pages, navigation, contenu.' },
          { value: 'mobile', label: 'Mobile', desc: 'App mobile, interface tactile.' },
          { value: 'both', label: 'Web + Mobile', desc: 'Responsive design, toutes plateformes.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setPrototypeData({ ...prototypeData, target: o.value as TargetType })}
            className={`p-3 md:p-4 rounded-xl border text-left transition-all ${
              prototypeData.target === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(prototypeData.target === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(prototypeData.target === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  return null;
};

export default PrototypeForm;