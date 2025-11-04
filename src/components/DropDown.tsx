import React, { useState } from 'react'

interface Props {
    label: string;
    children: React.ReactNode;
}

const DropDown = ({children, label}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div
      className={`dropdown-container bg-stone-800 text-white rounded-xl shadow-md w-full mx-auto transition-all duration-300 hover:shadow-lg my-2`}>
      <button
        onClick={handleClick}
        className={`flex justify-between items-center w-full text-left font-semibold rounded-lg  p-3 hover:bg-stone-700 transition-colors ${
          isOpen ? "rounded-b-none bg-stone-950" : "rounded-b-lg bg-stone-900"
        }`}>
        <span>{label}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={`rounded-b-lg bg-stone-900 p-3 animate-fadeIn`}>
          <div className="p-3">{children}</div>
        </div>
      )}
    </div>
  );
}

export default DropDown