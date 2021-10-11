import React from "react";
import ReactDOM from "react-dom";
import Board from './components/Board.js'

class Game extends React.Component{

    constructor(props){

        super(props);

        this.state={

            squares : Array(9).fill(null),
            nxtSymb : "X",
            who: "none"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (index){

        if (this.state.who != 'none')
            return;

        const squares = this.state.squares;
        if (squares[index]!== null){
            return;}

        var x = 0;
        var o = 0;

        



        
        squares[index] = this.state.nxtSymb;

        var xm = 0;
        var om = 0;

        for (var i = 0; i < squares.length; i ++){




            xm |= squares[i] === "X"? (2 ** i): 0;
            om |= squares[i] === "O"? (2 ** i): 0;

        }

        console.log(`xmeter ${xm}, ometer ${om}`);

        const strategies = [7, 56, 448, 73, 146, 292, 273, 84];

        for (var s in strategies){
            if ((strategies[s] & xm) === strategies[s]){
                this.setState({ who: "X"});
                
                return;
            }
        }

        for (var s in strategies){
            if ((strategies[s] & om) === strategies[s]){
                this.setState({ who: "O"});
                
                return;
            }
        }


        this.setState({squares: squares, 
                        nxtSymb: this.state.nxtSymb === "X"? "O":"X"});


    }

    render(){
        return<>
        <Board squares={this.state.squares} handleClick={this.handleClick}></Board>

        <div>Wins {this.state.who}</div>

         </>
    }
}


ReactDOM.render(<Game />, document.getElementById("root"));