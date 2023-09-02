import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
  return (
    <>
      <button
        type="button"
        className={`fixed bottom-7 right-7 transition-all duration-500 bg-blue-500/10 text-white p-2 rounded-full hover:bg-blue-500/30 backdrop-blur-md cursor-pointer ${
          isVisible ? "visible opacity-100" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
      >
        <FiArrowUpCircle className="text-blue-500 text-xl" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
