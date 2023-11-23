import React, {Component} from "react";
import picture from './lion.jpg'

export class Lion extends Component {
    render() {
        return (
            <img src={picture} width="200px" alt="hello"/>
        )
    }
}
export default Lion