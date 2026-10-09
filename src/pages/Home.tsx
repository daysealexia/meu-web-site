import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Community } from "../sections/Community";
import { LatestPosts } from "../sections/LatestPosts";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Community />
      <LatestPosts />
      <Contact />
    </>
  );
}
