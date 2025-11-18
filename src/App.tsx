import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CompoundInterest from "./components/Cards/Lesson5CompoundInterest";
import Savings from "./components/Cards/Lesson1Savings";
import Landing from "./components/Cards/Landing";
import Nav from "./components/Nav";
import Card from "./components/Cards/Card";
import SpendingSmart from "./components/Cards/Lesson2SpendingSmart";
import EmergencyFund from "./components/Cards/Lesson3EmergencyFund";
import BankAccounts from "./components/Cards/Lesson4BankAccounts";

function App() {
  const [income, setIncome] = useState("");
  const [spent, setSpent] = useState("");
  // const navigate = useNavigate();

  const saved = Number((Number(income) - Number(spent)).toFixed(2));
  const lessonList = [
    { name: "Start", tooltip: "", path: "/" },
    { name: "Lesson 1", tooltip: "Savings", path: "/lesson/1" },
    { name: "Lesson 2", tooltip: "Spending Smart", path: "/lesson/2" },
    { name: "Lesson 3", tooltip: "Emergency Fund", path: "/lesson/3" },
    { name: "Lesson 4", tooltip: "Types of Accounts", path: "/lesson/4" },
    { name: "Lesson 5", tooltip: "Compound Interest", path: "/lesson/5" },
    {
      name: "Lesson 6",
      tooltip: "Types of Investments",
      path: "/lesson/6",
    },
  ];

  return (
    <>
      <Nav
        lessonList={lessonList}
        spent={spent}
        income={income}
      />
      <div className="min-h-screen bg-stone-900 sm:px-6 mt-5 sm:my-0 md:px-12 flex flex-col items-center py-0 backdrop-blur gap-1">
        <Routes>
          {/* -------LANDING PAGE------- */}
          <Route
            path="/"
            element={
              <Card>
                <Landing
                  saved={saved}
                  setSpent={setSpent}
                  spent={spent}
                  setIncome={setIncome}
                  income={income}
                />
              </Card>
            }
          />
          {/* -------Lesson 1 SAVINGS CARD------- */}
          <Route
            path="/lesson/1"
            element={
              <Card>
                <Savings
                  saved={saved}
                  income={Number(income)}
                  spent={Number(spent)}
                />
              </Card>
            }
          />
          {/* -------Lesson 2 Spending Smart Card------- */}
          <Route
            path="/lesson/2"
            element={
              <Card>
                <SpendingSmart
                  spent={Number(spent)}
                  saved={saved}
                  income={Number(income)}
                />
              </Card>
            }
          />
          {/* -------Lesson 3 Emergency Fund------- */}
          <Route
            path="/lesson/3"
            element={
              <Card>
                <EmergencyFund
                  saved={saved}
                  spent={Number(spent)}
                />
              </Card>
            }
          />
          {/* -------Lesson 4 Bank Accounts------- */}
          <Route
            path="/lesson/4"
            element={
              <Card>
                <BankAccounts />
              </Card>
            }
          />
          {/* -------Lesson 5 COMPOUND INTEREST------- */}
          <Route
            path="/lesson/5"
            element={
              <Card>
                <CompoundInterest saved={saved} />
              </Card>
            }
          />
          {/* -------Lesson 6------- */}
          <Route
            path="/lesson/6"
            element={
              <Card>Lesson 6 is still in progress check back soon!</Card>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
