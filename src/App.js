import React from 'react';
import { Hello , Hi} from './Hi';
import Car from './Car';

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
            <Car model = 'ferarri' color ="black"/>
            <Car model = 'bugatti' color ="blue">It'z is Amazing </Car>
            </>

        
           
        )
    }
}

export default App ;