"use client";
import HeaderSection from "@/components/header-section";
import { useEffect, useState } from "react";

export default function PhilosophySection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Concevoir, automatiser et faire croître des produits digitaux durables, en construisant autour de la performance et de la clarté.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="container mx-auto px-4">
        <HeaderSection 
          subtitle="NOTRE PHILOSOPHIE"
          title="Une approche différente du digital"
        />
        
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="text-lg text-text-secondary mb-8">
            Nous ne sommes pas une agence &quot;tout-en-un&quot;.
          </p>
          
          <p className="text-lg text-text-secondary mb-8">
            Chaque verticale ConvertLabs est un <strong className="text-foreground">bloc d&apos;expertise autonome</strong>, pensé pour répondre à un besoin précis et mesurable.
          </p>
          
          <div className="bg-surface-muted rounded-2xl p-2 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Notre mission :</h3>
              <div className="text-lg text-text-secondary min-h-[120px] font-mono flex items-center justify-center">
                <span>
                  {displayedText}
                  <span className={`inline-block w-0.5 h-6 bg-text-hero ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
