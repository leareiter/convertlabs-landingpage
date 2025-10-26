"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import HeaderSection from "@/components/header-section";
import { Card } from "@/components/ui/card";

interface AppointmentCardProps {
  headerSubtitle: string;
  headerTitle: string;
  sectionId?: string;
  calLink?: string;
  namespace?: string;
  loadingText?: string;
  footerText?: string;
}

export default function AppointmentCard({ 
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-muted rounded-md p-2">
            <div className="w-full">
              {calLoaded ? (
                <Cal
                  namespace={namespace}
                  calLink={calLink}
                  config={{ "layout": "month_view", "theme": "light", "overflow": "scroll" }}
                />
              ) : (
                <div className="bg-white rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-text-muted">{loadingText}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center py-4">
                <p className="text-text-muted text-sm text-center leading-tight font-be-vietnam-pro">
                  {footerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
