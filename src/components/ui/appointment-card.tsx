"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import HeaderSection from "@/components/header-section";
import { Card } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
}

interface AppointmentCardProps {
  steps: Step[];
  headerSubtitle: string;
  headerTitle: string;
  sectionId?: string;
  calLink?: string;
  namespace?: string;
  loadingText?: string;
  footerText?: string;
}

export default function AppointmentCard({ 
  steps, 
  headerSubtitle, 
  headerTitle, 
  sectionId = "rendez-vous",
  calLink = "benjamin-convertlabs/30min",
  namespace = "discovery-call",
  loadingText = "Chargement du calendrier...",
  footerText = "Réponse sous 48h. Sans engagement."
}: AppointmentCardProps) {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ "namespace": namespace });
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view", "theme": "light" });
        setCalLoaded(true);

        // Hide Cal.com logo after a short delay
        setTimeout(() => {
          const calLogos = document.querySelectorAll('a[href*="cal.com"], [data-cal-link], .cal-branding, .cal-logo, .cal-powered-by, .cal-footer, .cal-attribution');
          calLogos.forEach(logo => {
            if (logo instanceof HTMLElement) {
              logo.style.display = 'none';
            }
          });
        }, 1000);
      } catch (error) {
        console.error("Error loading Cal.com:", error);
        setCalLoaded(true);
      }
    })();
  }, [namespace]);

  return (
    <section id={sectionId} className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle={headerSubtitle}
          title={headerTitle}
        />

        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-muted rounded-md p-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col gap-1 h-full">
                  {steps.map((step, index) => (
                    <Card key={index} className="px-6 bg-brand-black text-white border-surface-muted shadow-xs rounded-md flex-1 flex items-center">
                      <div className="flex flex-col items-center text-center w-full">
                        <h3 className="text-lg font-be-vietnam-pro font-medium text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white text-sm w-full h-10 flex items-center justify-center leading-tight">
                          {step.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                  <div className="flex-1 flex items-center justify-center py-4">
                    <p className="text-text-muted text-sm text-center leading-tight font-be-vietnam-pro">
                      {footerText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3 h-full">
                {calLoaded ? (
                  <Cal
                    namespace={namespace}
                    calLink={calLink}
                    config={{ "layout": "month_view", "theme": "light" }}
                  />
                ) : (
                  <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-96">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-text-muted">{loadingText}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
