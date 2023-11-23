import React, {Component} from 'react';
import './Components.css';
import foto1 from './m1.PNG'

export class Comp1 extends Component {

render() {
  return (
    <div className="wrapper">
       <img src={foto1} width= "400" height="420"/>
    </div>
  )

  
  
}

}

export default Comp1