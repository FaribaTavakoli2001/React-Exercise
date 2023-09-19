import React , {Component} from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
   background-color : blue;
`
class Hi extends Component {
    render(){

        return(
            <>
            <MyDiv>
                <h3>Hello world</h3>
            </MyDiv>
            </>
        )
    }

}

const Hello = () => {
    const version = 18 ;
    return (
        <MyDiv>
            <h2>Wellcome to React {version}</h2>
        </MyDiv>
    )
}

export  {Hi , Hello} ;