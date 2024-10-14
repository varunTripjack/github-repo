import React from "react";
import { Component } from "react";
import Board from "./Board";


class App extends Component{
    render(){
      return (
         <div className="game" >
            <div className="game-info" > 
                 
                 <Board/>
            </div>
         </div>
      )
    }
}

export default App;
