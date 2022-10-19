import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Signup() {
  const [credentials, setcredentials] =useState({name:"",email:"",password:"",cpassword:""});
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
   const {name,email,password} =credentials;
   console.log("rahul")
    const response = await fetch(`http://localhost:5000/cpi/adminauth/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },

      body: JSON.stringify({name,email,password})
    });
    const json = await response.json();
  
    console.log(json)

    navigate("/Login");
  }

  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]: e.target.value})

}
  return(

<div className='container border border dark  my-4 w-25 p-3'>

<h1 className='bg-dark text-light text-center border-dark border border-5'>Sighup page</h1>
   
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={onChange}  name="name" id="name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  onChange={onChange} name="password" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>

  )
}

export default Signup
