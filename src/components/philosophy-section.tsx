import HeaderSection from "@/components/header-section";
export default function PhilosophySection() {
  return (
    <section className="py-16 bg-brand-black text-white border-b border-border" >
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE PHILOSOPHIE"
          title="Nous ne sommes pas une agence tout-en-un."
          titleClassName="text-white" 
          subtitleClassName="text-white" 
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-regular font-be-vietnam-pro mb-8">
                Chaque verticale ConvertLabs est un bloc d'expertise autonome, pensé pour répondre à un besoin précis et mesurable. Notre mission est de concevoir, automatiser et faire croître des produits digitaux durables, en construisant autour de la performance et de la clarté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
