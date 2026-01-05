import AboutMe from "@/sections/aboutMe";
import Services from "@/sections/services";
import OurWorks from "@/sections/works";

export default function Home() {
  return (
  <main className="gap-32 flex flex-col select-none">
    <AboutMe/>
    <Services/>
    <OurWorks/>
  </main>
  );
}
