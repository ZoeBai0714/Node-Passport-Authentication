import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Welcome from './Components/Welcome';

class App extends React.Component{
  state = {
    flashMsg:"",
    loggedIn:false
  }

  handleFlashMsg = (msg) =>{
     this.setState({
       flashMsg:msg
     })
  }

  // handleLogin = () =>{
  //   this.setState({
  //     loggedIn:true
  //   })
  // }

  render(){
      return (
      <Router>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/welcome" component = {Welcome}/>
          <Route exact path = "/users/register" render = {() => <Register flashMsg = {(msg)=> this.handleFlashMsg(msg)}/>}/>
          <Route exact path = "/users/login" render = {() =><Login flashMsg = {this.state.flashMsg}/>}/>
      </Router>
    ); 
  }
}

export default App;
