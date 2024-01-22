import React, { useState } from "react";
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div
        className={`py-4  px-6 rounded-sm border-1px ${
          accordionOpen && "border-l-primary border-l-2"
        }`}
      >
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between  w-full"
        >
          <span
            className="text-justify mt-3 mb-4  text-base"
            style={{ color: "black", fontWeight: "600" }}
          >
            {title}
          </span>

          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-black-400 shrink-0 ml-8 mt-3 mb-4"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden leading-7 font-normal text-[15px]">
            {answer}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
