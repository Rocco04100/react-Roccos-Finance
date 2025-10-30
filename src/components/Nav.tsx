import { useState } from "react";
interface Lesson {
  name: string;
  tooltip?: string;
}
interface Props {
  lessonList: Lesson[];
  setStep: (step: number) => void;
  step: number;
}

const Nav = ({ lessonList, setStep, step }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-container hidden sm:flex flex-row w-full fixed top-0 z-50 ">
        {lessonList.map((l, index) => (
          <button
            key={index}
            title={l.tooltip}
            className={`border border-stone-700 hover:bg-stone-700 md:text-xl sm:text-lg text-sm w-full ${
              index == step
                ? "bg-stone-900 text-green-400"
                : "bg-stone-800  text-white"
            } ${index == 0 ? "rounded-l-2xl" : ""}
               ${index == lessonList.length - 1 ? "rounded-r-2xl" : ""}`}
            onClick={() => setStep(index)}>
            {l.name}
          </button>
        ))}
      </div>
      <div className="sm:hidden">
        {/* Hamburger Button */}
        {!menuOpen && (
          <button
            className="p-3 text-white bg-stone-900 rounded-md w-full fixed top-0 left-0 z-50 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <div className="w-6 h-[2px] bg-white"></div>
              <div className="w-6 h-[2px] bg-white"></div>
              <div className="w-6 h-[2px] bg-white"></div>
            </div>
          </button>
        )}
        {menuOpen && (
          <div
            className={` fixed top-0 left-0 h-screen w-2/3 sm:w-1/4 bg-stone-900 flex flex-col z-50 shadow-xl overflow-y-scroll`}>
            <div className="w-full flex flex-row justify-end text-red-500 text-2xl pr-3">
              <button
                className=" cursor-pointer hover:text-red-400"
                onClick={() => setMenuOpen(!menuOpen)}>
                &times;
              </button>
            </div>
            {lessonList.map((l, index) => (
              <button
                key={index}
                title={l.tooltip}
                className={`border border-stone-700 hover:bg-stone-700  w-full cursor-pointer ${
                  index == step
                    ? "bg-stone-900 text-green-400"
                    : "bg-stone-800 opacity-80 text-white"
                } 
               `}
                onClick={() => {
                  setStep(index);
                  setMenuOpen(false);
                }}>
                <div className="flex flex-col gap-0">
                  <span className="text-2xl">{l.name}</span>
                  <span className="text-sm">{l.tooltip}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
