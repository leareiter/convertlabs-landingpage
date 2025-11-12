import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - ConvertLabs",
  description: "Mentions légales du site ConvertLabs - Informations sur l'éditeur, l'hébergement, la protection des données et les droits applicables.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegalPage() {
  return (
    <div className="bg-background py-20 md:py-24 px-4 md:px-8 font-be-vietnam-pro tracking-[-0.05em]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black tracking-tight">
            Mentions légales
          </h1>
          <div className="h-1 w-20 bg-brand-purple rounded-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8 text-brand-black">
          {/* Éditeur du site */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Éditeur du site
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <div className="flex flex-col space-y-1">
                <span className="font-medium text-brand-black">ConvertLabs</span>
                <span className="text-gray-600">marque appartenant à FastScribe SAS</span>
              </div>
              <p className="pt-2">
                <span className="font-medium text-brand-black">Société par Actions Simplifiée</span>
              </p>
              <div className="pt-2 space-y-2">
                <p>
                  <span className="font-medium text-brand-black">Siège social :</span>{" "}
                  <span className="text-gray-700">200 Rue de la Croix Nivert, 75015 Paris, France</span>
                </p>
                <p>
                  <span className="font-medium text-brand-black">E-mail :</span>{" "}
                  <a
                    href="mailto:contact@fastscribe.io"
                    className="text-brand-purple hover:text-brand-purple/80 hover:underline transition-colors font-medium"
                  >
                    contact@fastscribe.io
                  </a>
                </p>
                <p>
                  <span className="font-medium text-brand-black">Site :</span>{" "}
                  <a
                    href="https://fastscribe.io"
                    className="text-brand-purple hover:text-brand-purple/80 hover:underline transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://fastscribe.io
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Exploitation et direction */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Exploitation et direction
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Le site est exploité et dirigé par <span className="font-semibold text-brand-black">Léa Reiter</span>, agissant pour le compte de FastScribe SAS.
              </p>
              <div className="pt-2">
                <p className="mb-2">
                  <span className="font-medium text-brand-black">Responsable de la publication :</span>{" "}
                  <span className="font-semibold">Léa Reiter</span>
                </p>
                <p>
                  <a
                    href="mailto:infos@convertlabs.fr"
                    className="text-brand-purple hover:text-brand-purple/80 hover:underline transition-colors font-medium"
                  >
                    infos@convertlabs.fr
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Hébergement
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Le site est hébergé par <span className="font-semibold text-brand-black">Vercel Inc.</span>
              </p>
              <div className="pt-2 space-y-2">
                <p>
                  <span className="font-medium text-brand-black">Adresse :</span>{" "}
                  <span className="text-gray-700">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</span>
                </p>
                <p>
                  <span className="font-medium text-brand-black">Site web :</span>{" "}
                  <a
                    href="https://vercel.com"
                    className="text-brand-purple hover:text-brand-purple/80 hover:underline transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Le contenu du site <span className="font-semibold text-brand-black">convertlabs.fr</span> — textes, images, éléments graphiques, vidéos, logos, code, structure — est la propriété exclusive de <span className="font-semibold">FastScribe SAS</span>, sauf mention contraire.
              </p>
              <p className="pt-2">
                Toute reproduction, diffusion ou modification, totale ou partielle, sans autorisation écrite préalable, constitue une contrefaçon au sens des articles <span className="font-semibold text-brand-black">L.122-4</span> et suivants du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Protection des données personnelles */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Protection des données personnelles
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Les informations collectées via le formulaire de contact <span className="text-gray-600">(nom, adresse e-mail, société)</span> sont utilisées uniquement pour répondre aux demandes entrantes.
              </p>
              <div className="bg-gray-50 rounded-md p-4 md:p-5 border-l-4 border-brand-purple space-y-3">
                <p className="font-medium text-brand-black">
                  Aucune donnée n'est cédée ou vendue à des tiers.
                </p>
                <p>
                  Les données sont conservées au maximum <span className="font-semibold">12 mois</span> à compter du dernier contact.
                </p>
              </div>
              <p className="pt-2">
                Conformément au <span className="font-semibold text-brand-black">Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</span> et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à :{" "}
                <a
                  href="mailto:infos@convertlabs.fr"
                  className="text-brand-purple hover:text-brand-purple/80 hover:underline transition-colors font-medium"
                >
                  infos@convertlabs.fr
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Cookies
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-gray-700">
              <div className="bg-gray-50 rounded-md p-4 md:p-5 border-l-4 border-brand-purple">
                <p className="font-medium text-brand-black">
                  Le site convertlabs.fr n'utilise aucun cookie ni traceur.
                </p>
              </div>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="bg-white rounded-lg border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-black pb-3 border-b border-gray-200">
              Droit applicable
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Les présentes mentions légales sont régies par le <span className="font-semibold text-brand-black">droit français</span>.
              </p>
              <p className="pt-2">
                En cas de litige, et à défaut d'accord amiable, les tribunaux compétents seront ceux du ressort du siège social de <span className="font-semibold">FastScribe SAS</span>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}