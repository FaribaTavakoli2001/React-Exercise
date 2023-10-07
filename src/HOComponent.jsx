import React , { Component } from "react"

const whithCounter = (OldComponent) => {

    class newComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                number : 0
            }
        }
    
        ClickHandler = () => {
            this.setState (prevstate => ({
                number : prevstate.number + 1 ,
            }))
    
        }

        render(){
            return <OldComponent number={this.state.number} ClickHandler={this.ClickHandler} />
        }
    }
     return newComponent

}

export default whithCounter;