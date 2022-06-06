import React from 'react';
import './style.css';
function Message(props){
  if(props.IfLoggedIn) return <h1>Bye</h1>
 else return <h2>Welcome</h2>
  
}
function LogIn(props){
  return <button type ='button' onClick ={props.isClickFun}>{props.name}</button>
}
function LogOut(props){
  return <button type ='button' onClick ={props.isClickFun}>{props.name}</button>
}
export default class App extends React.Component{
  constructor(props){
    super(props);
  this.state={
    isLoggedIn:false
  }
  this.IfLoggedIn=this.IfLoggedIn.bind(this);
  this.IfLoggedOut=this.IfLoggedOut.bind(this);

}
IfLoggedIn(){
  this.setState({
    isLoggedIn:false
  })
}
IfLoggedOut(){
  this.setState({
    isLoggedIn:true
  })
}

  render(){
    const loggedIn = this.state.isLoggedIn;
  return (
    <div>
      <Message IfLoggedIn={loggedIn} />
      {
        loggedIn?<LogIn isClickFun={this.IfLoggedIn} name='LogIn'/>:<LogOut isClickFun={this.IfLoggedOut} name='LogOut'/>
      }
    </div>
  );
}
}
