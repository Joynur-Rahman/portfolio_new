import React from 'react'
import './About.css'
import profile_img from '../../assets/jay.jpg'
const About = () => {
  return (
    <div id='about' className='About'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nulla eaque deleniti? Possimus ad accusamus vitae sapiente, cum necessitatibus officia voluptas harum ipsum quo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus delectus nihil, repudiandae aliquid id rerum nemo corrupti at! Eum, rerum!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>REACT</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>NEXT JS</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>IoT</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievemnet">
                <h1>01</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievemnet">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About