import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";

const HeroProps = {
  subtitle: "Emil Nielsen",
  title: "Full-stack Developer & Technical Project Manager",
  description:
    "I help business professionals to translate their most challenging and technical issues into simple and scalable IT solutions.",
  imagePath: "/profilbillede_square.jpg",
};

const sections = [
  { name: "Hero", component: <Hero props={HeroProps} /> },
  { name: "Skills", component: <Skills /> },
  { name: "About", component: <About /> },
  { name: "Projects", component: <Projects /> },
  { name: "Work", component: <Work /> },
  { name: "Contact", component: <Contact /> },
];

export const metadata = {
  title: "Emil Nielsen | Fullstack Developer & Technical Project Manager",
  description:
    "My name is Emil, and I'm a full-stack developer and technical IT project manager, with over 10 years of experience in the industry. Contact me today, and let's discuss how I can help you.",
};

export default function Home() {
  return (
    <div className="h-screen">
      {sections.map((section, index) => (
        <div key={index}>{section.component}</div>
      ))}
    </div>
  );
}
