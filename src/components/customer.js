
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./customer.css";
import AOS from "aos";
import "aos/dist/aos.css";




const CustomerData = () => {
  const [customer, setCustomer] = useState([]);


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customer-reviews");
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const {
    titlefirst = "",
    titlesecond = "",
    customer1name = "",
    customer2name = "",
    customer3name = "",
    customer1text = "",
    customer2text = "",
    customer3text = "",
    customer1picture="",
    customer2picture="",
    customer3picture="",
  } = customer.length > 0 ? customer[0] : {};

  return (
    <div className="container elements mt-3" id="Customer">
      <h2 className="text-center elements mt-5" data-aos="flip-up">
        {titlefirst} <span>{titlesecond}</span>
      </h2>
      <div className="row custom mt-5 elements" >
        <div className="col-md-4 elements" data-aos="fade-right">
          <div className="card-body review-card-body">
            <img src={customer1picture} alt="Customer" style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  
  }} className="review-image" />
            <p className="customer-name">{customer1name}</p>
            <div className="stars">★★★★★</div>
            <p className="review-text">{customer1text}</p>
          </div>
        </div>
        <div className="col-md-4 elements" data-aos="fade-right">
          <div className="card-body review-card-body">
            <img src={customer2picture} alt="Customer"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}className="review-image" />
            <p className="customer-name">{customer2name}</p>
            <div className="stars">★★★★★</div>
            <p className="review-text">{customer2text}</p>
          </div>
        </div>
        <div className="col-md-4 elements" data-aos="fade-right">
          <div className="card-body review-card-body">
            <img src={customer3picture} alt="Customer" className="review-image"  style={{
    WebkitUserDrag: "none",
    userDrag: "none",
    userSelect: "none",
  }}/>
            <p className="customer-name">{customer3name}</p>
            <div className="stars">★★★★★</div>
            <p className="review-text">{customer3text}</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
  <div
    id="exampleCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="card-body review-card-body">
          <img
            src={customer1picture}
            alt="Customer"
            className="review-image"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
          />
          <p className="customer-name">{customer1name}</p>
          <div className="stars">★★★★★</div>
          <p className="review-text">{customer1text}</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-body review-card-body">
          <img
            src={customer2picture}
            alt="Customer"
            className="review-image"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
          />
          <p className="customer-name">{customer2name}</p>
          <div className="stars">★★★★★</div>
          <p className="review-text">{customer2text}</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card-body review-card-body">
          <img
            src={customer3picture}
            alt="Customer"
            className="review-image"
            style={{
              WebkitUserDrag: "none",
              userDrag: "none",
              userSelect: "none",
            }}
          />
          <p className="customer-name">{customer3name}</p>
          <div className="stars">★★★★★</div>
          <p className="review-text">{customer3text}</p>
        </div>
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#exampleCarousel"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#exampleCarousel"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div>
   
  );
};

export default CustomerData;
