import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import AOS from "aos";
import "aos/dist/aos.css";




const Navbar = () => {
  const [navbars, setNavbars] = useState([]);
  const [service,SetService] = useState([]);
  const [truckTypes,SetTruckTypes] =useState([])
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
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
        const response = await axios.get('http://localhost:5000/api/services');
        SetService(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
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


  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/navbarinfo');

        setNavbars(response.data);
      } catch (error) {
        console.error('Error fetching navbar data:', error);
      }
    };

    fetchNavbar();
  }, []);

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  
  const handleSubmenuClick = (e) => {
    e.preventDefault();
    setSubmenuOpen(!isSubmenuOpen);
  };



  
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const logo = document.getElementById("logo");

    if (logo) {
      logo.addEventListener("click", (event) => {
        event.preventDefault();
        sessionStorage.setItem("scrollToTop", "true");
        window.location.reload();
      });
    }

    if (sessionStorage.getItem("scrollToTop") === "true") {
      sessionStorage.removeItem("scrollToTop");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return () => {
      if (logo) {
        logo.removeEventListener("click", () => {});
      }
    };
  }, []);
  
  


  
  const { home="",about="",services="",testimonials="",faqs="",
           contact="",setup="",picture=""} =
            navbars.length > 0 ? navbars[0] : {};
   
const {LoadSearch="", Booking="", BrokerSetup="", Detention="",Invoicing="",Factoring="",Support=""}=
service.length > 0 ? service[0] : {};
const {DryVan="",Reefer="", BoxTruck="",Flatbed="", StepDeck="",PowerOnly=""}=
truckTypes.length > 0 ? truckTypes[0] : {};



   
 
  return (
 
<nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div>
          <img
            src={picture}
            id="logo"
            className="navbar-brand"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
            alt="Logo"
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleOffcanvasToggle}
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleOffcanvasToggle}
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item custom-spacing" data-bs-dismiss="offcanvas" onClick={handleOffcanvasToggle}>
                <a
                  className="nav-link scroll-link"
                  href="#Home"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={(e) => handleScroll(e, "Home")}
                  
                >
                  {home}
                </a>
              </li>
              <li className="nav-item custom-spacing" data-bs-dismiss="offcanvas" onClick={handleOffcanvasToggle}>
                <a
                  className="nav-link scroll-link"
                  href="#About Us"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={(e) => handleScroll(e, "About Us")}
                >
                  {about}
                </a>
              </li>

              <li className="nav-item dropdown custom-spacing">
                <a
                  className="nav-link dropdown-toggle"
                  href="#Services"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {services}
                </a>
                <div className="dropdown-menu elements" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item scroll-link"  href="#LOAD SEARCH FTL/LTL"  onClick={handleOffcanvasToggle} >
                    {LoadSearch}
                  </a>
                  <a className="dropdown-item scroll-link" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }} href="#RATE NEGOTIATION & BOOKING" onClick={handleOffcanvasToggle}>
                    {Booking}
                  </a>
                  <a className="dropdown-item scroll-link" href="#BROKER SETUP" onClick={handleOffcanvasToggle}>
                    {BrokerSetup}
                  </a>
                  <a className="dropdown-item scroll-link" href="#DETENTION LAYOVER TONU" onClick={handleOffcanvasToggle}>
                    {Detention}
                  </a>
                  <a className="dropdown-item scroll-link" href="#INVOICING"  onClick={handleOffcanvasToggle}>
                    {Invoicing}
                  </a>
                  <a className="dropdown-item scroll-link" href="#FACTORING & INSURANCE ASSISTANCE" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                    onClick={handleOffcanvasToggle}>
                    {Factoring}
                  </a>
                  <a className="dropdown-item scroll-link" href="#24/7 SUPPORT" onClick={handleOffcanvasToggle}>
                    {Support}
                  </a>

                  <a
  className="nav-link dropdown-toggle"
  id="navbarDropdownMenuTruck"
  aria-haspopup="true"
  aria-expanded="false"
  style={{ fontWeight: "bold", fontSize: "19px" }}
  onClick={(e) => {
    e.stopPropagation();  
    handleSubmenuClick(e); 
  }}
>
  Truck Types
</a>

                  <div
                    className={`dropdown-menu elements ${isSubmenuOpen ? 'show' : ''}`}
                    aria-labelledby="navbarDropdownMenuTruck"
                  >
                    <a className="dropdown-item scroll-link" href="#DRY VAN"      onClick={handleOffcanvasToggle}>
                      {DryVan}
                    </a>
                    <a className="dropdown-item scroll-link" href="#REEFER"      onClick={handleOffcanvasToggle}>
                      {Reefer}
                    </a>
                    <a className="dropdown-item scroll-link" href="#BOX TRUCK"      onClick={handleOffcanvasToggle}>
                      {BoxTruck}
                    </a>
                    <a className="dropdown-item scroll-link" href="#FLATBED"      onClick={handleOffcanvasToggle}>
                      {Flatbed}
                    </a>
                    <a className="dropdown-item scroll-link" href="#STEP DECK"      onClick={handleOffcanvasToggle}>
                      {StepDeck}
                    </a>
                    <a className="dropdown-item scroll-link" href="#POWER ONLY"      onClick={handleOffcanvasToggle}>
                      {PowerOnly}
                    </a>
                  </div>
                </div>
              </li>

              <li className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
                <a className="nav-link scroll-link" href="#FAQ" style={{ whiteSpace: "nowrap" }}   onClick={handleOffcanvasToggle}>
                  {faqs}
                </a>
              </li>

              <li className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
                <a className="nav-link scroll-link" href="#Customer"  onClick={handleOffcanvasToggle}>
                  {testimonials}
                </a>
              </li>

              <li className="nav-item custom-spacing" data-bs-dismiss="offcanvas">
                <a className="nav-link scroll-link" href="#Contact" style={{ whiteSpace: "nowrap" }}  onClick={handleOffcanvasToggle}>
                  {contact}
                </a>
              </li>

              {/* Setup Button */}
              <li className="nav-item" data-bs-dismiss="offcanvas"      onClick={handleOffcanvasToggle}>
                <button
                  type="button"
                  className="btn btn custom-btn scroll-link"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    const section = document.querySelector("#SETUP");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {setup}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
