import React from 'react'
import './styles.css'
import imgHero from '../../../public/image_hero.jpg'

function index() {
  return (
    <div className='hero'>
        <article className='hero__article'>
            <h2 className='hero__article__title'>Find the perfect destination</h2>
            <p className='hero__article__text'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className='hero__button'>View More</button>
        </article>
        <div className='hero__container__image'>
            <img src={imgHero} className='hero__image' alt="imágen de muestra" />
        </div>
    </div>
  )
}

export default index