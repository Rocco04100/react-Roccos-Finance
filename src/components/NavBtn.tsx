// import React from "react";
// // import useGuardedNavigate from "../hooks/useGuardedNavigate";
// import { useLocation } from "react-router-dom";

// interface Lesson {
//   name: string;
//   tooltip?: string;
//   path: string;
// }
// interface Props {
//   income: string;
//   spent: string;
//   lessonList: Lesson[];
// }

// const NavBtn = ({income, spent}: Props) => {
// //  const guardedNavigate = useGuardedNavigate(income, spent);
//  const location = useLocation();
//  const handleClick = () =>{
//     console.log(location.pathname)
//  }
//   return (
//     <div>
//       <button 
//       className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
//       onClick={handleClick}>
//         Next Lesson
//       </button>
//     </div>
//   );
// };

// export default NavBtn;
