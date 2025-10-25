"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image 
            src="/logo-black.svg" 
            alt="ConvertLabs Logo" 
            width={200} 
            height={40}
            className="mx-auto"
          />
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-brand-green mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-regular text-brand-black mb-4">
            Page introuvable
          </h1>
          <p className="text-lg text-text-muted mb-6 max-w-md mx-auto">
            Oops, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Retour
          </Button>
          <Button 
            onClick={() => router.push('/')}
            size="lg"
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green/90 text-brand-black"
          >
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
