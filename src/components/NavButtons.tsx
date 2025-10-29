import React from 'react'
interface Props {
  handleBack: () => void;
  handleNext: () => void;
}
const NavButtons = ( {handleNext, handleBack}: Props) => {
    const buttonStyles = `
  bg-gradient-to-r from-green-500 to-emerald-400
  text-stone-900
  text-lg sm:text-xl
  font-bold
  px-6 py-2
  rounded-full
  shadow-md
  hover:shadow-lg
  hover:from-green-400 hover:to-emerald-300
  transition-all duration-300
  border border-green-300/40`;
  return (
    <>
      <div className="flex flex-row gap-10">
        <button
          className={buttonStyles}
          onClick={handleBack}>
          Back
        </button>
        <button
          className={buttonStyles}
          onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default NavButtons