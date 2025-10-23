import { useState } from 'react';
import { TabId, CalculationResult } from './use-project-calculator';

export interface LeadSubmissionData {
  email: string;
  name: string;
  company: string;
  calculatorType: TabId;
  estimation: CalculationResult;
}

export const useEmailSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const submitLead = async (submissionData: LeadSubmissionData): Promise<boolean> => {
    if (!submissionData.email || !submissionData.name || !submissionData.company) {
      setSubmitError('Veuillez remplir tous les champs obligatoires');
      return false;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        // Handle 409 error (email already exists) as success
        if (response.status === 409) {
          console.log('Email already exists in audience, treating as success');
          setSubmitSuccess(true);
          return true;
        }
        
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit lead');
      }

      const result = await response.json();
      console.log('Lead submitted successfully:', result);
      
      // Handle case where email already exists
      if (result.alreadyExists) {
        console.log('Email already exists in audience, treating as success');
      }
      
      setSubmitSuccess(true);
      return true;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi';
      console.error('Error submitting lead:', error);
      setSubmitError(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmission = () => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submitLead,
    resetSubmission,
  };
};
