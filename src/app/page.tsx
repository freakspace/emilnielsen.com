import Link from "next/link";
import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";
import MidSection from "./Components/MidSection";
import CardSection from "./Components/CardSection";
import StackSection from "./Components/StackSection";
import { ICardProps } from "typings";

const cardsPersonalProjects: ICardProps[] = [
  {
    title: "MoonMiners",
    link: "www.moonminers.com",
    description: null,
    stringList: ["Next.js", "TypeScript"],
    barWidth: null,
  },
  {
    title: "DrypDryp",
    link: "www.drypdryp.dk",
    description: null,
    stringList: ["Django", "Python", "HTMX"],
    barWidth: null,
  },
  {
    title: "Bjørn Art",
    link: "www.bjornart.dk",
    description: null,
    stringList: ["Django", "Python", "Stripe"],
    barWidth: null,
  },
];

const cardsStack: ICardProps[] = [
  {
    title: "Python",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-full",
  },
  {
    title: "TypeScript",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-4/5",
  },
  {
    title: "JavaScript",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-4/5",
  },
  {
    title: "SQL",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-2/3",
  },
  {
    title: "Next.js",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-3/4",
  },
  {
    title: "React.js",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-4/5",
  },
  {
    title: "Django",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-5/6",
  },
  {
    title: "FastAPI",
    link: null,
    description: null,
    stringList: [],
    barWidth: "w-1/2",
  },
];

const cardsProjectManager: ICardProps[] = [
  {
    title: "Ugleunger",
    link: "www.ugleunger.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Nanion",
    link: "www.nanion.de",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Stine A",
    link: "www.stinea.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "B Company",
    link: "www.bcompany.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Fertin",
    link: "www.fertin.com",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Jorton",
    link: "www.jorton.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Let's Dance",
    link: "www.letsdance.tv",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Vest Administrationen",
    link: "www.vestadministrationen.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
  {
    title: "Red Barnet",
    link: "www.redbarnet.dk",
    description: null,
    stringList: [],
    barWidth: null,
  },
];

const title1 = "Personlige Projekter";
const title2 = "Stack";
const title3 = "Projekt-ledelse";

const description1 = "Personlige Projekter";
const description2 = "Personlige Projekter";
const description3 =
  "I forbindelse med min ansættelse hos RadarSofthouse, har jeg...";

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
