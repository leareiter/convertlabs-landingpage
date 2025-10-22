"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  const navbar = {
    logo: "ConvertLabs",
    links: [
      { text: "Services", href: "#services" },
      { text: "À propos", href: "#about" },
      { text: "Réalisations", href: "#portfolio" },
      { text: "Contact", href: "#contact" }
    ],
    buttons: {
      CTA: "Réserver un appel de cadrage"
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white font-be-vietnam-pro font-regular tracking-[-0.06em]">
      <div className="w-full border-b border-gray-200">
        <div className="flex">
          <div className="hidden md:flex w-[20%] bg-white items-center justify-center ">
          </div>
          <div className="w-full md:w-[60%] px-2 ">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <Image 
                  src="/logo-black.svg" 
                  alt="ConvertLabs Logo" 
                  width={170} 
                  height={40}
                  className=" bg-transparent"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>

              <div className="hidden lg:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-lg font-be-vietnam-pro  font-medium text-text-hero transition-transform bg-transparent -translate-y-1 hover:-translate-y-2" style={{ fontSize: '16px' }}>
                          Services
                        </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 w-[400px]">
                          <NavigationMenuLink asChild>
                            <a
                              href="/developpement-web"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform -translate-y-1 hover:-translate-y-2"
                            >
                              <div className="text-base font-bold leading-none">Développement Web</div>
                              <p className="line-clamp-2 text-lg leading-snug text-muted-foreground">
                                Sites web modernes et applications web sur mesure
                              </p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a
                              href="/applications-mobiles"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform -translate-y-1 hover:-translate-y-2"
                            >
                              <div className="text-base font-medium leading-none">Applications Mobiles</div>
                              <p className="line-clamp-2 text-lg leading-snug text-muted-foreground">
                                Apps iOS et Android natives et cross-platform
                              </p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a
                              href="/consulting"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform -translate-y-1 hover:-translate-y-2"
                            >
                              <div className="text-base font-medium leading-none">Consulting Tech</div>
                              <p className="line-clamp-2 text-lg leading-snug text-muted-foreground">
                                Accompagnement stratégique et technique
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {navbar.links.slice(1).map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className="text-lg font-medium text-text-hero transition-transform px-4 py-2 -translate-y-1 hover:-translate-y-2"
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

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button size="lg"
                  className="bg-brand-black text-white cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
                  asChild
                >
                  <a href="#rendez-vous">
                    {navbar.buttons.CTA}
                    <ArrowRight size={16} />

                  </a>

                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  className="text-text-hero cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
                  {/* Services dropdown for mobile */}
                  <div className="px-3 py-2 text-xs md:text-sm text-text-hero font-semibold">
                    Services
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="/developpement-web"
                      className="block px-3 py-2 text-xs text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Développement Web
                    </a>
                    <a
                      href="/applications-mobiles"
                      className="block px-3 py-2 text-xs text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Applications Mobiles
                    </a>
                    <a
                      href="/consulting"
                      className="block px-3 py-2 text-xs text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Consulting Tech
                    </a>
                  </div>

                  {/* Other links */}
                  {navbar.links.slice(1).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block px-3 py-2 text-xs md:text-sm text-text-hero hover:text-brand-blue transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </a>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button 
                      className="w-full bg-brand-green text-black cursor-pointer -translate-y-1 hover:-translate-y-2 transition-transform duration-200"
                      asChild
                    >
                      <a href="#rendez-vous">
                        {navbar.buttons.CTA}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex w-[20%] items-center justify-center ">
          </div>
        </div>
      </div>
    </nav>
  );
}
