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
                On ne vend pas des prestations, on construit de la traction.
                Chaque verticale Convertlabs est pensée comme un levier de croissance : créer, automatiser, ou convertir.
                Notre mission : transformer ton produit en business qui scale, sans perdre de temps ni de marge en process inutiles.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
