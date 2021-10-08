import React from "react";
import ReactDOM from "react-dom";
import Square from './Square.js';

class Board extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        const row = Array(3).fill(null);
        const col = Array(3).fill(null);


        return (<>
            {row.map((val, i) => {return <Square value={this.props.squares[i]} handleSquareClick={()=>this.props.handleClick(i)} ></Square>})}<br/>
            {row.map((val, i) => {return <Square value={this.props.squares[i+3]} handleSquareClick={()=>this.props.handleClick(i + 3)}></Square>})}<br/>
            {row.map((val, i) => {return <Square value={this.props.squares[i+6]} handleSquareClick={()=>this.props.handleClick(i + 6)}></Square>})} 
            
        
        </>)
    }


}


export default Board;