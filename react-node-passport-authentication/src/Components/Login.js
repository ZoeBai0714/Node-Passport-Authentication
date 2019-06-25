import React from 'react';
import './bootstrap.css';
const URL = "http://localhost:3000/users/login"

class Login extends React.Component{
    //before displaying any login error, reset flashMsg to empty'
    state = {
        email:"",
        password:"",
        login: false
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch(URL, {
              method: "POST",
              headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
              },
              body:JSON.stringify(this.state)
        }).then(res => res.json())
          .then(data => {console.log(data)})
    }

   render(){
       return(
           <div>
               {this.props.flashMsg.length >0? <div className = "alert alert-success" role = "alert">{this.props.flashMsg}</div> :null}
           <div className = "row mt-5">
             <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
                   <form onSubmit = {this.handleSubmit}>
                       <div className = "form-group">
                           <label>Email</label>
                           <input onChange = {this.handleChange} type = "email" name = "email" className = "form-control" placeholder = "Enter email"/>
                       </div>

                       <div className = "form-group">
                           <label>Password</label>
                           <input onChange = {this.handleChange} type = "password" name = "password" className = "form-control" placeholder = "Enter password"/>
                       </div>
                       <button type = "submit" className = "btn btn-primary btn-block">Login</button>
                   </form>
                   <p class="lead mt-4">No Account? <a href="/users/register">Register</a></p>
                </div>
             </div>
           </div>
           </div>
       )
   }
}

export default Login;