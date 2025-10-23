import { useState } from 'react';
import { useEmailSubmission } from './use-email-submission';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type TabId = 'site' | 'prototype' | 'mvp' | 'crm' | 'linkedin';

export type SiteType = 'lp' | 'site' | '';
export type TechType = 'code' | 'nocode' | '';
export type ModuleType = 'cms' | 'form' | 'crm' | 'animations' | 'blog' | 'member' | 'multilang';

export type PrototypeType = 'figma' | 'system' | '';
export type FidelityType = 'wireframe' | 'high' | 'pixel' | '';
export type TargetType = 'lp' | 'web' | 'mobile' | 'both' | '';

export type PlatformType = 'web' | 'mobile' | 'both' | '';
export type HasDesignType = 'has' | 'no' | '';
export type BackendType = 'none' | 'light' | 'complex' | '';
export type FeatureType = 'auth' | 'payment' | 'dashboard' | 'profile' | 'roles' | 'notifs' | 'chat' | 'realtime' | 'upload' | 'export' | 'api1' | 'api3' | 'ai';

export type CrmProjectType = 'scratch' | 'migration' | '';
export type UserCountType = '1-3' | '4-10' | '11-25' | '26-50' | '51-100' | '100+' | '';
export type CrmSourceType = 'salesforce' | 'hubspot' | 'zoho' | 'pipedrive' | 'airtable' | 'autre' | '';
export type DataVolumeType = '<1k' | '1k-5k' | '5k-20k' | '20k-50k' | '50k-100k' | '100k+' | '';
export type IntegrationCountType = '1-3' | '4-7' | '8-12' | '13+' | '';

export interface Tab {
  id: TabId;
  label: string;
}

export interface SiteData {
  type: SiteType;
  pages: number;
  tech: TechType;
  modules: ModuleType[];
}

export interface PrototypeData {
  type: PrototypeType;
  screens: number;
  fidelity: FidelityType;
  target: TargetType;
}

export interface MvpData {
  screens: number;
  platform: PlatformType;
  hasDesign: HasDesignType;
  features: FeatureType[];
  backend: BackendType;
}

export interface CrmData {
  type: CrmProjectType;
  users: UserCountType;
  crmSource: CrmSourceType;
  crmTarget: CrmSourceType;
  dataVolume: DataVolumeType;
  integrations: IntegrationCountType;
  training: boolean;
}

export interface LinkedInData {
  leads: number;
  icps: number;
}

export interface LeadData {
  email: string;
  name: string;
  company: string;
}

export interface CalculationResult {
  min: number;
  max: number;
  weeks?: number;
  accounts?: number;
}

export interface Option {
  value: string;
  label: string;
}

export interface LeadSubmissionData {
  email: string;
  name: string;
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
  
  // Email submission hook
  const { isSubmitting, submitError, submitSuccess, submitLead, resetSubmission } = useEmailSubmission();
  
  const [siteData, setSiteData] = useState<SiteData>({ type: '', pages: 5, tech: '', modules: [] });
  const [prototypeData, setPrototypeData] = useState<PrototypeData>({ type: '', screens: 10, fidelity: '', target: '' });
  const [mvpData, setMvpData] = useState<MvpData>({ screens: 15, platform: '', hasDesign: '', features: [], backend: '' });
  const [crmData, setCrmData] = useState<CrmData>({ type: '', users: '', crmSource: '', crmTarget: '', dataVolume: '', integrations: '', training: false });
  const [linkedinData, setLinkedinData] = useState<LinkedInData>({ leads: 15, icps: 1 });
  const [leadData, setLeadData] = useState<LeadData>({ email: '', name: '', company: '' });

  const allTabs: Tab[] = [
    { id: 'site', label: 'LP / Site' },
    { id: 'prototype', label: 'Prototype' },
    { id: 'mvp', label: 'MVP / App' },
    { id: 'crm', label: 'CRM' },
    { id: 'linkedin', label: 'LinkedIn' }
  ];

  const tabs = allowedTabs ? allTabs.filter(tab => allowedTabs.includes(tab.id)) : allTabs;
  const calculateSite = (): CalculationResult => {
    let budget = (siteData.type === 'lp' ? 1 : siteData.pages) * 1000;
    if (siteData.tech === 'nocode') budget *= 0.6;
    
    const prices: Record<ModuleType, number> = { 
      cms: 800, 
      form: 400, 
      crm: 500, 
      animations: 600, 
      blog: 700, 
      member: 1500, 
      multilang: 800 
    };
    
    siteData.modules.forEach(mod => { 
      budget += prices[mod] || 0; 
    });
    
    const weeks = siteData.type === 'lp' ? 1 : Math.ceil(siteData.pages / 5);
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculatePrototype = (): CalculationResult => {
    const baseBudget = prototypeData.type === 'figma' 
      ? (prototypeData.screens <= 10 ? 2000 : prototypeData.screens <= 20 ? 3000 : prototypeData.screens <= 35 ? 4000 : 5000) 
      : 4000;
    
    const fidelityCoeffs: Record<FidelityType, number> = { wireframe: 0.7, high: 1, pixel: 1.3, '': 1 };
    const targetCoeffs: Record<TargetType, number> = { lp: 0.8, web: 1, mobile: 1.1, both: 1.3, '': 1 };
    
    const budget = baseBudget * (fidelityCoeffs[prototypeData.fidelity] || 1) * (targetCoeffs[prototypeData.target] || 1);
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks: 2 };
  };

  const calculateMVP = (): CalculationResult => {
    const chargeJours = mvpData.screens * 0.7;
    let budget = chargeJours * 400;
    
    const platformCoeffs: Record<PlatformType, number> = { web: 1, mobile: 1.1, both: 1.5, '': 1 };
    const designCoeffs: Record<HasDesignType, number> = { has: 0.8, no: 1, '': 1 };
    const backendCoeffs: Record<BackendType, number> = { none: 0.75, light: 1, complex: 1.3, '': 1 };
    
    budget *= (platformCoeffs[mvpData.platform] || 1) * (designCoeffs[mvpData.hasDesign] || 1) * (backendCoeffs[mvpData.backend] || 1);
    
    const featuresDays: Record<FeatureType, number> = { 
      auth: 2, payment: 2, dashboard: 3, profile: 1, roles: 3, notifs: 2, 
      chat: 5, realtime: 6, upload: 1, export: 1, api1: 2, api3: 4, ai: 7 
    };
    
    mvpData.features.forEach(feat => { 
      budget += (featuresDays[feat] || 0) * 400; 
    });
    
    let totalDays = chargeJours;
    mvpData.features.forEach(feat => { 
      totalDays += featuresDays[feat] || 0; 
    });
    
    const platformDelayCoeff: Record<PlatformType, number> = { web: 1, mobile: 0.8, both: 1.8, '': 1 };
    const designDelayCoeff: Record<HasDesignType, number> = { has: 0.5, no: 1, '': 1 };
    const backendDelayCoeff: Record<BackendType, number> = { none: 0.8, light: 1, complex: 1.2, '': 1 };
    
    totalDays *= (platformDelayCoeff[mvpData.platform] || 1) * (designDelayCoeff[mvpData.hasDesign] || 1) * (backendDelayCoeff[mvpData.backend] || 1);
    const weeks = Math.max(1, Math.ceil(totalDays / 5));
    
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculateCRM = (): CalculationResult => {
    const userBudgets: Record<UserCountType, number> = { 
      '1-3': 3000, '4-10': 4000, '11-25': 6000, '26-50': 9000, '51-100': 15000, '100+': 20000, '': 0 
    };
    const volumeCoeffs: Record<DataVolumeType, number> = { 
      '<1k': 1.2, '1k-5k': 1.3, '5k-20k': 1.4, '20k-50k': 1.5, '50k-100k': 1.7, '100k+': 2.0, '': 1 
    };
    const crmCoeffs: Record<CrmSourceType, number> = { 
      salesforce: 1.5, hubspot: 1.47, zoho: 1.44, pipedrive: 1.41, airtable: 1.38, autre: 1.0, '': 1 
    };
    const integrationCoeffs: Record<IntegrationCountType, number> = { 
      '1-3': 1, '4-7': 1.2, '8-12': 1.4, '13+': 1.6, '': 1 
    };
    
    let budget = userBudgets[crmData.users] || 0;
    if (crmData.type === 'scratch') budget *= 0.8;
    
    let weeks = 1;
    if (crmData.type === 'migration') {
      budget *= volumeCoeffs[crmData.dataVolume] * 1.2;
      const volumeWeeks: Record<DataVolumeType, number> = { 
        '<1k': 1, '1k-5k': 1, '5k-20k': 1, '20k-50k': 2, '50k-100k': 2, '100k+': 3, '': 1 
      };
      weeks = volumeWeeks[crmData.dataVolume] || 1;
    }
    
    const targetCrm = crmData.type === 'migration' ? crmData.crmTarget : crmData.crmSource;
    budget *= crmCoeffs[targetCrm] * integrationCoeffs[crmData.integrations];
    
    if (crmData.training) { 
      budget += 2000; 
      weeks += 1; 
    }
    
    return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
  };

  const calculateLinkedIn = (): CalculationResult => {
    const accounts = Math.max(Math.ceil(linkedinData.leads / 10), Math.ceil(linkedinData.icps / 3));
    const monthly = accounts * 1200;
    return { min: Math.round(monthly * 0.9), max: Math.round(monthly * 1.1), accounts };
  };

  const getResult = (): CalculationResult => {
    if (activeTab === 'site') return calculateSite();
    if (activeTab === 'prototype') return calculatePrototype();
    if (activeTab === 'mvp') return calculateMVP();
    if (activeTab === 'crm') return calculateCRM();
    return calculateLinkedIn();
  };

  // ============================================================================
  // STEP MANAGEMENT
  // ============================================================================

  const maxStep = (): number => {
    if (activeTab === 'site') return siteData.type === 'lp' ? 3 : 4;
    if (activeTab === 'prototype') return prototypeData.type === 'figma' ? 4 : 2;
    if (activeTab === 'mvp') return mvpData.backend === 'none' ? 4 : 5;
    if (activeTab === 'crm') return crmData.type === 'migration' ? 7 : 5;
    return 2;
  };

  const isStepComplete = (): boolean => {
    if (activeTab === 'site') {
      if (step === 1) return siteData.type !== '';
      if (step === 3 || (step === 2 && siteData.type === 'lp')) return siteData.tech !== '';
      return true;
    }
    if (activeTab === 'prototype') {
      if (step === 1) return prototypeData.type !== '';
      if (step === 3 && prototypeData.type === 'figma') return prototypeData.fidelity !== '';
      if (step === 4 || (step === 2 && prototypeData.type === 'system')) return prototypeData.target !== '';
      return true;
    }
    if (activeTab === 'mvp') {
      if (step === 2) return mvpData.platform !== '';
      if (step === 3) return mvpData.hasDesign !== '';
      if (step === 4) return mvpData.backend !== '';
      return true;
    }
    if (activeTab === 'crm') {
      if (step === 1) return crmData.type !== '';
      if (step === 2) return crmData.users !== '';
      if (step === 3 && crmData.type === 'migration') return crmData.crmSource !== '';
      if (step === 4 && crmData.type === 'migration') return crmData.crmTarget !== '';
      if (step === 5 && crmData.type === 'migration') return crmData.dataVolume !== '';
      if (step === 3 && crmData.type === 'scratch') return crmData.crmSource !== '';
      if ((step === 6 && crmData.type === 'migration') || (step === 4 && crmData.type === 'scratch')) return crmData.integrations !== '';
      return true;
    }
    return true;
  };

  const handleNext = (): void => {
    const max = maxStep();
    if (activeTab === 'site' && step === 1 && siteData.type === 'lp') setStep(3);
    else if (activeTab === 'prototype' && step === 1 && prototypeData.type === 'system') setStep(2);
    else if (step < max) setStep(step + 1);
    else setStep(max + 1);
  };

  const handleBack = (): void => {
    if (activeTab === 'site' && step === 3 && siteData.type === 'lp') setStep(1);
    else if (activeTab === 'prototype' && step === 2 && prototypeData.type === 'system') setStep(1);
    else if (step > 1) setStep(step - 1);
  };

  const resetCalculator = (): void => {
    setStep(1);
    setShowResult(false);
    setSiteData({ type: '', pages: 5, tech: '', modules: [] });
    setPrototypeData({ type: '', screens: 10, fidelity: '', target: '' });
    setMvpData({ screens: 15, platform: '', hasDesign: '', features: [], backend: '' });
    setCrmData({ type: '', users: '', crmSource: '', crmTarget: '', dataVolume: '', integrations: '', training: false });
    setLinkedinData({ leads: 15, icps: 1 });
    setLeadData({ email: '', name: '', company: '' });
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
      name: leadData.name,
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
    siteData,
    prototypeData,
    mvpData,
    crmData,
    linkedinData,
    leadData,
    
    // Computed
    tabs,
    maxStep: maxStep(),
    isStepComplete: isStepComplete(),
    isLeadCapture: isLeadCapture(),
    result: getResult(),
    
    // Actions
    setActiveTab: handleTabChange,
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
  };
};
