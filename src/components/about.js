import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './about.css';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutData = () => {
  const countersRef = useRef([]);
  const [abouts, setAbouts] = useState([]);
  const [number, setNumber] = useState({
    carriersnumber: 0,
    brokersnumber: 0,
    loadsnumber: 0,
  });

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/aboutinfo');
        setAbouts(response.data);

        const aboutData = response.data[0];
        if (aboutData) {
          setNumber({
            carriersnumber: aboutData.carriersnumber,
            brokersnumber: aboutData.brokersnumber,
            loadsnumber: aboutData.loadsnumber,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const animateCounter = (element, target) => {
    let count = 0;
    const speed = target / 80;

    const updateCount = () => {
      count += speed;
      if (count <= target) {
        element.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = (target || 0) + '+';
      }
    };

    updateCount();
  };
  useEffect(() => {
    if (
      number.carriersnumber !== 0 ||
      number.brokersnumber !== 0 ||
      number.loadsnumber !== 0
    ) {
    
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute("data-target"), 10);
            animateCounter(counter, target); 
            observer.unobserve(counter); 
          }
        });
      };
  
      
      const observerOptions = {
        root: null, 
        threshold: 0.1, 
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      countersRef.current.forEach((counter) => {
        if (counter) {
          observer.observe(counter);
        }
      });
  
      return () => {
        observer.disconnect();
      };
    }
  }, [number]); 
  

  const { titlefirst = "", titlesecond = "", text = "", 
          carrierstext = "", brokerstext = "", loadstext = "" } =
          abouts.length > 0 ? abouts[0] : {};

  return (
    <section className="container py-5" id="About Us">
      <div className="text-center mb-4">
        <h2 className="text text-center elements" data-aos="flip-up">{titlefirst} <span> {titlesecond}</span></h2>
        <p className="lead mt-3" data-aos="flip-up">
          {text}
        </p>
      </div>

      <div className="row justify-content-center mt-5 elements" style={{ marginLeft: "10px" }}>
        <div className="col elements m mt-5">
          <div className="style_moving_info_wrapper__XSE4k">
            <div className="style_moving_info_center__yTejj" data-aos="fade-right">
              <div>
                <span
                  className="style_moving_info_number__vI2ou"
                  data-target={number.carriersnumber}
                  ref={(el) => countersRef.current[0] = el}
                >
                  {number.carriersnumber} 
                </span>
              </div>
              <h4 className="style_moving_info_reason__IccwQ">{carrierstext}</h4>
            </div>
          </div>
        </div>

        <div className="col elements m mt-5">
          <div className="style_moving_info_center__yTejj" data-aos="fade-right">
            <div>
              <span
                className="style_moving_info_number__vI2ou"
                style={{marginLeft:"4px"}}
                data-target={number.brokersnumber}
                ref={(el) => countersRef.current[1] = el}
              >
                {number.brokersnumber} 
              </span>
            </div>
            <h4 className="style_moving_info_reason__IccwQ">{brokerstext}</h4>
          </div>
        </div>

        <div className="col elements m mt-5">
          <div className="style_moving_info_center__yTejj" data-aos="fade-right">
            <div>
              <span
                className="style_moving_info_number__vI2ou"
                data-target={number.loadsnumber}
                ref={(el) => countersRef.current[2] = el}
              >
                {number.loadsnumber} 
              </span>
            </div>
            <h4 className="style_moving_info_reason__IccwQ">{loadstext}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutData;
