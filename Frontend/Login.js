import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [LoginCred, setLoginCred] = useState({email:"",password:""})
  
  const navigate = useNavigate();
  const adminSubmit=async(e)=>{
    e.preventDefault();
   const {email,password} =LoginCred;
   console.log("rahul")
    const response = await fetch(`http://localhost:5000/cpi/adminauth/loginadmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },

      body: JSON.stringify({email,password})
    });
    const json = await response.json();

    console.log(json)
    localStorage.setItem('rahul',json.admin._id);
    console.log(localStorage.getItem('rahul'))
    alert("logged in successfully")
    props.Loginhanddler();
    navigate("/contact");
    
}




const onChange=(e)=>{
    setLoginCred({...LoginCred,[e.target.name]: e.target.value})

} 
  return (
    <div className='container border border dark  my-4 w-25 p-3'>
    <form onSubmit={adminSubmit}>

        <h1 className='bg-dark text-light text-center border border-dark'>Login Page</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail12" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={onChange} name="password" class="form-control" id="Password1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login