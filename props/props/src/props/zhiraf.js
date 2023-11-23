import React, {Component} from "react";
import picture from './zhiraf.jpg'

export class Zhiraf extends Component {
    render() {
        return (
            <img src={picture} width="200px" alt="hello"/>
        )
    }
}
export default Zhiraf