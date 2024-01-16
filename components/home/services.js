import Image from "next/image";
import React, { useMemo, useState } from "react";

export default function Services() {
  const [selected, setSelected] = useState(0);
  const services = useMemo(() => {
    return [
      {
        title: "Comprehensive Diagnosis Analysis",
        subtitle: "Thorough Insight, Targeted Solutions",
        description:
          "A comprehensive diagnosis analysis is essential for business growth. At Srisudha Consultancy, our expert team evaluates your organization's operations, finances, and performance to identify opportunities and risks. By pinpointing areas for improvement, we help you capitalize on opportunities, optimize processes, and ensure sustainable success.",
        image: "coorporate2.jpeg",
      },
      {
        title: "Legal Compliance Scan",
        subtitle:
          "Streamline Compliance, Protect Your Business with Srisudha Consultancy's Legal Compliance Scan",
        description:
          "Navigating the complexities of legal compliance can be challenging, but it is crucial for the success and reputation of your business. At Srisudha Consultancy, we offer a comprehensive Legal Compliance Scan to ensure your organization adheres to all relevant regulations and requirements.",
        image: "coorporate.jpeg",
      },
      {
        title: "Tax Compliance & Strategy",
        subtitle:
          "Navigate Tax Regulations with Confidence: Srisudha Consultancy's Tax Compliance & Strategy Solutions",
        description:
          "Managing tax compliance can be complex and time-consuming, but it is critical for the success of your business. At Srisudha Consultancy, we offer expert guidance and support to help you navigate tax regulations and optimize your tax strategy.",
        image: "coorporate2.jpeg",
      },
    ];
  }, []);
  return (
    <div className="py-14 text-black px-6 md:px-0  bg-[url('/home/bestService.jpeg')] bg-cover">
      <div className="max-w-1200 mx-auto">
        <div className="text-center  leading-[40px] lg:leading-[52px] text-black text-[32px] md:text-[40px]">
          <p>
            <span className="font-semibold">We are</span> giving the best
          </p>
          <p>services for you.</p>
        </div>
        <div className="flex flex-col md:flex-row mt-14">
          <div className="w-full md:w-1/2 z-50 flex flex-col gap-2">
            {services.map((value, index) => (
              <div
                onClick={() => {
                  setSelected(index);
                }}
                className={`py-6 cursor-pointer px-6 duration-200 transition-all ${
                  selected != index
                    ? "bg-blackText text-white translate-x-0"
                    : "bg-white text-black z-50 md:translate-x-7"
                }`}
              >
                <div>
                  <p className="font-semibold text-xl md:text-2xl">
                    {value.title}
                  </p>
                  <p
                    className={`md:text-[15px] mt-2 text-sm  ${
                      selected != index ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {value.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 overflow-hidden  relative h-96">
            {services.map((value, index) => (
              <div
                className={`absolute bg-black w-full h-full transition-all duration-200    ${
                  selected == index
                    ? " translate-y-0 z-30"
                    : "translate-y-full z-10"
                }`}
              >
                <Image
                  alt="Not Given"
                  src={`/home/service/${value.image}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
