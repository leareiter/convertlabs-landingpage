import HeaderSection from "@/components/header-section";
import ProjectCalculator from "@/components/ui/project-calculator";

export default function DesignMVPCalculator() {
  return (
    <section id="calculator" className="py-16 md:py-24 bg-white text-brand-black border-b border-border font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="ESTIMATION"
          title="Estimez votre projet"
        />
        <ProjectCalculator allowedTabs={['site', 'prototype', 'mvp']} brandColor="purple" />
      </div>
    </section>
  );
}