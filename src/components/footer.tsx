"use client";

import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footer = {
    logo: "ConvertLabs",
    description: "On construit des produits digitaux qui bossent pour toi.",
    services: [
      { text: "Développement Web", href: "#services" },
      { text: "Applications Mobiles", href: "#services" },
      { text: "Consulting Tech", href: "#services" }
    ],
    links: [
      { text: "Politique de confidentialité", href: "#privacy" },
      { text: "Conditions d'utilisation", href: "#terms" },
      { text: "Nous contacter", href: "#contact" }
    ]
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-background py-16 font-be-vietnam-pro tracking-[-0.05em]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image src="/logo-white.svg" alt="ConvertLabs Logo" width={300} height={40} style={{ width: "auto", height: "auto" }} />
            <p className="text-background/80 mb-6 max-w-md">
              {footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footer.services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-background/80 hover:text-background transition-colors">
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} {footer.logo}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footer.links.map((link, index) => (
                <a key={index} href={link.href} className="text-background/60 hover:text-background text-sm transition-colors">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
