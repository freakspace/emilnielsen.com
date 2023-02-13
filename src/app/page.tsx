import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import MidSection from "./Components/MidSection";
export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-teal-300/40 via-cyan-500/40 to-teal-400/40">
        <Nav />
        <Hero />
      </div>
      <div className="border-y border-blue-500/50 shadow-xl shadow-blue-500/15">
        <MidSection />
      </div>
      <div className="bg-gradient-to-br from-teal-300/40 via-cyan-500/40 to-teal-400/40">
        <Hero />
      </div>
    </div>
  );
}
