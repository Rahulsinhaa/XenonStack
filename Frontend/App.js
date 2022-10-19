import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './Component/Contact';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
import Navbar from './Component/Navbar.';
import Sighup from './Component/Sighup';

const App = (props) => {
  const [first, setfirst] = useState("login")
  const Loginhanddler=(e)=>{
    setfirst("logout");
    } 
  return (
    <div>
     <BrowserRouter>
     <Navbar text={first}/>
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route exact path="/login" element={<Login Loginhanddler={Loginhanddler}/>} />
      <Route exact path="/signup" element={<Sighup/>} />
      <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
