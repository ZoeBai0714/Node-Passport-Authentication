import React from 'react';
import { Redirect } from 'react-router-dom';
import './bootstrap.css'

const URL = "http://localhost:3000/users/register"
class Register extends React.Component{
    state = {
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        redirect:false,
        errors:""
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      console.log(this.state)
      fetch(URL, {
                   method:"POST",
                   headers:{
                       'Content-Type':'application/json',
                       'Accept': 'application/json'
                   },
                   body:JSON.stringify(this.state)
                }).then(res=>res.json())
                  .then(data=>{
                      console.log(data)
                      if(data.validation == "pass"){
                          this.setState({redirect:true})
                          this.sendFlashMsg()
                      }else{
                          this.setState({errors:data.msg})
                      }
                    })     
    }

    handleChange = (e) =>{
        this.setState({
          [e.target.name]:e.target.value
      })
    }

    
    sendFlashMsg = () =>{
        this.props.flashMsg('You are now registered and can log in')
    }

   render(){ 
       return(
        <div>
            {this.state.errors.length>0? <div className ="alert alert-warning alert-dismissible fade show" role = "alert"><strong>{this.state.errors}</strong></div> : null}
            {this.state.redirect? <Redirect to = '/users/login'/> : 
            <div className = "row mt-5">
             <div className="col-md-6 m-auto">
               <div className="card card-body text-center">
                    <h1 className="text-center mb-3"><i className="fas fa-user-plus"></i>Register</h1>
                    <form onSubmit = {this.handleSubmit}>
                       <div className = "form-group">
                           <label for = "name">Name</label>
                           <input type = "text" name = "name" className = "form-control" placeholder = "Enter name" onChange = {this.handleChange}/>
                       </div> 

                       <div className = "form-group">
                           <label for = "email">Email</label>
                           <input type = "email" name = "email" className = "form-control" placeholder = "Enter email" onChange = {this.handleChange}/>
                       </div>

                       <div className = "form-group">
                           <label>Password</label>
                           <input type = "password" name = "password" className = "form-control" placeholder = "Enter password" onChange = {this.handleChange}/>
                       </div>

                       <div className = "form-group">
                           <label>Confirm Password</label>
                           <input type = "password" name = "confirmPassword" className = "form-control" placeholder = "Enter password again" onChange = {this.handleChange}/>
                       </div>
                       <button type = "submit" className = "btn btn-primary btn-block">Submit</button>    
                    </form>
                    <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p>
                </div>
              </div>
            </div>}
           
        </div>
       )
   }
}

export default Register;