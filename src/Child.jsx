import HOComponent from './HOComponent';
import React, { Component } from 'react';

class Child extends Component {

    
    render() {
        return (
            <div>
                <button onClick={this.props.ClickHandler}>plus one</button>
                <h2>show number : {this.props.number}</h2>
                
            </div>
        );
    }
}



export default HOComponent(Child);