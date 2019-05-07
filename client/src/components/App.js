import React, { Component } from 'react';

 
import './App.css';
// import Test from './Test';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      message:'',
      message2:{}
    }
  }
  
  callApi(){
    let url='http://127.0.0.1:8082/test/msg';
    fetch(url)
    .then(res=>res.json())
    .then(res =>this.setState({message2:res}))
    .catch(err=>console.log(err))
  };

  componentDidMount(){
    this.callApi();

  }
  render() {
    
    return (
      <div>
         
       
      </div>
    );
  }
}

export default App;
