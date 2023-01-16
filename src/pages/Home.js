import React from 'react'
import "../components/styles/Home.css"
import { Email, LinkedIn, GitHub } from '@material-ui/icons'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, my name is Thanaphone Phouamnouay</h2>
        <div className='prompt'>
          <p>As a front-end developer, I have a strong understanding of HTML, CSS, and JavaScript and have experience building responsive and intuitive user interfaces for web applications. </p>
          <a href='https://www.linkedin.com/in/thanaphone-phouamnouay-00826225b/' target='_blank' rel="noreferrer"><LinkedIn /></a>
          <a href='mailto:thanaphonepan@yahoo.com' target='_blank' rel="noreferrer"><Email /></a>
          <a href='https://github.com/ThanapawnTony' target='_blank' rel="noreferrer"><GitHub /></a>
        </div>
      </div>
      <div className='skills'>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Python, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home