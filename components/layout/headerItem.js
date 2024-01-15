import router from "next/router";
import React from "react";

export function AnotherHeaderItem({ label, value, Icon }) {
  return (
    <div className="flex gap-3 items-start">
      {<Icon className="mt-1 text-primary" />}
      <div className="text-[15px] font-Roboto">
        <p className="  font-normal">{label}</p>
        <p className="font-light">{value}</p>
      </div>
    </div>
  );
}
