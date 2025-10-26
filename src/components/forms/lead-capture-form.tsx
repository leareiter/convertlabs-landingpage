'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface LeadCaptureFormProps {
  leadData: {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
  };
  setLeadData: (data: {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
  }) => void;
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
  brandClasses: {
    border: string;
    accent: string;
    text: string;
    button: string;
  };
  onSubmit: (e: React.FormEvent) => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  leadData,
  setLeadData,
  isSubmitting,
  submitError,
  submitSuccess,
  brandClasses,
  onSubmit
}) => {
  return (
    <div className="space-y-4 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-regular text-gray-900 mb-2">Dernière étape</h2>
        <p className="text-text-muted">Reçois ton estimation détaillée par email</p>
      </div>

      <div className="max-w-md mx-auto">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={leadData.firstName}
                onChange={(e) => setLeadData({ ...leadData, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                placeholder="Jean"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                value={leadData.lastName}
                onChange={(e) => setLeadData({ ...leadData, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
                placeholder="Dupont"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={leadData.email}
              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="jean.dupont@exemple.com"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              value={leadData.company}
              onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="Mon Entreprise"
              required
            />
          </div>

          <p className="text-xs text-gray-500 text-center">
            En soumettant ce formulaire, tu acceptes de recevoir des communications de notre part.
          </p>

          <Button
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-medium text-base transition-colors ${brandClasses.button} disabled:opacity-50 disabled:cursor-not-allowed`}
            data-rybbit-event="calculator"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Envoi en cours...
              </div>
            ) : submitSuccess ? (
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Envoyé avec succès !
              </div>
            ) : (
              'Recevoir mon estimation'
            )}
          </Button>

          {submitError && (
            <div className="text-red-600 text-sm text-center">
              {submitError}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureForm;