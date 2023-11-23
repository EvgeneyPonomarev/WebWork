import React, {Component} from "react";
import picture from './Pilaf.jpg'

export class Pilaf extends Component {
    render() {
        return (
            <img src={picture}  height="172" width="250px" alt="hello"/>
        )
    }
}
export default Pilaf