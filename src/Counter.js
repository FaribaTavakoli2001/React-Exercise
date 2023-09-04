import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number : 0,
        }

    }

    upOne = () => {
        // this.setState ({
        //     number : this.state.number + 1,
        // })
        this.setState((prevState) => ({
            number : prevState.number + 1,
        }))
    }


    upThree = () => {
        // this.upOne ;
    }

    render() {
        const {number} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.upOne} >UP ONE</button>
            </div>
        );
    }
}

export default Counter;