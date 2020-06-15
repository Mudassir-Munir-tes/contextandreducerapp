import React, { useContext } from 'react';
import number from './contextcomponent';

const Usedcontext = () => {
    
    let numbervalue = useContext(number)
    
    return (
        <div>
            <h2>This is first child using Counter Context</h2>
            <h4>Counter value is: {numbervalue[0]}</h4>

            <button onClick={()=> {numbervalue[1](++numbervalue[0])}}>
                Increment Context
            </button>
        </div>
    )
}

export default Usedcontext;