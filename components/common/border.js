import React from "react";

export default function CustomBorder({ width = "w-16" }) {
  return <div className={`h-0.5 ${width} bg-primary `} />;
}
