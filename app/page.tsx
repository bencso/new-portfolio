import AboutMe from "@/sections/aboutMe";
import Services from "@/sections/services";

export default function Home() {
  return (
  <main className="px-12 gap-32 flex flex-col select-none">
    <AboutMe/>
    <Services/>
  </main>
  );
}
