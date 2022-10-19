import React from 'react'

const Card = (props) => {
  return (
    <div>
<div className='rahul  my-3 container mx-4 border border-primary'>
       <div className="card" style={{width:"20rem"}}>
  <img className="card-img-top" src={props.image1}alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">mobile telephone, also called mobile phone, portable device for connecting to a telecommunications network in order to transmit and receive voice, video, or other data</p>
    <a href="#" className="btn btn-primary">Order</a>
  </div>
</div>
    </div>
    </div>
  )
}

export default Card