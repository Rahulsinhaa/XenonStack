import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
    const handlelogout=()=>{
   
       navigate("/Login");
       alert("loged out successfully")
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mx-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-white " to="/">Navbar</Link>
    <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>

        </li> 
        <li className="nav-item">
          {props.text==="login"?<Link className="nav-link text-white" to="/Login">login</Link>:<button className="btn btn-light" onClick={handlelogout}>logout</button>}
 
  

</li>
<li className="nav-item">
  <Link className="nav-link text-white" to="/signup">Signup</Link>
</li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
