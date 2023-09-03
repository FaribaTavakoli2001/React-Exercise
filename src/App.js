import React from 'react';
import { Hello , Hi} from './Hi';
import {Car , Vehicle} from './Car';

// or import React , {component} from 'react';

// class App extend component
class App extends React.Component {
    render(){
        // const header = <h1>React Exercises</h1>
        return (
            // <react.fragment>  <react.fragment/>
            <>
            <h1>React Exercises</h1>
            <Hello />
            <Hi />
            <h2 className='myName'> Fariba Tavakoli</h2>
            <Car model = 'BMW' color ="red"/>
            <Car model = 'Ferarri' color ="black"/>
            <Vehicle modle = 'Queik' colore = 'wite'>That's my first Car </Vehicle>
            <Car model = 'bugatti' color ="blue">It'z is Amazing </Car>
            </>

        
           
        )
    }
}

export default App ;