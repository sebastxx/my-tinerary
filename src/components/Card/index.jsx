import React from 'react'
import './styles.css'

function inedex({ imagen, ciudad, pais }) {
  return (
    <div className="card__item">
        <img src={imagen} alt=""/>
        <div className='card__item__textContainer'>
          <h3>{ciudad}</h3>
          <small>{pais}</small>
        </div>
    </div>
  )
}

export default inedex