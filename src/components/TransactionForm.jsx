import React from 'react';

export default function TransactionForm() {
  return (
    <div className="">
      <p className="text-xl text-purple-500 mb-6">Add New Transactions</p>
      <form className="space-y-4">
        <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Description" />
        <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Amount" />
        <button class="bg-purple-500 text-white w-full text-center h-10"> Add Transaction </button>
      </form>
    </div>
  );
}