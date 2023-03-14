import React, { useState } from 'react'
import WebNav from './WebNav';
import './Header.css';
import MobiNav from './MobileNav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className='header-style'>
      <div className='logo-img'>
        NirajB
      </div>
      <div className='menu'>
        <div className='web-nav'>
          <WebNav />
        </div>
        <div className='mob-nav'>
            
            <div onClick={()=>setIsOpen(!isOpen)}>
              <img src='/img/right_menu.svg' alt='menu box'> 
              </img>
            </div>
          
          {isOpen && <MobiNav isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header