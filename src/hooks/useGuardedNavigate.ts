import { useNavigate } from "react-router-dom";

const useGuardedNavigate = (income: string, spent: string) => {
  const navigate = useNavigate();
  return (path: string) => {
    window.scrollTo(0,0)
    if (income === "" || spent === "") {
      navigate("/");
      alert("Please input a monthly cost and income.");
      return;
    }
    navigate(path);
  };
};

export default useGuardedNavigate;
