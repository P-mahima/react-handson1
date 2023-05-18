// import App from './App';
import React from 'react';
import './App.css';

function FunComp(){
    return(
        <div className="hello">
        <h1>This is created using Functional Component</h1>
        <h3>This is done using external CSS</h3>
        <h3 className='blue'>This is done using inline CSS</h3>
        
        </div>
    )
}
export default FunComp