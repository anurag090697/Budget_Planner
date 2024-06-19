/** @format */

import React, { useContext } from "react";
import { idharUdhar } from "./App";

function Header() {
  const { budget, remaining, spent } = useContext(idharUdhar);
  return (
    <header className=' py-4'>
      <h1 className='ml-8 text-4xl font-medium text-red-600'>
        MY BUDGET PLANNER
      </h1>

      <nav className='flex w-full shadow-xl border border-cyan-600 shadow-cyan-500/50 justify-around items-center py-4 bg-gradient-to-r from-indigo-400 via-cyan-500 to-blue-500 font-medium text-2xl'>
        <div className='bg-emerald-300 py-2 px-4 rounded-lg shadow-lg shadow-emerald-700'>
          <h2 className="text-orange-600">Budget: ${budget}</h2>
        </div>
        <div className='bg-amber-400 py-2 px-4 rounded-lg shadow-lg shadow-amber-700'>
          <h2 className="text-white">Remaining: ${remaining}</h2>
        </div>
        <div className='bg-red-400 py-2 px-4 rounded-lg shadow-lg shadow-red-700'>
          <h2 className="text-white">Spent Amount: ${spent}</h2>
        </div>
      </nav>
    </header>
  );
}

export default Header;
