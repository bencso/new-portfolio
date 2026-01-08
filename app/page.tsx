import AboutMe from "@/sections/aboutMe";
import { OurClients } from "@/sections/clients";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Navbar from "@/sections/navbar";
import Services from "@/sections/services";
import OurWorks from "@/sections/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="gap-32 mb-32 mt-32 flex flex-col select-none">
        <AboutMe />
        <Services />
        <OurWorks />
        <OurClients />
      </main>
      <Footer />
    </>
  );
}
