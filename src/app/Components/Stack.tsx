import Link from "next/link";
import Image from "next/image";

const Stack = () => {
  return (
    <div className="py-20 md:py-40 px-4">
      <section className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-extrabold">Stack</h2>
          <p className="text-lg md:text-xl md:w-1/4 mt-4">
            Med flere års intensiv erfaring i programmering har jeg arbejdet med
            en bred vifte af projekter, lige fra webscraping og scriptudvikling
            til opbygning af avancerede full-stack webapplikationer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 mt-8">
              Sprog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/python">
                <div className="border-solid border-2 border-black p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Python
                    </h3>
                    <Image
                      src="/Python-logo-notext.svg.png"
                      alt="Python Freelancer"
                      width={25}
                      height={25}
                      className=""
                    />
                  </div>
                  <p className="mb-3">
                    Min erfaring med Python er meget alsidig og omfatter alt fra
                    udvikling af mindre scripts og Discord-bots til
                    programmering af større webshops.
                  </p>
                </div>
              </Link>
              <Link href="/typescript">
                <div className="border-solid border-2 border-black p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      TypeScript
                    </h3>
                    <Image
                      src="/Typescript_logo_2020.svg.png"
                      alt="TypeScript Freelancer"
                      width={25}
                      height={25}
                      className=""
                    />
                  </div>
                  <p className="mb-3">
                    Min erfaring med TypeScript spænder sig fra at gøre django
                    applikationer dynamiske til udvkling af komplette full-stack
                    next.js løsninger
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 mt-8">
              Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/django">
                <div className="border-solid border-2 border-black p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Django
                    </h3>
                    <Image
                      src="/django-logo.png"
                      alt="Django Freelancer Udvikler"
                      width={25}
                      height={25}
                    />
                  </div>
                  <p className="mb-3">
                    I løbet af adskillige år med Django, har jeg udviklet en
                    række websites, der spænder fra simple hjemmesider til
                    komplekse e-commerce sites.
                  </p>
                </div>
              </Link>
              <Link href="/next-js">
                <div className="border-solid border-2 border-black p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Next.js
                    </h3>
                    <Image
                      src="/nextjs.png"
                      alt="Next.js Freelance Udvikler"
                      width={25}
                      height={25}
                      className=""
                    />
                  </div>
                  <p className="mb-3">
                    Med Next.js har jeg arbejdet med udvikling af højst
                    dynamiske webapplikationer, hvor jeg effektivt har håndteret
                    både frontend- og backend-opgaver.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
