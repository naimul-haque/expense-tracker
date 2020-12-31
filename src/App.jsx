import React from 'react';

// import the components
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-10 text-gray-800 space-y-4">
        <Header />
        <Balance />
        <TransactionList />
        <TransactionForm />
      </div>
    </div>
  );
}

export default App;