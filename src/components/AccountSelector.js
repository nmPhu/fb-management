// src/components/AccountSelector.js
import React from 'react';
import './AccountSelector.css';

export const AccountSelector = ({ accounts, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {accounts.map((account) => (
        <option key={account.adAccountId} value={account.adAccountId}>
          {account.name}
        </option>
      ))}
    </select>
  );
};
