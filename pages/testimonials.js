import Head from "next/head";
import React from "react";
import Header from "../components/layout/header";
import HeroImage from "../components/common/headerImage";
import CustomBorder from "../components/common/border";
import Image from "next/image";
import { TestimonialsContent } from "../constants/testimonial";
import CompanyList from "../components/common/companies";

export default function Testimonials() {
  return (
    <div className="bg-white overflow-scroll no-scrollbar h-screen">
      <Head>
        <title>Home-Srisudha Consultancy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroImage title="Testimonials" subtitle="Home - Testimonials" />
      <section className=" mx-auto max-w-1200  py-20">
        <div>
          <div className="grid mt-4 grid-cols-2 gap-10">
            <div className="flex gap-2 ">
              <CustomBorder width="w-20 mt-5 flex-shrink-0" />
              <h2 className="text-[36px] text-black font-semibold font-Roboto leading-[46px] ">
                We have many reviews from our satisfied clients.
              </h2>
            </div>

            <h3 className="text-gray-500 mt-1 leading-8 text-base font-Roboto">
              It’s always a joy to hear that the work I do has positively
              impacted our clients and that they are happy to share their
              experience.
            </h3>
          </div>
        </div>
      </section>
      <div className="grid mx-auto pt-8 pb-20 grid-cols-3 gap-6 gap-y-16 max-w-[1232px] px-4 ">
        {TestimonialsContent.map((value) => (
          <TestimonialCard value={value} />
        ))}
      </div>
      <CompanyList />
    </div>
  );
}

function TestimonialCard({ value }) {
  return (
    <div className=" relative flex flex-col items-center px-8 py-6 pt-8 cursor-pointer transition-all duration-300 hover:-translate-y-4 testiCard hover:testiCardHover">
      <div className="absolute -top-7 left-8 ">
        <i class="fa-solid fa-quote-right text-6xl text-gray-200"></i>
      </div>
      <div className="relative group-hover:shadow-lg outline outline-1 outline-offset-2 outline-gray-300 w-28 aspect-square rounded-full overflow-hidden">
        <Image
          src={`/testimonial/${value.image}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-gray-500 mt-6  text-center leading-7 text-base font-Roboto">
        {value.testimonial}
      </p>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-lg ">{value.name}</h3>
        <h4 className="text-gray-500  text-[14px]">{value.designation}</h4>
      </div>
    </div>
  );
}
