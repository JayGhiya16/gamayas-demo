import React from 'react'
import digitaldomain from '../assets/digitaldomain.jpg';
import '../styles/MidScale.css';
import secure from '../assets/secure-icon1.png';
import smallMediumScaleBusiness from '../assets/smallMediumScaleBusiness.png';
export default function MidScale({data}) {
  return (
    <>    
    <section id='firstComponent'>
        <div id='firstComponent-section'>
            <div id='firstComponent-section-heading'>{data.section4.h1}</div>
            <div id='firstComponent-section-content1'>{data.section4.h2}</div>
            <div id='firstComponent-section-content2'>{data.section4.h3}</div>

            <div id='firstComponent-twoSection'>
                <div className='individualSection'>
                    <div className='individualSection-upperbox' style={{background: `linear-gradient(to right,#00154cc4 50%,#8c00008f) 0 0/cover,url(https://www.janbaskdigitaldesign.com/assets21/webpimages/office-large.webp) center/cover`}}>
                        <div className='firstHalfIndividualSection'>
                            <img src={data.section4.h4.h1.img} alt=">Small or Midsize Real Estate Business" />
                            <div className='firstHalfIndividualSection-box1'>{data.section4.h4.h1.h1}</div>
                            <div className='firstHalfIndividualSection-box2'>{data.section4.h4.h1.h2}</div>
                        </div>
                    </div>
                    <div className='individualSection-lowerbox'>
                        <ul>
                            <li>
                            {data.section4.h4.h1.h3}
                            </li>
                            <li>
                            {data.section4.h4.h1.h4}
                            </li>
                            <li>
                            {data.section4.h4.h1.h5}
                            </li>
                        </ul>
                    </div>
                    
                </div>

                <div className='individualSection'>
                    <div className='individualSection-upperbox' style={{background: `linear-gradient(to right,#00154cc4 50%,#8c00008f) 0 0/cover,url(https://www.janbaskdigitaldesign.com/assets21/webpimages/office-with.webp) center/cover`}}>
                        <div className='firstHalfIndividualSection'>
                            <img src={smallMediumScaleBusiness} alt=">Small or Midsize Real Estate Business" />
                            <div className='firstHalfIndividualSection-box1'>{data.section4.h4.h2.h1}</div>
                            <div className='firstHalfIndividualSection-box2'>{data.section4.h4.h2.h2}</div>
                        </div>
                    </div>
                    <div className='individualSection-lowerbox'>
                        <ul>
                            <li>
                            {data.section4.h4.h2.h3}
                            </li>
                            <li>
                            {data.section4.h4.h2.h4}
                            </li>
                            <li>
                            {data.section4.h4.h2.h5}
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>

    <section id='secComponent'>
        <div className='secFirst'>
         <div>{data.section5.h1}</div>
        </div>

        <div className='secSecond'>
            <div className='secSecondDiv'>
               <div className='secSecondDiv-box1'>{data.section5.h2}</div>
              
               <div className='secSecondDiv-box2'>
                <div className='secSecondDiv-box2-box1'>
                  <img src={data.section5.h3.h1.img} alt="" />
                </div>
                <div className='secSecondDiv-box2-box2'>
                    <div>{data.section5.h3.h1.h1}</div>
                    <div>{data.section5.h3.h1.h2}</div>
                </div>
               </div>

               <div className='secSecondDiv-box2'>
                <div className='secSecondDiv-box2-box1'>
                  <img src={data.section5.h3.h2.img} alt="" />
                </div>
                <div className='secSecondDiv-box2-box2'>
                    <div>{data.section5.h3.h2.h1}</div>
                    <div>{data.section5.h3.h2.h2}</div>
                </div>
               </div>

               <div className='secSecondDiv-box2'>
                <div className='secSecondDiv-box2-box1'>
                  <img src={data.section5.h3.h3.img} alt="" />
                </div>
                <div className='secSecondDiv-box2-box2'>
                    <div>{data.section5.h3.h3.h1}</div>
                    <div>{data.section5.h3.h3.h2}</div>
                </div>
               </div>
               
               <div className='secSecondDiv-box3'>{data.section5.h3.h4.h1}</div>
            </div>
        </div>
    </section>



    <section id='agentAbout'>
        <div id='agentAboutContainer'>
            <div id='divBG'>
                <div id='divSection'>
                    <h2>{data.section6.h1}</h2>
                    <p>We Build Brands Than Just Website</p>
                    <div id='agentAboutButton-div'>
                        <p id='agentAboutButton'>Let's Work Togther</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  )
}
