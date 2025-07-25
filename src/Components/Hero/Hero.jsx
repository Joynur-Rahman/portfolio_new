import React from 'react'
import './Hero.css'
import profile_img from '../../assets/jay.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='Hero'>
        <img src={profile_img} alt="" />
        <h1>I'm <span> Joynur Rahman</span>, Frontend Developer</h1>
        <p>This is a test project for the portfolio of Joynur Rahman,CSE 6th Semester,Girijananda Chowdhury University,GHY</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='Anchor' href='#contact'>connect</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
