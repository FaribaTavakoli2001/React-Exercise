import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state ={
            isLogedin : false,
        }
    }
    render() {
        return (
            <div>
                {this.state.isLogedin ? <h1>Welcom to your Accont</h1> : <button>Login</button>}
            </div>
        );
    }
}

export default Login;