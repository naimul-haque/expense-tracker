import React, {useContext} from 'react';
import TransactionContext from '../transactionContext';


export default function Balance() {
  const context = useContext(TransactionContext);
  const balance = context.transactions.reduce( ((sum, el) => sum + el.amount), 0 );

  const income = context.transactions.reduce((sum, el) => {
    return (el.amount >= 0) ? sum + el.amount : sum;
  }, 0);
  
  const expense = context.transactions.reduce((sum, el) => {
    return (el.amount < 0) ? sum - el.amount : sum;
  }, 0);

  return (
    <>
      <div className="text-xl text-blue-500 border-b pb-5 mt-4">
        <p> Balance </p>
        <p className="text-6xl"> ৳{balance} </p>
      </div>
      <div className="flex space-x-16 text-xl border-b pb-5 mt-4">
        <div>
          <p className="text-green-500"> Income </p>
          <p className="text-3xl"> + ৳{income} </p>
        </div>
        <div>
          <p className="text-red-500"> Expense </p>
          <p className="text-3xl"> - ৳{expense} </p>
        </div>
      </div>
    </>
  );
}