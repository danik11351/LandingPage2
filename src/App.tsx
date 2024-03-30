import { NavBar } from "./NavBar";
import "./App.css";
import { HeroSection, HeroSectionStats } from "./HeroSection";
import { Flowbite } from "flowbite-react";
import {
  GettingStarted1,
  GettingStartedStats,
  ManagePorject,
  Reviews,
} from "./GettingStarted";
import { Pricing, PricingQuestions } from "./Pricing";
import { FooterSection1, FooterSection2, FooterSection3 } from "./Footer";

function App() {
  return (
    <>
      <Flowbite>
        <div>
          <NavBar />
          <HeroSection />
          <HeroSectionStats />
          <GettingStarted1 />
          <GettingStartedStats />
          <ManagePorject />
          <Reviews />
          <Pricing />
          <PricingQuestions />
          <FooterSection1 />
          <FooterSection2 />
          <FooterSection3 />
        </div>
      </Flowbite>
    </>
  );
}

export default App;
