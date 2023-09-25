import './App.css'
import { Component } from 'react'

interface IState {
name : string;
company : string;
}
class App extends Component<any,IState> {

  constructor(props : any){
    super(props);

    this.state  = {
      name : "Rohit",
      company:"Invimatic"
    };
  }
  render() {
    return (
    <>
      <p>Hi {this.state.name}</p>
      <button onClick={()=>{
        // this.setState({name : "Pranit"})
        this.setState((prev)=>{return {...prev , name : "Pranit"}},()=>{console.log(this.state)})
      }}>Change Name</button>
    </>
  )}
 
}

export default App

// const obj1 = {name  : "Rohit"}
// const obj3 = Object.assign({}, obj1)
//setState , In this method we pass in object which we want to shallow merge with state object. 
// state in react updates asynchronously 
// to perform any process synchronoulsy after state is updated , use callback function