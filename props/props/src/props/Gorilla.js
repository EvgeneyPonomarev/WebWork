import React, {Component} from "react";
import picture from './gorilla.jpg'

export class Gorilla extends Component {
    render() {
        return (
            <img src={picture} width="200px" alt="hello"/>
        )
    }
}
export default Gorilla