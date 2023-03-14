import React from 'react'
import './webnav.css'

function WebNav() {
  return (
    <div className='webnav'>
      <div className='wb-nav-opt'>
        <a href='#projects'>
          Project
        </a>
      </div>
      <div className='wb-nav-opt'>
        <a href='#skill'>
          Skills
        </a>
      </div>
      <div className='wb-nav-opt'>
        <a href='#contact'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default WebNav