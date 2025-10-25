"use client";

import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { forwardRef } from "react";
import Image from "next/image";

interface UseCaseCardProps {
  client: string;
  founder: string;
  avatar: string;
  context: string;
  problem: string[];
  solution: {
    week1?: string;
    week2?: string;
    week2to3?: string;
    week2to4?: string;
    week3to10?: string;
    week4to8?: string;
    week5to6?: string;
  };
  results: string[];
  category: "design" | "crm" | "linkedin";
}

const UseCaseCard = forwardRef<HTMLDivElement, UseCaseCardProps>(
  ({ client, founder, avatar, context, problem, solution, results, category }, ref) => {
    const getCategoryBadge = () => {
      switch (category) {
        case "design":
          return "Design & MVP";
        case "crm":
          return "Automatisation CRM";
        case "linkedin":
          return "Prospection LinkedIn";
        default:
          return "Use Case";
      }
    };

    const getAvailableSteps = () => {
      const steps = [];
      if (solution.week1) steps.push('week1');
      if (solution.week2to3) steps.push('week2to3');
      if (solution.week2) steps.push('week2');
      if (solution.week2to4) steps.push('week2to4');
      if (solution.week3to10) steps.push('week3to10');
      if (solution.week4to8) steps.push('week4to8');
      if (solution.week5to6) steps.push('week5to6');
      return steps;
    };

    const availableSteps = getAvailableSteps();

    return (
      <div className="relative">
        <div className="bg-surface-muted rounded-md p-2">
        <Card
          ref={ref}
          className="relative bg-white p-6 md:p-8 rounded-md border border-surface-muted"
        >
        <div>
          <div className={`inline-block text-white px-3 py-1 rounded-full text-sm font-medium mb-6 ${
            category === "design" ? "bg-brand-purple" :
            category === "crm" ? "bg-brand-orange" :
            category === "linkedin" ? "bg-brand-blue" :
            "bg-brand-blue"
          }`}>
            {getCategoryBadge()}
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src={avatar} 
              alt={founder}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-regular font-be-vietnam-pro text-text-hero mb-2">
                {client}
              </h3>
              <p className="text-brand-black font-regular font-be-vietnam-pro mb-1">{founder}</p>
              <p className="text-text-muted font-regular font-be-vietnam-pro">{context}</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
                <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
                <div className="mx-4 w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
              </div>
        </div>

        <div className="space-y-6">

          {/* Problème */}
          <div>
            <h4 className="text-3xl font-regular text-brand-black mb-4">Problème</h4>
            <ul className={`space-y-3 list-disc pl-6 ${
              category === "design" ? "[&>li::marker]:text-brand-purple" :
              category === "crm" ? "[&>li::marker]:text-brand-orange" :
              category === "linkedin" ? "[&>li::marker]:text-brand-blue" :
              "[&>li::marker]:text-brand-orange"
            }`}>
              {problem.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-3xl font-regular text-brand-black mb-4">Solution ConvertLabs</h4>
            <div className="space-y-2">
              {availableSteps.map((step, index) => {
                const isLastStep = index === availableSteps.length - 1;
                const stepData = {
                  week1: { title: "Semaine 1 : Design Sprint", content: solution.week1 },
                  week2to3: { title: "Semaines 2-3 : Prototype Figma", content: solution.week2to3 },
                  week2: { title: "Semaine 2 : Setup Infrastructure", content: solution.week2 },
                  week2to4: { title: "Semaines 2-4 : Implémentation CRM", content: solution.week2to4 },
                  week3to10: { title: "Semaines 3-10 : Exécution & Pilotage", content: solution.week3to10 },
                  week4to8: { title: "Semaines 4-8 : MVP Next.js", content: solution.week4to8 },
                  week5to6: { title: "Semaines 5-6 : Automatisation", content: solution.week5to6 }
                } as const;

                const currentStep = stepData[step as keyof typeof stepData];

                return (
                  <div key={step}>
                    <div className="bg-white p-4 rounded-lg border border-surface-muted">
                      <h5 className="font-medium text-lg text-brand-black mb-2">{currentStep.title}</h5>
                      <p className="text-text-muted text-sm leading-relaxed">{currentStep.content}</p>
                    </div>
                    {!isLastStep && (
                      <div className="flex justify-center py-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          category === "design" ? "bg-brand-purple" :
                          category === "crm" ? "bg-brand-orange" :
                          category === "linkedin" ? "bg-brand-blue" :
                          "bg-brand-orange"
                        }`}>
                          <ArrowDown className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Résultats */}
          <div>
            <h4 className="text-3xl font-regular text-brand-black mb-4">Résultats</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="p-4 rounded-lg bg-brand-black">
                  <span className="text-white text-xl leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Card>
        </div>
      </div>
    );
  }
);

UseCaseCard.displayName = "UseCaseCard";

export default UseCaseCard;
