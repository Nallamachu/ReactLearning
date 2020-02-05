import React from "react";
import ReactDom from "react-dom";
import './App.css';

class EvenHandlingEx extends React.Component{
    constructor(){
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1(){
        console.log('button 1 clicked');
    }

    handleClick3 = () => console.log('button 3 clicked');

    render() {
        return(
            <div>
                #this.handleClick1() calls while loading the page
                <button onClick={this.handleClick1()}>Click 1</button>
                #this.handleClick1 calls while clicking on Click 2
                <button onClick={this.handleClick1}>Click 2</button>
                #this.handleClick1 calls while clicking on Click 3
                <button onClick={this.handleClick2}>Click 3</button>
                #this.handleClick1 calls while clicking on Click 3
                <button onClick={this.handleClick3}>Click 4</button>
            </div>
        );
    }
}