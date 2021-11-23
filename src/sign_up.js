import React,{useState, useEffect}from 'react'

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
        e.preventDefault();
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
    };
    return (
        <div className='container'>
            <form onSubmit= {handlesubmit}>
            <h2>Sign Up</h2>
            <div className='ui divider'></div>
            <div className= 'ui form'>
                <div className = 'field'>
                    <label>Username</label>
                    <input type= 'text' name= 'Name' placeholder= 'Enter the user name' value= {Data.username} onChange= {handlechange}/>
                </div>
                <div className = 'field'>
                    <label>Email</label>
                    <input type= 'text' name= 'Email' placeholder= 'Enter the email-id' value= {Data.email} onChange= {handlechange}/>
                </div>
                <div className = 'field'>
                    <label>password</label>
                    <input type= 'text' name= 'Password' placeholder= 'Enter the password' value= {Data.password} onChange= {handlechange}/>
                </div>
                <div className = 'field'>
                    <label>confirm password</label>
                    <input type= 'text' name= 'Confirm password' placeholder= 'confirm password' value= {Data.confirm_password} onChange= {handlechange}/>
                </div>
                <button className= 'usebutton'>Sign Up</button>
            </div>
            </form>
        </div>
    )
}

export default Signup
