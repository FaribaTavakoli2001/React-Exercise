import React from 'react';

const FunctionEvent = () => {

    const ClickHandler = () => {
        alert('functional click')

    }

    return (
        <div>
            <button onClick={ClickHandler}> func click</button>
            
        </div>
    );
};

export default FunctionEvent;