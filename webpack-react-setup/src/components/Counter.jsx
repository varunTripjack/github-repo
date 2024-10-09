import React from 'react';
import { Component } from 'react';


class Counter extends Component{
    constructor(){
        super()

        this.state = {
            count: 0,
        }
    }
    
    
    render(){
        return (
            <>
                <div>This is a counter app made using class component</div>
                <h2>{this.state.count}</h2>
                <button className="btn" onClick={() => this.setState({count: this.state.count + 1})}>Increament</button>
            </>
        )
    }
}

export default Counter


