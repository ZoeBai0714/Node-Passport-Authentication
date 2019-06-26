import React from 'react';
import { Redirect } from 'react-router-dom';
import './bootstrap.css';
const URL = "http://localhost:3000/users/login"

class Login extends React.Component{
    //before displaying any login error, reset flashMsg to empty'
    state = {
        email:"",
        password:"",
        login: false,
        msg:""
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
          .then(data => {
                if(data.msg !== "logged in"){
                    this.setState({msg: data.msg})
                }else{
                    this.setState({login:true})
                }
          })
    }

   render(){
       return(
           <div>
               {this.props.flashMsg.length >0? <div className = "alert alert-success" role = "alert">{this.props.flashMsg}</div> :null}
               {this.state.msg.length>0? <div className = "alert alert-warning alert-dismissible fade show" role = "alert"> {this.state.msg}</div> : null}
               {this.state.login? <Redirect to = '/welcome'/> : 
               <div className = "row mt-5">
                 <div className="col-md-6 m-auto">
                    <div className="card card-body">
                       <h1 className="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
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
           }
           </div>
       )
   }
}

export default Login;