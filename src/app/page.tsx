import Head from "next/head";

import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Emil Nielsen | Full-Stack Udvikler & Teknisk IT Projektleder{" "}
        </title>
        <meta
          property="og:title"
          content="Emil Nielsen | Full-Stack Udvikler & Teknisk IT Projektleder"
          key="title"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="Emil Nielsen | Full-Stack Udvikler & Teknisk IT Projektleder"
          key="title"
        />
      </Head>
      <div className="bg-black">
        <Hero />
      </div>
      <Stack />
      <Projects />
    </div>
  );
}
