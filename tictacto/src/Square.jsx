import React from "react";
import { Component } from "react";

class Square extends Component{
    render(){
        return (
            <button className="square" onClick = {this.props.onclick} >{this.props.value}</button>
        )
    }
}

export default Square 