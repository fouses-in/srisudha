import React, { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

import { items } from "../../models/drawerItemModel";
import { AnotherHeaderItem } from "./headerItem";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaChevronRight, FaChevronUp, FaRegAddressCard } from "react-icons/fa6";

function Drawer({ isOpen, cancelhandler }) {
  const router = useRouter(null);
  const dispatch = useDispatch(null);
  const [selected, setSelected] = useState(null);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] h-full transform overflow-auto bg-black bg-opacity-60 ${
        !isOpen && "delay-200"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      onClick={cancelhandler}
    >
      <div
        className={`duration-400 z-50 flex  h-full w-2/3 max-w-xs transform flex-col space-y-6 bg-white pb-4 transition-all duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="no-scrollbar  flex w-full flex-1 flex-col overflow-scroll px-4 py-8 ">
          <div
            className={`relative flex-shrink-0 h-14 w-44  flex  flex-grow  justify-center overflow-hidden sm:flex-grow-0  md:flex-grow-0 `}
          >
            <Image
              src={"/images/logo.png"}
              alt="Sudha consultancy"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className="space-y-1 mt-10">
            {items().map((value, index) => (
              <div className="border-b-1px  py-1">
                <div
                  key={value.label}
                  className={` ${
                    value.expandable
                      ? ""
                      : "hover:text-white hover:bg-green-400"
                  } flex gap-1.5 px-2 cursor-pointer group py-2.5 rounded-md `}
                  onClick={() => {
                    if (value.path) {
                      router.push(`${value.path}`);
                    } else if (value.expandable) {
                      if (selected == index) {
                        setSelected(null);
                      } else {
                        setSelected(index);
                      }
                    }
                  }}
                >
                  <p
                    className={`text-sm ${
                      value.expandable ? "" : " group-hover:text-white"
                    } font-normal flex-1 text-gray-600`}
                  >
                    {value.label}
                  </p>
                  {value.expandable && (
                    <div className="p-1.5 border-1px rounded-sm">
                      {selected == index ? (
                        <FaChevronUp className="h-3 text-black self-center w-3" />
                      ) : (
                        <FaChevronRight className="h-3 text-black self-center w-3" />
                      )}
                    </div>
                  )}
                </div>
                {value.childs?.length > 0 && selected == index && (
                  <div
                    className={`  transition-all ease-out duration-300 rounded-md `}
                    style={{ height: selected == index ? "auto" : 0 }}
                  >
                    {value.childs?.map((value) => (
                      <div
                        onClick={() => {
                          router.push(value.link);
                        }}
                        className={`hover:text-white cursor-pointer hover:bg-green-400 p-2  pl-4 rounded-md  text-sm font-normal  ${
                          router.pathname.startsWith(value.link)
                            ? "bg-primary   rounded-l-lg border-l-2 border-primary bg-opacity-20 text-white"
                            : ""
                        }`}
                      >
                        <p className="text-gray-600"> {value.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <nav className="  text-xl gap-6 mt-10 font-medium  flex flex-col ">
            {[
              {
                label: "Call us: +91 9843045936",
                value: "(Mon-Sat)",
                Icon: MdOutlineWifiCalling3,
              },
              {
                label: "Mail us for help:",
                value: "Sreenivasarao@asrfca.com",
                Icon: IoMailUnreadOutline,
              },
              {
                label: "2C, Thygraja Complex, Kilpauk",
                value: "Chennai",
                Icon: FaRegAddressCard,
              },
            ].map((value) => (
              <AnotherHeaderItem {...value} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
