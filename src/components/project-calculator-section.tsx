import ProjectCalculator from "@/components/ui/project-calculator";
import HeaderSection from "./header-section";

export default function ProjectCalculatorSection() {
  return (
    <section id="calculator" className="py-16 md:py-24 bg-brand-black text-white border-b border-border font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="ESTIMATION"
          title="Estimez votre projet"
          titleClassName="text-white"
          subtitleClassName="text-white"
        />
        <ProjectCalculator allowedTabs={['linkedin', 'crm', 'site', 'prototype', 'mvp']} brandColor="green" />
      </div>
    </section>
  );
}