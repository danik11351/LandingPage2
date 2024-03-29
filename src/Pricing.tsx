import { Button, Card } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
function Pricing() {
  return (
    <div
      style={{
        backgroundColor: `#161C2D`,
      }}
    >
      <div id="pricing-headers" className="p-12">
        <div>
          <h1 className="font-bold text-4xl text-center text-white">
            Pricing & Plans
          </h1>
        </div>
        <div>
          <p className="text-slate-400 text-center">
            With lots of unique blocks, you can easily build a page without
            coding.
            <br /> Build your next landing page.
          </p>
        </div>
      </div>
      <div id="review-cards" className="flex justify-around p-12">
        <div id="card-1">
          <Card className="max-w-sm p-5">
            <div
              style={{
                backgroundColor: `rgba(71, 59, 240, 0.1)`,
              }}
              className="rounded-full mx-12 mb-2"
            >
              <p
                style={{
                  color: `#473BF0`,
                  opacity: `1`,
                }}
                className="text-center p-3 italic font-bold"
              >
                BASIC
              </p>
            </div>
            <h1 className="font-bold text-4xl text-center">$29</h1>
            <p className="text-center text-slate-400">One time purchase</p>
            <p className="text-center my-5">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="flex align-baseline">
              <Button
                className=" w-full"
                outline
                gradientDuoTone="purpleToBlue"
              >
                Get started free
                <FaArrowRight className="ms-3 mt-auto mb-auto" />
              </Button>
            </div>
          </Card>
        </div>
        <div id="card-2">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
        <div id="card-3">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
export { Pricing };
