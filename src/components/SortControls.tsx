import React from 'react';

interface SortControlsProps {
  sortOrder: 'newest' | 'oldest';
  setSortOrder: (order: 'newest' | 'oldest') => void;
}

const SortControls: React.FC<SortControlsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="sort-controls">
      <label>Sort by Date:</label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default SortControls;
