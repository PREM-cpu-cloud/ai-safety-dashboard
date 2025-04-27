import React from 'react';
import { Incident } from '../App';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <p>No incidents found.</p>
      ) : (
        incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
};

export default IncidentList;
