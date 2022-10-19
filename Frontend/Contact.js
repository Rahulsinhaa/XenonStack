import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Contact = () => {
   
  const [credentials, setcredentials] =useState({name:"",email:"",review:""});
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
   const {name,email,review} =credentials;
    const response = await fetch(`http://localhost:5000/cpi/Contactus/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },

      body: JSON.stringify({name,email,review})
    });
    const json = await response.json();
  
    console.log(json)
      alert("alert send to the database")
    navigate("/Login");
  }

  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]: e.target.value})
}
  return (
    <div className='container border border dark  my-4 w-25 p-3' style={{transform:"transform: rotate(20deg)"}}>
         <h1 className='bg-dark text-light text-center border border-dark' >Contact page</h1>
        <form onSubmit={handleSubmit}>
 
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
      <input type="text" className="form-control" onChange={onChange}  name="name" id="name" id="exampleInputPassword"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail1" onChange={onChange} name="email" id="email"  aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>


    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Review</label>
      <input type="text" className="form-control" onChange={onChange} name="review" id="exampleInputPassword"/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Contact