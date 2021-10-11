import React from "react";
import ReactDOM from "react-dom";



class Square extends React.Component{


    constructor(props){

        super(props);
    }

    render(){
        return(<button className="tile" onClick={()=>this.props.handleSquareClick()}>{this.props.value || <div>&nbsp;</div>}</button>)
    }



}


export default Square;