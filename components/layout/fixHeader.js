import Link from "next/link";
import React, { Fragment, useState } from "react";

import { useRouter } from "next/router";

export default function FixHeader({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter(null);
  return (
    <div className=" flex-1 px-10 absolute left-0 rounded-md h-16 bottom-0 translate-y-1/2  right-0  bg-black z-50    hidden xl:flex text-15 text-gray-600 font-medium  flex-row gap-10">
      {[
        { name: "Services", link: "/services" },
        {
          name: "About Us +",

          subheaders: [
            { name: "Our Team", link: "/team" },

            { name: "Our Founder", link: "/ca-sreenivasa-rao" },

            { name: "Testimonials", link: "/testimonials" },

            { name: "Faqs", link: "/team" },

            { name: "Contact Us", link: "/contact" },
          ],
        },
        { name: "Industry Compass", link: "/industry-compass" },
        { name: "Portfolio" },
        ,
        { name: "Resources +", link: "" },
        ,
      ].map((value) => (
        <div className="relative  h-full   group">
          <Link href={value?.link ?? ""} passHref>
            <a rel="noopener noreferrer">
              <div className="cursor-pointer h-full justify-center px-2 group flex flex-col text-primaryText  group hover:text-primary hover:font-medium   transition-all duration-200">
                <div className=" absolute top-0 bottom-0 w-0 duration-200 transition-all group-hover:w-full bg-primary  "></div>

                <div className="flex z-50 relative gap-1 ml-4 items-center">
                  <p
                    className={`font-medium ${
                      router.pathname.includes(value.link)
                        ? "text-white"
                        : "text-white"
                    }`}
                  >
                    {value.name}
                  </p>
                </div>
              </div>
            </a>
          </Link>
          {value.subheaders && (
            <div className="absolute pt-[70px]  cursor-pointer w-40 top-0 left-0 z-50 hidden group-hover:block">
              <div className="  bg-white shadow-sm border-1px opacity-100 ml-2  border-t-1px   z-50 w-52 p-1.5 transition-all duration-300">
                {value.subheaders.map((value) => (
                  <Link href={value.link} passHref>
                    <a rel="noopener noreferrer">
                      <div className="py-3 px-2.5 hover:bg-primary hover:text-white">
                        <p className="text-base">{value.name}</p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
