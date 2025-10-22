"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import HeaderSection from "@/components/header-section";

export default function AppointmentSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"light"});
    })();
  }, []);

  return (
    <section id="rendez-vous" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="RENDEZ-VOUS"
          title="Réserve ton appel de cadrage"
        />
        
        <div className="max-w-6xl mx-auto">
            <Cal 
              namespace="discovery-call"
              calLink="benjamin-convertlabs/30min"
              style={{width:"100%",height:"700px",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
        </div>
      </div>
    </section>
  );
}
