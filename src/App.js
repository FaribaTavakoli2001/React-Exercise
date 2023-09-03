import React from 'react';
import { Hello , Hi} from './Hi';

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
        
            </>
        )
    }
}

export default App ;