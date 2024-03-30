import { Button, Card } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
import QuestionImg from "./assets/PricingQuestionMark.svg";
function Pricing() {
  return (
    <div
      style={{
        backgroundColor: `#161C2D`,
      }}
    >
      <div id="pricing-headers" className="p-12 mx-4">
        <div>
          <h1 className="font-bold text-4xl text-center my-12 text-white">
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
      <div
        id="review-cards"
        className="flex flex-col lg:flex-row justify-around p-12"
      >
        <div
          id="card-1"
          className="lg:transition lg:duration-500 lg:hover:scale-105"
        >
          <Card className="max-w-sm p-1 mb-5 lg:w-auto lg:p-5">
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
        <div
          id="card-2"
          className="lg:transition lg:duration-500 lg:hover:scale-105"
        >
          <Card className="max-w-sm p-5 mb-5">
            <div
              style={{
                backgroundColor: `rgba(71, 59, 240, 0.1)`,
              }}
              className="rounded-full mx-5 lg:mx-12 mb-2"
            >
              <p
                style={{
                  color: `#473BF0`,
                  opacity: `1`,
                }}
                className="text-center p-3 italic font-bold"
              >
                ADVANCED
              </p>
            </div>
            <h1 className="font-bold text-4xl text-center">$49</h1>
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
        <div
          id="card-3"
          className="lg:transition lg:duration-500 lg:hover:scale-105"
        >
          <Card className="max-w-sm p-5">
            <div
              style={{
                backgroundColor: `rgba(71, 59, 240, 0.1)`,
              }}
              className="rounded-full mx-5 lg:mx-12 mb-2"
            >
              <p
                style={{
                  color: `#473BF0`,
                  opacity: `1`,
                }}
                className="text-center p-3 italic font-bold"
              >
                PREMIUM
              </p>
            </div>
            <h1 className="font-bold text-4xl text-center">$99</h1>
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
      </div>
    </div>
  );
}
function PricingQuestions() {
  return (
    <div
      style={{
        backgroundColor: `#161C2D`,
      }}
    >
      <div className="flex flex-col lg:flex-row text-center lg:text-left justify-around">
        <div id="card-1-q" className="flex-col">
          <div className="flex gap-3">
            <div>
              <img src={QuestionImg} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-white italic mt-2">
                Can I use Albino for my clients?
              </h1>
            </div>
          </div>
          <div>
            <p className="text-slate-400 my-3 mx-5">
              With lots of unique blocks, you can easily build a page without
              <br />
              coding. Build your next landing page. Integer ut Oberyn massa.
              <br /> Sedfeugiat vitae turpis a porta. Aliquam sagittis interdum
              Melisandre.
            </p>
          </div>
          <div className="flex align-baseline my-12">
            <Button
              className="ms-auto me-auto lg:ms-3 lg:me-0"
              outline
              gradientDuoTone="purpleToBlue"
            >
              Learn more
              <FaArrowRight className="ms-3 mt-auto mb-auto" />
            </Button>
          </div>
        </div>
        <div id="card-2-q" className="flex-col">
          <div className="flex gap-3">
            <div>
              <img src={QuestionImg} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-white italic mt-2">
                Does it work with WordPress?
              </h1>
            </div>
          </div>
          <div>
            <p className="text-slate-400 my-3 mx-10">
              With lots of unique blocks, you can easily build a page without
              <br />
              coding. Build your next landing page. Integer ut Oberyn massa.
              <br /> Sedfeugiat vitae turpis a porta. Aliquam sagittis interdum
              Melisandre.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-around">
          <div id="card-3-q" className="flex-col my-12">
            <div className="flex gap-3">
              <div>
                <img src={QuestionImg} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white italic mt-2">
                  Can I use Albino for my clients?
                </h1>
              </div>
            </div>
            <div>
              <p className="text-slate-400 my-3 mx-10">
                With lots of unique blocks, you can easily build a page without
                <br />
                coding. Build your next landing page. Integer ut Oberyn massa.
                <br /> Sedfeugiat vitae turpis a porta. Aliquam sagittis
                interdum Melisandre.
              </p>
            </div>
          </div>
          <div id="card-4-q" className="flex-col my-12">
            <div className="flex gap-3">
              <div>
                <img src={QuestionImg} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white italic mt-2">
                  Does it work with WordPress?
                </h1>
              </div>
            </div>
            <div>
              <p className="text-slate-400 my-3 mx-10">
                With lots of unique blocks, you can easily build a page without
                <br />
                coding. Build your next landing page. Integer ut Oberyn massa.
                <br /> Sedfeugiat vitae turpis a porta. Aliquam sagittis
                interdum Melisandre.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-14">
        <h1 className="text-white">
          Haven’t got your answer?{" "}
          <a className="font-semibold text-green-300 dark:text-white" href="">
            Contact our support now
          </a>
        </h1>
      </div>
    </div>
  );
}
export { Pricing, PricingQuestions };
