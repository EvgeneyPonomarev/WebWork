import React, {Component} from "react";
import picture from './zebra.jpg'

export class Zebra extends Component {
    render() {
        return (
            <img src={picture} width="200px" alt="hello"/>
        )
    }
}
export default Zebra