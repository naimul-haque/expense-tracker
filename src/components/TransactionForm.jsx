import React, {useContext, useState} from 'react';
import TransactionContext from '../transactionContext';


export default function TransactionForm() {
  const context = useContext(TransactionContext);
  let [desc, setDesc] = useState('');
  let [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    context.dispatch({ type: 'add', payload: {desc, amount} });
    setDesc('');
    setAmount('');
  }

  return (
    <div className="mt-4">
      <p className="text-xl text-purple-500 mb-3">Add New Transactions</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="w-full h-10 p-3 border rounded-lg" 
          placeholder="Trasaction Description" 
          name="desc" 
          value={desc} 
          onChange={ e => setDesc(e.target.value) } 
        />

        <input 
          type="number" 
          className="w-full h-10 p-3 border rounded-lg" 
          placeholder="Trasaction Amount" 
          name="amount" 
          value={amount}
          onChange={ e => setAmount(parseInt(e.target.value)) }
        />
        <button className="bg-purple-500 text-white w-full text-center h-10 rounded-lg"> Add Transaction </button>
      </form>
    </div>
  );
}