import React from 'react';
import { Hello , Hi} from './Hi';
import {Car , Vehicle , NewCar} from './Car';
import Counter from './Counter';
import ClassEvent from './ClassEvent';
import FunctionEvent from './FunctionEvent';
import Login from './Login';

// or import React , {component} from 'react';

// class App extend component
class App extends React.Component {
    constructor(){
        super();
        this.state ={
            text : 'Hi betch',
        }
    }

    sayHello = () =>{
        console.log(this.state.text)
    }

    render(){
        // const header = <h1>React Exercises</h1>
        return (
            // <react.fragment>  <react.fragment/>
            <>
            <Login />
            <br/>
            <br/>
            <br/>

            <h1>React Exercises</h1>
            <Hello />
            <Hi />
            <h2 className='myName'> Fariba Tavakoli</h2>
            <Car model = 'BMW' color ="red"/>
            <Vehicle modele = 'Queick' colore = 'wite'>That's my first Car </Vehicle>
            <Car model = 'bugatti' color ="blue">It'z is Amazing </Car>
            <NewCar />
            <Counter />
            <br />
            <FunctionEvent />
            <br />
            <ClassEvent sayHello={this.sayHello}/>
            </>

        
           
        )
    }
}

export default App ;