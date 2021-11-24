import React,{useState, useEffect}from 'react';
import axios from 'axios';

function Signup() {
    const initialvalues = {username:"",email:"",password:"",confirm_password:""};
    const [Data,setData] = useState(initialvalues);
    const [error,seterror] = useState({});
    const [issubmit,setissubmit] = useState(false);

    const handlechange = (e) =>{
        const {name,value} = e.target;
        setData ({...setData, [name]: value});
    };
    const handlesubmit = (e) =>{
        axios.post("http://localhost:9000/get", {username:document.getElementsId("Name").value,email:document.getElementsId("Email").value,
        password:document.getElementsId("Password").value,
        confirm_password:document.getElementsId("Confirm password").value} )
        .then(resp=>{console.log(resp.Data)
        console.log()})
        .catch(function(errors){
            console.log(errors)
        })
        e.preventDefault();
        console.log(e);
        setissubmit(true);
        seterror(validate(Data));
    };
    useEffect(() =>{
        if(Object.keys(error).length === 0 && issubmit){
            console.log(Data);
        }
    },[error]);
    const validate = (value) =>{
        const errors = {};
        if(!value.username){
            errors.username= 'user name is required';
        }
        if(!value.email){
            errors.email= 'email is required';
        }
        if(!value.password){
            errors.password= 'password is required';
        }
        if(!value.confirm_password){
            errors.confirm_password= 're-enter the password';
        }
        return errors;
    };
    return (
        <div className='container'>
            <form onSubmit= {handlesubmit} id="form">
            <h2>Sign Up</h2>
            <div className='ui divider'></div>
            <div className= 'ui form'>
                <div className = 'field'>
                    <label>Username</label>
                    <input type= 'text' name= 'Name' placeholder= 'Enter the user name' value= {Data.username} onChange= {handlechange}/>
                </div>
                <p>{error.username}</p>
                <div className = 'field'>
                    <label>Email</label>
                    <input type= 'text' name= 'Email' placeholder= 'Enter the email-id' value= {Data.email} onChange= {handlechange}/>
                </div>
                <p>{error.email}</p>
                <div className = 'field'>
                    <label>password</label>
                    <input type= 'password' name= 'Password' placeholder= 'Enter the password' value= {Data.password} onChange= {handlechange}/>
                </div>
                <p>{error.password}</p>
                <div className = 'field'>
                    <label>confirm password</label>
                    <input type= 'password' name= 'Confirm password' placeholder= 'confirm password' value= {Data.confirm_password} onChange= {handlechange}/>
                </div>
                <p>{error.confirm_password}</p>
                <button className= 'usebutton'>Sign Up</button>
            </div>
            </form>
        </div>
    )
}

export default Signup
