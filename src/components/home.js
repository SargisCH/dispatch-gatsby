import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './home.css'

import axios from 'axios';


const HomeData = () => {
 
  const [home, setHome] = useState([]);
  const [videos,setVideos] = useState([])
  const videoRef = useRef(null); 
  const videoRefer = useRef(null);

  useEffect(() => {
    const videoElement = videoRefer.current;

    if (videoElement) {

      videoElement.muted = true;

      videoElement.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);
 
  
  useEffect(() => {
    const videoElement = videoRef.current;

    
    if (videoElement) {
      const handleLoadedMetadata = () => {
        videoElement.currentTime = 1;
      };

      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

   
      return () => {
        videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []); 
  useEffect(() => {
    const video = document.getElementById("myVideo");
    if (video) {
      video.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/homeinfo');
        setHome(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/upload-videoheader');
       
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const {titlesmall="",titlesmall1="",titlesmall2="",titlesmall3="",titlelarge="",text=""  } =
       home.length > 0 ? home[0] : {};

  const {videodispatch="",videobackground=""} =
       videos.length > 0 ? videos[0] : {};
   
       
  return (
    <section className="elements">
  <div className="video-background">     
    <video
      id="myVideo"
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline
      x5-playsinline
    >
      {videobackground && (
        <source src={videobackground} type="video/mp4" />
      )}
      Your browser does not support the video tag.
    </video>

    <div className="container-fluid-video elements shift-down" id="Home">
      <div className="row section mt-1">
        <div className="col-md-6">
          <div className="video-container">
            <video 
              className="video-responsive" 
              id="vid1" 
              ref={videoRef}
              controls
              playsInline
              webkit-playsinline
              x5-playsinline
              loop
              muted
            >
              {videodispatch && (
                <source src={videodispatch} type="video/mp4" />
              )}
              Your browser does not support the video tag.
            </video>     
          </div>
        </div>
        <div className="col-md-6 empower align-self-center elements">
          <h2>
            {titlesmall}<span className="thin"> {titlesmall1} </span>
            <br />
            <span> {titlesmall2}
              <span className="thin"> {titlesmall3} </span>
            </span>
          </h2>
          <h2>{titlelarge}</h2>
          <p className="lead">{text}</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HomeData;

