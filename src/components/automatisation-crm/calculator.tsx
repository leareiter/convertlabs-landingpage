import HeaderSection from "@/components/header-section";
import ProjectCalculator from "@/components/ui/project-calculator";

export default function AutomatisationCRMCalculator() {
  return (
    <section id="calculator" className="py-16 md:py-24 bg-brand-black text-white border-b border-border font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="ESTIMATION"
          title="Estimez votre projet"
          titleClassName="text-white"
          subtitleClassName="text-white"
        />
        <ProjectCalculator allowedTabs={['crm']} brandColor="orange" />
      </div>
    </section>
  );
}