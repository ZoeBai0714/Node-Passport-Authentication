import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

class App extends React.Component{
  state = {
    flashMsg:""
  }

  handleFlashMsg = (msg) =>{
     this.setState({
       flashMsg:msg
     })
  }

  render(){
      return (
      <Router>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/users/register" render = {() => <Register flashMsg = {(msg)=> this.handleFlashMsg(msg)}/>}/>
          <Route exact path = "/users/login" render = {() =><Login flashMsg = {this.state.flashMsg}/>}/>
      </Router>
    ); 
  }
}

export default App;
