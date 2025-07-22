import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Mywork = () => {
  return (
    <div id='Mywork' className='MyWork'>
        <div className="Mywork-title">
            <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="myworrk-showmore">
            <p>Show more...</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork