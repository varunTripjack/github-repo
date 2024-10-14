import React from "react";
import { Component } from "react";
import Square from "./Square";



class Board extends Component{ 
    constructor(){
        super();

        this.state = {
            squares : Array(9).fill(null),
            isPlayerX : true,
        }

        // const newCalculateWinner = calculateWinner.bind(this);
    }

    calculateWinner = (squares) => {
        const winningSquare = [
            [0, 1, 2],
            [0, 3, 6],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [1, 4, 7],
            [3, 4, 5]
        ];

        for(let i = 0; i < winningSquare.length; i++){
            const [a, b, c] = winningSquare[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    handleClick = (index) => {
        const newsquare = this.state.squares.slice();
        if(newsquare[index] != null
             || this.calculateWinner(newsquare)
            ){
            return
        }

        newsquare[index] = this.state.isPlayerX? "x" : "o";
        this.setState({
            squares : newsquare,
            isPlayerX : !this.state.isPlayerX,
        })
    }
    
    resetGame = () => {
        this.setState({
            squares : Array(9).fill(null),
            isPlayerX : true,
        })
    }

    render(){

        let chance = '';
        let winner = this.calculateWinner(this.state.squares);
        if(winner){
            chance = `Winner is : ${winner}`;
        }else if(this.state.isPlayerX){
            chance = " Player X chance";
        }else{
            chance = " Player O chance";
        }

        return (
            <>
                <div className="chance">{chance}</div>
                <div>
                    <div className="board-row" >
                        <Square value={this.state.squares[0]}  onclick = {() => this.handleClick(0)} />
                        <Square value={this.state.squares[1]}  onclick = {() => this.handleClick(1)} />
                        <Square value={this.state.squares[2]}  onclick = {() => this.handleClick(2)} />
                    </div>
                    <div className="board-row" >
                        <Square value={this.state.squares[3]}  onclick = {() => this.handleClick(3)} />
                        <Square value={this.state.squares[4]}  onclick = {() => this.handleClick(4)} />
                        <Square value={this.state.squares[5]}  onclick = {() => this.handleClick(5)} />
                    </div>
                    <div  className="board-row">
                        <Square value={this.state.squares[6]}  onclick = {() => this.handleClick(6)} />
                        <Square value={this.state.squares[7]}  onclick = {() => this.handleClick(7)} />
                        <Square value={this.state.squares[8]}  onclick = {() => this.handleClick(8)} />
                    </div>
                </div>
                <button className="reset_btn"  onClick={this.resetGame} >Reset Game</button>
             </>
        )
    }
} 

export default Board