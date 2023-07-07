import React from 'react'
import '../styles/MidScale2.css';
import realicon1 from '../assets/real-icon1.webp';
import realestateimg5 from '../assets/real-estate-img5.jpg';
import fr1 from '../assets/fr-1.webp';
import fr2 from '../assets/fr-2.webp';
import fr3 from '../assets/fr-3.webp';
import fr4 from '../assets/fr-4.webp';
import fr5 from '../assets/fr-5.webp';
import middleFrame from '../assets/middleFrame.webp';
import bulblight from '../assets/bulblight2.webp';
import sponsors1 from '../assets/sponsors1.webp';
import sponsors2 from '../assets/sponsors2.webp';
import sponsors3 from '../assets/sponsors3.webp';
import Footer from './Footer';
import md41 from '../assets/md41.jpg';
import md42 from '../assets/md42.jpg';
import md43 from '../assets/md43.jpg';
import md44 from '../assets/md44.jpg';
export default function MidScale2({data}) {
  return (
    <>

        <section id='midScale2-firstComponent'>
            <div className='midScale2-firstComponent-box1'>{data.section7.h1}</div>
            <div className='midScale2-firstComponent-box2'>{data.section7.h2}</div>

            <div className='midScale2-firstComponent-box3'>

                <div className='midScale2-firstComponent-box3-line1'>

                    <div className='midScale2-firstComponent-box3-line1-box1'>
                        <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h1.h1.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h1.h1.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'>{data.section7.h3.h1.h1.h2}</div>
                        </div>
                    </div>

                    <div className='midScale2-firstComponent-box3-line1-box2'>
                    <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h1.h2.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h1.h2.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'>{data.section7.h3.h1.h2.h2}</div>
                        </div>
                    </div>

                    <div className='midScale2-firstComponent-box3-line1-box3'>
                    <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h1.h3.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h1.h3.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'>{data.section7.h3.h1.h3.h2}</div>
                        </div>
                    </div>
                </div>


                <div className='midScale2-firstComponent-box3-line1'>

                    <div className='midScale2-firstComponent-box3-line1-box1'>
                        <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h2.h1.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h2.h1.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'>{data.section7.h3.h2.h1.h2}</div>
                        </div>
                    </div>

                    <div className='midScale2-firstComponent-box3-line1-box2'>
                    <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h2.h2.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h2.h2.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'>{data.section7.h3.h2.h2.h2}</div>
                        </div>
                    </div>

                    <div className='midScale2-firstComponent-box3-line1-box3'>
                    <div className='midScale2-firstComponent-box3-line1-box1-img'>
                            <img style={{maxWidth:'80%',maxHeight:'80%',}} src={data.section7.h3.h2.h3.img} alt="" />
                        </div>
                        <div className='midScale2-firstComponent-box3-line1-box1-div'>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div'>{data.section7.h3.h2.h3.h1}</div>
                            <div className='midScale2-firstComponent-box3-line1-box1-div-div2'  >{data.section7.h3.h2.h3.h2}</div>
                        </div>
                    </div>
                </div>


                <div className='midScale2-firstComponent-box3-line3'>
                    <img src={data.section7.img} alt="" />
                </div>
            </div>
        </section>





        {/*  Second part*/}
        <section id='midScale2-secondComponent'>
            <div className='midScale2-secondComponent-box'>
                <div id='midScale2-secondComponent-box1'>
                {data.section8.h1}
                </div>

                <div id='midScale2-secondComponent-box2'>

                    <div className='midScale2-secondComponent-box2-line1'>
                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h1.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h1.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h1.h2}</div>
                        </div>

                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h2.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h2.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h2.h2}</div>
                        </div>

                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h3.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h3.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h3.h2}</div>
                        </div>
                    </div>

                    <div className='midScale2-secondComponent-box2-line2'>
                        <img src={middleFrame} alt="" />
                    </div>
                    
                    <div className='midScale2-secondComponent-box2-line1'>
                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h4.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h4.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h4.h2}</div>
                        </div>

                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h5.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h5.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h5.h2}</div>
                        </div>

                        <div className='midScale2-secondComponent-box2-line1-box1'>
                            <div className='midScale2-secondComponent-box2-line1-box1-img'>
                                <img src={data.section8.h2.h6.img} alt="" />
                            </div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div1'>{data.section8.h2.h6.h1}</div>
                            <div className='midScale2-secondComponent-box2-line1-box1-div2'>{data.section8.h2.h6.h2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





        {/* Third Component */}
        <section id='midScale2-thirdComponent'>
            <div id='midScale2-thirdComponentDiv'>
                <div className='midScale2-thirdComponent-box1'>
                    <div className='midScale2-thirdComponent-box1-box1'>{data.section9.h0}</div>
                    <div className='midScale2-thirdComponent-box1-img'>
                        <img src={bulblight} alt="" />
                    </div>
                </div>
                <div className='midScale2-thirdComponent-box2'> 
                        <div className='midScale2-thirdComponent-box2-box1'>
                            {data.section9.h}
                        </div>
                        <div className='midScale2-thirdComponent-box2-box2'>
                            <ul className='midScale2-thirdComponent-box2-box2-ul'>
                                <li>
                                {data.section9.h1}
                                </li>
                                <li>
                                {data.section9.h2}
                                </li>
                                <li>
                                {data.section9.h3}
                                </li>
                                <li>
                                {data.section9.h4}
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>



        <section id='midScale2-forthComponent'>
            <div id='midScale2-forthComponent-box1'>
            Our Select Clientele
            </div>
            <div id='midScale2-forthComponent-box2'>
                <img className='midScale2-forthComponent-box2-img' src={sponsors1} alt="" />
                <img className='midScale2-forthComponent-box2-img' src={sponsors2} alt="" />
                <img className='midScale2-forthComponent-box2-img' src={sponsors3} alt="" />

            </div>
        </section>


        <section>
            <div className='midScale2-WDsection12'>
            <div className='midScale2-WDsection12Main' >
            <div className='midScale2-WDsection12Content'>
                <h4>Related Marketing Services</h4>
                <p>If you got the will to start an online store, we got platforms to make that happen!</p>
            </div>

            <div className='midScale2-WDsection12ContentLower'>
                <div className='midScale2-WDsection12ContentLowerBox'>
                <a href="/">
                    {/* i think backgroung images would be better option */}
                    <div className='midScale2-WDsection12ContentLowerBoxImg'>
                    <img src={md41}  alt="" />
                    </div>
                    <div className='midScale2-WDsection12ContentLowerBoxContent'>
                    <p >online marketing</p>
                    </div>
                </a>
                </div>

                <div className='midScale2-WDsection12ContentLowerBox'>
                <a href="/">
                    {/* i think backgroung images would be better option */}
                    <div className='midScale2-WDsection12ContentLowerBoxImg'>
                    <img src={md42} alt="" />
                    </div>
                    <div className='midScale2-WDsection12ContentLowerBoxContent'>
                    <p >search engne marketing</p>
                    </div>
                </a>
                </div>

                <div className='midScale2-WDsection12ContentLowerBox'>
                <a href="/">
                    {/* i think backgroung images would be better option */}
                    <div className='midScale2-WDsection12ContentLowerBoxImg'>
                    <img src={md43} alt="" />
                    </div>
                    <div className='midScale2-WDsection12ContentLowerBoxContent'>
                    <p >SEO Service</p>
                    </div>
                </a>
                </div>

                <div className='midScale2-WDsection12ContentLowerBox'>
                <a href="/">
                    {/* i think backgroung images would be better option */}
                    <div className='midScale2-WDsection12ContentLowerBoxImg'>
                    <img src={md41} alt="" />
                    </div>
                    <div className='midScale2-WDsection12ContentLowerBoxContent'>
                    <p >internet Marketing</p>
                    </div>
                </a>
                </div>
            </div>
            </div>
            </div>
        <Footer/>
        </section>

    </>
  )
}
