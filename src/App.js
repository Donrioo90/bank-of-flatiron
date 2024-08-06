import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css'; // Optional: for styling

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

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const sortTransactions = (key) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setTransactions(sortedTransactions);
  };

  return (
    <div>
      <NavBar />
      <h1>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm addTransaction={addTransaction} />
      <button onClick={() => sortTransactions('description')}>Sort by Description</button>
      <button onClick={() => sortTransactions('category')}>Sort by Category</button>
      <TransactionTable transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
      <Footer />
    </div>
  );
};

export default App;