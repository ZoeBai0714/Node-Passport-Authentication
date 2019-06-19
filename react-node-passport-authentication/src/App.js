import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <Router>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/users/register" component = {Register}/>
        <Route exact path = "/users/login" component = {Login}/>
    </Router>
  ); 
}

export default App;
