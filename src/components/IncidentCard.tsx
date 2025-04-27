import React, { useState } from 'react';
import { Incident } from '../App';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-card">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleDateString()}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && <p className="description">{incident.description}</p>}
    </div>
  );
};

export default IncidentCard;
