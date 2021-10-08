import React from "react";
import ReactDOM from "react-dom";



class Square extends React.Component{


    constructor(props){

        super(props);
    }

    render(){
        return(<button onClick={()=>this.props.handleSquareClick()}>{this.props.value}</button>)
    }



}


export default Square;