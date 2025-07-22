import React from 'react'
import './Services.css'
import Services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='Services'>
        <div className="Services-title">
           <h1>My Services</h1>
        </div>
        <div className="Services-container">
            {Services_data.map((service,index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services