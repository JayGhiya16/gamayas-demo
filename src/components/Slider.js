import React from 'react'
import wordPress from '../assets/WordPress-icon.png';
import '../styles/Slider.css';
const component1=()=> {
    return (
        <section id='sliderComponent1'>
            <div id='sliderComponent1-box'>
                <div id='sliderComponent1-box1'>Leap Towards Next with High-tech Real Estate Website Design Solutions</div>
                <div id='sliderComponent1-box2'>
                    <div>
                        <div> <img src={wordPress} alt="" /></div>
                        <div>wordPress</div>
                    </div>
                </div>
                <div id='sliderComponent1-box3'>
                    <div id='sliderComponent1-box3-div1'>
                        <div id='sliderComponent1-box3-div1-div1'>
                            WordPress Website Design For Real Estate
                        </div>
                        <div id='sliderComponent1-box3-div1-div2'>
                        We deliver exemplary looking, functional &amp; best real estate website design WordPress solutions. Our real estate websites design company gets your hands on manageable, content management systems such as WordPress with customized themes, features, plugins, and widgets. We help you with real estate website design WordPress, having:
                        </div>
                    </div>
                    <div id='sliderComponent1-box3-div2'>
                        <div>Flexible media management & plugin</div>
                        <div>Easy content & theme customization options</div>
                        <div>Fast speed for excellent load times</div>
                        <div>SEO compliance for better rankings in SERP</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Slider() {
  return (
    <div>
      <component1/>
    </div>
  )
}
