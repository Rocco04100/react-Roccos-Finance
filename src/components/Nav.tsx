import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useLocation} from "react-router-dom"
import useGuardedNavigate from "../hooks/useGuardedNavigate";

interface Lesson {
  name: string;
  tooltip?: string;
  path: string;
}
interface Props {
  lessonList: Lesson[];
  spent?: string;
  income?: string;
}



const Nav = ({ lessonList, spent = "", income = "" }: Props) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const guardedNavigate = useGuardedNavigate(income, spent);
  

  return (
    <>
      <div className="nav-container hidden md:flex flex-row w-full fixed top-0 z-50 ">
        {lessonList.map((l, index) => (
          <button
            key={index}
            title={l.tooltip}
            className={`border border-stone-700 hover:bg-stone-700 md:text-xl sm:text-lg text-sm w-full ${
              l.path == location.pathname
                ? "bg-stone-900 text-green-400"
                : "bg-stone-800  text-white"
            } ${index == 0 ? "rounded-l-2xl" : ""}
               ${index == lessonList.length - 1 ? "rounded-r-2xl" : ""}`}
            onClick={() => guardedNavigate(l.path)}>
            <div className="flex flex-col gap-0">
              <span className="text-xl">{l.name}</span>
              <span className="text-xs">{l.tooltip}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="md:hidden">
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
        <Transition
          show={menuOpen}
          enter="transform transition duration-300 ease-in-out"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transform transition duration-300 ease-in-out"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
          unmount>
          <div
            className={` fixed top-0 left-0 min-h-9/10 w-2/3 sm:w-1/4 bg-stone-900 flex flex-col z-50 shadow-xl overflow-y-scroll rounded-xl`}>
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
                  l.path == location.pathname
                    ? "bg-stone-900 text-green-400"
                    : "bg-stone-800 opacity-80 text-white"
                } 
               `}
                onClick={() => {
                  guardedNavigate(l.path);
                  setMenuOpen(false);
                }}>
                <div className="flex flex-col gap-0">
                  <span className="text-2xl">{l.name}</span>
                  <span className="text-sm">{l.tooltip}</span>
                </div>
              </button>
            ))}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Nav;
