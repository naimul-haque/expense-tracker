import React, {useContext} from 'react';
import TransactionContext from '../transactionContext';

export default function TransactionList() {
  const context = useContext(TransactionContext);
  return (
    <div className="border-b pb-5">
      <p className="text-xl text-yellow-500 mb-3">History</p>
      <ul className="space-y-2">
        {/* if there is no transactions  */}
        {context.transactions.length === 0 && <p> No Transaction available </p>}

        {/* if there are transactions  */}
        {context.transactions.map(el => (
          <li className="flex justify-between">
            <span> {el.desc} </span>
            <span> {el.amount} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}