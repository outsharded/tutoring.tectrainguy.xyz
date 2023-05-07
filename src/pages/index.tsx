import NavBar from "@/components/NavBar";
import IntroCard from "@/components/IntroCard";
import Sections from "@/components/Sections";
import ToggleCard from "@/components/ToggleCard";
import MailCard from "@/components/MailCard";
import { useState } from "react";



import SwiftDen from "@/components/SwiftDen";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <div className="flex flex-col m-5 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
      >
        <IntroCard section={section} />
        
        <ToggleCard section={section} />


        <MailCard section={section} />
        <Sections section={section} />

        <SwiftDen section={section} />
        
      </div>
    </div>
  );
}

export default Home;
