"use client";

import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import HeaderSection from "@/components/header-section";

const TestimonialCard = ({
  name,
  content,
  role,
  index,
}: {
  name: string;
  content: string;
  role: string;
  index: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-64 w-96 cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col border-surface-muted shadow-xs",
      )}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-brand-green fill-current" />
        ))}
      </div>
      <blockquote className="text-sm text-gray-700 dark:text-gray-300 mb-4 tracking-tight font-regular flex-1">
        {content}
      </blockquote>
      <div className="flex items-center mt-auto">
        <div>
          <div className="flex items-center">
            <p className="font-semibold text-gray-900 dark:text-white text-sm">{name}</p>
          </div>
          <p className="text-xs font-regular text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </figure>
  );
};

export default function TestimonialsSection() {
  const testimonials = {
    items: [
      {
        name: "Julien Marceau",
        content: "En 4 semaines, on est passés de l'idée au MVP validé avec 200 early adopters. ConvertLabs a compris qu'on n'avait pas besoin de perfection, mais d'un produit testable rapidement. Aujourd'hui on lève notre pré-seed grâce à cette traction.",
        role: "Founder @ HealthSyncr "
      },
      {
        name: "Sarah Bentayeb",
        content: "Avant ConvertLabs, notre CRM était un cimetière de données. Maintenant, chaque lead est automatiquement qualifié, relancé et suivi. On a gagné 15h par semaine sur l'admin et augmenté notre taux de closing de 40%. C'est une machine bien huilée.",
        role: "CEO @ Impulse Conseil"
      },
      {
        name: "Henrick Merle",
        content: "On faisait de la prospection manuelle depuis 2 ans. Résultat : 2-3 RDV par mois, pour un temps fou. Depuis qu'on bosse avec ConvertLabs, on a 12 à 14 rendez-vous qualifiés chaque mois, en pilote automatique. Je ne touche plus à rien, je me connecte juste pour prendre les appels.",
        role: "Président @ AFC-Stab"
      }
    ]
  };

  return (
    <section >
      <div className="container mx-auto">
        <HeaderSection 
          subtitle="TÉMOIGNAGES"
          title="Déjà 10+ entreprises qui scalent avec nous"
        />

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {testimonials.items.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                name={testimonial.name} 
                content={testimonial.content} 
                role={testimonial.role}
                index={index} 
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {testimonials.items.slice(3).map((testimonial, index) => (
              <TestimonialCard 
                key={index + 3} 
                name={testimonial.name} 
                content={testimonial.content} 
                role={testimonial.role}
                index={index} 
              />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </div>
    </section>
  );
}
