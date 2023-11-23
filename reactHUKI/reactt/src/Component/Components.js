import React, {Component, useState,useEffect,useRef} from 'react';
import AnimalCard from './AnimalCard.js';
import data from './data.js';
import './Components.css';
import './AnimalCard.js';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function Components() {
 

  return (
    
    <div className="wrapper">
      
      
      
      {data.map(animal => (
        <AnimalCard
        foto={animal.foto}
          additional={animal.additional}
          key={animal.name}
          name={animal.name}
          Articul={animal.Articul}
          size={animal.size}
          showAdditional={showAdditional}
         
        />
      ))}
    </div>
    
  )
  


}

export default Components
