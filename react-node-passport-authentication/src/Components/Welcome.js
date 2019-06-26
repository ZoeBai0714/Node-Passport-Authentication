import React from 'react';
import './bootstrap.css';

class Welcome extends React.Component{
   
    render(){
        return(
            <div className="col-md-6 m-auto" >
                <h1 className = "mt-4 text-center">Welcome {this.props.userName}</h1>
                  <a href = "/" className ="btn btn-primary btn-block">Logout</a>
            </div>
        )
    }
}

export default Welcome 