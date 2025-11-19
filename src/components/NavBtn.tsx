import React from "react";
import useGuardedNavigate from "../hooks/useGuardedNavigate";
import { useLocation } from "react-router-dom";

interface Lesson {
  name: string;
  tooltip?: string;
  path: string;
}
interface Props {
  income: string;
  spent: string;
  lessonList: Lesson[];
}

const NavBtn = ({ income, spent, lessonList }: Props) => {
  const guardedNavigate = useGuardedNavigate(income, spent);
  const location = useLocation();
  const currentIndex = lessonList.findIndex(
    (lesson) => lesson.path === location.pathname
  );
  const handleClick = () => {
    if (currentIndex >= 0 && currentIndex < lessonList.length - 1) {
      const nextLesson = lessonList[currentIndex + 1];
      guardedNavigate(nextLesson.path);
    } else {
      console.log("This is the last lesson.");
    }
  };
  return (
    <>
      {currentIndex < lessonList.length - 1 && (
        <button
          className="px-8 py-3 mb-10 
                    bg-green-800 text-white font-bold text-lg 
                    rounded-3xl 
                    shadow-lg 
                    hover:bg-green-600 hover:shadow-xl hover:scale-105 
                    transition transform duration-200 ease-out 
                    border-2 border-green-700
                    active:scale-95 active:shadow-md
                    cursor-pointer"
          onClick={handleClick}>
          Next Lesson
        </button>
      )}
    </>
  );
};

export default NavBtn;
