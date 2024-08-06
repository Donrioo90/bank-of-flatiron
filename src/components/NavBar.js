import React, { useState } from 'react';
import './NavBar.css'; // Optional: for styling

const NavBar = ({ searchTerm, setSearchTerm, addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => { //function is called when the form is submitted.
    e.preventDefault();
    addTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <nav>
      <h1>Flatiron Transactions</h1> 
      <div className="nav-content">
        <input
          type="text"
          placeholder="Search transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> 
    
        <form onSubmit={handleSubmit} className="add-transaction-form">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
