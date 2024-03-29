import { FaArrowRight } from "react-icons/fa";
import { Button } from "flowbite-react";
import Img1 from "./assets/HeroSectionImg.svg";
import Card1 from "./assets/StatsCodeImg.svg";
import Card2 from "./assets/StatsWatchImg.svg";
import Card3 from "./assets/StastsPhoneImg.svg";

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
      <div className="mx-5">
        <img className="ms-auto me-auto " src={Img1} alt="" />
      </div>
      <div
        id="Stats-Cards"
        className="flex flex-col lg:flex-row justify-around "
      >
        <div
          id="card1"
          className="ms-auto me-auto lg:me-0 lg:ms-0 text-center lg:text-left"
        >
          <div>
            <div>
              <img
                className="ms-auto me-auto lg:me-0 lg:ms-0"
                src={Card1}
                alt=""
              />
            </div>
            <div>
              <div>
                <h1 className="my-3 font-bold">Project management</h1>
              </div>
              <div>
                <p>
                  With lots of unique blocks, you can easily
                  <br /> build a page without coding. Build your
                  <br /> next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="card2"
          className="ms-auto me-auto lg:me-0 lg:ms-0 text-center lg:text-left mt-5 lg:mt-0"
        >
          <div>
            <img
              className="ms-auto me-auto lg:me-0 lg:ms-0"
              src={Card2}
              alt=""
            />
          </div>
          <div>
            <div>
              <h1 className="my-3 font-bold">Time Tracking </h1>
            </div>
            <div>
              <p>
                With lots of unique blocks, you can easily
                <br /> build a page without coding. Build your
                <br /> next landing page.
              </p>
            </div>
          </div>
        </div>
        <div
          id="card3"
          className="ms-auto me-auto lg:me-0 lg:ms-0 text-center lg:text-left mt-5 lg:mt-0"
        >
          <div>
            <img
              className="ms-auto me-auto lg:me-0 lg:ms-0"
              src={Card3}
              alt=""
            />
          </div>
          <div>
            <div>
              <h1 className="my-3 font-bold">Beautiful mobile app</h1>
            </div>
            <div>
              <p>
                With lots of unique blocks, you can easily
                <br /> build a page without coding. Build your
                <br /> next landing page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroSection, HeroSectionStats };
