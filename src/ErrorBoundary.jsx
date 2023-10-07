import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            errormessage: ''
        }
    }

    // componentDidCatch(error,info){
    //     this.setState({
    //         error:true,
    //         errormessage: error,
    //     })
    // }



    render() {
        
            if(this.state.error){
                return <p>{this.state.errormessage}</p>
            }else{
              return  this.props.children
            }
        
        
    }
}

export default ErrorBoundary;