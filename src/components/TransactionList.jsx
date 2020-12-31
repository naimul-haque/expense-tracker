import React from 'react';

export default function TransactionList() {
  return (
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
  );
}