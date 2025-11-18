import { useNavigate } from "react-router-dom";

const useGuardedNavigate = (income: string, spent: string) => {
  const navigate = useNavigate();
  return (path: string) => {
    if (income === "" || spent === "") {
      navigate("/");
      alert("Please input a monthly cost and income.");
      return;
    }
    navigate(path);
  };
};

export default useGuardedNavigate;
