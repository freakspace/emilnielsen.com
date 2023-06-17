import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Work from "./Sections/Work";
import WorkMid from "./Sections/WorkMid";
import WorkEnd from "./Sections/WorkEnd";

const sections = [
  { name: "Hero", component: <Hero /> },
  { name: "Skills", component: <Skills /> },
  { name: "About", component: <About /> },
  { name: "Projects", component: <Projects /> },
  { name: "Work", component: <Work /> },
  { name: "WorkExtended", component: <WorkMid /> },
  { name: "WorkEnd", component: <WorkEnd /> },
];

export const metadata = {
  title: "Emil Nielsen | Fullstack Developer & Technical Project Manager",
  description:
    "My name is Emil, and I'm a full-stack developer and technical IT project manager, with over 10 years of experience in the industry. Contact me today, and let's discuss how I can help you.",
};

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      {sections.map((section, index) => (
        <div key={index}>{section.component}</div>
      ))}
    </div>
  );
}
