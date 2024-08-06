// TransactionTable.js
import React from 'react';
import './TransactionTable.css'; // Import the CSS file

const TransactionTable = ({ transactions, deleteTransaction }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => ( //maps over the transactions array and creates a new tr element for each transaction.
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
//TransactionTable component is exported as the default export, making it available for import in other files.
export default TransactionTable;

