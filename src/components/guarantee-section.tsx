import HeaderSection from "@/components/header-section";

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-muted border-b border-gray-100">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="GARANTIE"
          title="On t'aide ou on te le dit"
        />
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="bg-surface-secondary border border-border rounded-md p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              On t&apos;aide ou on te le dit.
            </h3>
            
            <p className="text-lg text-text-secondary mb-6">
              On ne prend pas tous les projets.
            </p>
            
            <p className="text-lg text-text-secondary mb-6">
              Si on estime qu&apos;on n&apos;est pas la meilleure option pour ton besoin, on te l&apos;explique clairement et on te redirige.
            </p>
            
            <div className="bg-brand-green/10 border border-brand-green/20 rounded-md p-6">
              <p className="text-lg font-semibold text-foreground">
                Pas de bullshit. Pas de vente forcée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
