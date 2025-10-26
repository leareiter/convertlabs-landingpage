"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

interface HeroCardProps {
  badgeText?: string;
  title: string;
  titlePart1?: string;
  titlePart2?: string;
  titlePart3?: string;
  titleHighlight?: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaLink?: string;
  secondaryCtaLink?: string;
  brandColor?: string;
  showBadge?: boolean;
  sectionId?: string;
  forceFourLines?: boolean;
  showStats?: boolean;
}

export default function HeroCard({
  badgeText = "Encore 3 places disponibles",
  title,
  titlePart1 = "On construit",
  titlePart2 = "des produits digitaux",
  titlePart3 = "qui ",
  titleHighlight = "bossent pour toi.",
  description,
  primaryCta,
  secondaryCta,
  primaryCtaLink = "#rendez-vous",
  secondaryCtaLink,
  brandColor = "bg-brand-green",
  showBadge = true,
  sectionId,
  forceFourLines = false,
  showStats = false
}: HeroCardProps) {
  const hero = useMemo(() => ({
    badgeText,
    title,
    description,
    primaryCta,
    secondaryCta
  }), [badgeText, title, description, primaryCta, secondaryCta]);

  const optimizedTitleParts = useMemo(() => {
    const fullTitle = `${titlePart1} ${titlePart2} ${titlePart3}`.trim();
    const words = fullTitle.split(' ');
    if (words.length <= 3) {
      return {
        line1: words.slice(0, 1).join(' '),
        line2: words.slice(1, 2).join(' '),
        line3: words.slice(2).join(' ')
      };
    } else if (words.length <= 6) {
      const midPoint = Math.ceil(words.length / 2);
      return {
        line1: words.slice(0, midPoint).join(' '),
        line2: words.slice(midPoint).join(' '),
        line3: ''
      };
    } else {
      const wordsPerLine = Math.ceil(words.length / 3);
      return {
        line1: words.slice(0, wordsPerLine).join(' '),
        line2: words.slice(wordsPerLine, wordsPerLine * 2).join(' '),
        line3: words.slice(wordsPerLine * 2).join(' ')
      };
    }
  }, [titlePart1, titlePart2, titlePart3]);

  const optimizedFourLines = useMemo(() => {
    const fullTitle = `${titlePart1} ${titlePart2} ${titlePart3}`.trim();
    const words = fullTitle.split(' ');

    if (words.length <= 4) {
      return {
        line1: words.slice(0, 1).join(' '),
        line2: words.slice(1, 2).join(' '),
        line3: words.slice(2, 3).join(' '),
        line4: words.slice(3).join(' ')
      };
    } else {
      const wordsPerLine = Math.ceil(words.length / 4);
      return {
        line1: words.slice(0, wordsPerLine).join(' '),
        line2: words.slice(wordsPerLine, wordsPerLine * 2).join(' '),
        line3: words.slice(wordsPerLine * 2, wordsPerLine * 3).join(' '),
        line4: words.slice(wordsPerLine * 3).join(' ')
      };
    }
  }, [titlePart1, titlePart2, titlePart3]);

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const greenBoxRef = useRef<HTMLSpanElement>(null);
  const greenBoxMobileRef = useRef<HTMLSpanElement>(null);
  const greenBoxDesktopRef = useRef<HTMLSpanElement>(null);

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
          duration: 0.2,
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
            duration: 0.2,
            ease: "power2.out"
          },
          "-=0.05"
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
            duration: 0.15,
            ease: "power2.out"
          },
          "-=0.05"
        )
        .fromTo([greenBoxRef.current, greenBoxMobileRef.current, greenBoxDesktopRef.current].filter(Boolean),
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
            duration: 0.3,
            ease: "back.out(1.2)"
          },
          "+=0.2"
        );
    }
  }, [hero]);

  return (
    <section id={sectionId} className="py-8 md:py-16 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl lg:max-w-8xl mx-auto text-center">
          {showBadge && (
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} text-xs md:text-base tracking-tight font-medium mb-8`}>
              {hero.badgeText}
            </div>
          )}

          <h1 className="text-[40px] lg:text-7xl tracking-[-0.05em] mb-8 md:mb-12 leading-tight text-center text-text-hero">
            {forceFourLines ? (
              <>
                {/* Version mobile : 4 lignes avec distribution optimisée des mots */}
                <div className="block md:hidden">
                  <span ref={text1Ref} className="block font-be-vietnam-pro font-medium">{optimizedFourLines.line1}</span>
                  <span ref={text2Ref} className="block font-be-vietnam-pro font-medium">{optimizedFourLines.line2}</span>
                  <span ref={text3Ref} className="block font-be-vietnam-pro font-medium">{optimizedFourLines.line3}</span>
                  {optimizedFourLines.line4 && (
                    <span className="block font-be-vietnam-pro font-medium">{optimizedFourLines.line4}</span>
                  )}
                  <span
                    ref={greenBoxMobileRef}
                    className={`inline-block font-times-new-roman text-5xl font-medium italic ${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} px-5 py-2 rounded-md shadow-xs hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer transform rotate-2 opacity-0`}
                  >
                    {titleHighlight}
                  </span>
                </div>

                {/* Version desktop : 3 lignes avec distribution optimisée */}
                <div className="hidden md:block">
                  <span ref={text1Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line1}</span>
                  <span ref={text2Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line2}</span>
                  <div className="flex items-center justify-center gap-4">
                    <span ref={text3Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line3}</span>
                    <span
                      ref={greenBoxDesktopRef}
                      className={`inline-block font-times-new-roman text-8xl font-medium italic ${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} px-5 py-2 rounded-md shadow-xs hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer transform rotate-2 opacity-0`}
                    >
                      {titleHighlight}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Version 3 lignes pour mobile et desktop avec distribution optimisée */}
                <span ref={text1Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line1}</span>
                <span ref={text2Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line2}</span>
                <div className="flex items-center justify-center gap-4">
                  <span ref={text3Ref} className="block font-be-vietnam-pro font-medium">{optimizedTitleParts.line3}</span>
                  <span
                    ref={greenBoxRef}
                    className={`inline-block font-times-new-roman text-5xl md:text-8xl font-medium italic ${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} px-5 py-2 rounded-md shadow-xs hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer transform rotate-2 opacity-0`}
                  >
                    {titleHighlight}
                  </span>
                </div>
              </>
            )}
          </h1>

          <p className="text-base md:text-xl font-be-vietnam-pro font-regular text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed tracking-[-0.05em]">
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
              className="bg-brand-black text-white text-lg rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200 w-full md:w-auto"
              asChild
            >
              <a href={primaryCtaLink}>
                {hero.primaryCta}
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-border text-foreground text-lg  rounded-md font-medium -translate-y-1 hover:-translate-y-2 transition-transform duration-200 w-full md:w-auto"
              asChild={!!secondaryCtaLink}
            >
              {secondaryCtaLink ? (
                <a href={secondaryCtaLink}>
                  {hero.secondaryCta}
                </a>
              ) : (
                <span>{hero.secondaryCta}</span>
              )}
            </Button>
          </div>

          {showStats && (
            <div className="mt-8 flex flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base text-text-muted tracking-[-0.05em]">
              <span className="font-medium">15 projets livrés en 2025</span>
              <span className="w-2 h-2 bg-brand-green rounded-full"></span>
              <span className="font-medium">Délai moyen : 6 semaines</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
