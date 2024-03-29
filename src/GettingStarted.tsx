import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
import Img1 from "./assets/GettingStarted1Img.svg";
import Img2 from "./assets/ManageProjectImg.svg";
import List1 from "./assets/GetStarterListNumber1.svg";
import List2 from "./assets/GetstartedListNumber2.svg";
import List3 from "./assets/GetStartedListNumber3.svg";
import PFP1 from "./assets/ReviewsPFP1.svg";
import PFP2 from "./assets/ReviewPFP2.svg";
function GettingStarted1() {
  return (
    <div
      style={{
        backgroundColor: `#F4F7FA`,
      }}
      className="lg:mt-24 flex flex-col lg:flex-row"
    >
      <div
        id="getting-started-1-text"
        className="p-20 flex-col mt-auto mb-auto"
      >
        <div>
          <h1 className="font-bold text-3xl">
            Getting started with Albino is easier than
            <br /> ever
          </h1>
        </div>
        <div className="my-3">
          <p>
            With lots of unique blocks, you can easily build a<br /> page
            without coding. Build your next landing page
            <br /> so quickly with Albino.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <Button outline gradientDuoTone="tealToLime">
            Get started for free
            <FaArrowRight className="ms-3 mt-auto mb-auto" />
          </Button>
        </div>
        <div></div>
      </div>
      <div>
        <img src={Img1} alt="" />
      </div>
    </div>
  );
}
function GettingStartedStats() {
  return (
    <div
      id="our-story-stats-container"
      className="flex flex-col lg:flex-row mt-16 justify-around"
    >
      <div>
        <div className="flex-col text-center">
          <h1 className="font-bold text-3xl mb-2">1M+</h1>
          <div>
            <p className="text-slate-400">
              Customers visit Omega every month to
              <br /> get their service done.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col text-center mt-10 lg:mt-0">
        <div>
          <h1 className="font-bold text-3xl mb-2">92%</h1>
        </div>
        <div>
          <p className="text-slate-400 mb-2">
            Satisfaction rate comes from our
            <br /> awesome customers.
          </p>
        </div>
      </div>
      <div className="flex-col text-center mt-10 lg:mt-0">
        <div>
          <h1 className="font-bold text-3xl mb-2">4.9/5.0</h1>
        </div>
        <div>
          <p className="text-slate-400">
            Average customer ratings we have got
            <br /> all over internet.
          </p>
        </div>
      </div>
    </div>
  );
}
function ManagePorject() {
  return (
    <div className="mt-16">
      <div>
        <div>
          <h1 className="font-bold text-4xl text-center">
            Manage your projects fast
          </h1>
        </div>
        <div>
          <p className="text-center my-6">
            With lots of unique blocks, you can easily build a page without
            coding.
            <br /> Build your next landing page.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <div>
          <img src={Img2} alt="" />
        </div>
        <div id="cards-container" className="mt-auto mb-auto">
          <div id="card-1" className="flex flex-col lg:flex-row gap-3 mb-12">
            <div>
              <img
                className="ms-auto me-auto lg:ms-0 lg:me-0"
                src={List1}
                alt=""
              />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-center lg:text-left">
                  Create a project
                </h1>
              </div>
              <div>
                <p className="text-center lg:text-left">
                  With lots of unique blocks, you can easily build
                  <br /> a page without coding.{" "}
                </p>
              </div>
            </div>
          </div>
          <div id="card-2" className="flex flex-col lg:flex-row gap-3 mb-12">
            <div>
              <img
                className="ms-auto me-auto lg:ms-0 lg:me-0"
                src={List2}
                alt=""
              />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-center lg:text-left">
                  Make it done on-time
                </h1>
              </div>
              <div>
                <p className="text-center lg:text-left">
                  With lots of unique blocks, you can easily build
                  <br /> a page without coding.{" "}
                </p>
              </div>
            </div>
          </div>
          <div id="card-3" className="flex flex-col lg:flex-row gap-3 mb-12">
            <div>
              <img
                className="ms-auto me-auto lg:ms-0 lg:me-0"
                src={List3}
                alt=""
              />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-center lg:text-left">
                  Assign related people
                </h1>
              </div>
              <div>
                <p className="text-center lg:text-left">
                  With lots of unique blocks, you can easily build
                  <br /> a page without coding.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div
      style={{
        backgroundColor: `#F4F7FA`,
      }}
      className="mt-16 flex flex-col lg:flex-row justify-around p-12 gap-12 lg:gap-0"
    >
      <div id="card-1" className="text-center">
        <div>
          <img className="me-auto ms-auto" src={PFP1} alt="" />
        </div>
        <div>
          <h1 className="font-bold my-5">“You made it so simple”</h1>
        </div>
        <div>
          <p className="my-5">
            My new site is so much faster and easier to
            <br /> work with than my old site.
          </p>
        </div>
        <div>
          <div>
            <h2 className="font-bold">Corey Valdez</h2>
          </div>
          <div>
            <p>Founder at Zenix</p>
          </div>
        </div>
      </div>
      <div id="card-2" className="text-center">
        <div>
          <img className="me-auto ms-auto" src={PFP2} alt="" />
        </div>
        <div>
          <h1 className="font-bold my-5">“Simply the best”</h1>
        </div>
        <div>
          <p className="my-5">
            Better than all the rest.
            <br /> I’d recommend this product to beginners.
          </p>
        </div>
        <div>
          <div>
            <h2 className="font-bold">Corey Valdez</h2>
          </div>
          <div>
            <p>Founder at Zenix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GettingStarted1, GettingStartedStats, ManagePorject, Reviews };
