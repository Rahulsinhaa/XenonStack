import React from 'react'

import rahul from "../rahul.css"
import Card from './Card'
import image1 from "../image/WhatsApp Image 2022-10-19 at 7.44.53 PM (1).jpeg";
import image2 from "../image/WhatsApp Image 2022-10-19 at 7.44.53 PM (2).jpeg";
import image3 from "../image/WhatsApp Image 2022-10-19 at 7.44.53 PM.jpeg";
import image4 from "../image/WhatsApp Image 2022-10-19 at 7.44.54 PM (1).jpeg"; 
const Homepage = () => {
  return (
    <>
    <div className='container row' >
    <div class="container">
  <div class="row">
    <div class="col-md-3 mx-2">
   <Card image1={image1} title="samsung"/>
    </div>
    <div class="col-md-3 mx-2">
    <Card image1={image2} title="Nokia"/>
    </div>
    <div class="col-md-3 mx-3">
    <Card image1={image3} title="onplus"/>
    </div>

    <div class="col-md-3 mx-3">
    <Card image1={image4} title="redmi"/>
    </div>

    <div class="col-md-3 mx-3">
    <Card image1={image1} title="realme"/>
    </div>

    <div class="col-md-3 mx-3">
    <Card image1={image2} title="apple"/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Homepage