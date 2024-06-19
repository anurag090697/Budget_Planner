/** @format */

import { useEffect, useState } from "react";
import { createContext } from "react";
import "./App.css";
import Header from "./Header";
import Budget from "./Budget";

export const idharUdhar = createContext();

function App() {
  const budget = 10000;
  const [remaining, setRemaining] = useState(budget);
  const [spent, setSpent] = useState(0);
  const [spendarr, setSpendArr] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("budget");
    if (savedData) {
      setSpendArr(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    let totalSpent = 0;
    spendarr.forEach((ele) => {
      totalSpent += parseInt(ele.amount);
    });
    setSpent(totalSpent);
    setRemaining(budget - totalSpent);

    console.log(spendarr);

    localStorage.setItem("budget", JSON.stringify(spendarr));
  }, [spendarr]);

  return (
    <div className='bg-gradient-to-r from-cyan-200 to-indigo-300 min-h-dvh'>
      <idharUdhar.Provider
        value={{
          budget,
          remaining,
          setRemaining,
          spent,
          setSpent,
          spendarr,
          setSpendArr,
        }}
      >
        <Header />
        <Budget />
      </idharUdhar.Provider>
    </div>
  );
}

export default App;
