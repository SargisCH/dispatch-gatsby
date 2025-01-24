import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './truckStop.css'


const TruckStopData = () => {
    const [truckstop,setTruckStop] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/truckStop');
            setTruckStop(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      
      document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.logo-img');
        images.forEach((img) => {
            img.onload = () => {
                img.style.visibility = 'visible';
            };
            img.onerror = () => {
                console.error('Failed to load image:', img.src);
            };
        });
    });
    

      const {picture1="",picture2="",picture3="",picture4="",picture5="",picture6="",picture7="",picture8="",picture9="",picture10="", }=
      truckstop.length > 0 ? truckstop[0] : {};

     
      
  return (
   
<section class="logo-list py-5 bg-light mt-3">
  <div class="container text-center">
 
    <div class="logo-slider-wrapper mt-5">
      <div class="logo-slider">
           
        <img src={picture1} alt="Logo 1" class="logo-img" style={{height:"80px"}} />
        <img src={picture2} alt="Logo 2" class="logo-img" style={{height:"80px"}}/>
        <img src={picture3} alt="Logo 3" class="logo-img" style={{height:"60px"}}/>
        <img src={picture4} alt="Logo 4" class="logo-img" style={{height:"80px"}}/>
        <img src={picture5} alt="Logo 5" class="logo-img" style={{height:"80px"}}/>
        <img src={picture6} alt="Logo 6" class="logo-img" style={{height:"60px"}}/>
        <img src={picture7} alt="Logo 7" class="logo-img" style={{height:"80px"}}/>
        <img src={picture8} alt="Logo 8" class="logo-img"/>
        <img src={picture9} alt="Logo 9" class="logo-img" style={{height:"60px"}}/>
        <img src={picture10} alt="Logo 10" class="logo-img" style={{height:"80px"}}/>

        <img src={picture1} alt="Logo 1" class="logo-img" style={{height:"80px"}} />
        <img src={picture2} alt="Logo 2" class="logo-img" style={{height:"80px"}}/>
        <img src={picture3} alt="Logo 3" class="logo-img" style={{height:"60px"}}/>
        <img src={picture4} alt="Logo 4" class="logo-img" style={{height:"80px"}}/>
        <img src={picture5} alt="Logo 5" class="logo-img" style={{height:"80px"}}/>
        <img src={picture6} alt="Logo 6" class="logo-img" style={{height:"60px"}}/>
        <img src={picture7} alt="Logo 7" class="logo-img" style={{height:"80px"}}/>
        <img src={picture8} alt="Logo 8" class="logo-img"/>
        <img src={picture9} alt="Logo 9" class="logo-img" style={{height:"60px"}}/>
        <img src={picture10} alt="Logo 10" class="logo-img" style={{height:"80px"}}/>

        
      </div>
    </div>
  </div>
</section>



  );
};

export default TruckStopData;

