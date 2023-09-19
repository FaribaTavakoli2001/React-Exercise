import React, { Component } from "react";

class Car extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>
                        the model of my car is {this.props.model} and color is {this.props.color} {this.props.children}.
                    </h2>
                </div>
            </>
        )
    }
}


const Vehicle = (props) => {
    return (
        <h2>
            the model of my car is {props.modele} and color is {props.colore}.{props.children}.
        </h2>
    )
}


class NewCar extends Component {
    constructor() {
        super();
        this.state = {
            model: 'I20'
        }
    }
    chnageHandeler = () => {
        this.setState({
            model: '206'
        })
    }
    render() {
        return (
            <div>
                <h3>my car is old. my new Car is {this.state.model}</h3>
                <button onClick={this.chnageHandeler}>change NewCar</button>
            </div>
        )
    }
}

export { Car, Vehicle, NewCar };