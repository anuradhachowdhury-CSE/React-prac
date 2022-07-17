import React from 'react'
import './Card.css'

const Card = (props) => {
    const {name,description,img,price,discount} = props.item;
  
  
return (
       
  <div className="col">
    <div className="card">
   
      <img src={img} className="card-img-top" alt="ghg"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
            {description}
        </p>
        <button type="button" className="btn btn-warning">Price:{price}</button>
        <button type="button" class="btn btn-success">off:{discount}</button>
      </div>
    </div>
  </div>

  )
}

export default Card