
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import LatestProjects from "@/components/LatestProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-transparent">

      <div className="flex flex-col items-center h-[100vh] pt-24">
        <Profile />

        <Services />
      </div>

      <LatestProjects />

      <Skills />

      <Contact />

    </div>

  );
}