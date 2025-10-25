import { useState, useEffect } from 'react';
import { useEmailSubmission } from './use-email-submission';
import { getActiveSchema } from '@/lib/validation-schemas';
import { TabId, CalculationResult } from '@/lib/calculator/types';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

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
    type: '',
    pages: 5,
    tech: '',
    modules: []
  });
  
  const [prototypeData, setPrototypeData] = useState({
    type: '',
    screens: 10,
    fidelity: '',
    target: ''
  });
  
  const [mvpData, setMvpData] = useState({
    screens: 15,
    platform: '',
    hasDesign: '',
    features: [],
    backend: ''
  });
  
  const [crmData, setCrmData] = useState({
    type: '',
    users: '',
    crmSource: '',
    crmTarget: '',
    dataVolume: '',
    integrations: '',
    training: false,
    trainingAnswered: true
  });
  
  const [linkedinData, setLinkedinData] = useState({
    leads: 15,
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
  
  // API calculation states
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  const [cachedResult, setCachedResult] = useState<CalculationResult | null>(null);


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
  // API CALCULATION
  // ============================================================================

  const fetchCalculation = async (): Promise<CalculationResult | null> => {
    setIsCalculating(true);
    setCalculationError(null);
    
    try {
      let data;
      
      switch (activeTab) {
        case 'site':
          data = siteData;
          break;
        case 'prototype':
          data = prototypeData;
          break;
        case 'mvp':
          data = mvpData;
          break;
        case 'crm':
          data = crmData;
          break;
        case 'linkedin':
          data = linkedinData;
          break;
        default:
          throw new Error('Invalid calculator type');
      }

      const response = await fetch('/api/calculate-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          calculatorType: activeTab,
          data: data
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to calculate project');
      }

      const result = await response.json();
      setCachedResult(result);
      return result;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue lors du calcul';
      console.error('Error calculating project:', error);
      setCalculationError(errorMessage);
      return null;
    } finally {
      setIsCalculating(false);
    }
  };

  const getResult = (): CalculationResult => {
    return cachedResult || { min: 0, max: 0 };
  };

  // ============================================================================
  // STEP MANAGEMENT
  // ============================================================================

  const maxStep = (): number => {
    if (activeTab === 'site') return siteData.type === 'lp' ? 2 : 4;
    if (activeTab === 'prototype') return prototypeData.type === 'figma' ? 4 : 2;
    if (activeTab === 'mvp') return mvpData.backend === 'none' ? 4 : 5;
    if (activeTab === 'crm') return crmData.type === 'migration' ? 7 : 5;
    if (activeTab === 'linkedin') return 2;
    return 2;
  };

  const isStepComplete = (): boolean => {
    if (activeTab === 'site') {
      if (step === 1) return siteData.type !== '';
      if (step === 2 && siteData.type === 'lp') return siteData.tech !== '';
      if (step === 3 && siteData.type === 'site') return siteData.tech !== '';
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
      if (step === 4) return true; // features are optional
      if (step === 5) return mvpData.backend !== '';
      return true;
    }
    if (activeTab === 'crm') {
      if (step === 1) return crmData.type !== '';
      if (step === 2) return crmData.users !== '';
      if (step === 3 && crmData.type === 'migration') return crmData.crmSource !== '';
      if (step === 4 && crmData.type === 'migration') return crmData.crmTarget !== '';
      if (step === 5 && crmData.type === 'migration') return crmData.dataVolume !== '';
      if (step === 3 && crmData.type === 'scratch') return crmData.crmTarget !== '';
      if ((step === 6 && crmData.type === 'migration') || (step === 4 && crmData.type === 'scratch')) return crmData.integrations !== '';
      if ((step === 7 && crmData.type === 'migration') || (step === 5 && crmData.type === 'scratch')) return crmData.trainingAnswered;
      return true;
    }
    if (activeTab === 'linkedin') {
      if (step === 1) return linkedinData.leads > 0;
      if (step === 2) return linkedinData.icps > 0;
      return true;
    }
    return true;
  };

  const handleNext = async (): Promise<void> => {
    const max = maxStep();
    if (activeTab === 'prototype' && step === 1 && prototypeData.type === 'system') {
      setStep(2);
    } else if (step < max) {
      setStep(step + 1);
    } else {
      // L'utilisateur termine le formulaire, déclencher le calcul
      setStep(max + 1);
      if (!cachedResult && !isCalculating) {
        await fetchCalculation();
      }
    }
  };

  const handleBack = (): void => {
    if (activeTab === 'prototype' && step === 2 && prototypeData.type === 'system') setStep(1);
    else if (step > 1) setStep(step - 1);
  };

  const resetCalculator = (): void => {
    setStep(1);
    setShowResult(false);
    setSiteData({ type: '', pages: 5, tech: '', modules: [] });
    setPrototypeData({ type: '', screens: 10, fidelity: '', target: '' });
    setMvpData({ screens: 15, platform: '', hasDesign: '', features: [], backend: '' });
    setCrmData({ type: '', users: '', crmSource: '', crmTarget: '', dataVolume: '', integrations: '', training: false, trainingAnswered: true });
    setLinkedinData({ leads: 15, icps: 1 });
    setLeadData({ email: '', firstName: '', lastName: '', company: '' });
    setCachedResult(null);
    setCalculationError(null);
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
    isCalculating,
    calculationError,
    
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
    fetchCalculation,
    getActiveSchema: () => getActiveSchema(activeTab),
  };
};

