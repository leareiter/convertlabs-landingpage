'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProjectCalculator from "@/components/ui/project-calculator";
import HeaderSection from "./header-section";

export default function ProjectCalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Animation d'apparition au scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
              );

              if (headerRef.current) {
                gsap.fromTo(headerRef.current,
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
                );
              }

              if (calculatorRef.current) {
                gsap.fromTo(calculatorRef.current,
                  { opacity: 0, y: 40 },
                  { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
                );
              }

              // Arrêter d'observer après l'animation
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} id="calculator" className="py-16 bg-white text-brand-black border-b border-border font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <div ref={headerRef}>
          <HeaderSection
            subtitle="ESTIMATION"
            title="Estimez votre projet"
          />
        </div>
        <div ref={calculatorRef}>
          <ProjectCalculator allowedTabs={['linkedin', 'crm', 'site', 'prototype', 'mvp']} brandColor="green" />
        </div>
      </div>
    </section>
  );
}