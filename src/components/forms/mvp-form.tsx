'use client';

import React from 'react';
import { Option, PlatformType, HasDesignType, BackendType } from '@/hooks/use-project-calculator';
import { Slider } from '@/components/ui/slider';

interface MvpFormProps {
  mvpData: {
    screens?: number;
    platform?: PlatformType;
    hasDesign?: string;
    features?: string[];
    backend?: BackendType;
  };
  setMvpData: (data: {
    screens?: number;
    platform?: PlatformType;
    hasDesign?: string;
    features?: string[];
    backend?: BackendType;
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

const MvpForm: React.FC<MvpFormProps> = ({ mvpData, setMvpData, step, brandClasses, getTextColor }) => {
  if (step === 1) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Combien d'écrans ?</h3>
        <p className="text-text-muted">Estime le nombre d'écrans nécessaires pour ton MVP.</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Slider
            value={[mvpData.screens || 10]}
            onValueChange={(value) => setMvpData({ ...mvpData, screens: value[0] })}
            className="w-full h-8"
            min={5}
            max={50}
            step={1}
          />
          <div className="flex justify-between text-sm text-text-muted mt-4">
            <span>5</span>
            <span className="font-medium text-lg">{mvpData.screens || 10} écran{(mvpData.screens || 10) > 1 ? 's' : ''}</span>
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (step === 2) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Plateforme cible</h3>
        <p className="text-text-muted">Pour quelle plateforme développez-vous ton MVP ?</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {[
          { value: 'web', label: 'Web', desc: 'Application web responsive, accessible sur tous les navigateurs.' },
          { value: 'mobile', label: 'Mobile', desc: 'Application mobile native iOS/Android.' },
          { value: 'both', label: 'Web + Mobile', desc: 'Application hybride, web et mobile simultanément.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setMvpData({ ...mvpData, platform: o.value as PlatformType })}
            className={`p-3 md:p-4 rounded-md border text-left transition-all ${
              mvpData.platform === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(mvpData.platform === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(mvpData.platform === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 3) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Avez-vous déjà un design ?</h3>
        <p className="text-text-muted">Possédez-vous déjà des maquettes ou un design system ?</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'has', label: 'Oui, j\'ai un design', desc: 'Maquettes Figma, design system, ou équivalent.' },
          { value: 'no', label: 'Non, à créer', desc: 'Design à concevoir en parallèle du développement.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setMvpData({ ...mvpData, hasDesign: o.value as HasDesignType })}
            className={`w-full p-6 rounded-md border text-left transition-all ${
              mvpData.hasDesign === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-lg ${getTextColor(mvpData.hasDesign === o.value)}`}>{o.label}</div>
            <div className={`mt-1 ${getTextColor(mvpData.hasDesign === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 4) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Fonctionnalités avancées</h3>
        <p className="text-text-muted">Sélectionnez les fonctionnalités dont vous avez besoin.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[
          { value: 'auth', label: 'Authentification', desc: 'Connexion, inscription' },
          { value: 'payment', label: 'Paiements', desc: 'Stripe, PayPal' },
          { value: 'dashboard', label: 'Dashboard', desc: 'Tableaux de bord' },
          { value: 'profile', label: 'Profils', desc: 'Gestion utilisateurs' },
          { value: 'roles', label: 'Rôles', desc: 'Permissions, accès' },
          { value: 'notifs', label: 'Notifications', desc: 'Email, push' },
          { value: 'chat', label: 'Chat', desc: 'Messagerie temps réel' },
          { value: 'realtime', label: 'Temps réel', desc: 'WebSocket, live' },
          { value: 'upload', label: 'Upload', desc: 'Fichiers, images' },
          { value: 'export', label: 'Export', desc: 'PDF, Excel, CSV' },
          { value: 'api1', label: 'API simple', desc: '1-2 endpoints' },
          { value: 'api3', label: 'API complexe', desc: '3+ endpoints' },
          { value: 'ai', label: 'IA', desc: 'Machine Learning, IA' }
        ].map((feature: Option & { desc: string }) => {
          const isSelected = (mvpData.features || []).includes(feature.value);
          
          return (
            <button
              key={feature.value}
              onClick={() => {
                const currentFeatures = mvpData.features || [];
                const newFeatures = isSelected 
                  ? currentFeatures.filter((f: string) => f !== feature.value)
                  : [...currentFeatures, feature.value];
                setMvpData({ ...mvpData, features: newFeatures });
              }}
              className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                isSelected 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(isSelected)}`}>{feature.label}</div>
              <div className={`mt-1 text-xs md:text-sm ${getTextColor(isSelected, 'text-text-muted')}`}>{feature.desc}</div>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (step === 5) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Backend nécessaire</h3>
        <p className="text-text-muted">Quel niveau de backend est nécessaire pour ton MVP ?</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {[
          { value: 'none', label: 'Aucun', desc: 'Frontend uniquement, données statiques ou API externes.' },
          { value: 'light', label: 'Léger', desc: 'Base de données simple, authentification basique.' },
          { value: 'complex', label: 'Complexe', desc: 'Base de données avancée, logique métier, intégrations.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setMvpData({ ...mvpData, backend: o.value as BackendType })}
            className={`p-3 md:p-4 rounded-md border text-left transition-all ${
              mvpData.backend === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(mvpData.backend === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(mvpData.backend === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  return null;
};

export default MvpForm;