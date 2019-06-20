import React from 'react';
import './bootstrap.css';

class Login extends React.Component{
    
   render(){
       console.log(this.props)
       return(
           <div>
               {this.props.flashMsg.length >0? <div className = "alert alert-success" role = "alert">{this.props.flashMsg}</div> :null}
           <div className = "row mt-5">
             <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
                   <form>
                       <div className = "form-group">
                           <label>Email</label>
                           <input type = "email" name = "email" className = "form-control" placeholder = "Enter email"/>
                       </div>

                       <div className = "form-group">
                           <label>Password</label>
                           <input type = "password" name = "password" className = "form-control" placeholder = "Enter password"/>
                       </div>

                       <div className = "form-group">
                           <label>Confirm Password</label>
                           <input type = "password" name = "confirm-password" className = "form-control" placeholder = "Confirm passowrd"/>
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