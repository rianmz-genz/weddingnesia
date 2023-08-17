import { useState } from "react";
import Text from "./Text";
import { textStyle } from "@/utils/enum";

const DropDown = ({ className, title, options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`${className}`}>
      <Text style={textStyle.description}>{title}</Text>
      <div className={`relative inline-block text-left w-full mt-1`}>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex w-full  px-4 py-2 font-medium text-gray-700 bg-white border border-black/10 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {selectedOption}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
        {isOpen && (
          <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectOption(option)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
