import React from "react";

export default function ServiceIcon({ className = "h-3 w-2" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L5 5L10 0H0Z" fill="currentColor" />
    </svg>
  );
}
