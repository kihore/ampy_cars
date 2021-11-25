import React,{useState}from 'react';

function Signup() {
    const initialvalues = {username:"",email:"",password:"",confirm_password:""};
    const [Data,setData] = useState(initialvalues);

    const handlechange = (event) =>{
        const {name,value} = event.target;
        setData ({...setData, [name]: value});
    };

    return (
        <div className='container'>
            <form>
            <h2>Sign Up</h2>
            <div className='ui divider'></div>
            <div className= 'ui form'>
                <div className = 'field'>
                    <label>Username</label>
                    <input type= 'text' name= 'Name' placeholder= 'Enter the user name'
                     value= {Data.username} onChange= {handlechange}  
                     required 
                     pattern= '^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$'/>
                </div>
                
                <div className = 'field'>
                    <label>Email</label>
                    <input type= 'text' name= 'Email' placeholder= 'Enter the email-id' value= {Data.email} onChange= {handlechange} required/>
                </div>
               
                <div className = 'field'>
                    <label>password</label>
                    <input type= 'password' name= 'Password' placeholder= 'Enter the password' value= {Data.password} 
                    onChange= {handlechange}
                     required
                     pattern= '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$' />
                </div>
                
                <div className = 'field'>
                    <label>confirm password</label>
                    <input type= 'password' name= 'Confirm password' placeholder= 'confirm password' value= {Data.confirm_password} onChange= {handlechange} required  pattern= 'value.Password'/>
                </div>
                <button className= 'usebutton'>Sign Up</button>
            </div>
            </form>
        </div>
    )
}

export default Signup
