import React from 'react';
import axios from 'axios';

function Signup() {
    function handlechange(){
        
        axios.post("http://localhost:9000",{
        Name:document.getElementsByName("Name").value,
        Email:document.getElementsByName("Email").value,
        Password:document.getElementsByName("Password").value,
        Confirm_password:document.getElementsByName("Confirm_password").value,

    })
    .then(resp=>{
        console.log(resp.data);
        document.getElementsByName("Name").value="";
        document.getElementsByName("Email").value="";
        document.getElementsByName("Password").value="";
        document.getElementsByName("Confirm_password").value="";
})
.catch(function(err){
    console.log("error");
})
    }

    return (
        <div className='container'>
            <form>
            <h2>Sign Up</h2>
            
                <div className = 'field'>
                    <label>Username</label>
                    <input type= 'text' name= 'Name' placeholder= 'Enter the user name'
                     required 
                     pattern= '^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$'/>
                </div>
                
                <div className = 'field'>
                    <label>Email</label>
                    <input type= 'text' name= 'Email' placeholder= 'Enter the email-id' 
                    required/>
                </div>
               
                <div className = 'field'>
                    <label>password</label>
                    <input type= 'password' name= 'Password' placeholder= 'Enter the password' 
                    required
                     />
                </div>
                
                <div className = 'field'>
                    <label>confirm password</label>
                    <input type= 'password' name= 'Confirm_password' placeholder= 'confirm password' value.password = confirm_password required />
                </div>
                <button onClick={handlechange} type="button">Sign Up</button>
            
            </form>
        </div>
    )
}

export default Signup
