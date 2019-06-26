import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Welcome from './Components/Welcome';

class App extends React.Component{
  state = {
    flashMsg:"",
    loggedIn:false,
    userName: ""
  }

  handleFlashMsg = (msg) =>{
     this.setState({
       flashMsg:msg
     })
  }

  setUserName = (name) =>{
    this.setState({
      userName:name
    })

    console.log(this.state)
  }
  render(){
      return (
      <Router>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/welcome" render = {()=> <Welcome userName = {this.state.userName}/>}/>
          <Route exact path = "/users/register" render = {() => <Register flashMsg = {(msg)=> this.handleFlashMsg(msg)}/>}/>
          <Route exact path = "/users/login" render = {() =><Login flashMsg = {this.state.flashMsg} userName = {(name) => this.setUserName(name)}/>}/>
      </Router>
    ); 
  }
}

export default App;
