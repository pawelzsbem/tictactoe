import React from "react";
import ReactDOM from "react-dom";
import Square from './Square.js';

class Board extends React.Component{

    constructor(props){

        super(props);
    }

    render(){


        return this.props.squares.map((val, i) => {return (<div className="tile" key={i}>
            <Square value={this.props.squares[i]} handleSquareClick={()=>this.props.handleClick(i)}></Square>
            {(i+1)%3 === 0 ? <br/> : <></>}
        </div>)});

    }


}


export default Board;