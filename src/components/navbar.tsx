"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  const getNavbarConfig = () => {
    if (pathname === '/design-mvp') {
      return {
        logo: "ConvertLabs",
        links: [
          { text: "Notre approche", href: "#approach" },
          { text: "Offres & périmètre", href: "#offers" },
          { text: "Cas d'usage", href: "#use-cases" },
          { text: "Estimer mon projet", href: "#calculator" },
        ],
        buttons: {
          CTA: "Réserver un appel"
        }
      };
    }

    if (pathname === '/automatisation-crm') {
      return {
        logo: "ConvertLabs",
        links: [
          { text: "Notre approche", href: "#approach" },
          { text: "Offres & périmètre", href: "#offers" },
          { text: "Cas d'usage", href: "#use-cases" },
          { text: "Estimer mon projet", href: "#calculator" }
        ],
        buttons: {
          CTA: "Réserver un appel"
        }
      };
    }

    if (pathname === '/prospection-linkedin') {
      return {
        logo: "ConvertLabs",
        links: [
          { text: "Notre approche", href: "#approach" },
          { text: "Offres & périmètre", href: "#offers" },
          { text: "Cas d'usage", href: "#use-cases" },
          { text: "Estimer mon projet", href: "#calculator" }
        ],
        buttons: {
          CTA: "Réserver un appel"
        }
      };
    }

    // Page d'accueil par défaut
    return {
      logo: "ConvertLabs",
      links: [
        { text: "Cas d'usage", href: "#use-cases" },
        { text: "Témoignages", href: "#testimonials" },
        { text: "Nos offres", href: "#offers" },
        { text: "Estimer mon projet", href: "#calculator" },
      ],
      buttons: {
        CTA: "Réserver un appel"
      }
    };
  };

  const navbar = getNavbarConfig();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <nav className="sticky top-0 z-50 w-full bg-white font-be-vietnam-pro font-regular tracking-[-0.05em]">
      <div className="w-full border-b border-gray-200">
        <div className="flex">
          <div className="hidden md:flex w-[10%] bg-white items-center justify-center">
          </div>
          <div className="w-full px-4 md:px-1">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/logo-black.svg"
                    alt="ConvertLabs Logo"
                    width={170}
                    height={40}
                    priority
                  />
                </Link>
              </div>

              <div className="hidden lg:flex items-center">
                <NavigationMenu delayDuration={0} skipDelayDuration={0}>
                  <NavigationMenuList className="flex items-center space-x-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium text-text-hero transition-transform bg-transparent hover:-translate-y-1 data-[state=open]:bg-transparent data-[state=open]:text-text-hero">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              <NavigationMenuLink asChild>
                <a
                  href="/design-mvp"
                  className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:-translate-y-1 hover:bg-brand-purple"
                >
                  <div className="text-xl font-regular font-be-vietnam-pro leading-none group-hover:text-white">Design &amp; MVP
                  </div>
                  <p className="line-clamp-2 text-base font-regular font-be-vietnam-pro leading-snug text-text-hero group-hover:text-white">
                    De l'idée au produit vivant. Rapidement.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/prospection-linkedin"
                  className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:-translate-y-1 hover:bg-brand-blue"
                >
                  <div className="text-xl font-regular font-be-vietnam-pro leading-none group-hover:text-white">Prospection LinkedIn</div>
                  <p className="line-clamp-2 text-base font-regular font-be-vietnam-pro leading-snug text-text-hero group-hover:text-white">
                    Besoin de leads qualifiés ? On met la machine en route.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/automatisation-crm"
                  className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:-translate-y-1 hover:bg-brand-orange"
                >
                  <div className="text-xl font-regular font-be-vietnam-pro leading-none group-hover:text-white">CRM & Automatisation</div>
                  <p className="line-clamp-2 text-base font-regular font-be-vietnam-pro leading-snug text-text-hero group-hover:text-white">
                    On organise ton back-office pour qu'il tourne sans toi.
                  </p>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

                    {navbar.links.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className="font-medium transition-transform px-4 py-2 hover:-translate-y-1 text-text-hero"
                            style={{ fontSize: '16px' }}
                          >
                            {link.text}
                          </a>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="hidden lg:flex items-center">
                <Button
                  className="bg-brand-black text-white text-base  rounded-md font-medium cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200 w-full md:w-auto"
                  asChild
                >
                  <a href="#rendez-vous" className="flex items-center gap-2">
                    {navbar.buttons.CTA}
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>

              <div className="lg:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </div>

            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-4 pt-2 pb-3 space-y-1 border-t border-border">
                  <div className="px-3 py-2 text-base text-text-hero font-semibold">
                    Services
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="/design-mvp"
                      className="block px-3 py-2 text-base text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Design & MVP
                    </a>
                    <a
                      href="/automatisation-crm"
                      className="block px-3 py-2 text-base text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CRM & Automatisation
                    </a>
                    <a
                      href="/prospection-linkedin"
                      className="block px-3 py-2 text-base text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Prospection LinkedIn
                    </a>
                  </div>

                  {navbar.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-3 py-2 text-base transition-colors hover:text-brand-blue text-text-hero"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </a>
                  ))}

                  <div className="pt-4">
                    <Button
                    size="lg"
                      className="w-full bg-brand-green text-brand-black cursor-pointer transition-transform hover:-translate-y-1"
                      asChild
                    >
                      <a href="#rendez-vous" className="flex items-center justify-center gap-2">
                        {navbar.buttons.CTA}
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex w-[10%] items-center justify-center">
          </div>
        </div>
      </div>
    </nav>
  );
}
