import React, { Component } from 'react';

class ClassEvent extends Component {
    constructor(){
        super();
        this.state = {
            prg : 'text1'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState ({
            prg: 'text 2'
        })
        
    }
    render() {


        return (
            <div>
                <button onClick={this.clickHandler}>class click</button>
                <p>{this.state.prg}</p>
            </div>
        );
    }
}

export default ClassEvent;