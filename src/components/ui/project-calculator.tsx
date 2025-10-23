'use client';

import React from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { 
  useProjectCalculator, 
  TabId, 
  Option,
  SiteType,
  TechType,
  ModuleType,
  PrototypeType,
  FidelityType,
  TargetType,
  PlatformType,
  HasDesignType,
  BackendType,
  FeatureType,
  CrmProjectType as CrmType,
  UserCountType,
  CrmSourceType,
  DataVolumeType,
  IntegrationCountType as IntegrationType
} from '@/hooks/use-project-calculator';

interface ProjectCalculatorProps {
  allowedTabs?: TabId[];
  brandColor?: 'green' | 'purple' | 'orange' | 'blue';
}

const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ allowedTabs, brandColor = 'green' }) => {
  const {
    // State
    activeTab,
    step,
    showResult,
    isSubmitting,
    submitError,
    submitSuccess,
    siteData,
    prototypeData,
    mvpData,
    crmData,
    linkedinData,
    leadData,

    // Computed
    tabs,
    maxStep,
    isStepComplete,
    isLeadCapture,
    result,

    // Actions
    setActiveTab,
    setSiteData,
    setPrototypeData,
    setMvpData,
    setCrmData,
    setLinkedinData,
    setLeadData,
    handleNext,
    handleBack,
    handleLeadSubmit,
    resetCalculator,
  } = useProjectCalculator({ allowedTabs });

  // Brand color mapping
  const getBrandClasses = () => {
    const colorMap = {
      green: {
        bg: 'bg-brand-green',
        text: 'text-black',
        border: 'border-brand-green',
        accent: 'bg-brand-green/10',
        button: 'bg-brand-green hover:bg-brand-green-hover text-black'
      },
      purple: {
        bg: 'bg-brand-purple',
        text: 'text-white',
        border: 'border-brand-purple',
        accent: 'bg-brand-purple/10',
        button: 'bg-brand-purple hover:bg-brand-purple/90 text-white'
      },
      orange: {
        bg: 'bg-brand-orange',
        text: 'text-white',
        border: 'border-brand-orange',
        accent: 'bg-brand-orange/10',
        button: 'bg-brand-orange hover:bg-brand-orange/90 text-white'
      },
      blue: {
        bg: 'bg-brand-blue',
        text: 'text-white',
        border: 'border-brand-blue',
        accent: 'bg-brand-blue/10',
        button: 'bg-brand-blue hover:bg-brand-blue-hover text-white'
      }
    };
    return colorMap[brandColor];
  };

  const brandClasses = getBrandClasses();

  const renderResult = (): React.ReactNode => {
    const formatPrice = (price: number): string => price.toLocaleString('fr-FR');

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre estimation</h2>
          <p className="text-gray-700">Basée sur vos réponses</p>
        </div>

        <div className={`${brandClasses.accent} rounded-lg p-6 text-center`}>
          <div className={`text-sm ${brandClasses.text} font-medium mb-2`}>Budget estimé</div>
          <div className={`text-4xl font-bold ${brandClasses.text} mb-1`}>
            {formatPrice(result.min)} - {formatPrice(result.max)}€
          </div>
          <div className="text-sm text-gray-700">HT</div>
        </div>

        {result.weeks && (
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-700 mb-1">Délai estimé</div>
            <div className="text-2xl font-bold text-gray-900">{result.weeks} semaine{result.weeks > 1 ? 's' : ''}</div>
          </div>
        )}

        {result.accounts && (
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-700 mb-1">Comptes nécessaires</div>
            <div className="text-2xl font-bold text-gray-900">{result.accounts}</div>
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Note :</strong> Cette estimation est indicative. Le budget final dépend de la complexité exacte et de vos besoins spécifiques.
          </p>
        </div>

        <div className="space-y-3">
          <button className={`w-full px-6 py-4 ${brandClasses.button} font-semibold rounded-lg transition-colors`}>
            Réserver un appel gratuit
          </button>
          <button
            onClick={resetCalculator}
            className="w-full px-6 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Nouvelle estimation
          </button>
        </div>
      </div>
    );
  };

  const renderLeadCapture = (): React.ReactNode => {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dernière étape</h2>
          <p className="text-gray-700">Recevez votre estimation détaillée par email</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
            <input
              type="email"
              value={leadData.email}
              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
              placeholder="vous@entreprise.fr"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prénom & Nom *</label>
            <input
              type="text"
              value={leadData.name}
              onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
              placeholder="Jean Dupont"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise *</label>
            <input
              type="text"
              value={leadData.company}
              onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
              placeholder="Nom de votre entreprise"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={handleBack}
            className="px-6 py-3 border-2 border-gray-600 rounded-lg font-medium text-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          <button
            onClick={handleLeadSubmit}
            disabled={!leadData.email || !leadData.name || !leadData.company || isSubmitting}
            className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${leadData.email && leadData.name && leadData.company && !isSubmitting
                ? `${brandClasses.button}`
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Voir mon estimation'}
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center">
          Nous respectons votre vie privée. Vos données ne seront jamais partagées.
        </p>
        
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-red-800">{submitError}</p>
          </div>
        )}
        
        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">Email envoyé avec succès !</p>
          </div>
        )}
      </div>
    );
  };

  const renderQuestion = (): React.ReactNode | null => {
    if (activeTab === 'site') {
      if (step === 1) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Type de projet ?</h3>
          {[
            { value: 'lp', label: 'Landing Page', desc: 'Une seule page' },
            { value: 'site', label: 'Site complet', desc: 'Plusieurs pages' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setSiteData({ ...siteData, type: o.value as SiteType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${siteData.type === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 2) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Nombre de pages ?</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-700">Pages</span>
            <span className={`font-semibold ${brandClasses.text}`}>{siteData.pages}</span>
          </div>
          <input
            type="range"
            min="2"
            max="20"
            value={siteData.pages}
            onChange={(e) => setSiteData({ ...siteData, pages: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      );
      if (step === 3 || (step === 2 && siteData.type === 'lp')) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Technologie ?</h3>
          {[
            { value: 'code', label: 'Code (React/Next)', desc: 'Performance maximale' },
            { value: 'nocode', label: 'No-code (Webflow)', desc: 'Plus rapide, moins cher' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setSiteData({ ...siteData, tech: o.value as TechType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${siteData.tech === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 4) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Modules additionnels ?</h3>
          <p className="text-sm text-gray-700">Sélection multiple possible</p>
          {[
            { value: 'cms', label: 'CMS (+800€)' },
            { value: 'form', label: 'Formulaires avancés (+400€)' },
            { value: 'crm', label: 'Intégration CRM (+500€)' },
            { value: 'animations', label: 'Animations (+600€)' },
            { value: 'blog', label: 'Blog (+700€)' },
            { value: 'member', label: 'Espace membre (+1 500€)' },
            { value: 'multilang', label: 'Multilingue (+800€)' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => {
                const modules = siteData.modules.includes(o.value as ModuleType)
                  ? siteData.modules.filter(m => m !== o.value)
                  : [...siteData.modules, o.value as ModuleType];
                setSiteData({ ...siteData, modules });
              }}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${siteData.modules.includes(o.value as ModuleType) ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
    }

    if (activeTab === 'prototype') {
      if (step === 1) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Type de livrable ?</h3>
          {[
            { value: 'figma', label: 'Maquette Figma', desc: 'Prototype cliquable' },
            { value: 'system', label: 'Design System', desc: 'Composants réutilisables' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setPrototypeData({ ...prototypeData, type: o.value as PrototypeType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${prototypeData.type === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 2 && prototypeData.type === 'figma') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Nombre d&apos;écrans ?</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-700">Écrans</span>
            <span className={`font-semibold ${brandClasses.text}`}>{prototypeData.screens}</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={prototypeData.screens}
            onChange={(e) => setPrototypeData({ ...prototypeData, screens: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      );
      if (step === 3 && prototypeData.type === 'figma') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Niveau de fidélité ?</h3>
          {[
            { value: 'wireframe', label: 'Wireframe', desc: 'Structure uniquement' },
            { value: 'high', label: 'Haute fidélité', desc: 'Design complet' },
            { value: 'pixel', label: 'Pixel perfect', desc: 'Prêt pour dev' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setPrototypeData({ ...prototypeData, fidelity: o.value as FidelityType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${prototypeData.fidelity === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 4 || (step === 2 && prototypeData.type === 'system')) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Plateforme cible ?</h3>
          {[
            { value: 'lp', label: 'Landing page' },
            { value: 'web', label: 'Web app' },
            { value: 'mobile', label: 'Mobile' },
            { value: 'both', label: 'Web + Mobile' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setPrototypeData({ ...prototypeData, target: o.value as TargetType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${prototypeData.target === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
    }

    if (activeTab === 'mvp') {
      if (step === 1) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Nombre d&apos;écrans ?</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-700">Écrans</span>
            <span className={`font-semibold ${brandClasses.text}`}>{mvpData.screens}</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={mvpData.screens}
            onChange={(e) => setMvpData({ ...mvpData, screens: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      );
      if (step === 2) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Plateforme ?</h3>
          {[
            { value: 'web', label: 'Web uniquement' },
            { value: 'mobile', label: 'Mobile uniquement' },
            { value: 'both', label: 'Web + Mobile' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setMvpData({ ...mvpData, platform: o.value as PlatformType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${mvpData.platform === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 3) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Design existant ?</h3>
          {[
            { value: 'has', label: 'Oui', desc: 'Maquettes déjà prêtes' },
            { value: 'no', label: 'Non', desc: 'À créer' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setMvpData({ ...mvpData, hasDesign: o.value as HasDesignType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${mvpData.hasDesign === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 4) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Fonctionnalités ?</h3>
          <p className="text-sm text-gray-700">Sélection multiple possible</p>
          {[
            { value: 'auth', label: 'Authentification (+2j)' },
            { value: 'payment', label: 'Paiement (+2j)' },
            { value: 'dashboard', label: 'Dashboard (+3j)' },
            { value: 'profile', label: 'Profil utilisateur (+1j)' },
            { value: 'roles', label: 'Gestion des rôles (+3j)' },
            { value: 'notifs', label: 'Notifications (+2j)' },
            { value: 'chat', label: 'Chat (+5j)' },
            { value: 'realtime', label: 'Temps réel (+6j)' },
            { value: 'upload', label: 'Upload fichiers (+1j)' },
            { value: 'export', label: 'Export données (+1j)' },
            { value: 'api1', label: '1-2 intégrations API (+2j)' },
            { value: 'api3', label: '3+ intégrations API (+4j)' },
            { value: 'ai', label: 'IA / ML (+7j)' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => {
                const features = mvpData.features.includes(o.value as FeatureType)
                  ? mvpData.features.filter(f => f !== o.value)
                  : [...mvpData.features, o.value as FeatureType];
                setMvpData({ ...mvpData, features });
              }}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${mvpData.features.includes(o.value as FeatureType) ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 5) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Backend ?</h3>
          {[
            { value: 'none', label: 'Aucun', desc: 'Front-end uniquement' },
            { value: 'light', label: 'Léger', desc: 'API basique' },
            { value: 'complex', label: 'Complexe', desc: 'Logique métier avancée' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setMvpData({ ...mvpData, backend: o.value as BackendType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${mvpData.backend === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
    }

    if (activeTab === 'crm') {
      if (step === 1) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Type de projet ?</h3>
          {[
            { value: 'scratch', label: 'Setup from scratch', desc: 'Nouveau CRM' },
            { value: 'migration', label: 'Migration', desc: 'Changement de CRM' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, type: o.value as CrmType })}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${crmData.type === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              <div className="font-medium">{o.label}</div>
              <div className="text-sm text-gray-700">{o.desc}</div>
            </button>
          ))}
        </div>
      );
      if (step === 2) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Nombre d&apos;utilisateurs ?</h3>
          {[
            { value: '1-3', label: '1-3 utilisateurs' },
            { value: '4-10', label: '4-10 utilisateurs' },
            { value: '11-25', label: '11-25 utilisateurs' },
            { value: '26-50', label: '26-50 utilisateurs' },
            { value: '51-100', label: '51-100 utilisateurs' },
            { value: '100+', label: '100+ utilisateurs' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, users: o.value as UserCountType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.users === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 3 && crmData.type === 'migration') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">CRM actuel ?</h3>
          {[
            { value: 'salesforce', label: 'Salesforce' },
            { value: 'hubspot', label: 'HubSpot' },
            { value: 'zoho', label: 'Zoho' },
            { value: 'pipedrive', label: 'Pipedrive' },
            { value: 'airtable', label: 'Airtable' },
            { value: 'autre', label: 'Autre' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, crmSource: o.value as CrmSourceType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.crmSource === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 4 && crmData.type === 'migration') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">CRM cible ?</h3>
          {[
            { value: 'salesforce', label: 'Salesforce' },
            { value: 'hubspot', label: 'HubSpot' },
            { value: 'zoho', label: 'Zoho' },
            { value: 'pipedrive', label: 'Pipedrive' },
            { value: 'airtable', label: 'Airtable' },
            { value: 'autre', label: 'Autre' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, crmTarget: o.value as CrmSourceType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.crmTarget === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 5 && crmData.type === 'migration') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Volume de données ?</h3>
          {[
            { value: '<1k', label: 'Moins de 1 000 contacts' },
            { value: '1k-5k', label: '1 000 - 5 000 contacts' },
            { value: '5k-20k', label: '5 000 - 20 000 contacts' },
            { value: '20k-50k', label: '20 000 - 50 000 contacts' },
            { value: '50k-100k', label: '50 000 - 100 000 contacts' },
            { value: '100k+', label: '100 000+ contacts' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, dataVolume: o.value as DataVolumeType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.dataVolume === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if (step === 3 && crmData.type === 'scratch') return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Quel CRM ?</h3>
          {[
            { value: 'salesforce', label: 'Salesforce' },
            { value: 'hubspot', label: 'HubSpot' },
            { value: 'zoho', label: 'Zoho' },
            { value: 'pipedrive', label: 'Pipedrive' },
            { value: 'airtable', label: 'Airtable' },
            { value: 'autre', label: 'Autre' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, crmSource: o.value as CrmSourceType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.crmSource === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if ((step === 6 && crmData.type === 'migration') || (step === 4 && crmData.type === 'scratch')) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Intégrations ?</h3>
          <p className="text-sm text-gray-700">Slack, Gmail, Calendly, etc.</p>
          {[
            { value: '1-3', label: '1-3 outils' },
            { value: '4-7', label: '4-7 outils' },
            { value: '8-12', label: '8-12 outils' },
            { value: '13+', label: '13+ outils' }
          ].map((o: Option) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, integrations: o.value as IntegrationType })}
              className={`w-full p-4 rounded-lg border-2 transition-all ${crmData.integrations === o.value ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      );
      if ((step === 7 && crmData.type === 'migration') || (step === 5 && crmData.type === 'scratch')) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Formation ?</h3>
          <button
            onClick={() => setCrmData({ ...crmData, training: true })}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${crmData.training ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
          >
            <div className="font-medium">Oui</div>
            <div className="text-sm text-gray-700">Formation équipe (+2 000€ HT)</div>
          </button>
          <button
            onClick={() => setCrmData({ ...crmData, training: false })}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${!crmData.training ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
          >
            <div className="font-medium">Non</div>
            <div className="text-sm text-gray-700">Pas besoin</div>
          </button>
        </div>
      );
    }

    if (activeTab === 'linkedin') {
      if (step === 1) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">RDV par mois ?</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-700">Rendez-vous qualifiés</span>
            <span className={`font-semibold ${brandClasses.text}`}>{linkedinData.leads}</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={linkedinData.leads}
            onChange={(e) => setLinkedinData({ ...linkedinData, leads: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      );
      if (step === 2) return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Nombre d&apos;ICP ?</h3>
          <p className="text-sm text-gray-700 mb-4">Profils cibles différents</p>
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((n: number) => (
              <button
                key={n}
                onClick={() => setLinkedinData({ ...linkedinData, icps: n })}
                className={`p-4 rounded-lg border-2 transition-all ${linkedinData.icps === n ? `${brandClasses.border} ${brandClasses.accent}` : 'border-gray-300 hover:border-gray-400 bg-white'}`}
              >
                <div className="text-2xl font-bold">{n}</div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };


  return (
    <section className="py-16 md:py-24 bg-brand-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">


          {/* Tab Navigation */}
          <div className="flex flex-row items-center justify-start mb-8 max-w-full w-full overflow-x-auto sm:overflow-visible no-visible-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id 
                    ? `${brandClasses.bg} ${brandClasses.text} shadow-lg` 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="relative block font-medium">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="w-full overflow-hidden relative rounded-md p-6 md:p-10 text-gray-900 bg-white min-h-[500px] shadow-lg">
            <div className="relative z-10">
              {!showResult && !isLeadCapture && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Question {step}/{maxStep}</span>
                    <span className={`text-sm font-medium ${brandClasses.text}`}>{Math.round((step / maxStep) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${brandClasses.bg} h-2 rounded-full transition-all duration-500`} style={{ width: `${(step / maxStep) * 100}%` }} />
                  </div>
                </div>
              )}

              <div className="min-h-[400px]">
                {showResult ? renderResult() : isLeadCapture ? renderLeadCapture() : renderQuestion()}
              </div>

              {!showResult && !isLeadCapture && (
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Retour
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!isStepComplete}
                    className={`flex-1 px-6 py-3 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${isStepComplete ? `${brandClasses.button}` : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-400">
            <p>Estimation indicative • Tous les prix sont HT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
