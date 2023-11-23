import React, {Component} from "react";
import picture from './Beef.jpg'

export class Beef extends Component {
    render() {
        return (
            <img src={picture}  height="172" width="250px" alt="hello"/>
        )
    }
}
export default Beef