import React from 'react';
import './Footer.css'; // Optional: for styling

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Bank of Flatiron. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
