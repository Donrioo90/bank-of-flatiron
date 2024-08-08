# Getting Started with Create React App

Overview
It's an app that allows users to add, filter, sort, and delete transactions. The application fetches data from a local JSON server and provides a user-friendly interface for managing transactions.

Features
A table of all transactions.
Add new transactions via a form.
Filter transactions using a search bar.
Sort transactions alphabetically by category or description.
Delete transactions.
Project Setup
Prerequisites
Node.js
npm (Node Package Manager)
JSON Server

Installation
 1. Clone the repository
 2. Install dependencies
 3. Set up the JSON Server: Create a db.json file in the project root with the following content
 4. Start the React application

 Project Structure
 ├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── AddTransactionForm.js
│   │   ├── NavBar.js
│   │   ├── TransactionTable.js
│   │   └── SearchBar.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── db.json
├── package.json
└── README.md

Components
NavBar.js: Contains the navigation bar.
AddTransactionForm.js: A form for adding new transactions.
TransactionTable.js: Displays the list of transactions in a table format.
SearchBar.js: Provides a search input to filter transactions.
Footer.js: For the footer.
Footer.css: Styling the footer
Navbar.cc: Styling the Nav bar

Styling
Custom styling for the components is provided in the corresponding CSS files.

Usage
Viewing Transactions: To add a new transaction.
Filtering Transactions: Use the search bar to filter transactions by description.
Sorting Transactions: Click the "Delete" button in the Action column to remove a transaction from the table.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed.

Acknowledgements
This project is part of a coding exercise for learning React. Special thanks to the Flatiron School for the guidance and resources

