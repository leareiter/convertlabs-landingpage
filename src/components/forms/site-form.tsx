'use client';

import React, { useEffect } from 'react';
import { Option, SiteType, TechType } from '@/hooks/use-project-calculator';
import { Slider } from '@/components/ui/slider';

interface SiteFormProps {
  siteData: {
    type?: SiteType;
    pages?: number;
    tech?: string;
    modules?: string[];
    features?: string[];
    backend?: string;
  };
  setSiteData: (data: {
    type?: SiteType;
    pages?: number;
    tech?: string;
    modules?: string[];
    features?: string[];
    backend?: string;
  }) => void;
  step: number;
  brandClasses: {
    border: string;
    accent: string;
    text: string;
    button: string;
  };
  brandColor: string;
  getTextColor: (isSelected: boolean, defaultColor?: string) => string;
}

const SiteForm: React.FC<SiteFormProps> = ({ siteData, setSiteData, step, brandClasses, getTextColor }) => {
  useEffect(() => {
    if (siteData.type === 'lp' && siteData.pages !== 1) {
      setSiteData({ ...siteData, pages: 1 });
    }
  }, [siteData.type, siteData.pages, setSiteData]);

  if (step === 1) return (
    <div className="space-y-4 md:space-y-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Quel format souhaitez-vous lancer ?</h3>
        <p className="text-text-muted text-sm md:text-base">Choisissez le format de départ, nous ajusterons ensuite la portée.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'lp', label: 'Landing Page', desc: '1 page, 5–7 sections, SEO de base. Idéale pour tester une offre rapidement.' },
          { value: 'site', label: 'Site Web', desc: '3–10 pages, navigation, blog/SEO. Pour présenter votre offre et vos contenus.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setSiteData({ ...siteData, type: o.value as SiteType })}
            className={`w-full p-4 md:p-6 rounded-md border text-left transition-all ${
              siteData.type === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(siteData.type === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-sm md:text-base ${getTextColor(siteData.type === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) {
    if (siteData.type === 'lp') {
      return (
        <div className="space-y-4 md:space-y-6">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Quelle approche technique ?</h3>
          <p className="text-text-muted text-sm md:text-base">Choisissez l&apos;approche qui correspond le mieux à vos besoins.</p>
        </div>
        
        <div className="space-y-4">
          {[
            { value: 'nocode', label: 'No-Code', desc: 'Webflow, Framer, ou équivalent. Plus rapide, moins de personnalisation.' },
            { value: 'code', label: 'Développement', desc: 'React, Next.js, ou équivalent. Plus flexible, plus de temps de développement.' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setSiteData({ ...siteData, tech: o.value as TechType })}
              className={`w-full p-4 md:p-6 rounded-md border text-left transition-all ${
                siteData.tech === o.value 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(siteData.tech === o.value)}`}>{o.label}</div>
              <div className={`mt-1 text-sm md:text-base ${getTextColor(siteData.tech === o.value, 'text-text-muted')}`}>{o.desc}</div>
            </button>
          ))}
        </div>
      </div>
      );
    }
    
    // Pour les sites web, l'étape 2 est le nombre de pages
    return (
      <div className="space-y-4 md:space-y-6">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Combien de pages ?</h3>
          <p className="text-text-muted text-sm md:text-base">Estimez le nombre de pages nécessaires pour votre projet.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Slider
              value={[siteData.pages || 1]}
              onValueChange={(value) => setSiteData({ ...siteData, pages: value[0] })}
              className="w-full h-8"
              min={1}
              max={20}
              step={1}
            />
            <div className="flex justify-between text-sm text-text-muted mt-4">
              <span>1</span>
              <span className="font-medium text-lg">{siteData.pages || 1} page{(siteData.pages || 1) > 1 ? 's' : ''}</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 3) return (
    <div className="space-y-4 md:space-y-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Quelle approche technique ?</h3>
        <p className="text-text-muted text-sm md:text-base">Choisissez l&apos;approche qui correspond le mieux à vos besoins.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'nocode', label: 'No-Code', desc: 'Webflow, Framer, ou équivalent. Plus rapide, moins de personnalisation.' },
          { value: 'code', label: 'Développement', desc: 'React, Next.js, ou équivalent. Plus flexible, plus de temps de développement.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setSiteData({ ...siteData, tech: o.value as TechType })}
            className={`w-full p-4 md:p-6 rounded-md border text-left transition-all ${
              siteData.tech === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(siteData.tech === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-sm md:text-base ${getTextColor(siteData.tech === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 4) return (
    <div className="space-y-4 md:space-y-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Modules additionnels</h3>
        <p className="text-text-muted text-sm md:text-base">Sélectionnez les fonctionnalités supplémentaires dont vous avez besoin.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {[
          { value: 'cms', label: 'CMS', desc: 'Gestion de contenu' },
          { value: 'form', label: 'Formulaires', desc: 'Contact, newsletter' },
          { value: 'crm', label: 'CRM', desc: 'Gestion clients' },
          { value: 'animations', label: 'Animations', desc: 'Interactions avancées' },
          { value: 'blog', label: 'Blog', desc: 'Articles, SEO' },
          { value: 'member', label: 'Espace membre', desc: 'Connexion, profils' },
          { value: 'multilang', label: 'Multilingue', desc: 'Plusieurs langues' }
        ].map((module: Option & { desc: string }) => {
          const isSelected = (siteData.modules || []).includes(module.value);
          
          return (
            <button
              key={module.value}
              onClick={() => {
                const currentModules = siteData.modules || [];
                const newModules = isSelected 
                  ? currentModules.filter((m: string) => m !== module.value)
                  : [...currentModules, module.value];
                setSiteData({ ...siteData, modules: newModules });
              }}
              className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                isSelected 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(isSelected)}`}>{module.label}</div>
              <div className={`mt-1 text-xs md:text-sm ${getTextColor(isSelected, 'text-text-muted')}`}>{module.desc}</div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return null;
};

export default SiteForm;