"use client";

import { ArrowUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const highlightedTextRef = useRef<HTMLSpanElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollToTopRef = useRef<HTMLButtonElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    // Lazy load GSAP only when footer comes into view
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          const { gsap } = await import("gsap");
          
          // Set will-change for GPU acceleration
          const elementsToAnimate = [footerRef.current, logoRef.current, descriptionRef.current, highlightedTextRef.current, servicesRef.current, linksRef.current, bottomRef.current, scrollToTopRef.current];
          elementsToAnimate.forEach(element => {
            if (element) element.style.willChange = 'transform, opacity';
          });

          if (footerRef.current) {
            gsap.fromTo(footerRef.current, 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power2.out", force3D: true }
            );
          }

          // Animation du logo
          if (logoRef.current) {
            gsap.fromTo(logoRef.current,
              { scale: 0.8, opacity: 0, rotation: -5 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.2, force3D: true }
            );
          }

          // Animation de la description
          if (descriptionRef.current) {
            gsap.fromTo(descriptionRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4, force3D: true }
            );
          }

          // Animation du texte mis en évidence
          if (highlightedTextRef.current) {
            gsap.fromTo(highlightedTextRef.current,
              { rotation: -15, scale: 0.5, opacity: 0, y: 20 },
              { rotation: 2, scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)", delay: 0.6, force3D: true }
            );

            // Animation de hover pour le texte mis en évidence
            const handleMouseEnter = () => {
              gsap.to(highlightedTextRef.current, {
                rotation: 8,
                scale: 1.1,
                y: -8,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            };

            const handleMouseLeave = () => {
              gsap.to(highlightedTextRef.current, {
                rotation: 2,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            };

            const element = highlightedTextRef.current;
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            return () => {
              element.removeEventListener('mouseenter', handleMouseEnter);
              element.removeEventListener('mouseleave', handleMouseLeave);
            };
          }

          // Animation des sections services et liens
          if (servicesRef.current) {
            gsap.fromTo(servicesRef.current,
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.8, force3D: true }
            );
          }

          if (linksRef.current) {
            gsap.fromTo(linksRef.current,
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 1.0, force3D: true }
            );
          }

          // Animation de la section bottom
          if (bottomRef.current) {
            gsap.fromTo(bottomRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.2, force3D: true }
            );
          }

          // Animation du bouton scroll to top
          if (scrollToTopRef.current) {
            gsap.fromTo(scrollToTopRef.current,
              { scale: 0, opacity: 0, rotation: 180 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)", delay: 1.4, force3D: true }
            );
          }

          // Animations de hover pour les liens
          const serviceLinks = document.querySelectorAll('.services-section a');
          const footerLinks = document.querySelectorAll('.footer-links a');

          serviceLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
              gsap.to(link, {
                scale: 1.05,
                x: 5,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            });

            link.addEventListener('mouseleave', () => {
              gsap.to(link, {
                scale: 1,
                x: 0,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            });
          });

          footerLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
              gsap.to(link, {
                scale: 1.05,
                x: 5,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            });

            link.addEventListener('mouseleave', () => {
              gsap.to(link, {
                scale: 1,
                x: 0,
                duration: 0.3,
                ease: "power2.out",
                force3D: true
              });
            });
          });

          // Clean up will-change after animations complete
          setTimeout(() => {
            elementsToAnimate.forEach(element => {
              if (element) element.style.willChange = 'auto';
            });
          }, 2000);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-brand-black text-background py-16 md:py-16 font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 md:mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-8 md:mb-6">
                <Image
                  ref={logoRef}
                  src="/logo-white.svg"
                  alt="ConvertLabs Logo"
                  width={300}
                  height={32}
                  className="mb-4"
                  loading="lazy"
                />
              <p ref={descriptionRef} className="text-background/80 font-be-vietnam-pro font-regular text-2xl md:text-2xl max-w-md mt-8 md:mt-6">
                {footer.description} <br /> {footer.description2} <span 
                  ref={highlightedTextRef}
                  className="inline-block font-times-new-roman bg-brand-green px-2 py-1 rounded-sm italic text-brand-black cursor-pointer"
                >
                  {footer.highlightedText}
                </span>
              </p>
            </div>
          </div>

          {/* Services section */}
          <div ref={servicesRef} className="services-section">
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
          <div ref={linksRef} className="footer-links">
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
        <div ref={bottomRef} className="border-t border-background/20 pt-8 md:pt-8">
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

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          ref={scrollToTopRef}
          onClick={scrollToTop}
          className="fixed bottom-48 right-4 md:bottom-6 md:right-6 z-50 bg-brand-green hover:bg-brand-green/90 text-brand-black p-4 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={24} className="md:w-5 md:h-5" />
        </button>
      )}
    </footer>
  );
} 
