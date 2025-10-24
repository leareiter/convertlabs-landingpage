'use client';

import React from 'react';
import { Option, CrmType, UserType, CrmSourceType, DataVolumeType, IntegrationType } from '@/hooks/use-project-calculator';

interface CrmFormProps {
  crmData: {
    type?: CrmType;
    users?: UserType;
    crmSource?: CrmSourceType;
    crmTarget?: CrmSourceType;
    dataVolume?: DataVolumeType;
    integrations?: string;
    training?: boolean;
  };
  setCrmData: (data: {
    type?: CrmType;
    users?: UserType;
    crmSource?: CrmSourceType;
    crmTarget?: CrmSourceType;
    dataVolume?: DataVolumeType;
    integrations?: string;
    training?: boolean;
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

const CrmForm: React.FC<CrmFormProps> = ({ crmData, setCrmData, step, brandClasses, getTextColor }) => {
  if (step === 1) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Type de projet CRM</h3>
        <p className="text-text-muted">Choisissez le type de projet CRM qui correspond à vos besoins.</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: 'scratch', label: 'Création from scratch', desc: 'Développement d\'un CRM personnalisé de A à Z.' },
          { value: 'migration', label: 'Migration de données', desc: 'Migration depuis un CRM existant vers un nouveau.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setCrmData({ ...crmData, type: o.value as CrmType })}
            className={`w-full p-6 rounded-md border text-left transition-all ${
              crmData.type === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-lg ${getTextColor(crmData.type === o.value)}`}>{o.label}</div>
            <div className={`mt-1 ${getTextColor(crmData.type === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 2) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Nombre d&apos;utilisateurs</h3>
        <p className="text-text-muted">Combien d&apos;utilisateurs utiliseront le CRM ?</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[
          { value: '1-3', label: '1-3 utilisateurs', desc: 'Petite équipe, usage basique.' },
          { value: '4-10', label: '4-10 utilisateurs', desc: 'Équipe moyenne, fonctionnalités avancées.' },
          { value: '11-25', label: '11-25 utilisateurs', desc: 'Équipe importante, gestion complexe.' },
          { value: '26-50', label: '26-50 utilisateurs', desc: 'Grande équipe, besoins enterprise.' },
          { value: '51-100', label: '51-100 utilisateurs', desc: 'Très grande équipe, architecture complexe.' },
          { value: '100+', label: '100+ utilisateurs', desc: 'Enterprise, architecture distribuée.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setCrmData({ ...crmData, users: o.value as UserType })}
            className={`p-3 md:p-4 rounded-md border text-left transition-all ${
              crmData.users === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.users === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.users === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 3) {
    // Pour from scratch, demander quel CRM ils veulent créer
    if (crmData.type === 'scratch') {
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Type de CRM souhaité</h3>
            <p className="text-text-muted">Quel type de CRM souhaitez-vous créer ?</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {[
              { value: 'salesforce', label: 'Salesforce', desc: 'CRM complet avec fonctionnalités avancées.' },
              { value: 'hubspot', label: 'HubSpot', desc: 'CRM marketing et vente intégré.' },
              { value: 'zoho', label: 'Zoho', desc: 'CRM modulaire et personnalisable.' },
              { value: 'pipedrive', label: 'Pipedrive', desc: 'CRM orienté pipeline de vente.' },
              { value: 'airtable', label: 'Airtable', desc: 'CRM basé sur base de données.' },
              { value: 'autre', label: 'Autre', desc: 'Autre CRM ou solution personnalisée.' }
            ].map((o: Option & { desc: string }) => (
              <button
                key={o.value}
                onClick={() => setCrmData({ ...crmData, crmTarget: o.value as CrmSourceType })}
                className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                  crmData.crmTarget === o.value 
                    ? `${brandClasses.border} ${brandClasses.accent}` 
                    : 'border-border hover:border-border bg-white'
                }`}
              >
                <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.crmTarget === o.value)}`}>{o.label}</div>
                <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.crmTarget === o.value, 'text-text-muted')}`}>{o.desc}</div>
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">CRM source</h3>
          <p className="text-text-muted">Depuis quel CRM migrez-vous ?</p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {[
            { value: 'salesforce', label: 'Salesforce', desc: 'Migration depuis Salesforce.' },
            { value: 'hubspot', label: 'HubSpot', desc: 'Migration depuis HubSpot.' },
            { value: 'zoho', label: 'Zoho', desc: 'Migration depuis Zoho CRM.' },
            { value: 'pipedrive', label: 'Pipedrive', desc: 'Migration depuis Pipedrive.' },
            { value: 'airtable', label: 'Airtable', desc: 'Migration depuis Airtable.' },
            { value: 'autre', label: 'Autre', desc: 'Autre CRM ou solution personnalisée.' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, crmSource: o.value as CrmSourceType })}
              className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                crmData.crmSource === o.value 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.crmSource === o.value)}`}>{o.label}</div>
              <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.crmSource === o.value, 'text-text-muted')}`}>{o.desc}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 4) {
    // Pour from scratch, afficher les intégrations directement
    if (crmData.type === 'scratch') {
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Intégrations nécessaires</h3>
            <p className="text-text-muted">Combien d&apos;intégrations sont nécessaires ?</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {[
              { value: '1-3', label: '1-3 intégrations', desc: 'Intégrations basiques, API simples.' },
              { value: '4-7', label: '4-7 intégrations', desc: 'Intégrations moyennes, APIs variées.' },
              { value: '8-12', label: '8-12 intégrations', desc: 'Intégrations avancées, APIs complexes.' },
              { value: '13+', label: '13+ intégrations', desc: 'Intégrations enterprise, architecture complexe.' }
            ].map((o: Option & { desc: string }) => (
              <button
                key={o.value}
                onClick={() => setCrmData({ ...crmData, integrations: o.value as IntegrationType })}
                className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                  crmData.integrations === o.value 
                    ? `${brandClasses.border} ${brandClasses.accent}` 
                    : 'border-border hover:border-border bg-white'
                }`}
              >
                <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.integrations === o.value)}`}>{o.label}</div>
                <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.integrations === o.value, 'text-text-muted')}`}>{o.desc}</div>
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">CRM cible</h3>
          <p className="text-text-muted">Vers quel CRM migrez-vous ?</p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {[
            { value: 'salesforce', label: 'Salesforce', desc: 'Migration vers Salesforce.' },
            { value: 'hubspot', label: 'HubSpot', desc: 'Migration vers HubSpot.' },
            { value: 'zoho', label: 'Zoho', desc: 'Migration vers Zoho CRM.' },
            { value: 'pipedrive', label: 'Pipedrive', desc: 'Migration vers Pipedrive.' },
            { value: 'airtable', label: 'Airtable', desc: 'Migration vers Airtable.' },
            { value: 'autre', label: 'Autre', desc: 'Autre CRM ou solution personnalisée.' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, crmTarget: o.value as CrmSourceType })}
              className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                crmData.crmTarget === o.value 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.crmTarget === o.value)}`}>{o.label}</div>
              <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.crmTarget === o.value, 'text-text-muted')}`}>{o.desc}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 5) {
    // Pour from scratch, afficher la formation
    if (crmData.type === 'scratch') {
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Formation nécessaire</h3>
            <p className="text-text-muted">Avez-vous besoin d&apos;une formation pour votre équipe ?</p>
          </div>
          
          <div className="space-y-4">
            {[
              { value: false, label: 'Non, pas de formation', desc: 'L&apos;équipe maîtrise déjà les outils.' },
              { value: true, label: 'Oui, formation nécessaire', desc: 'Formation recommandée pour optimiser l&apos;usage.' }
            ].map((o: { value: boolean; label: string; desc: string }) => (
              <button
                key={o.value.toString()}
                onClick={() => setCrmData({ ...crmData, training: o.value })}
                className={`w-full p-6 rounded-md border text-left transition-all ${
                  crmData.training === o.value 
                    ? `${brandClasses.border} ${brandClasses.accent}` 
                    : 'border-border hover:border-border bg-white'
                }`}
              >
                <div className={`font-regular text-lg ${getTextColor(crmData.training === o.value)}`}>{o.label}</div>
                <div className={`mt-1 ${getTextColor(crmData.training === o.value, 'text-text-muted')}`}>{o.desc}</div>
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Volume de données</h3>
          <p className="text-text-muted">Quel est le volume de données à migrer ?</p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {[
            { value: '<1k', label: 'Moins de 1 000', desc: 'Petit volume, migration simple.' },
            { value: '1k-5k', label: '1 000 - 5 000', desc: 'Volume moyen, migration standard.' },
            { value: '5k-20k', label: '5 000 - 20 000', desc: 'Volume important, migration complexe.' },
            { value: '20k-50k', label: '20 000 - 50 000', desc: 'Très gros volume, migration enterprise.' },
            { value: '50k-100k', label: '50 000 - 100 000', desc: 'Volume massif, migration critique.' },
            { value: '100k+', label: '100 000+', desc: 'Volume enterprise, migration stratégique.' }
          ].map((o: Option & { desc: string }) => (
            <button
              key={o.value}
              onClick={() => setCrmData({ ...crmData, dataVolume: o.value as DataVolumeType })}
              className={`p-3 md:p-4 rounded-md border text-left transition-all ${
                crmData.dataVolume === o.value 
                  ? `${brandClasses.border} ${brandClasses.accent}` 
                  : 'border-border hover:border-border bg-white'
              }`}
            >
              <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.dataVolume === o.value)}`}>{o.label}</div>
              <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.dataVolume === o.value, 'text-text-muted')}`}>{o.desc}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 6) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Intégrations nécessaires</h3>
        <p className="text-text-muted">Combien d&apos;intégrations sont nécessaires ?</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {[
          { value: '1-3', label: '1-3 intégrations', desc: 'Intégrations basiques, API simples.' },
          { value: '4-7', label: '4-7 intégrations', desc: 'Intégrations moyennes, APIs variées.' },
          { value: '8-12', label: '8-12 intégrations', desc: 'Intégrations avancées, APIs complexes.' },
          { value: '13+', label: '13+ intégrations', desc: 'Intégrations enterprise, architecture complexe.' }
        ].map((o: Option & { desc: string }) => (
          <button
            key={o.value}
            onClick={() => setCrmData({ ...crmData, integrations: o.value as IntegrationType })}
            className={`p-3 md:p-4 rounded-md border text-left transition-all ${
              crmData.integrations === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-base md:text-lg ${getTextColor(crmData.integrations === o.value)}`}>{o.label}</div>
            <div className={`mt-1 text-xs md:text-sm ${getTextColor(crmData.integrations === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === 7) return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero tracking-[-0.05em] mb-2">Formation nécessaire</h3>
        <p className="text-text-muted">Avez-vous besoin d&apos;une formation pour votre équipe ?</p>
      </div>
      
      <div className="space-y-4">
        {[
          { value: false, label: 'Non, pas de formation', desc: 'L&apos;équipe maîtrise déjà les outils.' },
          { value: true, label: 'Oui, formation nécessaire', desc: 'Formation recommandée pour optimiser l&apos;usage.' }
        ].map((o: { value: boolean; label: string; desc: string }) => (
          <button
            key={o.value.toString()}
            onClick={() => setCrmData({ ...crmData, training: o.value })}
            className={`w-full p-6 rounded-md border text-left transition-all ${
              crmData.training === o.value 
                ? `${brandClasses.border} ${brandClasses.accent}` 
                : 'border-border hover:border-border bg-white'
            }`}
          >
            <div className={`font-regular text-lg ${getTextColor(crmData.training === o.value)}`}>{o.label}</div>
            <div className={`mt-1 ${getTextColor(crmData.training === o.value, 'text-text-muted')}`}>{o.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  return null;
};

export default CrmForm;