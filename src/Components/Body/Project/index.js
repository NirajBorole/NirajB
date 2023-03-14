import React from 'react'
import './projects.css'

function Projects() {
  return (
    <section className='project-container'>
      <div class="box">
        <img src='https://loremflickr.com/320/240' alt='fisrt project preview'></img>
        <p>
        Hey, don't cut me off like that. I want to speak my mind and don't appreciate being put into a box.
        </p>
      </div>
      <div class="box">
        <img src='https://loremflickr.com/320/240' alt='second project preview'></img>
        <p>
          Hey, don't cut me off like that. I want to speak my mind and don't appreciate being put into a box.
        </p>
      </div>
      <div class="box">
        <img src='https://loremflickr.com/320/240' alt='third project preview'></img>
        <p>
          Hey, don't cut me off like that. I want to speak my mind and don't appreciate being put into a box.
        </p>
      </div>
    </section>
  )
}

export default Projects