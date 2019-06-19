import React from 'react';
import './bootstrap.css';

class Login extends React.Component{
   render(){
       return(
           <div className = "row mt-5">
             <div class="col-md-6 m-auto">
                <div class="card card-body">
                    <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
                   <form>
                       <div className = "form-group">
                           <label>Email</label>
                           <input type = "email" name = "email" className = "form-control" placeholder = "Enter email"/>
                       </div>
                   </form>
                </div>
             </div>
           </div>
       )
   }
}

export default Login;