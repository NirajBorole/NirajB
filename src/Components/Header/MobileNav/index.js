import React from 'react'
import './mobnav.css'

function MobiNav({isOpen, setIsOpen}) {
  return (
    <div className='mobnav'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
         X 
      </div>

      <div className='mob-opt'>
        <div className='mb-nav-opt'>
          <a href='#projects'>
            Project
          </a>
        </div>
        <div className='mb-nav-opt'>
          <a href='#skill'>
            Skills
          </a>
        </div>
        <div className='mb-nav-opt'>
          <a href='#contact'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobiNav