import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import Backdrop from "../common/backdrop";
import DotsVertical from "../icons/outline/dotsVertical";

export default function PopupOption({
  children,
  Icon,
  onClick,
  opacity = 40,
  className2 = "",
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div
        className={`relative cursor-pointer ${className2}`}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(!showModal);
          if (onClick) {
            onClick();
          }
        }}
      >
        {showModal && children && (
          <Fragment>
            <Backdrop opacity={opacity} />
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`absolute top-12 left-0 z-50  space-y-2  rounded-md bg-white  py-2 text-sm  text-black text-opacity-80 shadow-xl `}
            >
              {children}
            </div>
          </Fragment>
        )}
        {Icon}
      </div>
    </Fragment>
  );
}
