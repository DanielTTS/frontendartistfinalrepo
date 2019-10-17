import React from 'react';
import './App.css';

  class App extends React.Component {
    constructor(){
      super()
      this.state ={
          artists:[]
      }
    }
    componentDidMount(){
      fetch("http://localhost:3000/artists")
      .then((res)=> res.json())
      .then((response)=>{
        console.log(response);
      });
    }
  render(){
    return (
      <div>
        Yo what's good!!!!!!
      </div>
    );
  }
}

export default App;
