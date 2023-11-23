import React, {Component} from "react";
import picture from './Meatballs.jpg'

export class Meatballs extends Component {
    render() {
        return (
            <img src={picture} height="172" width="250px" alt="hello"/>
        )
    }
}
export default Meatballs