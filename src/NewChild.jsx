import React, { Component } from 'react';
import HOCompomemt from './HOComponent'
class NewChild extends Component {
    render() {
        return (
            <div>
                <h2>show second number : {this.props.number}</h2>
                <button onClick={this.props.ClickHandler}>Up one!</button>
            </div>
        );
    }
}

export default HOCompomemt(NewChild);