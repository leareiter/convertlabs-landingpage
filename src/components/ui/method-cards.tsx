'use client';
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MethodCard {
  title: string;
  description: string;
}

interface MethodCardsProps {
  methods: MethodCard[];
  activeColor: string;
  containerId?: string;
}

export default function MethodCards({ methods, activeColor, containerId }: MethodCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    if (cardsVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % methods.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [methods.length, cardsVisible]);

  useEffect(() => {
    if (containerRef.current && cardsRef.current.length > 0) {
      gsap.fromTo(cardsRef.current, 
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationX: 15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.5,
          ease: "power1.out",
          onComplete: () => setCardsVisible(true),
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-gray-100 rounded-md p-1 md:p-2" ref={containerRef} id={containerId}>
      <div className="flex flex-col md:flex-row items-stretch relative">
        {methods.map((method, index) => (
          <div key={index} className="flex-1 relative">
            <Card 
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`p-8 md:p-10 border-gray-100 shadow-xs w-full h-full flex flex-col transition-all duration-500 ease-out ${
                activeCard === index 
                  ? "bg-brand-black text-white" 
                  : "bg-background"
              } ${
                index === 0 ? "rounded-t-md rounded-b-none md:rounded-l-md md:rounded-r-none border-b md:border-b-0 md:border-r border-gray-200" :
                index === methods.length - 1 ? "rounded-b-md rounded-t-none md:rounded-r-md md:rounded-l-none" :
                "rounded-none border-b md:border-b-0 md:border-r border-gray-200"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-4 flex-1 justify-center min-h-[250px]">
                <div className="flex flex-col gap-3">
                  <h3 className={`text-3xl font-medium font-be-vietnam-pro text-text-hero mb-2 tracking-[-0.05em] ${
                    activeCard === index ? "text-white" : "text-foreground"
                  }`}>{method.title}</h3>
                  <p className={`text-base leading-relaxed ${
                    activeCard === index ? "text-gray-300" : "text-text-secondary"
                  }`}>{method.description}</p>
                </div>
              </div>
            </Card>

            {cardsVisible && (activeCard === index || activeCard > index) && (
              <div className="flex items-center justify-center absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative p-1 transition-all duration-500 ease-out">
                  <div className={`absolute inset-0 ${activeColor}/40 rounded-full`}></div>
                  <div className={`relative ${activeColor} text-white w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg font-bold`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
