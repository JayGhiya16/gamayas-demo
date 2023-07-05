import React from 'react'
import '../styles/Footer.css';
import gamay from '../assets/gamay.png'
const Footer = () => {
  return (
    <>
    <div className='Main'>
      <div className='details'>
        <div className='companyDetails'>
          <div className='logo'>
            <img src={gamay} alt="" />
          </div>
          <div className='address'>
            <p>GAMAYAS Plot No: 1,AP colony, Mallapur, Hyderabad PIN:-500076. <strong>Phone</strong>: +917801073175, +917801073176</p>
          </div>
        </div>

        {/* company */}
        <div className='company'>
          <h4 style={{color: "white"}}>Company</h4>
          <ul className='ULlist'>
            <li className='list'>
              <span>&gt;</span> <a href="/">Home</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">About Us</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Portfolio</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
        {/* Our Focus */}
        <div className='company'>
          <h4>Our Focus Area</h4>
          <ul className='ULlist'>
            <li className='list'>
              <span>&gt;</span> <a href="/">Web Design</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Web Development</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Mobile Apps Development</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Digital Marketing</a>
            </li>
          </ul>
        </div>
        
        <div className='company'>
          <h4>Industries We Serve</h4>
          <ul className='ULlist'>
            <li className='list'>
              <span>&gt;</span> <a href="/">IT Industry</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Healthcare Industry</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Manufacturing Industry</a>
            </li>
            <li className='list'>
              <span>&gt;</span> <a href="/">Financial Services Industry</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
      <div className='copyright'>
        <p className='content1'>&#169; All Rights Reserved | Powered By</p>
        <p className='content2'>&#160;MK DIGITALMARE PVT LTD</p>
      </div>
    </>
  )
}

export default Footer