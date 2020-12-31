import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-10 text-gray-800 space-y-4">

        <h2 className="text-3xl font-bold border-b pb-3"> Expense Tracker </h2>

        <div className="text-xl text-blue-500 border-b pb-5">
          <p> Balance </p>
          <p className="text-6xl"> $234 </p>
        </div>

        <div className="flex space-x-16 text-xl border-b pb-5">
          <div>
            <p className="text-green-500"> Income </p>
            <p className="text-3xl"> + $234 </p> 
          </div>
          <div>
            <p className="text-red-500"> Expense </p>
            <p className="text-3xl"> - $234 </p> 
          </div>
        </div>

        <div className="border-b pb-5">
          <p class="text-xl text-yellow-500 mb-3">History</p>
          <ul class="space-y-2">
            <li className="flex justify-between">
              <span>Bought a monitor</span>
              <span>-$99</span>
            </li>
            <li className="flex justify-between">
              <span>Earned money from making websites</span>
              <span>+$999</span>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl text-purple-500 mb-6">Add New Transactions</p>

          <form className="space-y-4">
            <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Description" />
            <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Amount" />
            <button class="bg-purple-500 text-white w-full text-center h-10"> Add Transaction </button>
          </form>

        </div>

      </div>
    </div>
  );
}

export default App;