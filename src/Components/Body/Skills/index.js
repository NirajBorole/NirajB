import React from 'react'
import './Skills.css'
function Skills() {
  return (
    <section className='skillset'>
      <div className='skill'>
        <img src='./img/html.png' alt='html logo'></img>
        <p>HTML</p>
      </div>

      <div className='skill'>
        <img src='./img/css.png' alt='css logo'></img>
        <p>CSS</p>
      </div>

      <div className='skill'>
        <img src='./img/js.png' alt='javascript logo'></img>
        <p>Javascript</p>
      </div>
      
      <div className='skill'>
        <img src='./img/nodejs.png' alt='nodejs logo'></img>
        <p>Nodejs</p>
      </div>
      
      <div className='skill'>
        <img src='./img/postgres.png' alt='postgresql logo'></img>
        <p>Postgresql</p>
      </div>
      
      <div className='skill'>
        <img src='./img/android.png' alt='android logo'></img>
        <p>Android</p>
      </div>
      
      <div className='skill'>
        <img src='./img/sqlite.png' alt='sqlite logo'></img>
        <p>Sqlite</p>
      </div>

      <div className='skill'>
        <img src='./img/figma.png' alt='figma logo'></img>
        <p>Figma</p>
      </div>
    </section>
  )
}

export default Skills