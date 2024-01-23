import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="py-20 bg-[#0A0A0A] bg-no-repeat bg-[url('/footer/footerimage.png')] ">
        <div className="w-full px-6 xl:px-0  bg-no-repeat bg-[url('/footer/footerbg.png')]">
          <div className="grid  grid-cols-1 md:grid-cols-8 gap-10 md:gap-24 mx-auto max-w-monitor">
            <div className="md:col-span-2">
              <div className="w-full h-12 items-start flex relative">
                <Image
                  src={"/images/logo.png"}
                  layout="fill"
                  className="  bg-left  left-0"
                  objectFit="contain"
                />
              </div>
              <div className="text-white text-sm font-light space-y-2 mt-8">
                <p>Flat 2c,Thygaraja Complex,Kilpauk Chennai-600010 </p>
                <p>+ 91 9843045936</p>
              </div>

              <div className="space-y-4 mt-6">
                <p className="font-semibold text-primary text-[15px]">
                  Open Hours:
                </p>
                <div className="text-white text-sm font-light space-y-2 mt-8">
                  <p>Mon – Fri: 10 am – 6 pm,</p>
                  <p>Saturday- 9 am – 1.30 pm</p>
                  <p>Sunday: CLOSED</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="flex mt-2 text-white text-xl font-semibold gap-2 items-center">
                <h2>Links</h2>
                <h3 className="h-[1px] flex-1 bg-gray-500" />
              </div>
              <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-4 gap-y-4 md:gap-y-2">
                {[
                  { label: "Services", path: "/services" },
                  { label: "About Us", path: "/services" },
                  { label: "Industry Compass", path: "/services" },
                  { label: "Portfolio", path: "/services" },
                  { label: "Resources", path: "/services" },
                  { label: "Terms and Services", path: "/terms" },
                  { label: "Privacy Policy", path: "/privacy-policy" },
                ].map((value) => (
                  <Link href={value.path}>
                    <a rel="noopener noreferrer">
                      <div className="flex items-center gap-4 text-gray-400 font-medium text-sm ">
                        <FaChevronRight className="h-3 w-3" />
                        <p>{value.label}</p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              <div className="flex mt-12 text-white text-xl font-semibold gap-2 items-center">
                <h2>Secured By</h2>
                <h3 className="h-[1px] flex-1 bg-gray-500" />
              </div>
              <div className="h-20 mt-4 md:mt-6 w-full relative">
                <Image
                  className="contain"
                  src={"/home/ssl.png"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="flex mt-2 text-white text-xl font-semibold gap-2 items-center">
                <h2>Newsletter</h2>
                <h3 className="h-[1px] flex-1 bg-gray-500" />
              </div>
              <div className="text-white text-sm  space-y-2 mt-8">
                Send us a newsletter to get update
              </div>
              <div className="flex gap-4 mt-6 ">
                {["playstore.png", "appstore.png"].map((value) => (
                  <div className="flex-1 h-14 relative">
                    <Image
                      className=" contain"
                      src={`/footer/${value}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-6  text-white">
        <p className="max-w-1200 mx-auto px-4 xl:px-0 text-sm md:text-base text-center pb-4">
          2023 &#169; Srisudha Consultancy Services Private Limited. All Right
          Reserved. | Developed with 🤍 in india by team
          <a href="https://fouses.com" target="_blank">
            <span className="text-primary">#Fouses</span>
          </a>
        </p>
      </div>
    </div>
  );
}
