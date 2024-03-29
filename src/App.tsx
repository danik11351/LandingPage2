import { NavBar } from "./NavBar";
import "./App.css";
import { HeroSection, HeroSectionStats } from "./HeroSection";
import { Flowbite } from "flowbite-react";

function App() {
  return (
    <>
      <Flowbite>
        <div>
          <NavBar />
          <HeroSection />
          <HeroSectionStats />
        </div>
      </Flowbite>
    </>
  );
}

export default App;
