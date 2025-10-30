import React from 'react'
interface Lesson{
    name: string;
    tooltip?:string;
}
interface Props{
    lessonList: Lesson[];
    setStep: (step: number) => void;
    step: number;
}

const Nav = ({lessonList, setStep, step}: Props) => {
  return (
    
      <div className="nav-container flex flex-row w-full ">
        {lessonList.map((l, index) => (
          <button
            key={index}
            title={l.tooltip}
            className={`border border-stone-700 hover:bg-stone-700 md:text-xl sm:text-lg text-sm w-full ${
              index == step
                ? "bg-stone-900 text-green-400"
                : "bg-stone-800 opacity-80 text-white"
            } ${index == 0 ? "rounded-l-2xl" : ""}
               ${index == lessonList.length - 1 ? "rounded-r-2xl" : ""}`}
            onClick={() => setStep(index)}>
            {l.name}
          </button>
        ))}
      </div>
   
   
  );
}

export default Nav