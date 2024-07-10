// src/components/ListCard.js
import React from 'react';

const ListCard = ({ data }) => {
  return (
    <div className="card">
      <h4>{data.company || data.service}</h4>
      <p>{data.position || ''}</p>
    </div>
  );
};

export default ListCard;
