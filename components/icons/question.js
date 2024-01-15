import React from "react";

export default function Question({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 87 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.8535 0C20.1175 0 0.853516 19.264 0.853516 43C0.853516 66.736 20.1175 86 43.8535 86C67.5895 86 86.8535 66.736 86.8535 43C86.8535 19.264 67.5895 0 43.8535 0ZM48.1535 64.5H39.5535V38.7H48.1535V64.5ZM48.1535 30.1H39.5535V21.5H48.1535V30.1Z"
        fill="#023047"
      />
    </svg>
  );
}
