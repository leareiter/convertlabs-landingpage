"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

interface PricingCard {
  title: string;
  subtitle: string;
  description: string;
  result: string;
  perfectFor: string[];
  link: string;
  slotsLeft: number;
  isPopular?: boolean;
}

interface PricingCardsProps {
  offers: PricingCard[];
  sectionId?: string;
  popularIndex?: number;
  brandColor?: string;
  showPopularBadge?: boolean;
  showSlotsLeft?: boolean;
}

export default function PricingCards({ offers, sectionId, popularIndex = 1, brandColor = "brand-green", showPopularBadge = true, showSlotsLeft = true }: PricingCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const router = useRouter();
  
  const middleIndex = Math.floor(offers.length / 2);

  useEffect(() => {
    if (sectionRef.current && cardsRef.current.length > 0) {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        const middleCard = cardsRef.current[middleIndex];
        const otherCards = cardsRef.current.filter((_, index) => index !== middleIndex);

        gsap.fromTo(middleCard,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(otherCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, [popularIndex, middleIndex]);

  return (
    <div className="grid md:grid-cols-3 gap-2 max-w-7xl mx-auto bg-gray-100 rounded-md p-2" ref={sectionRef} id={sectionId}>
      {offers.map((offer, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="flex flex-col h-full relative"
        >
          {index === middleIndex && showPopularBadge && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="relative p-1">
                <div className={`absolute inset-0 ${brandColor}/40 rounded-full`}></div>
                <div className={`relative ${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} px-4 py-1.5 rounded-full tracking-tight text-sm font-medium`}>
                  La plus populaire
                </div>
              </div>
            </div>
          )}
          <Card className="rounded-md p-8 flex flex-col h-full relative overflow-hidden shadow-xs border-gray-100">
            <div className="text-center mb-2">
              <h3 className="text-3xl font-medium font-be-vietnam-pro text-text-hero mb-2 tracking-[-0.05em]">{offer.title}</h3>
              <p className="text-text-muted text-base font-regular font-be-vietnam-pro mb-6 min-h-[60px] flex items-center justify-center">{offer.subtitle}</p>

              <div className="flex items-center justify-center">
                <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
                <div className="mx-4 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
              </div>
            </div>

            <div className="grow flex flex-col">
              <div className="mb-6 min-h-[100px]">
                <h4 className="font-regular text-xl font-be-vietnam-pro text-text-hero mb-4">Ce que tu reçois :</h4>
                <ul className="space-y-2">
                  {offer.description.split('. ').map((sentence, sentenceIndex) => (
                    sentence.trim() && (
                      <li key={sentenceIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-text-hero rounded-full mr-3 mt-2 shrink-0"></div>
                        <span className="text-text-secondary text-base leading-relaxed">{sentence.trim()}</span>
                      </li>
                    )
                  ))}
                </ul>
              </div>

              <div className="bg-brand-black text-white border border-brand-green/20 rounded-md p-4 mb-6">
                <p className="text-lg font-regular font-be-vietnam-pro mb-2">
                  Résultat moyen :
                </p>
                <p className="text-sm text-white font-regular font-be-vietnam-pro">{offer.result}</p>
              </div>

              <div className="mb-4 grow min-h-[140px]">
                <h4 className="font-regular text-xl font-be-vietnam-pro text-text-hero mb-4">Parfait pour :</h4>
                <ul className="space-y-2">
                  {offer.perfectFor.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-text-hero rounded-full mr-3 mt-2 shrink-0"></div>
                      <span className="text-base text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button onClick={() => router.push(offer.link)} size="lg" className={`w-full cursor-pointer -translate-y-1 hover:-translate-y-2 transition-all duration-200 mt-auto text-base ${index === middleIndex
                ? `${brandColor} ${brandColor === "bg-brand-green" ? "text-brand-black" : "text-white"} hover:${brandColor}/90`
                : "bg-text-hero text-white hover:bg-text-hero/90"
              }`}>
              <a>En savoir plus</a>
              <ArrowRight className="ml-2" size={16} />
            </Button>
            {showSlotsLeft && (
              <div className="text-center flex items-center justify-center gap-2">
                <p className="text-sm text-text-muted/70 font-medium font-mono animate-pulse">
                  {offer.slotsLeft} place{offer.slotsLeft > 1 ? 's' : ''} restante{offer.slotsLeft > 1 ? 's' : ''}
                </p>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
