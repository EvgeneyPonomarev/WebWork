import React, {Component, useState, useEffect, useRef} from 'react';
import './Components.css';

function Components() {
const [count,countf]=useState(0);

 
    const ref = useRef(0);
   
    useEffect(() => {
      ref.current++;
    });
   

  return (<div>
  <button onClick={() => countf(count + 1)}>+++++</button>
  <h1>{count}</h1>
  <div>кол-во рендеров {ref.current}</div>
  </div>);
}

export default Components;


