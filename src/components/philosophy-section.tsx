import HeaderSection from "@/components/header-section";
export default function PhilosophySection() {
  return (
    <section className="py-16 bg-brand-black text-white border-b border-border" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-4">
            NOTRE PHILOSOPHIE
          </p>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-be-vietnam-pro font-medium text-white tracking-[-0.05em]">
              On ne vend pas des prestations,
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-be-vietnam-pro font-medium text-white tracking-[-0.05em] leading-tight">
              on construit de la traction.
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-regular font-be-vietnam-pro mb-8 tracking-[-0.05em]">
                Chaque verticale Convertlabs est pensée comme un levier de croissance : créer, automatiser, ou convertir. Notre mission : transformer ton produit en business qui scale, sans perdre de temps ni de marge en process inutiles.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
