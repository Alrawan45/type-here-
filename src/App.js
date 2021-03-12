import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Charset from './Charset/Charset'


class App extends Component{
  state={
    user:'type here...',
  }

HandleChange=(event)=>{
  this.setState({user:event.target.value})
}
Removeitem=(index)=>{
   const text=this.state.user.split('');
  text.splice(index,1);
  const updatedtext=text.join('');
  this.setState({user:updatedtext})
}
  render(){

     const individual = this.state.user.split('').map((one,index) => {
      return <Charset two = {one} key={index} remove={()=>this.Removeitem(index)} />
    })
    
    return(
      <div className="App">
        <input type="text" onChange={this.HandleChange} value={this.state.user}/>
        <h1>{this.state.user}</h1>
        <Validation number={this.state.user.length}/>
        {individual}
      </div>
    )
  }
}
export default App;