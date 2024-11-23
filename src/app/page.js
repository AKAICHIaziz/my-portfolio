



import Marquee from "@/components/Marquee"

import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

import Profile from "@/components/Profile";
import Services from "@/components/Services";
import LatestProjects from "@/components/LatestProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 bg-transparent">

      <Profile />

      <Services />

      <LatestProjects />

      <Skills />

      <Contact />


    </div>

  );
}