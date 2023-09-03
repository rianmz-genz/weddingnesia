import React from "react";

export default function Modals({ children, onSubmit }) {
  return (
    <div className="w-full h-screen bg-black/40 z-50 backdrop-blur-sm fixed flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="max-w-lg w-full px-8 py-4 bg-white rounded-lg"
      >
        {children}
      </form>
    </div>
  );
}
