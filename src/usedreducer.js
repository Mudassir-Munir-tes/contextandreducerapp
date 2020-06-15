import React, { useReducer } from 'react';
import CounterReducer from './reducercomponent';
import './App.css';
const Usedreducer = () => {

    let [state, dispatch] =  useReducer(CounterReducer, 1);

    return(
        <div className="App-header">
            <h2>This is second child using Counter Reducer</h2>

            <h3>Value of reducer state is: {state}</h3>
            <button style={{padding: "20px",color: "pink",backgroundColor:"red"}} 
            onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button><br></br>
            <button style={{padding: "20px",color: "pink",backgroundColor:"red"}} 
            onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}

export default Usedreducer;