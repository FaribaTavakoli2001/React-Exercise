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
    const version = 18 ;
    return (
        <div>
            <h2>Wellcome to React {version}</h2>
        </div>
    )
}

export  {Hi , Hello} ;