import React from 'react';
import './FacebookPagesSelect.css';

const FacebookPagesSelect = ({ pages, onSelect }) => {
  return (
    <div className="facebook-page-select">
      <label htmlFor="page-select">Choose a page:</label>
      <select id="page-select" onChange={(e) => onSelect(e.target.value)}>
        {pages.map((page) => (
          <option key={page.id} value={page.id}>
            {page.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FacebookPagesSelect;
