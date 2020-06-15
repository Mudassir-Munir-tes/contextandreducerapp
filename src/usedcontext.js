import React, { useContext } from 'react';
import number from './contextcomponent';
import './App.css';

const Usedcontext = () => {
    
    let numbervalue = useContext(number)
    
    return (
        <div className="App-header">
            <h2>This is first child using Counter Context</h2>
            <h4>Counter value is: {numbervalue[0]}</h4>

            <button style={{padding: "20px",color: "white",backgroundColor:"red"}}
            onClick={()=> {numbervalue[1](++numbervalue[0])}}>
                Increment Context
            </button><br></br>

            <button style={{padding: "20px",color: "white",backgroundColor:"red"}}
            onClick={()=> {numbervalue[1](--numbervalue[0])}}>
                Decrement Context
            </button>
        </div>
    )
}

export default Usedcontext;