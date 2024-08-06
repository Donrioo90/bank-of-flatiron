import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;

