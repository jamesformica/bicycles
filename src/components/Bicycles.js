import React from 'react'

import bikes from '../images/bicyles'
import './Bicycles.css'

const Bicycles = () => (
  <div className="bikes">
    {bikes.map(bike => (
      <div key={bike.img} className="bike">
        <img src={bike.img} className="img" />
        <span className="tag">{bike.tag}</span>
      </div>
    ))}
  </div>
)

export default Bicycles
