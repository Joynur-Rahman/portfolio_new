import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/react.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <div className='Navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><AnchorLink className='Anchor'  href='#home'>Home</AnchorLink></li>
            <li><AnchorLink className='Anchor' offset={50} href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='Anchor' offset={50} href='#services'>Services</AnchorLink></li>
            <li><AnchorLink className='Anchor' offset={50} href='#MyWork'>My works</AnchorLink></li>
            <li><AnchorLink className='Anchor' offset={50} href='#contact'>contact</AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar