import React, {useContext} from 'react';
import TransactionContext from '../transactionContext';


export default function TransactionForm() {
  const context = useContext(TransactionContext);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let pair of formData.entries()) {
      data[ pair[0] ] = pair[1];
    }
    context.dispatch({ type: 'add', payload: data });
  }

  return (
    <div className="">
      <p className="text-xl text-purple-500 mb-6">Add New Transactions</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Description" name="desc" />
        <input type="text" className="w-full h-10 p-3 border" placeholder="Trasaction Amount" name="amount" />
        <button className="bg-purple-500 text-white w-full text-center h-10"> Add Transaction </button>
      </form>
    </div>
  );
}