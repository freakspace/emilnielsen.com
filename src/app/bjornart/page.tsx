"use client";

import Image from "next/image";

export const metadata = {
  title: "Dansk Django Freelance Udvikler",
  description: "",
};

export default function Bjornart() {
  return (
    <div>
      <div className="bg-black">
        <section className="py-20 md:py-48 px-4">
          <div className="container mx-auto">
            <h2 className="text-white text-xl md:text-3xl mb-3 font-bold">
              Case Study
            </h2>
            <h1 className="text-white text-3xl md:text-7xl mb-3">
              <span className="font-extrabold text-blue-400">Bjørn Art</span>
            </h1>
            <p className="text-white text-xl md:w-1/2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </div>
      <div className="container mx-auto py-12 md:py-32 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-xl md:text-5xl mb-5 font-extrabold">
              Django & Bootstrap 5
            </h2>
            <p className="text-xl">
              Sitet er udviklet i Django og anvendes både til backend såvel som
              frontend, hvor der til frontenden anvendes Django standard
              template-motor sammen med CSS-frameworket Bootstrap 5. For at
              understøtte en kompleks prisstruktur, adskillige sprog og domæner,
              er Django’s sites framework blevet anvendt.
            </p>
            <h3 className="text-2xl font-extrabold mt-10 mb-3">
              Nøglefuntioner
            </h3>
            <ul className="list-disc list-inside text-xl">
              <li>Sites framework</li>
              <li>Internationalisering (I18N + L10N)</li>
              <li>Redis site-wide caching</li>
            </ul>
          </div>
          <Image src="/bjornart.jpg" alt="Bjørn Art" width={800} height={800} />
        </div>
      </div>
      <div className="container mx-auto py-12 md:py-32 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-xl md:text-5xl mb-3 font-extrabold">
              Specialtilpasset checkout flow
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-2xl font-extrabold mt-3">Nøglefuntioner</h3>
            <ul className="list-disc list-inside text-xl">
              <li>3-trins-form til konfiguration af produkt</li>
              <li>Stripe integration (checkout sessions + payment links)</li>
              <li>Dynamisk form vha. HTMX & vanilla JS</li>
            </ul>
          </div>
          <Image src="/bjornart.jpg" alt="Bjørn Art" width={800} height={800} />
        </div>
      </div>
      <div className="container mx-auto py-12 md:py-32 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-xl md:text-5xl mb-3 font-extrabold">
              Kompleks internationalisering og prisstruktur
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-2xl font-extrabold mt-3">Nøglefuntioner</h3>
            <ul className="list-disc list-inside text-xl">
              <li>Oversat til 8 sprog på hvert sit domæne</li>
              <li>Supporterer 4 forskellige valuta (DKK, NOK, SEK, EUR)</li>
              <li>
                Sites framework anvendt til styring og kontrol af hvad der vises
                på hvilke sites
              </li>
              <li>Dynamisk prisstruktur afhængig af form-valg</li>
            </ul>
          </div>
          <Image src="/bjornart.jpg" alt="Bjørn Art" width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
