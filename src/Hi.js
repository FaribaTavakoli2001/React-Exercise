import React , {Component} from 'react';

class Hi extends Component {
    render(){

        return(
            <>
            <div>
                <h3>Hello world</h3>
            </div>
            </>
        )
    }

}

const Hello = () => {
    return (
        <div>
            <h2>Wellcome to React</h2>
        </div>
    )
}

export  {Hi , Hello} ;