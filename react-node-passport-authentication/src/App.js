import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/login" component = {Login}/>
      </div>
    </Router>
  );
}

export default App;
