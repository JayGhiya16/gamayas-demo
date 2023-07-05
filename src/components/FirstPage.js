import React from 'react';
import '../styles/FirstPage.css';
import realestateimg1 from '../assets/real-estate-img1.webp';
import realicon1 from '../assets/real-estate-icon1.webp';
import realicon2 from '../assets/real-estate-icon2.webp';
import realicon3 from '../assets/real-estate-icon3.webp';
import realicon4 from '../assets/real-estate-icon4.webp';

// import {DomainList} from "../helper/DomainList";
// import DomainItem from '../helper/DomainItem';
import '../styles/Domain.css';
import realestatedomain from '../assets/realestatedomain.jpg';
import digitaldomain from '../assets/digitaldomain.jpg';
import ecommercedomain from '../assets/ecommercedomain.jpg';
import mobileappdomain from '../assets/mobileappdomain.jpg';
import govtdomain from '../assets/govtdomain.jpg';
import healthcaredomain from '../assets/healthcaredomain.jpg';

export default function FirstPage({data}) {
  return (
   <>
   <section id='sec2-firstComponent'>
      <div className='sec2-firstComponent-box'>
      <div id='sec2-firstComponent-box1'>
         <div id='sec2-firstComponent-box1-div1'>
           {data.h1}
         </div>
         <div id='sec2-firstComponent-box1-div2'>
           {data.h2}
         </div>
         <div id='sec2-firstComponent-box1-div3'>
           {data.h3}
         </div>

         <div className='sec2-listPage'>
            <div className='sec2-listItem'>
               <div className='sec2-item1'>{data.h4.h1.h1}</div>
               <div>
                  <img src={data.h4.h1.img} alt="" />
               </div>
               <div className="sec2-item2">{data.h4.h1.h2}</div>
            </div>


            <div className='sec2-listItem'>
               <div className='sec2-item1'>{data.h4.h2.h1}</div>
               <div>
                  <img src={data.h4.h2.img} alt="" />
               </div>
               <div className="sec2-item2">{data.h4.h2.h2}</div>
            </div>

            <div className='sec2-listItem'>
               <div className='sec2-item1'>{data.h4.h3.h1}</div>
               <div>
                  <img src={data.h4.h3.img} alt="" />
               </div>
               <div className="sec2-item2">{data.h4.h3.h2}</div>
            </div>

            <div className='sec2-listItem'>
               <div className='sec2-item1'>{data.h4.h4.h1}</div>
               <div>
                  <img src={data.h4.h4.img} alt="" />
               </div>
               <div className="sec2-item2">{data.h4.h4.h2}</div>
            </div>
         </div>
      </div>
      <div id='sec2-firstComponent-box2'>
         <img src={data.img} alt="" />
      </div>
      </div>
   </section>
   

   <section id='secondComponent'>
      <div className ='domainName'>
         Domains &amp; Industries
      </div>
      <div className='domainList'>
         <div className='domainList-div'>
            <img src={realestatedomain} alt="" />
            <div className='domainList-name'>
            Real e-State
            </div>
         </div>
         <div className='domainList-div'>
            <img src={digitaldomain} alt="" />
            <div className='domainList-name'>
               DigitalMarketingService
            </div>
         </div>
         <div className='domainList-div'>
            <img src={ecommercedomain} alt="" />
            <div className='domainList-name'>
            E commerce Industry
            </div>
         </div>

         <div className='domainList-div'>
            <img src={mobileappdomain} alt="" />
            <div className='domainList-name'>
            Mobile Apps Development
            </div>
         </div>
         <div className='domainList-div'>
            <img src={govtdomain} alt="" />
            <div className='domainList-name'>
            Government Industry
            </div>
         </div>
         <div className='domainList-div'>
            <img src={healthcaredomain} alt="" />
            <div className='domainList-name'>
            Healthcare Industry
            </div>
         </div>
         {/* {DomainList.map((domainItem,key)=>{
                return (<DomainItem key={key} image = {domainItem.image} name = {domainItem.name}/>);
            })} */}
      </div>
   </section>

   </>


  )
}

{/* <div className ='domains'>
        <h1 className="domainTitle">
            Domains & Industries</h1>
        <div className='domainList'>
            {DomainList.map((domainItem,key)=>{
                return (<DomainItem key={key} image = {domainItem.image} name = {domainItem.name}/>);
            })}
        </div>
      </div> */}



// { <div className='listPage'>
//             <div className='listItem'>
//                <p className='item'>Residential &amp; Commercial</p>
//                <Icon icon="carbon:home" />
//                <p className='item'>We have intuitive, automated, real-time, and highly secure web solutions for your residential, commercial, and industrial real estate business.</p>
//             </div>

//             <div className='listItem'>
//                <p className='item'>Loan Management</p>
//                <Icon icon="carbon:home" />
//                <p className='item'>Get easy property loan management features like calculators for your buyers to help them dream &amp; buy homes with calculated decisions.</p>
//             </div>

//             <div className='listItem'>
//                <p className='item'>Data Management</p>
//                <Icon icon="carbon:home" />
//                <p className='item'>Have any listing imported to your real-estate platform in real-time via MLS IDX integration &amp; databases provided by our real estate website design team.</p>
//             </div>

//             <div className='listItem'>
//                <p className='item'>Property Listing</p>
//                <Icon icon="carbon:home" />
//                <p className='item'>We have real estate web solutions that can help you easily update, manage &amp; modify the property, land, house, and commercial complex listings in real-time as per buyers’ or sellers’ interest.</p>
//             </div>
//          </div> }






{/* <section id="hero" style="background: url(https://www.janbaskdigitaldesign.com/assets21/webpimages/banner-ecom-webdev1.webp) no-repeat center top; background-size: cover;overflow:hidden; height:100vh;">
   <div class="hero-container container">
      <div class="row align-items-center justify-content-end">
         <div class="col-lg-8 col-12">
            <div class="slider-txtbox">
               <h1 class="slid-lead2 text-white"> Custom Ecommerce <span style="background: -webkit-linear-gradient(45deg, #ff0064, #ff3d00);-webkit-background-clip: text;     -webkit-text-fill-color: transparent;">Website Development </span>Services to 10X Your Profits </h1>
               <h2 class="slid-cont2 text-white">Our website development for ecommerce company understands your business needs and creates scalable eCommerce websites and mobile apps that boost up the conversion rate. </h2>
               <ul class="tick-white">
                  <li class="text-white">Amplifies your brand voice.</li>
                  <li class="text-white">Increase traffic &amp; conversion rate.</li>
                  <li class="text-white">Maximize your profits </li>
               </ul>
            </div>
         </div>
         <div class="col-lg-4 col-12">
            <div class="form-box">
               <form method="post" role="form" class="php-email-form swing" id="contact-form11" novalidate="novalidate">
                  <p class="slider-cont text-dark">Let’s Hear Out Your Plan!</p>
                  <div class="form-row">
                     <div class="col-lg-12 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                     </div>
                     <div class="col-lg-12 form-group">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                     </div>
                     <div class="col-lg-12 form-group">
                        <input type="text" class="form-control" name="phone" id="Phone" placeholder="Phone" data-rule="minlen:4" data-msg="Please enter at least 8 chars of Phone">
                     </div>
                     <div class="col-lg-12 form-group">
                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" style="height: 115px;"></textarea>
                     </div>
                     <input type="hidden" name="function" value="e-Commerce Web Development form - Let’s Hear Out Your Plan!">
                  </div>
                  <div class="text-center"><button onclick="ga('send', 'event', ' ecommerce web-development-services Let’s Hear Out Your Plan ', 'Submit');" type="submit">Submit</button></div>
                  <div id="msg_pop2"></div>
               </form>
            </div>
         </div>
      </div>
   </div>
</section> */}