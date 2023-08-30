import Hero from "./Sections/Hero";
import ProjectDeck from "./Components/ProjectDeck";
import ContactDeck from "./Components/ContactDeck";
import Upwork from "./Components/Upwork";
import Stack from "./Components/Stack";

export const metadata = {
  title: "Portfolio | Emil Nielsen",
  description: "",
};

const HeroProps = {
  subtitle: "My Portfolio",
  title: "I Build Projects On Time & Within Budget",
  description:
    "I assist business professionals in managing their projects from initiation to closure in a timely manner",
  imagePath: "/profilbillede_square.jpg",
};

const Projects = [
  {
    subtitle: "TurboTailer",
    link: "https://turbotailer.io",
    title: "Connects Stores With ChatGPT",
    description:
      "A full scale SaaS applications which enables storeowners to connect their store with ChatGPT, enabling their customers to chat with their products",
    stack: ["Django", "React", "OpenAI", "LangChain", "Tailwind", "Django DRF"],
    features: [
      {
        imagePath: "/turbotailer-fp.jpg",
        caption: "ChatGPT Powered E-Commerce Chat",
      },
      {
        imagePath: "/turbotailer_regiter_onboarding.jpg",
        caption: "Easy onboarding and integration with ecommerce",
      },
    ],
  },
  {
    subtitle: "Bjørn Art",
    link: "https://bjornarts.com",
    title: "Connects Customers With Artists Overseas",
    description:
      "A custom built e-commerce site using Django and bootstrap, with a highly dynamic pricing structure, 8 domains and integrated with Stripe",
    stack: [
      "Django",
      "Python",
      "JavaScript",
      "Stripe",
      "Bootstrap",
      "Celery",
      "Docker",
    ],
    features: [
      {
        imagePath: "/bjornart-frontpage.jpg",
        caption: "Connects customer with artists overseas",
      },
      {
        imagePath: "/bjornart_form.jpg",
        caption: "Dynamic product step-configuration form",
      },
    ],
  },
  {
    subtitle: "Dryp Dryp",
    link: "https://drypdryp.dk",
    title: "Affiliate Site With Daily Price Updates",
    description:
      "An affiliate site built using Django which automatically syncs products from external souces, as well as updates prices daily.",
    stack: [
      "Django",
      "Python",
      "JavaScript",
      "Stripe",
      "Bootstrap",
      "Celery",
      "Docker",
    ],
    features: [
      {
        imagePath: "/drypdryp-frontpage.jpg",
        caption: "Coffee affiliate site with product sync",
      },
      {
        imagePath: "/drypdryp-pdp.jpg",
        caption: "Automatically updates prices of all products daily",
      },
    ],
  },
  {
    subtitle: "Refill",
    link: "https://refill.dk",
    title: "Personalized Coffee Subscription",
    description:
      "A coffee subscription services which connects customers to roasters depending on the customers individual preferences for coffee",
    stack: [
      "Django",
      "Python",
      "JavaScript",
      "Stripe",
      "Bootstrap",
      "Celery",
      "Docker",
    ],
    features: [
      {
        imagePath: "/refill-frontpage.jpg",
        caption: "Multitenancy coffee subscription servive",
      },
      {
        imagePath: "/refill-pdp.jpg",
        caption:
          "Buy or subscribe to coffee from different roasters in Denmark",
      },
    ],
  },
  /* {
    subtitle: "Discord",
    link: null,
    title: "Custom Discord Bots",
    description:
      "Several custom built Discord bots such as a bank, casino, rafflestore and more. Been deployed in several communities with 10k+ members, and served over 50,000 transactions.",
    stack: ["Django", "React", "OpenAI", "LangChain", "Tailwind", "Django DRF"],
    features: [
      {
        imagePath: "/bjornart.jpg",
        caption: "Frontpage of DrypDryp",
      },
      {
        imagePath: "/bjornart.jpg",
        caption: "Product page with price history",
      },
    ],
  }, */
];

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Hero props={HeroProps} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-center mb-2 text-blue-600">
          Projects I&apos;ve Built
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 text-blue-600 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      {Projects.map((project, id) => (
        <>
          <ProjectDeck project={project} key={id} />
          {id === 0 ? <Upwork /> : null}
          {id === 1 ? <Stack /> : null}
        </>
      ))}
      <ContactDeck />
    </div>
  );
}
