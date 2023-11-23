import React, {Component} from "react";
import picture from './Shaurma.jpg'

export class Shaurma extends Component {
    render() {
        return (
            <img src={picture} height="172" width="250px"  alt="hello"/>
        )
    }
}
export default Shaurma