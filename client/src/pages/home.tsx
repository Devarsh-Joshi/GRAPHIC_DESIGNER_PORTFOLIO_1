import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Work from "@/components/work";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Layout>
        <Hero />
        <Work />
        <About />
        <Contact />
    </Layout>
  );
}
