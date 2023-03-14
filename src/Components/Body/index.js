import React from 'react'
import About from './About'
import Projects from './Project'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'

function Body() {
  return (
    <main>
      <section id='about'>
        <About />
      </section>
      <section id='project'>
        <Projects />
      </section>
      <section id='skill'>
        <Skills />
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  )
}

export default Body