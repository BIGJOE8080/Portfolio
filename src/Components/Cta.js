import React from 'react'
import "./Cta.css"
import CV from '../../src/image/FemResume.pdf'
function Cta() {
  return (
    <div className='cta'>
        <a href={CV}download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
export default Cta