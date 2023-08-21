import React from "react";

export default function TitleLocation({ children, isImportant }) {
  return (
    <div
      className={`px-4 py-2 rounded-full w-fit ${
        isImportant ? "bg-black text-yellow-600" : "bg-gray-900 text-white"
      }`}
    >
      {children}
    </div>
  );
}
