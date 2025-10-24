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
        className={`flex justify-between items-center w-full text-left font-semibold rounded-lg bg-stone-900 p-3 hover:bg-stone-700 transition-colors ${
          isOpen ? "rounded-b-none" : "rounded-b-lg"
        }`}>
        <span>{label}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}>
          ▼
        </span>
      </button>

      <div
        className={`transition-all duration-300 rounded-lg bg-stone-900 ${
          isOpen
            ? "max-h-96 opacity-100 scale-[1.02] pointer-events-auto"
            : "max-h-0 opacity-0 scale-100 pointer-events-none "
        }`}>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}

export default DropDown