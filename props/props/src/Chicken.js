import React, {Component} from "react";
import picture from './Chicken.jpg'

export class Chicken extends Component {
    render() {
        return (
            <img src={picture} height="172" width="250px"  alt="hello"/>
        )
    }
}
export default Chicken