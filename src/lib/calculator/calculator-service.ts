import {
  CalculationResult,
  SiteData,
  PrototypeData,
  MvpData,
  CrmData,
  LinkedinData,
  TabId
} from './types';

// ============================================================================
// CALCULATION FUNCTIONS
// ============================================================================

export const calculateSite = (data: SiteData): CalculationResult => {
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

export const calculatePrototype = (data: PrototypeData): CalculationResult => {
  const baseBudget = data.type === 'figma' 
    ? (data.screens <= 10 ? 2000 : data.screens <= 20 ? 3000 : data.screens <= 35 ? 4000 : 5000) 
    : 4000;
  
  const fidelityCoeffs: Record<string, number> = { wireframe: 0.7, high: 1, pixel: 1.3, '': 1 };
  const targetCoeffs: Record<string, number> = { lp: 0.8, web: 1, mobile: 1.1, both: 1.3, '': 1 };
  
  const budget = baseBudget * (fidelityCoeffs[data.fidelity || ''] || 1) * (targetCoeffs[data.target || ''] || 1);
  return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks: 2 };
};

export const calculateMVP = (data: MvpData): CalculationResult => {
  const chargeJours = data.screens * 0.7;
  let budget = chargeJours * 400;
  
  const platformCoeffs: Record<string, number> = { web: 1, mobile: 1.1, both: 1.5, '': 1 };
  const designCoeffs: Record<string, number> = { has: 0.8, no: 1, '': 1 };
  const backendCoeffs: Record<string, number> = { none: 0.75, light: 1, complex: 1.3, '': 1 };
  
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
  
  const platformDelayCoeff: Record<string, number> = { web: 1, mobile: 0.8, both: 1.8, '': 1 };
  const designDelayCoeff: Record<string, number> = { has: 0.5, no: 1, '': 1 };
  const backendDelayCoeff: Record<string, number> = { none: 0.8, light: 1, complex: 1.2, '': 1 };
  
  totalDays *= (platformDelayCoeff[data.platform] || 1) * (designDelayCoeff[data.hasDesign] || 1) * (backendDelayCoeff[data.backend] || 1);
  const weeks = Math.max(1, Math.ceil(totalDays / 5));
  
  return { min: Math.round(budget * 0.9), max: Math.round(budget * 1.1), weeks };
};

export const calculateCRM = (data: CrmData): CalculationResult => {
  const userBudgets: Record<string, number> = { 
    '1-3': 3000, '4-10': 4000, '11-25': 6000, '26-50': 9000, '51-100': 15000, '100+': 20000, '': 0
  };
  const volumeCoeffs: Record<string, number> = { 
    '<1k': 1.2, '1k-5k': 1.3, '5k-20k': 1.4, '20k-50k': 1.5, '50k-100k': 1.7, '100k+': 2.0, '': 1
  };
  const crmCoeffs: Record<string, number> = { 
    salesforce: 1.5, hubspot: 1.47, zoho: 1.44, pipedrive: 1.41, airtable: 1.38, autre: 1.0, '': 1
  };
  const integrationCoeffs: Record<string, number> = { 
    '1-3': 1, '4-7': 1.2, '8-12': 1.4, '13+': 1.6, '': 1
  };
  
  let budget = userBudgets[data.users] || 0;
  if (data.type === 'scratch') budget *= 0.8;
  
  let weeks = 1;
  if (data.type === 'migration') {
    budget *= volumeCoeffs[data.dataVolume || ''] * 1.2;
    const volumeWeeks: Record<string, number> = { 
      '<1k': 1, '1k-5k': 1, '5k-20k': 1, '20k-50k': 2, '50k-100k': 2, '100k+': 3, '': 1
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

export const calculateLinkedIn = (data: LinkedinData): CalculationResult => {
  const accounts = Math.max(Math.ceil(data.leads / 10), Math.ceil(data.icps / 3));
  const monthly = accounts * 1200;
  return { min: Math.round(monthly * 0.9), max: Math.round(monthly * 1.1), accounts };
};

// ============================================================================
// MAIN CALCULATOR SERVICE
// ============================================================================

export class CalculatorService {
  static calculate(calculatorType: TabId, data: any): CalculationResult {
    let result: CalculationResult;
    switch (calculatorType) {
      case 'site':
        result = calculateSite(data as SiteData);
        break;
      case 'prototype':
        result = calculatePrototype(data as PrototypeData);
        break;
      case 'mvp':
        result = calculateMVP(data as MvpData);
        break;
      case 'crm':
        result = calculateCRM(data as CrmData);
        break;
      case 'linkedin':
        result = calculateLinkedIn(data as LinkedinData);
        break;
      default:
        throw new Error(`Invalid calculator type: ${calculatorType}`);
    }

    // Apply 20% discount to all services except LinkedIn
    if (calculatorType !== 'linkedin') {
      if (typeof result.min === 'number') result.min = Math.round(result.min * 0.8);
      if (typeof result.max === 'number') result.max = Math.round(result.max * 0.8);
    }

    return result;
  }
}
