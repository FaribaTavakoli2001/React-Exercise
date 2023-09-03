import React  , {Component}from "react";

class Car extends Component {
    render(){
        return (
            <>
            <div>
                <h2>
                    the model of my car is {this.props.model} and color is {this.props.color}.{this.props.children} 
                </h2>
            </div>
            </>
        )
    }
}

export default Car ;