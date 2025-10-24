import { useState } from 'react';
import { useEmailSubmission } from './use-email-submission';
import { getActiveSchema } from '@/lib/validation-schemas';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type TabId = 'site' | 'prototype' | 'mvp' | 'crm' | 'linkedin';

// Form types
export type Option = { value: string; label: string };
export type SiteType = 'lp' | 'site';
export type TechType = 'nocode' | 'code';
export type ModuleType = 'cms' | 'form' | 'crm' | 'animations' | 'blog' | 'member' | 'multilang';
export type PrototypeType = 'figma' | 'design';
export type FidelityType = 'wireframe' | 'high' | 'pixel';
export type TargetType = 'lp' | 'web' | 'mobile' | 'both';
export type PlatformType = 'web' | 'mobile' | 'both';
export type HasDesignType = 'has' | 'no';
export type BackendType = 'none' | 'light' | 'complex';
export type FeatureType = 'auth' | 'payment' | 'dashboard' | 'profile' | 'roles' | 'notifs' | 'chat' | 'realtime' | 'upload' | 'export' | 'api1' | 'api3' | 'ai';
export type CrmType = 'scratch' | 'migration';
export type UserType = '1-3' | '4-10' | '11-25' | '26-50' | '51-100' | '100+';
export type CrmSourceType = 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'airtable' | 'autre';
export type DataVolumeType = '<1k' | '1k-5k' | '5k-20k' | '20k-50k' | '50k-100k' | '100k+';
export type IntegrationType = '1-3' | '4-7' | '8-12' | '13+';

export interface Tab {
  id: TabId;
  label: string;
}

export interface CalculationResult {
  min: number;
  max: number;
  weeks?: number;
  accounts?: number;
}

export interface LeadSubmissionData {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  calculatorType: TabId;
  estimation: CalculationResult;
}

interface UseProjectCalculatorProps {
  allowedTabs?: TabId[];
}

export const useProjectCalculator = ({ allowedTabs }: UseProjectCalculatorProps = {}) => {
  const [activeTab, setActiveTab] = useState<TabId>('linkedin');
  const [step, setStep] = useState<number>(1);
  const [showResult, setShowResult] = useState<boolean>(false);
  
  // Form data states
  const [siteData, setSiteData] = useState({
    type: 'lp',
    pages: 1,
    tech: 'nocode',
    modules: []
  });
  
  const [prototypeData, setPrototypeData] = useState({
    type: 'figma',
    screens: 5,
    fidelity: 'wireframe',
    target: 'web'
  });
  
  const [mvpData, setMvpData] = useState({
    screens: 10,
    platform: 'web',
    hasDesign: 'no',
    features: [],
    backend: 'none'
  });
  
  const [crmData, setCrmData] = useState({
    type: 'scratch',
    users: '1-3',
    crmSource: 'autre',
    crmTarget: 'autre',
    dataVolume: '<1k',
    integrations: '1-3',
    training: false
  });
  
  const [linkedinData, setLinkedinData] = useState({
    leads: 10,
    icps: 1
  });
  
  const [leadData, setLeadData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: ''
  });
  
  // Email submission hook
  const { isSubmitting, submitError, submitSuccess, submitLead, resetSubmission } = useEmailSubmission();

  const allTabs: Tab[] = [
    { id: 'site', label: 'LP / Site' },
    { id: 'prototype', label: 'Prototype' },
    { id: 'mvp', label: 'MVP / App' },
    { id: 'crm', label: 'CRM' },
    { id: 'linkedin', label: 'LinkedIn' }
  ];

  const tabs = allowedTabs ? allTabs.filter(tab => allowedTabs.includes(tab.id)) : allTabs;

  // Initialize with first tab if allowedTabs is provided
  if (allowedTabs && allowedTabs.length > 0 && !allowedTabs.includes(activeTab)) {
    setActiveTab(allowedTabs[0]);
  }

  // ============================================================================
  // CALCULATION LOGIC
  // ============================================================================

  const calculateSite = (data: { type: string; pages: number; tech: string; modules?: string[] }): CalculationResult => {
    let budget = (data.type === 'lp' ? 1 : data.pages) * 1000;
    if (data.tech === 'nocode') budget *= 0.6;
    
    const prices: Record<string, number> = { 
      cms: 800, 
      form: 400, 
      crm: 500, 
      animations: 600, 
      blog: 700, 
      member: 1500, 
      multilang: 800 
    };
    
    data.modules?.forEach((mod: string) => { 
      budget += prices[mod] || 0; 
    });
    
    const weeks = data.type === 'lp' ? 1 : Math.ceil(data.pages / 5);
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculatePrototype = (data: { type: string; screens: number; fidelity?: string; target: string }): CalculationResult => {
    const baseBudget = data.type === 'figma' 
      ? (data.screens <= 10 ? 2000 : data.screens <= 20 ? 3000 : data.screens <= 35 ? 4000 : 5000) 
      : 4000;
    
    const fidelityCoeffs: Record<string, number> = { wireframe: 0.7, high: 1, pixel: 1.3 };
    const targetCoeffs: Record<string, number> = { lp: 0.8, web: 1, mobile: 1.1, both: 1.3 };
    
    const budget = baseBudget * (fidelityCoeffs[data.fidelity || ''] || 1) * (targetCoeffs[data.target || ''] || 1);
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks: 2 };
  };

  const calculateMVP = (data: { screens: number; platform: string; hasDesign: string; features?: string[]; backend: string }): CalculationResult => {
    const chargeJours = data.screens * 0.7;
    let budget = chargeJours * 400;
    
    const platformCoeffs: Record<string, number> = { web: 1, mobile: 1.1, both: 1.5 };
    const designCoeffs: Record<string, number> = { has: 0.8, no: 1 };
    const backendCoeffs: Record<string, number> = { none: 0.75, light: 1, complex: 1.3 };
    
    budget *= (platformCoeffs[data.platform] || 1) * (designCoeffs[data.hasDesign] || 1) * (backendCoeffs[data.backend] || 1);
    
    const featuresDays: Record<string, number> = { 
      auth: 2, payment: 2, dashboard: 3, profile: 1, roles: 3, notifs: 2, 
      chat: 5, realtime: 6, upload: 1, export: 1, api1: 2, api3: 4, ai: 7 
    };
    
    data.features?.forEach((feat: string) => { 
      budget += (featuresDays[feat] || 0) * 400; 
    });
    
    let totalDays = chargeJours;
    data.features?.forEach((feat: string) => { 
      totalDays += featuresDays[feat] || 0; 
    });
    
    const platformDelayCoeff: Record<string, number> = { web: 1, mobile: 0.8, both: 1.8 };
    const designDelayCoeff: Record<string, number> = { has: 0.5, no: 1 };
    const backendDelayCoeff: Record<string, number> = { none: 0.8, light: 1, complex: 1.2 };
    
    totalDays *= (platformDelayCoeff[data.platform] || 1) * (designDelayCoeff[data.hasDesign] || 1) * (backendDelayCoeff[data.backend] || 1);
    const weeks = Math.max(1, Math.ceil(totalDays / 5));
    
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculateCRM = (data: { type: string; users: string; crmSource?: string; crmTarget?: string; dataVolume?: string; integrations: string; training: boolean }): CalculationResult => {
    const userBudgets: Record<string, number> = { 
      '1-3': 3000, '4-10': 4000, '11-25': 6000, '26-50': 9000, '51-100': 15000, '100+': 20000
    };
    const volumeCoeffs: Record<string, number> = { 
      '<1k': 1.2, '1k-5k': 1.3, '5k-20k': 1.4, '20k-50k': 1.5, '50k-100k': 1.7, '100k+': 2.0
    };
    const crmCoeffs: Record<string, number> = { 
      salesforce: 1.5, hubspot: 1.47, zoho: 1.44, pipedrive: 1.41, airtable: 1.38, autre: 1.0
    };
    const integrationCoeffs: Record<string, number> = { 
      '1-3': 1, '4-7': 1.2, '8-12': 1.4, '13+': 1.6
    };
    
    let budget = userBudgets[data.users] || 0;
    if (data.type === 'scratch') budget *= 0.8;
    
    let weeks = 1;
    if (data.type === 'migration') {
      budget *= volumeCoeffs[data.dataVolume || ''] * 1.2;
      const volumeWeeks: Record<string, number> = { 
        '<1k': 1, '1k-5k': 1, '5k-20k': 1, '20k-50k': 2, '50k-100k': 2, '100k+': 3
      };
      weeks = volumeWeeks[data.dataVolume || ''] || 1;
    }
    
    const targetCrm = data.type === 'migration' ? data.crmTarget : data.crmSource;
    budget *= crmCoeffs[targetCrm || ''] * integrationCoeffs[data.integrations];
    
    if (data.training) { 
      budget += 2000; 
      weeks += 1; 
    }
    
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculateLinkedIn = (data: { leads: number; icps: number }): CalculationResult => {
    const accounts = Math.max(Math.ceil(data.leads / 10), Math.ceil(data.icps / 3));
    const monthly = accounts * 1200;
    return { min: Math.round(monthly * 0.9), max: Math.round(monthly * 1.1), accounts };
  };

  const getResult = (): CalculationResult => {
    if (activeTab === 'site') return calculateSite(siteData);
    if (activeTab === 'prototype') return calculatePrototype(prototypeData);
    if (activeTab === 'mvp') return calculateMVP(mvpData);
    if (activeTab === 'crm') return calculateCRM(crmData);
    if (activeTab === 'linkedin') return calculateLinkedIn(linkedinData);
    return { min: 0, max: 0 };
  };

  // ============================================================================
  // STEP MANAGEMENT
  // ============================================================================

  const maxStep = (): number => {
    if (activeTab === 'site') {
      // Pour les landing pages, on a 3 étapes au lieu de 4 (étape "pages" sautée)
      return siteData.type === 'lp' ? 3 : 4;
    }
    if (activeTab === 'prototype') return 4;
    if (activeTab === 'mvp') return 5;
    if (activeTab === 'crm') {
      // Pour les CRM from scratch, on a 5 étapes au lieu de 7 (étapes 4 et 5 sautées)
      return crmData.type === 'scratch' ? 5 : 7;
    }
    if (activeTab === 'linkedin') return 3;
    return 2;
  };

  const isStepComplete = (): boolean => {
    if (activeTab === 'site') {
      if (step === 1) return !!siteData.type;
      if (step === 2) {
        // Pour les landing pages, l'étape 2 est le développement
        if (siteData.type === 'lp') return !!siteData.tech;
        // Pour les sites web, l'étape 2 est le nombre de pages
        return !!siteData.pages;
      }
      if (step === 3) return !!siteData.tech;
      if (step === 4) return true; // modules are optional
    }
    
    if (activeTab === 'prototype') {
      if (step === 1) return !!prototypeData.type;
      if (step === 2) return !!prototypeData.screens;
      if (step === 3) return !!prototypeData.fidelity;
      if (step === 4) return !!prototypeData.target;
    }
    
    if (activeTab === 'mvp') {
      if (step === 1) return !!mvpData.screens;
      if (step === 2) return !!mvpData.platform;
      if (step === 3) return !!mvpData.hasDesign;
      if (step === 4) return true; // features are optional
      if (step === 5) return !!mvpData.backend;
    }
    
    if (activeTab === 'crm') {
      if (step === 1) return !!crmData.type;
      if (step === 2) return !!crmData.users;
      if (step === 3) {
        // Pour les migrations, vérifier le CRM source
        if (crmData.type === 'migration') return !!crmData.crmSource;
        // Pour from scratch, vérifier le type de CRM souhaité
        return !!crmData.crmTarget;
      }
      if (step === 4) {
        // Pour les migrations, vérifier le CRM cible
        if (crmData.type === 'migration') return !!crmData.crmTarget;
        // Pour from scratch, vérifier les intégrations
        return !!crmData.integrations;
      }
      if (step === 5) {
        // Pour les migrations, vérifier le volume de données
        if (crmData.type === 'migration') return !!crmData.dataVolume;
        // Pour from scratch, la formation est optionnelle
        return true;
      }
      if (step === 6) return !!crmData.integrations;
      if (step === 7) return true; // training is boolean
    }
    
    if (activeTab === 'linkedin') {
      if (step === 1) return linkedinData.leads > 0;
      if (step === 2) return linkedinData.icps > 0;
      if (step === 3) return true; // Le formulaire email est géré par le composant LeadCaptureForm
    }
    
    return false;
  };

  const handleNext = (): void => {
    const max = maxStep();
    
    // Pour les landing pages, sauter l'étape 2 (nombre de pages)
    if (activeTab === 'site' && siteData.type === 'lp' && step === 1) {
      setStep(2); // Passer directement à l'étape 2 (développement)
      return;
    }
    
    // Pour les CRM from scratch, sauter les étapes de migration
    if (activeTab === 'crm' && crmData.type === 'scratch') {
      if (step === 3) {
        setStep(4); // Passer directement à l'étape 4 (intégrations)
        return;
      }
    }
    
    if (step < max) setStep(step + 1);
    else setStep(max + 1);
  };

  const handleBack = (): void => {
    if (step > 1) {
      // Pour les landing pages, si on est à l'étape 2, revenir à l'étape 1
      if (activeTab === 'site' && siteData.type === 'lp' && step === 2) {
        setStep(1);
        return;
      }
      
      // Pour les CRM from scratch, si on est à l'étape 4, revenir à l'étape 3
      if (activeTab === 'crm' && crmData.type === 'scratch' && step === 4) {
        setStep(3);
        return;
      }
      
      setStep(step - 1);
    }
  };

  const resetCalculator = (): void => {
    setStep(1);
    setShowResult(false);
    resetSubmission();
  };

  const handleTabChange = (tabId: TabId): void => {
    setActiveTab(tabId);
    resetCalculator();
  };

  const isLeadCapture = (): boolean => {
    return step === maxStep() + 1;
  };

  const handleLeadSubmit = async (): Promise<void> => {
    const submissionData: LeadSubmissionData = {
      email: leadData.email,
      firstName: leadData.firstName,
      lastName: leadData.lastName,
      company: leadData.company,
      calculatorType: activeTab,
      estimation: getResult()
    };

    const success = await submitLead(submissionData);
    if (success) {
      setShowResult(true);
    }
  };

  return {
    // State
    activeTab,
    step,
    showResult,
    isSubmitting,
    submitError,
    submitSuccess,
    
    // Form data
    siteData,
    setSiteData,
    prototypeData,
    setPrototypeData,
    mvpData,
    setMvpData,
    crmData,
    setCrmData,
    linkedinData,
    setLinkedinData,
    leadData,
    setLeadData,
    
    // Computed
    tabs,
    maxStep: maxStep(),
    isLeadCapture: isLeadCapture(),
    isStepComplete: isStepComplete(),
    result: getResult(),
    
    // Actions
    setActiveTab: handleTabChange,
    handleNext,
    handleBack,
    handleLeadSubmit,
    resetCalculator,
    getResult,
    getActiveSchema: () => getActiveSchema(activeTab),
  };
};

