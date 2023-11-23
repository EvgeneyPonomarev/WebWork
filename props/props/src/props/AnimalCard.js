import React from 'react';
import './AnimalCard.css';
import './data.js';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size,
  pic
}) {
  return (
    <div>
      <div className="animal-wrapper">
        <div className="white_div">
          <h2>{name}</h2>
          <h3>{scientificName}</h3>
          <h4>{size}kg</h4>
          <div>{diet.join(', ')}</div>
          <button onClick={() => showAdditional(additional)}>More Info</button>
        <div/>
        </div>
        <div className='anumal_pic'>
          {pic}
        </div>
      </div>
    </div>
  );
}