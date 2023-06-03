import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <Hero />
      </div>
      <Stack />
      <Projects />
    </div>
  );
}
