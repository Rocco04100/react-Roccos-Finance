
import {type ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Card = ({ children}: Props) => {
  const cardStyles = `
  border border-stone-700
  bg-stone-800/90 backdrop-blur
  w-full 
  my-10
  sm:my-15
  rounded-2xl
  shadow-2xl
  flex flex-col gap-6
  justify-center 
  items-center 
  p-8 sm:p-10

  `;
 
  return (
    // <Transition
    //   show={step === stepShow}
    //   as={Fragment}
    //     >
    <>
      <div className={cardStyles}>{children}</div>

      {/* </Transition> */}
    </>
  );
};

export default Card;
