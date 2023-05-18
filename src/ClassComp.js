// import App from './App'
import {Component} from 'react';
import './App.css';

class ClassComp extends Component{
    render(){    
        return(
            <div className="hello1">
            <h1>This is created using class Component</h1>
            <h3>This is done using external CSS</h3>
            <h3 className='blue'>This is done using inline CSS</h3>
            
            </div>
        )
    }
}
export default ClassComp