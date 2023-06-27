import Hero from "../Sections/Hero";
import ProjectPhases from "../Sections/ProjectPhases";

export const metadata = {
  title: "Portfolio | Emil Nielsen",
  description: "",
};

const HeroProps = {
  subtitle: "Portfolio",
  title: "Delivering Projects On Time & Within Budget",
  description:
    "I assist business professionals in managing their projects from initiation to closure in a timely manner",
  imagePath: "/profilbillede_square.jpg",
};

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Hero props={HeroProps} />
      <div className="container mx-auto py-20 border-b-4 border-black">
        <h3 className="text-2xl text-black font-bold">Bjørn Art</h3>
        <h2 className="text-8xl text-pink-700 font-bold pb-4 mb-10">
          Django E-commerce site with Stripe Integration
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xl text-black mb-4">
              This is a short description about a project i did
            </p>
            <div className="flex">
              <div className="mr-8">
                <h4 className="text-2xl font-bold">Built with</h4>
                <ul className="list-disc list-inside text-xl">
                  <li>Django</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Stripe</li>
                  <li>Bootstrap</li>
                  <li>Celery</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-2xl font-bold">Features</h4>
                <ul className="list-disc list-inside text-xl">
                  <li>Lightweight Cart</li>
                  <li>Checkout</li>
                  <li>Highly dynamic form</li>
                  <li>Automatic e-mails</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-black">IMAGE</div>
        </div>
      </div>
      <div className="container mx-auto py-20">
        <h3 className="text-2xl text-black font-bold">Bjørn Art</h3>
        <h2 className="text-8xl text-pink-700 font-bold pb-4 mb-10">
          Django E-commerce site with Stripe Integration
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xl text-black mb-4">
              This is a short description about a project i did
            </p>
            <div className="flex">
              <div className="mr-8">
                <h4 className="text-2xl font-bold">Built with</h4>
                <ul className="list-disc list-inside text-xl">
                  <li>Django</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Stripe</li>
                  <li>Bootstrap</li>
                  <li>Celery</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-2xl font-bold">Features</h4>
                <ul className="list-disc list-inside text-xl">
                  <li>Lightweight Cart</li>
                  <li>Checkout</li>
                  <li>Highly dynamic form</li>
                  <li>Automatic e-mails</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-black">IMAGE</div>
        </div>
      </div>
    </div>
  );
}
