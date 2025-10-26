"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import HeaderSection from "@/components/header-section";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Est-ce que vous utilisez du no-code ?",
    answer: "Non. On code tout en React/Next.js pour garantir performance, sécurité et évolutivité. Le no-code (Webflow/Framer) est réservé aux sites vitrines uniquement."
  },
  {
    id: "2", 
    question: "Que se passe-t-il si je veux reprendre le projet plus tard ?",
    answer: "Le code est à toi, documenté sur GitHub. Tu peux le reprendre, le refactoriser, ou le faire évoluer sans nous. Aucune dépendance."
  },
  {
    id: "3",
    question: "Quel est votre délai de réponse ?",
    answer: "Moins de 48h. Toujours. Si tu nous envoies une demande le lundi, tu as une réponse le mercredi maximum."
  },
  {
    id: "4",
    question: "Est-ce que vous prenez tous les projets ?",
    answer: "Non. Si on estime qu'on n'est pas la meilleure option pour ton besoin, on te le dit clairement et on te redirige. Pas de vente forcée."
  },
  {
    id: "5",
    question: "Pourquoi est-il affiché \"3 places restantes\" ?",
    answer: "On limite à 8 projets simultanés pour garantir qualité et respect des délais. C'est une contrainte opérationnelle réelle, pas une tactique marketing."
  },
  {
    id: "6",
    question: "Que se passe-t-il après la livraison ?",
    answer: "2 semaines de support incluses. Ensuite, tu peux souscrire à un forfait maintenance (optionnel) ou gérer en interne avec la documentation fournie."
  },
  {
    id: "7",
    question: "Est-ce que vous travaillez avec des freelances ou en interne ?",
    answer: "Équipe interne et Freelance. Les meilleurs profils pour garantir la qualité et la cohérence."
  },
  {
    id: "8",
    question: "Quelle est la garantie sur la livraison ?",
    answer: "Si le MVP n'est pas livré dans les délais annoncés (hors changement de scope validé), on continue gratuitement, notre erreur notre problème."
  }
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-surface-muted last:border-b-0 font-be-vietnam-pr tracking-[-0.05em]">
      <button
        onClick={onToggle}
        className={cn(
          "w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer transition-colors duration-300 group",
          isOpen ? "bg-brand-black" : "bg-white hover:bg-brand-black"
        )}
      >
        <h3 className={cn(
          "text-lg font-regular pr-4 transition-colors duration-300",
          isOpen ? "text-white" : "text-gray-900 group-hover:text-white"
        )}>
          {item.question}
        </h3>
        <div className="shrink-0">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 transition-colors duration-300 text-white" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 transition-colors duration-300 text-gray-500 group-hover:text-white" />
          )}
        </div>
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-8 pb-6 pt-8 transform transition-transform duration-500 ease-out">
          <p className="leading-relaxed font-regular text-text-muted">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <HeaderSection 
            subtitle="Questions fréquentes"
            title="Retrouvez les réponses aux questions les plus courantes"
          />

          {/* FAQ Items */}
          <div className="bg-surface-muted p-2 rounded-lg">
            <div className="bg-white rounded-lg border border-surface-muted overflow-hidden">
              {faqData.map((item) => (
                <FAQItemComponent
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
