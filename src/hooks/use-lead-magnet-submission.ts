import { useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email('Email invalide').min(1, 'Email requis');

export interface LeadMagnetSubmissionData {
  email: string;
  leadMagnetType: 'designLM' | 'crmLM' | 'linkedinLM';
}

export const useLeadMagnetSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const submitLeadMagnet = async (submissionData: LeadMagnetSubmissionData): Promise<boolean> => {
    // Validate email
    const emailValidation = emailSchema.safeParse(submissionData.email);
    if (!emailValidation.success) {
      setSubmitError(emailValidation.error.issues[0]?.message || 'Email invalide');
      return false;
    }

    if (!submissionData.leadMagnetType) {
      setSubmitError('Type de lead magnet requis');
      return false;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        if (response.status === 409) {
          setSubmitSuccess(true);
          return true;
        }

        let errorMessage = 'Failed to submit lead magnet';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          errorMessage = `Erreur serveur (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      return true;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi';
      console.error('Error submitting lead magnet:', error);
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
    submitLeadMagnet,
    resetSubmission,
  };
};

