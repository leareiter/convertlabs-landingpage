"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const hero = useMemo(() => ({
    badgeText: "Encore 3 places disponibles",
    title: "On construit des produits digitaux qui bossent pour toi.",
    description: "Pas de PowerPoint. Pas de wireframes qui dorment dans un Drive. Juste des outils opérationnels, des automatisations qui tournent en fond, et des systèmes d'acquisition qui rapportent.",
    primaryCta: "Réserver un appel de cadrage",
    secondaryCta: "Découvrir nos services"
  }), []);

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const greenBoxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hero) {
      const tl = gsap.timeline();

      tl.fromTo(text1Ref.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(4px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out"
        }
      )
        .fromTo(text2Ref.current,
          {
            opacity: 0,
            y: 20,
            filter: "blur(4px)"
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.4,
            ease: "power2.out"
          },
          "-=0.1"
        )
        .fromTo(text3Ref.current,
          {
            opacity: 0,
            y: 20,
            filter: "blur(4px)"
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.3,
            ease: "power2.out"
          },
          "-=0.1"
        )
        .fromTo(greenBoxRef.current,
          {
            opacity: 0,
            scale: 0.9,
            rotation: -2,
            y: 10
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 2,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.2)"
          },
          "+=0.1"
        );
    }
  }, [hero]);

  return (
    <section className="py-8 md:py-16 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-[40px] lg:text-7xl tracking-[-0.05em]  mb-8 md:mb-12 leading-tight text-center text-text-hero">
            <span ref={text1Ref} className="block font-be-vietnam-pro font-medium">On construit</span>
            <span ref={text2Ref} className="block font-be-vietnam-pro font-medium">des produits digitaux</span>
            <div className="flex items-center justify-center gap-4">
              <span ref={text3Ref} className="block mt-2 font-be-vietnam-pro font-medium">qui </span><span ref={greenBoxRef} className="inline-block font-times-new-roman font-medium italic  bg-brand-green text-text-hero px-6 py-2 rounded-md border border-brand-green/10 shadow-xs hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer transform rotate-2 opacity-0">bossent pour toi.</span></div>
          </h1>

          <p className="text-base md:text-xl font-be-vietnam-pro  font-regular text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed tracking-[-0.05em]">
            {hero.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < hero.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-black text-white text-lg px-6 md:px-8 py-6 rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200 w-full md:w-auto"
              asChild
            >
              <a href="#rendez-vous">
                {hero.primaryCta}
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-border text-foreground text-lg px-6 md:px-8 py-6 rounded-md font-medium -translate-y-1 hover:-translate-y-2 transition-transform duration-200 w-full md:w-auto"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}