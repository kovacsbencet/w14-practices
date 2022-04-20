import React, { Component } from 'react'

class ButtonWithClass extends Component {
  constructor(){
    super()
    this.state = {
        key1: "This is the default state of a class component.",
        key2: 1
    }
  }

    render(){
        return(
            <>
                <div>{this.state.key1}</div>
                <button onClick={() =>this.setState({key1: "This is it."})}>ButtonsWithClass</button>
                <div>{this.state.key2}</div>
                <button onClick={() =>this.setState({key2: 17})}>ButtonsWithClass</button>
            </>
        )
    }
}

export default ButtonWithClass