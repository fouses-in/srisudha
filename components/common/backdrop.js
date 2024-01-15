import React from "react";

export default function Backdrop({
  className = "bg-gray-700",
  opacity = 30,
  onClick = () => {},
}) {
  return (
    <div
      className={`fixed inset-0 z-20 ${className}   bg-opacity-${opacity}`}
      onClick={onClick}
    ></div>
  );
}
