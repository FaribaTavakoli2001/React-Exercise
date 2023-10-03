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

//پراپز و استست ها مقایسه
export default React.memo(FunctionEvent);