import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/thanaphone-phouamnouay-00826225b/' target='_blank' rel="noreferrer"><LinkedIn /></a>
          <a href='mailto:thanaphonepan@yahoo.com' target='_blank' rel="noreferrer"><Email /></a>
          <a href='https://github.com/ThanapawnTony' target='_blank' rel="noreferrer"><GitHub /></a>
        </div>
        <p> &copy; 2023 Thanaphone Phouamnouay Portfolio</p>
    </div>
  )
}

export default Footer