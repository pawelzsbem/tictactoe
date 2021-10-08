import React from "react";
import ReactDOM from "react-dom";
import Board from './components/Board.js'

class Game extends React.Component{

    constructor(props){

        super(props);

        this.state={

            squares : Array(9).fill(null),
            nxtSymb : "X"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (index){

        

        const squares = this.state.squares;
        if (squares[index]!== null){
            return;}
        squares[index] = this.state.nxtSymb;
        this.setState({squares: squares, 
                        nxtSymb: this.state.nxtSymb === "X"? "O":"X"});


    }

    render(){
        return<>
        <Board squares={this.state.squares} handleClick={this.handleClick}></Board>
         </>
    }
}


ReactDOM.render(<Game />, document.getElementById("root"));