import React, { useState } from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

import ChevronRightIcon from "../icons/outline/chevronRightIcon";
import CheveronDownIcon from "../icons/outline/cheveronDownIcon";
import { items } from "../../models/drawerItemModel";

function Drawer({ isOpen, cancelhandler }) {
  const router = useRouter(null);
  const dispatch = useDispatch(null);
  const [selected, setSelected] = useState(null);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-full transform overflow-auto bg-black bg-opacity-60 ${
        !isOpen && "delay-200"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      onClick={cancelhandler}
    >
      <div
        className={`duration-400 z-50 flex  h-full w-2/3 transform flex-col space-y-6 bg-white pb-4 transition-all duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mx-3 mt-4 flex  items-center space-x-3 rounded-md border-b-1px  bg-profileCard py-2 px-2 text-gray-300">
          <div className="relative h-8 w-8 rounded-full ">
            <Image
              src={`/images/profile.png`}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className=" text-secondary shadow-lg"
            />
          </div>
        </div>
        <div className="no-scrollbar flex w-full flex-1 flex-col space-y-5 overflow-scroll px-2 py-0">
          <div className="space-y-1">
            {items().map((value, index) => (
              <div>
                <div
                  key={value.label}
                  className={`${
                    router.pathname.startsWith(value.path)
                      ? "bg-primary   rounded-l-lg border-l-2 border-primary bg-opacity-20 text-white"
                      : ""
                  }  ${
                    value.expandable
                      ? ""
                      : "hover:text-white hover:bg-green-400"
                  } flex gap-1.5 px-2 group py-2.5 rounded-md `}
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
                  <ChevronRightIcon
                    className={`mr-2.5 h-4 text-gray-400 w-4  ${
                      value.expandable ? "" : " group-hover:text-white"
                    }`}
                  />

                  <p
                    className={`text-sm ${
                      value.expandable ? "" : " group-hover:text-white"
                    } font-normal flex-1 text-gray-600`}
                  >
                    {value.label}
                  </p>
                  {value.expandable &&
                    (selected == index ? (
                      <ChevronRightIcon className="h-4 text-black self-center w-4" />
                    ) : (
                      <CheveronDownIcon className="h-4 text-black self-center w-4" />
                    ))}
                </div>
                {value.childs?.length > 0 && (
                  <div
                    className={`   ml-14  transition-all ease-out duration-300 rounded-md `}
                    style={{ height: selected == index ? "auto" : 0 }}
                  >
                    {value.childs?.map((value) => (
                      <div
                        onClick={() => {
                          router.push(value.path);
                        }}
                        className={`hover:text-white hover:bg-green-400 p-2  pl-3 rounded-md  text-sm font-normal  ${
                          router.pathname.startsWith(value.path)
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
        </div>
      </div>
    </div>
  );
}

export default Drawer;
