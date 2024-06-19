/** @format */

import { idharUdhar } from "./App";
import React, { useContext, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";

function Budget() {
  const { budget, remaining, spent, spendarr, setSpendArr } =
    useContext(idharUdhar);

  const [spendName, setSpendName] = useState("");
  const [spendAmount, setSpendAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const tm = {
      name: spendName,
      amount: parseFloat(spendAmount),
    };
    setSpendArr([...spendarr, tm]);
    setSpendName("");
    setSpendAmount(0);
    // localStorage.setItem("budget", spendarr);
  }

  function deleteSpend(i) {
    let tm = spendarr.filter((ele, idx) => {
      return ele.name !== i;
    });
    setSpendArr(tm);
  }

  return (
    <div>
      <h2 className='text-rose-600 text-3xl font-medium m-auto w-fit my-2'>
        Expenses
      </h2>

      <div className='px-14 '>
        {spendarr.length === 0 ? (
          <h2 className='text-emerald-600 text-3xl font-medium m-auto w-fit my-2'>
            Add Data To List....
          </h2>
        ) : (
          <>
            <div className='flex justify-between items-center py-2 px-6 font-medium text-2xl bg-purple-400/75 rounded-lg my-2'>
              <h3 className='text-gray-800'>Spent On</h3>
              <h3 className='text-rose-600'>AMOUNT</h3>
              <h3 className='text-rose-800'>DELETE</h3>{" "}
            </div>
            {spendarr.map((ele, idx) => {
              return (
                <div
                  key={idx}
                  className='flex justify-between items-center py-2 px-6 font-medium text-2xl bg-purple-400/75 rounded-lg my-2'
                >
                  <h3 className='text-gray-800'>{ele.name}</h3>
                  <h3 className='text-rose-600'>${ele.amount}</h3>

                  <div className='text-rose-700 text-2xl hover:text-red-600'>
                    <button onClick={() => deleteSpend(ele.name)}>
                      <BsTrash3Fill />
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <h2 className='text-2xl font-bold w-fit m-auto my-6 '>Add Expenses</h2>
        <form
          action='submit'
          className='flex justify-around items-center border-2 p-4 border-amber-700'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Name the Spend...'
            className='px-3 py-2 rounded-xl border border-lime-300 text-center'
            value={spendName}
            onChange={(e) => setSpendName(e.currentTarget.value)}
          />
          <input
            type='number'
            placeholder='Amount spent....'
            className='px-3 py-2 rounded-xl border border-lime-300 text-center'
            max={budget}
            value={spendAmount}
            onChange={(e) => setSpendAmount(parseFloat(e.currentTarget.value))}
          />
          <button
            type='submit'
            className='px-4 py-2 rounded-lg border border-gray-400 bg-amber-500 shadow-lg shadow-amber-800 font-medium text-gray-500 hover:bg-amber-400 hover:text-gray-600'
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Budget;
