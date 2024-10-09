import React from "react";
import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()

        this.state = {
            count : 0,
        }
    }


    render(){

        const {username} = this.props;

        return(
            <>
                <div>This Counter App is made by {username}</div>
                <div class="cnt">{this.state.count}</div>
                <button class="btn" onClick={() => {this.setState({count: this.state.count + 1})}}>Increament</button>
                
            </>
        )
    }
}

export default Counter;