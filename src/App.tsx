
import React, { useState } from 'react';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import FilterControls from './components/FilterControls';
import SortControls from './components/SortControls';


import './App.css'; 

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: string; 
}

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const handleAddIncident = (newIncident: Incident) => {
    setIncidents(prev => [...prev, newIncident]);
  };

  const filteredIncidents = incidents
    .filter(incident => filter === 'All' || incident.severity === filter)
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
      } else {
        return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
      }
    });

  return (
    <div className="container">
      <h1>🚨 AI Safety Dashboard</h1>
      <p>Track and manage AI safety incidents effectively.</p>

      <div className="controls">
        <FilterControls filter={filter} setFilter={setFilter} />
        <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <IncidentForm onAddIncident={handleAddIncident} />

      <IncidentList incidents={filteredIncidents} />
    </div>
  );
};

export default App;
