import React from 'react';

export default function Balance() {
  return (
    <>
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
    </>
  );
}