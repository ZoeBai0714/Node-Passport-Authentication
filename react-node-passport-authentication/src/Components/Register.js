import React from 'react';
import './bootstrap.css'
class Register extends React.Component{
   render(){
       return(
           <div className = "row mt-5">
             <div className="col-md-6 m-auto">
               <div className="card card-body text-center">
                    <h1 className="text-center mb-3"><i className="fas fa-user-plus"></i>Register</h1>
                    <form>
                       <div className = "form-group">
                           <label for = "name">Name</label>
                           <input type = "text" name = "name" className = "form-control" placeholder = "Enter name"/>
                       </div> 

                       <div className = "form-group">
                           <label for = "email">Email</label>
                           <input type = "email" name = "email" className = "form-control" placeholder = "Enter email"/>
                       </div>

                       <div className = "form-group">
                           <label>Password</label>
                           <input type = "password" name = "password" className = "form-control" placeholder = "Enter password"/>
                       </div>

                       <div className = "form-group">
                           <label>Confirm Password</label>
                           <input type = "password" name = "confirm-password" className = "form-control" placeholder = "Enter password again"/>
                       </div>
                       <button type = "submit" className = "btn btn-primary btn-block">Submit</button>    
                    </form>
                    <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p>
                </div>
              </div>
            </div>
       )
   }
}

export default Register;