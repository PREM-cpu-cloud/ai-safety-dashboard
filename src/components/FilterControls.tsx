import React from 'react';

interface FilterControlsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter-controls">
      <label>Filter by Severity:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default FilterControls;
