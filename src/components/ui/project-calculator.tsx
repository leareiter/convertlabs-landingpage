'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  useProjectCalculator,
  TabId
} from '@/hooks/use-project-calculator';
import FormRenderer from '@/components/forms/form-renderer';
import LeadCaptureForm from '@/components/forms/lead-capture-form';
import ResultDisplay from '@/components/forms/result-display';

interface ProjectCalculatorProps {
  allowedTabs?: TabId[];
  brandColor?: 'green' | 'purple' | 'orange' | 'blue';
}

const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ allowedTabs, brandColor = 'green' }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formContentRef = useRef<HTMLDivElement>(null);
  const {
    activeTab: hookActiveTab,
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
    tabs,
    maxStep,
    isStepComplete,
    result,
    setActiveTab: hookSetActiveTab,
    setSiteData,
    setPrototypeData,
    setMvpData,
    setCrmData,
    setLinkedinData,
    setLeadData,
    handleNext,
    handleBack,
    handleLeadSubmit,
    resetCalculator
  } = useProjectCalculator({ allowedTabs });

  // Utiliser directement les valeurs du hook
  const activeTab = hookActiveTab;
  const setActiveTab = hookSetActiveTab;

  const getBrandClasses = () => {
    const colorMap = {
      green: {
        bg: 'bg-brand-black text-white',
        border: 'border-brand-black',
        text: 'text-brand-black',
        accent: 'bg-brand-black text-white',
        button: 'bg-brand-black hover:bg-brand-black text-white',
        sidebar: 'bg-brand-black/5 border-brand-black/20'
      },
      purple: {
        bg: 'bg-brand-purple text-white',
        border: 'border-brand-purple',
        text: 'text-brand-purple',
        accent: 'bg-brand-purple text-white',
        button: 'bg-brand-purple hover:bg-brand-purple text-white',
        sidebar: 'bg-brand-purple/5 border-brand-purple/20'
      },
      orange: {
        bg: 'bg-brand-orange text-white',
        border: 'border-brand-orange',
        text: 'text-brand-orange',
        accent: 'bg-brand-orange text-white',
        button: 'bg-brand-orange hover:bg-brand-orange text-white',
        sidebar: 'bg-brand-orange/5 border-brand-orange/20'
      },
      blue: {
        bg: 'bg-brand-blue text-white',
        border: 'border-brand-blue',
        text: 'text-brand-blue',
        accent: 'bg-brand-blue text-white',
        button: 'bg-brand-blue hover:bg-brand-blue text-white',
        sidebar: 'bg-brand-blue/5 border-brand-blue/20'
      }
    };
    return colorMap[brandColor];
  };

  const brandClasses = getBrandClasses();
  const getTextColor = (isSelected: boolean, defaultColor: string = 'text-gray-900') => {
    return isSelected ? 'text-white' : defaultColor;
  };

  const nextStep = handleNext;
  const prevStep = handleBack;
  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLeadSubmit();
  };

  // Animation d'apparition avec GSAP
  useEffect(() => {
    if (containerRef.current) {
      // Animation initiale
      gsap.fromTo(containerRef.current, 
        { 
          opacity: 0
        },
        { 
          opacity: 1,
          duration: 1.0,
          ease: "power2.out"
        }
      );

      // Animation des éléments enfants avec délai
      if (tabsRef.current) {
        gsap.fromTo(tabsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );
      }

      if (progressRef.current) {
        gsap.fromTo(progressRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power3.out" }
        );
      }
    }
  }, []);

  // Animation des transitions d'étapes (sauf boutons précédent/suivant)
  useEffect(() => {
    if (contentRef.current) {
      // Animation seulement sur changement d'étape, pas sur changement de tab
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [step]); // Retiré activeTab pour éviter l'animation sur changement de tab

  // Animation du contenu du formulaire au changement de tab
  useEffect(() => {
    if (formContentRef.current) {
      // Animation plus fluide du contenu du formulaire uniquement
      gsap.fromTo(formContentRef.current,
        { opacity: 0.8, y: 10 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [activeTab]);

  return (
    <section ref={containerRef} className="p-1 md:p-2 bg-surface-muted rounded-md max-w-2xl mx-auto font-be-vietnam-pro">
      <div className="bg-white rounded-md p-3 md:p-4">
        {(isHomePage || tabs.length > 1) && (
          <div ref={tabsRef} className="mb-1 md:mb-2">
            {/* Mobile Buttons */}
            <div className="block md:hidden">
              <div className={`grid gap-2 ${
                tabs.length === 1 ? 'grid-cols-1' :
                tabs.length === 2 ? 'grid-cols-2' :
                tabs.length === 3 ? 'grid-cols-3' :
                tabs.length === 4 ? 'grid-cols-2' :
                'grid-cols-2'
              }`}>
                {tabs.map((tab: { id: TabId; label: string }) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                      activeTab === tab.id
                        ? `${brandClasses.border} ${brandClasses.accent} text-white`
                        : 'border-border bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <div className="w-full overflow-hidden">
                <div className="relative flex items-center space-x-1 bg-surface-muted rounded-xl p-2">
                  <div className="absolute inset-0 bg-surface-muted rounded-xl p-2"></div>
                  {tabs.length > 1 && (
                    <div
                      className="absolute top-1 bottom-1 rounded-lg transition-all duration-300 ease-out bg-brand-black"
                      style={{
                        left: `${(tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length))}%`,
                        width: `${100 / tabs.length}%`,
                      }}
                    />
                  )}

                  {tabs.map((tab: { id: TabId; label: string }) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative z-10 flex-1 px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 ${activeTab === tab.id
                          ? 'text-white'
                          : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      <span className="truncate">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step Indicator */}
        <div ref={progressRef} className="bg-transparent rounded-lg p-6">
          <div className="text-center mb-2">
            <div className="text-xs md:text-sm text-text-muted">
              Étape {step} sur {maxStep}
            </div>
          </div>
          <Progress
            value={(step / maxStep) * 100}
            className="w-full h-3 md:h-4 rounded-full overflow-hidden"
            brandColor={isHomePage ? 'black' : brandColor}
          />
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="space-y-4 md:space-y-6">

          {/* Content Area */}
          <div ref={formContentRef} className="min-h-[300px] md:min-h-[400px]">
            {showResult ? (
              <ResultDisplay
                result={result}
                brandClasses={brandClasses}
                onReset={resetCalculator}
                activeTab={activeTab}
              />
            ) : step === maxStep ? (
              <LeadCaptureForm
                leadData={leadData}
                setLeadData={setLeadData}
                isSubmitting={isSubmitting}
                submitError={submitError}
                submitSuccess={submitSuccess}
                brandClasses={brandClasses}
                onSubmit={submitLead}
              />
            ) : (
              <FormRenderer
                activeTab={activeTab}
                siteData={siteData as any}
                setSiteData={setSiteData as any}
                prototypeData={prototypeData as any}
                setPrototypeData={setPrototypeData as any}
                mvpData={mvpData as any}
                setMvpData={setMvpData as any}
                crmData={crmData as any}
                setCrmData={setCrmData as any}
                linkedinData={linkedinData as any}
                setLinkedinData={setLinkedinData as any}
                step={step}
                brandClasses={brandClasses}
                brandColor={brandColor}
                getTextColor={getTextColor}
              />
            )}
          </div>

          {/* Navigation */}
          {!showResult && step < maxStep && (
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 md:pt-6 border-t border-border">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </button>

              <Button
                size="lg"
                onClick={nextStep}
                disabled={!isStepComplete}
                className={`inline-flex items-center justify-center font-medium transition-colors ${brandClasses.button} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;