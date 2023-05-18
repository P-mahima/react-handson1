// import logo from './logo.svg';
import React from 'react';
import './App.css';
import FunComp from './FunComp';
import ClassComp from './ClassComp';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      functionClick: false,
      classClick: false

    }
  }
  
  render() {
    console.log("hello")
    return(
      <div className="App">
      <h1>Styling using Functional and class Component</h1>
    
    
      <button className='btn1' onClick={()=>this.setState({functionClick: !this.state.functionClick})}> To see styling class Component</button>

      <button className='btn2' onClick={()=>this.setState({classClick: !this.state.classClick})}> To see styling Functional Component</button>


    {this.state.functionClick && <ClassComp/>}
    {this.state.classClick && <FunComp/>}

  
    </div>
  )
}
}

export default App


