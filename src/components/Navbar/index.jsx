import React, { useState } from 'react'
import Anchor from '../Anchor'
import './styles.css'

function index() {
    const [toggleMenu, setToggleMenu] = useState(false)

    function showMenu() {
        setToggleMenu(toggleMenu => !toggleMenu)
    }

    function closeMenu() {
        setToggleMenu(toggleMenu => false)
    }

    const data = [
        {url:"/", texto:"Home"},
        {url:"/#", texto:"Cities"},
    ]

  return (
    <>
        <nav className={`menu ${toggleMenu && "mostrar"}`}> 
            {data.map((elem, index) => <Anchor key={index} url={elem.url} texto={elem.texto} handlerClose={closeMenu}/>)}
            <button className='nav__btn'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg> 
                Login
            </button>
        </nav>

        <button onClick={()=> showMenu()} className='nav__btnMenu'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
    </>
  )
}

export default index