'use client';

import React from 'react';
import SiteForm from './site-form';
import PrototypeForm from './prototype-form';
import MvpForm from './mvp-form';
import CrmForm from './crm-form';
import LinkedinForm from './linkedin-form';

interface FormRendererProps {
  activeTab: string;
  siteData: {
    type?: string;
    pages?: number;
    tech?: string;
    modules?: string[];
    features?: string[];
    backend?: string;
  };
  setSiteData: (data: {
    type?: string;
    pages?: number;
    tech?: string;
    modules?: string[];
    features?: string[];
    backend?: string;
  }) => void;
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
  mvpData: {
    screens?: number;
    platform?: string;
    hasDesign?: string;
    features?: string[];
    backend?: string;
  };
  setMvpData: (data: {
    screens?: number;
    platform?: string;
    hasDesign?: string;
    features?: string[];
    backend?: string;
  }) => void;
  crmData: {
    type?: string;
    users?: string;
    crmSource?: string;
    crmTarget?: string;
    dataVolume?: string;
    integrations?: string;
    training?: boolean;
  };
  setCrmData: (data: {
    type?: string;
    users?: string;
    crmSource?: string;
    crmTarget?: string;
    dataVolume?: string;
    integrations?: string;
    training?: boolean;
  }) => void;
  linkedinData: {
    leads?: number;
    icps?: number;
  };
  setLinkedinData: (data: {
    leads?: number;
    icps?: number;
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

const FormRenderer: React.FC<FormRendererProps> = ({
  activeTab,
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
  step,
  brandClasses,
  brandColor,
  getTextColor
}) => {
  switch (activeTab) {
    case 'site':
      return (
        <SiteForm
          siteData={siteData as any}
          setSiteData={setSiteData as any}
          step={step}
          brandClasses={brandClasses}
          brandColor={brandColor}
          getTextColor={getTextColor}
        />
      );
    case 'prototype':
      return (
        <PrototypeForm
          prototypeData={prototypeData}
          setPrototypeData={setPrototypeData}
          step={step}
          brandClasses={brandClasses}
          getTextColor={getTextColor}
        />
      );
    case 'mvp':
      return (
        <MvpForm
          mvpData={mvpData as any}
          setMvpData={setMvpData as any}
          step={step}
          brandClasses={brandClasses}
          getTextColor={getTextColor}
        />
      );
    case 'crm':
      return (
        <CrmForm
          crmData={crmData as any}
          setCrmData={setCrmData as any}
          step={step}
          brandClasses={brandClasses}
          getTextColor={getTextColor}
        />
      );
    case 'linkedin':
      return (
        <LinkedinForm
          linkedinData={linkedinData}
          setLinkedinData={setLinkedinData}
          step={step}
          brandClasses={brandClasses}
          getTextColor={getTextColor}
        />
      );
    default:
      return null;
  }
};

export default FormRenderer;