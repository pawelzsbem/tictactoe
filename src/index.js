import React from "react";
import ReactDOM from "react-dom";
import Board from './components/Board.js'
import './index.css'

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


    solving (index, whom){

        const squares = this.state.squares;
        if (squares[index]!== null)
            return;

        var meter = 0;
        squares[index] = this.state.nxtSymb;

        for (var i = 0; i < squares.length; i ++)
            meter |= squares[i] === whom ? (2 ** i): 0;

        const strategies = [7, 56, 448, 73, 146, 292, 273, 84];

        for (var s in strategies){
            if ((strategies[s] & meter) === strategies[s]){
                this.setState({ who: whom});

                let strat = strategies[s];

                for(var j = 0; strat !== 1; strat /= 2, j++ ){
                    ;
                    //finding indices of winning strategy


                }
                
                return;
            }
        }

        this.setState({squares: squares, 
                      nxtSymb: this.state.nxtSymb === "X"? "O":"X"});        

         }

    handleClick (index){

        if (this.state.who != 'none')
            return;
  
        this.solving(index, "X");
        this.solving(index, "O");

    }

    render(){
        return<>
        <Board squares={this.state.squares} handleClick={this.handleClick}></Board>
        <div id="who">
            <p>
            Wins <b> {this.state.who} </b>
            </p>
        </div>
         </>
    }
}


ReactDOM.render(<Game />, document.getElementById("root"));