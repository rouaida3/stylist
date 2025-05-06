// Work.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Select Your Job</h2>
      <ul>
        <li><Link to="/work/chef">Chef</Link></li>
        <li><Link to="/work/designer">Designer</Link></li>
        <li><Link to="/work/pharmacist">Pharmacist</Link></li>
      </ul>
    </div>
  );
}

export default Work;
