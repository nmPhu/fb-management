// src/components/AccountForm.js
import React, { useState } from 'react';
import axios from 'axios';

import './AccountForm.css';

export const AccountForm = () => {
  const [name, setName] = useState('');
  const [adAccountId, setAdAccountId] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace with your server's endpoint to save the account information
      const response = await axios.post('/api/saveAccount', {
        name,
        adAccountId,
        token,
      });
      alert('Account information saved successfully!');
    } catch (error) {
      alert('Failed to save account information.');
      console.error('Error saving account:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Ad Account ID:
        <input type="text" value={adAccountId} onChange={(e) => setAdAccountId(e.target.value)} />
      </label>
      <label>
        Token:
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      </label>
      <button type="submit">Save Account</button>
    </form>
  );
};
