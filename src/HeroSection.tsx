import { FaArrowRight } from "react-icons/fa";
import { Button } from "flowbite-react";
import Img1 from "./assets/HeroSectionImg.svg";
function HeroSection() {
  return (
    <>
      <div id="hero-section-headers">
        <div>
          <h1 className="font-bold text-4xl text-center mt-16">
            Get things done by awesome remote team
          </h1>
        </div>
        <div
          style={{
            color: `rgba(22, 28, 45, 1)`,
          }}
          className="text-center mt-12 mx-4"
        >
          <p>
            We share common trends and strategies for improving your rental
            <br />
            income and making sure you stay in high demand.
          </p>
        </div>
        <div
          id="hero-section-buttons"
          className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-64 mt-14"
        >
          <div className="flex align-baseline">
            <Button
              className="ms-auto me-auto"
              outline
              gradientDuoTone="purpleToBlue"
            >
              See All Works
              <FaArrowRight className="ms-3 mt-auto mb-auto" />
            </Button>
          </div>
          <div className="flex align-baseline">
            <Button
              className="ms-auto me-auto"
              outline
              gradientDuoTone="purpleToBlue"
            >
              Learn More
              <FaArrowRight className="ms-3 mt-auto mb-auto" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroSectionStats() {
  return (
    <div>
      <div
        className="delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:invisible"
        data-taos-offset="300"
      >
        <img className="ms-auto me-auto" src={Img1} alt="" />
      </div>
    </div>
  );
}

export { HeroSection, HeroSectionStats };
