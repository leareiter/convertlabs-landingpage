// ============================================================================
// CALCULATOR TYPES
// ============================================================================

export type TabId = 'site' | 'prototype' | 'mvp' | 'crm' | 'linkedin';

export interface CalculationResult {
  min: number;
  max: number;
  weeks?: number;
  accounts?: number;
}

export interface SiteData {
  type: string;
  pages: number;
  tech: string;
  modules?: string[];
}

export interface PrototypeData {
  type: string;
  screens: number;
  fidelity?: string;
  target: string;
}

export interface MvpData {
  screens: number;
  platform: string;
  hasDesign: string;
  features?: string[];
  backend: string;
}

export interface CrmData {
  type: string;
  users: string;
  crmSource?: string;
  crmTarget?: string;
  dataVolume?: string;
  integrations: string;
  training: boolean;
}

export interface LinkedinData {
  leads: number;
  icps: number;
}

export interface CalculateRequest {
  calculatorType: TabId;
  data: SiteData | PrototypeData | MvpData | CrmData | LinkedinData;
}
