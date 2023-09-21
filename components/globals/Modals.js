import React, { useEffect, useRef, useState } from "react";

export default function Modals({ children, trigger, onClose }) {
  const divRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    setIsOpened(trigger);
  }, [trigger]);
  return (
    <div
      onClick={onClose}
      className={`${
        isOpened ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-500 w-full h-screen bg-black/40 px-7 z-50 backdrop-blur-sm fixed flex justify-center items-center inset-0`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={divRef}
        className="max-w-lg w-full px-8 py-4 bg-white rounded-lg"
      >
        {children}
      </div>
    </div>
  );
}
