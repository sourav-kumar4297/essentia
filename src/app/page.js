import BlogSection from "./components/BlogSection";
import Hero from "./components/Hero";
import LatestCreations from "./components/LatestCreations";
import Newsletter from "./components/Newsletter";
import Presence from "./components/Presence";
import Projects from "./components/Project";
import { Card } from "./components/Card";
import { ClientTestimonial } from "./components/ClientTestimonial";
import { InfiniteTestimonials } from "./components/InfiniteTestimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Presence />
      <LatestCreations />
       <Card/>
      {/* <ClientTestimonial /> */}
      <InfiniteTestimonials />
      <Newsletter />
     
    </>
  )
}
