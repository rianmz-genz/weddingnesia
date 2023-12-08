import React from "react";

export default function ButtonRsvp({
  icon,
  label,
  onClick,
  value,
  currentValue,
}) {
  return (
    <button
      onClick={onClick}
      className={`${value == currentValue && "ring-2"} ${
        value == "ABSENT"
          ? "bg-red-500/10 text-red-500 ring-red-500"
          : value == "NOT_SURE"
          ? "bg-yellow-500/10 text-yellow-500 ring-yellow-500"
          : "bg-green-500/10 text-green-500 ring-green-500"
      } transition-all duration-500 w-fit flex flex-row rounded-full gap-2 items-center px-4 py-2`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
