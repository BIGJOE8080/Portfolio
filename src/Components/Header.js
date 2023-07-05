import React from 'react'
import "./Header.css"
import Cta from './Cta'
import Femi from "../../src/image/fem2.jpg"
import Headersocials from './Headersocials'

function Header() {
  return (
   <header>
    <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Oluwafemi Joseph</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <Cta />
        <Headersocials />
   
    <div className='me'>
        <img src={Femi} alt='me' />
    </div>

    <a href="#contact" className='scroll__down'>Scoll Down</a>
    </div>

   </header>
  )
}

export default Header