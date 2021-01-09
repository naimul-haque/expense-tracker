import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet';

// import the components
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

// import context and reducer
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer';

function App() {
  const [transactions, dispatch] = useReducer(TransactionReducer, []);
  return (
    <>
      <TransactionContext.Provider value={{
          transactions, 
          dispatch,
        }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Expense Tracker App </title>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10 text-gray-800 space-y-4">
            <div className="grid grid-cols-2 gap-20">
              <div>
                <Header />
                <Balance />
                <TransactionForm />
              </div>
              <div>
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </TransactionContext.Provider>
    </>
  );
}

export default App;