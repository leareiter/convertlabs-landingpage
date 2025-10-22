"use client";
import HeaderSection from "@/components/header-section";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function PhilosophySection() {
  const fullText = "Concevoir, automatiser et faire croître des produits digitaux durables, en construisant autour de la performance et de la clarté.";

  return (
    <section className="py-20 bg-white text-white">
      <div className="container mx-auto px-4">
        <HeaderSection
          subtitle="NOTRE PHILOSOPHIE"
          title="Nous ne sommes pas une agence tout-en-un."
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg text-brand-black font-regular leading-relaxed mb-8">
                Chaque verticale ConvertLabs est un <strong className="text-foreground">bloc d&apos;expertise autonome</strong>, pensé pour répondre à un besoin précis et mesurable.
              </p>
            </div>

            <div className="w-full max-w-2xl">
              <div className="bg-surface-muted rounded-lg p-2">
                <div className="bg-brand-black rounded-lg p-8 text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <div className="mx-4 w-2 h-2 bg-brand-green rounded-full"></div>
                    </div>                    <h3 className="text-xl font-semibold font-be-vietnam-pro text-white">Notre mission</h3>
                  </div>

                  <div className="text-lg text-white  flex items-center justify-center">
                    Concevoir, automatiser et faire croître des produits digitaux durables, en construisant autour de la performance et de la clarté.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
