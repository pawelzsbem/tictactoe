import React from "react";
import ReactDOM from "react-dom";



class Square extends React.Component{


    constructor(props){

        super(props);
    }

    render(){
        return(<button onClick={() => {this.props.handleSquare()}}>{this.props.value}</button>)
    }



}


export default Square;