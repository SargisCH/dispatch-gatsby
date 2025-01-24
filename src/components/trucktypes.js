import React, {useEffect,useState  } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './trucktypes.css'
import AOS from "aos";
import "aos/dist/aos.css";



const TruckData = () => {
    const [truckTypes,SetTruckTypes] =useState([])
    const [isReadMore, setIsReadMore] = useState(true);
    const [aosInitialized, setAosInitialized] = useState(false); 

   
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
      
 
    useEffect(() => {
      const handleScroll = () => {
        if (!aosInitialized) {
          AOS.init({
            once: true,
            duration: 1200,
          });
          setAosInitialized(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll); 
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [aosInitialized]);
  


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/trucktypes');
            SetTruckTypes(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      const { titleTruck="", DryVan="",Reefer="", BoxTruck="",Flatbed="", StepDeck="",PowerOnly="",DryVantext="",
      DryVanpicture="",Reeferpicture="", BoxTruckpicture="",Flatbedpicture="", StepDeckpicture="",PowerOnlypicture="",
             Reefertext="",BoxTrucktext="",Flatbedtext="",StepDecktext="",PowerOnlytext="",}=
      truckTypes.length > 0 ? truckTypes[0] : {};
    

    useEffect(() => {
        const parentContainer = document.querySelector(".read-more-container");
    
        if (parentContainer) {
     
          const handleClick = (event) => {
            const current = event.target;
            const isReadMoreBtn = current.className.includes("read-more");
    
            if (!isReadMoreBtn) return;
    
            const currentText = event.target.parentNode.querySelector(".read-more-text");
            currentText.classList.toggle("read-more-text--show");

            current.textContent = current.textContent.includes("Read More")
              ? "Read Less..."
              : "Read More";
          };

          parentContainer.addEventListener("click", handleClick);
   
          return () => {
            parentContainer.removeEventListener("click", handleClick);
          };
        }
      }, []); 
    
  return (
   
    
    <section className="full-width-section mt-5  elements">
        <div className="read-more-container elements">
            <h2 className="text trucks"  data-aos="flip-up" >{titleTruck}</h2>
            <div className="row mt-5 elements" >
                <div className="col-md-4 mt-2 elements" id="DRY VAN">
                <img src={DryVanpicture}  data-aos="fade-right" className="truck"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/> 
                    <h3 className="mt-4" data-aos="fade-up">{DryVan}</h3>
                         <p>
        {isReadMore ? `${DryVantext.slice(0, 100)}` : DryVantext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? DryVantext.slice(100,500) : 'Read Less'}
        </span>
      </p>
                        <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>
                <div className="col-md-4 mt-2 elements" id="REEFER" >
                <img src={Reeferpicture}  data-aos="fade-right" className="truck" style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/> 
                    <h3 className="mt-4" data-aos="fade-up">{Reefer}</h3>
                    <p>
        {isReadMore ? `${Reefertext.slice(0, 95)}` : Reefertext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? Reefertext.slice(95,500) : 'Read Less'}
        </span>
      </p>
                        <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>
                <div className="col-md-4 mt-2 elements" id="BOX TRUCK">
                <img src={BoxTruckpicture}  data-aos="fade-right" className="truck" style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/> 
                    <h3 className="mt-4" data-aos="fade-up">{BoxTruck}</h3>
             
                    <p>
        {isReadMore ? `${BoxTrucktext.slice(0, 97)}` : BoxTrucktext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? BoxTrucktext.slice(97,500) : 'Read Less'}
        </span>
      </p>
                          <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>
                <div className="col-md-4 mt-3 elements" id="FLATBED">
                <img src={Flatbedpicture}  data-aos="fade-right" className="truck" style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }} /> 
                    <h3 className="mt-4" data-aos="fade-up">{Flatbed}</h3>
                    <p>
        {isReadMore ? `${Flatbedtext.slice(0, 100)}` : Flatbedtext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? Flatbedtext.slice(100,500) : 'Read Less'}
        </span>
      </p>
                    <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>
                <div className="col-md-4 mt-3 elements" id="STEP DECK">
                <img src={StepDeckpicture}  data-aos="fade-right" className="truck"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/> 
                    <h3 className="mt-4" data-aos="fade-up">{StepDeck}</h3>
                    <p>
        {isReadMore ? `${StepDecktext.slice(0, 90)}` : StepDecktext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? StepDecktext.slice(90,500) : 'Read Less'}
        </span>
      </p>
                    <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>
                <div className="col-md-4 mt-3 elements" id="POWER ONLY">
                <img src={PowerOnlypicture}  data-aos="fade-right" className="truck"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/> 
                    <h3 className="mt-4" data-aos="fade-up">{PowerOnly}</h3>
                    <p>
        {isReadMore ? `${PowerOnlytext.slice(0, 98)}` : PowerOnlytext} 
        <span className="read-more-text" onClick={toggleReadMore}>
          {isReadMore ? PowerOnlytext.slice(98,500) : 'Read Less'}
        </span>
      </p>
                    <button type="button" data-aos="fade-up" className="read-more-btn">Read More</button>
                </div>   
        </div>
      </div>
    </section>
    

  );
};

export default TruckData;
