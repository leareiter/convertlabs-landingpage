'use client';

import React from 'react';
import { Slider } from '@/components/ui/slider';

interface LinkedinFormProps {
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
  getTextColor: (isSelected: boolean, defaultColor?: string) => string;
}

const LinkedinForm: React.FC<LinkedinFormProps> = ({ linkedinData, setLinkedinData, step }) => {
  if (step === 1) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Objectif de leads</h3>
        <p className="text-text-muted">Combien de leads souhaitez-vous générer par mois ?</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Slider
            value={[linkedinData.leads || 10]}
            onValueChange={(value) => setLinkedinData({ ...linkedinData, leads: value[0] })}
            className="w-full h-8"
            min={10}
            max={1000}
            step={10}
          />
          <div className="flex justify-between text-sm text-text-muted mt-4">
            <span>10</span>
            <span className="font-medium text-lg">{linkedinData.leads || 10} leads/mois</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (step === 2) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Nombre d'ICPs</h3>
        <p className="text-text-muted">Combien d'ICPs (Ideal Customer Profiles) ciblez-vous ?</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Slider
            value={[linkedinData.icps || 1]}
            onValueChange={(value) => setLinkedinData({ ...linkedinData, icps: value[0] })}
            className="w-full h-8"
            min={1}
            max={50}
            step={1}
          />
          <div className="flex justify-between text-sm text-text-muted mt-4">
            <span>1</span>
            <span className="font-medium text-lg">{linkedinData.icps || 1} ICP{(linkedinData.icps || 1) > 1 ? 's' : ''}</span>
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );

  return null;
};

export default LinkedinForm;