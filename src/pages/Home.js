import React from 'react'
import { Link } from 'react-router-dom';
import realstateImage from '../assets/realestateImage.jpg';
import  '../styles/Home.css';
import '../styles/Domain.css'
import { useParams } from "react-router-dom";

import  FirstPage  from "../components/FirstPage";
import MidScale from '../components/MidScale';
import MidScale2 from '../components/MidScale2';
import data from '../data';
import Navbar from '../components/Navbar';


const Industriesbody = {
  padding: 0,
  margin: 0,
}

export default function Home() {
  const { id } = useParams();
  const fun={ 
    backgroundImage : `url(${data[id].section1.img})`,
    backgroundRepeat:`no-repeat`,
    backgroundSize:`cover`,
    overflow: `hidden`,
    backgroundAttachment: `fixed`,
  }
  return (

    <div className='Industriesbody' style={Industriesbody}>
      <div id='homeHead'>
        <div className='industriesHome' style ={fun}>
        <Navbar/> 
          <div className='headerContainer' >
              <h1>{data[id].section1.h1}</h1>
              <p>{data[id].section1.p}</p>
              {/* <Link to='/'> */}
                  <button>Contact Us</button>
              {/* </Link> */}
          </div>
        </div>


        <FirstPage data={data[id].section2}/>
        <MidScale data={data[id]}/>
        <MidScale2 data={data[id]}/>
      </div>
    </div>
  )
}
