import { Transition } from "@headlessui/react";
import React, { Fragment, type ReactNode } from "react";
interface Props {
  children: ReactNode;
  step: number;
  stepShow: number;
}

const Card = ({ children, step, stepShow}: Props) => {
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
    <Transition
      show={step === stepShow}
      as={Fragment}
    //   enter="transition  duration-50 ease-out"
    //   enterFrom="opacity-80 "
    //   enterTo="opacity-100 "
    //   leave="transition  duration-50 ease-in"
    //   leaveFrom="opacity-100  "
    //   leaveTo="opacity-80 
        >
      <div className={cardStyles}>{children}</div>
    
    </Transition>
  );
};

export default Card;
