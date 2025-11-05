"use client";

import { ArrowUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footer = {
    logo: "ConvertLabs",
    description: "On construit des produits digitaux",
    description2: "qui",
    highlightedText: "bossent pour toi.",
    services: [
      { text: "Design & MVP", href: "/design-mvp" },
      { text: "CRM & Automatisation", href: "/automatisation-crm" },
      { text: "Prospection LinkedIn", href: "/prospection-linkedin" },
    ],
    links: [
      { text: "Accueil", href: "/" },
      { text: "Cas d'usage", href: "/#use-cases" },
      { text: "Témoignages", href: "/#testimonials" },
      { text: "Nos offres", href: "/#offers" },
      { text: "FAQ", href: "/#faq" },
      { text: "Réserver un appel", href: "/#rendez-vous" }
    ],
    legalLinks: [
      { text: "Politique de confidentialité", href: "#privacy" },
      { text: "Conditions d'utilisation", href: "#terms" },    ]
  };
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
  };

  // Handle scroll to section when arriving from another page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove '#' prefix
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);


  return (
    <footer className="relative bg-brand-black text-background py-16 md:py-16 font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 md:mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-8 md:mb-6">
              <Image 
                src="/logo-white.svg" 
                alt="ConvertLabs Logo" 
                width={300} 
                height={32}
                className="mb-4"
              />
              <p className="text-background/80 font-be-vietnam-pro font-regular text-2xl md:text-2xl max-w-md mt-8 md:mt-6">
                {footer.description} <br /> {footer.description2} <span 
                  className="inline-block font-times-new-roman bg-brand-green px-2 py-1 rounded-sm italic text-brand-black cursor-pointer transform rotate-2"
                >
                  {footer.highlightedText}
                </span>
              </p>
            </div>
          </div>

          {/* Services section */}
          <div className="services-section">
            <h4 className="font-semibold mb-6 md:mb-4 text-lg">Services</h4>
            <ul className="space-y-4 md:space-y-3">
              {footer.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-background/60 hover:text-background transition-colors duration-200 text-base inline-block"
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links section */}
          <div className="footer-links">
            <h4 className="font-semibold mb-6 md:mb-4 text-lg">Liens utiles</h4>
            <ul className="space-y-4 md:space-y-3">
              {footer.links.map((link, index) => (
                <li key={index}>
                  {link.text === "Réserver un appel" ? (
                    <Button 
                      size="lg"
                      className="bg-white hover:bg-white/90 text-brand-black md:text-lg"
                      asChild
                    >
                      <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                        {link.text}
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-background/60 hover:text-background transition-colors duration-200 text-base inline-block"
                    >
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-background/60 text-base text-center md:text-left">
              © {currentYear} {footer.logo}. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {footer.legalLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-background/60 hover:text-background text-base transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

        <button
          onClick={scrollToTop}
          className="absolute bottom-56 right-4 md:bottom-6 md:right-6 z-50 bg-brand-green hover:bg-brand-green/90 text-brand-black p-4 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={24} className="md:w-5 md:h-5" />
        </button>
    </footer>
  );
} 