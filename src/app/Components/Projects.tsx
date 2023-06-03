import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-black py-20 md:py-40 px-4">
      <section className="container mx-auto gap-6">
        <div className="mb-8">
          <h2 className="text-white text-5xl md:text-7xl font-extrabold">
            Projekter
          </h2>
          <p className="text-white text-lg md:text-xl md:w-1/4 mt-4">
            Dette er en random tekst jeg udfylder senere, blot for at vise at
            teksten ser pæn ud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link href="/django">
            <div className="border-solid border-2 border-white p-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Bjørn Art
              </h3>
              <p className="mb-3 text-white">
                Website udviklet i Django med integrering til Stripe, custom
                checkout-flow, kunde self-service og meget mere.
              </p>
              <button className="px-4 py-2 mt-4 text-md border-2 border-white bg-transparent text-white font-bold hover:bg-white hover:text-black transition duration-400 hover:ease-in">
                VIS
              </button>
            </div>
          </Link>
          <Link href="/next-js">
            <div className="border-solid border-2 border-white p-4">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                DrypDryp
              </h3>
              <p className="text-white mb-3">
                Affiliate website med integrering til Stripe, sync a produkter
                fra affiliate partnere, custom admin backend m.f.
              </p>
              <button className="px-4 py-2 mt-4 text-md border-2 border-white bg-transparent text-white font-bold hover:bg-white hover:text-white transition duration-400 hover:ease-in">
                VIS
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
