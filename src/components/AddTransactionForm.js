// Importing necessary dependencies
import React, { useState } from 'react';
// Define the AddTransactionForm component, which takes a prop called `addTransaction
const AddTransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount), // Ensure amount is treated as a number
      category,
    });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>// Form element with an onSubmit event handler
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
  );
};

export default AddTransactionForm;
