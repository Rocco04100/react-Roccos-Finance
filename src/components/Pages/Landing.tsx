import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Inputs from "../Inputs";


interface Props {
  income: string;
  setIncome: (value: string) => void;
  spent: string;
  setSpent: (value: string) => void;
  saved: number;
  titleStyles: string;
}

const Landing = ({ income, setIncome, spent, setSpent, saved, titleStyles }: Props) => {
  return (
    <>
      <h1
        className={`${titleStyles} text-3xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg`}>
        Welcome to Rocco's Financial Literacy Website
      </h1>
      <h3 className="max-w-2xl text-xs sm:text-lg md:text-xl text-gray-200 text-center">
        To start enter a income for a month and how much you spent for the
        month. <br />We will use these numbers to help you learn later!
      </h3>
      
      <div className="bg-stone-900 backdrop-blur-md rounded-xl p-6 w-full max-w-lg shadow-lg">
        <Inputs
          income={income}
          setIncome={setIncome}
          spent={spent}
          setSpent={setSpent}
        />
      </div>
      <div className="flex w-full items-center justify-center my-10 sm:min-h-[10rem] min-h-[12rem]">
        <Transition
          show={income !== "" && spent !== ""}
          as={Fragment}
          enter="transition-all duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enterFrom="opacity-0 translate-y-6 scale-95"
          enterTo="opacity-100 translate-y-0 scale-100"
          leave="transition-all duration-3000 ease-in-out"
          leaveFrom="opacity-100 translate-y-0 scale-100"
          leaveTo="opacity-0 translate-y-6 scale-95">
          <p
            className={`text-2xl text-center my-10 ${
              saved > 0 ? "text-green-300" : "text-red-300"
            }`}>
            {saved > 0
              ? `Great!! you saved $${saved} this month! This is the number we can look at to project future growth`
              : `You spent $${Math.abs(
                  saved
                )} more than you earned this month. That's okay! This tool is designed to help. Let's look at the chart below to see the breakdown.`}
          </p>
        </Transition>
      </div>
    </>
  );
};

export default Landing;
