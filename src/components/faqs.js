import React, { useState,useEffect } from "react";
import './faq.css'
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";



const FAQ = () => {
  const [activeFAQs, setActiveFAQs] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

  const { titlefirst = "",titlesecond="",  questions1="",questions2="",questions3="",questions4="",
          questions5="",  questions6="", answer1="",answer2="",answer3="",answer4="",answer5="",answer6="" } =
          questions.length > 0 ? questions[0] : {};

  const toggleFAQ = (id) => {
    setActiveFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container elements mt-5" id="FAQ">
      <h2 className="text-center mb-4 elements">
      <h2 class="text-center mb-4 elements" data-aos="flip-up" >{titlefirst} <span>{titlesecond}</span></h2>
      </h2>
      <div className="w-layout-grid faq_list">
        {[
          {
            id: "faq1",
            question: questions1,
            answer:answer1
        },
          {
            id: "faq2",
            question: questions2,
            answer:answer2
            },
          {
            id: "faq3",
            question: questions3,
            answer:answer3
            },
          {
            id: "faq4",
            question: questions4,
            answer:answer4
            },
          {
            id: "faq5",
            question: questions5,
            answer:answer5
        },
        
   
        ].map((faq) => (
          <div key={faq.id} className="faq_accordion" data-aos="fade-right" >
            <div className="faq_question" data-aos="fade-right">
              <div className="text-size-medium-4 text-weight-bold">
                {faq.question}
              </div>
              <div
                className="faq4_icon"
                onClick={() => toggleFAQ(faq.id)}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`bi ${
                    activeFAQs[faq.id] ? "bi-dash" : "bi-plus"
                  }`}
                ></i>
              </div>
            </div>
            {activeFAQs[faq.id] && (
              <div className="faq4_answer">
                <p className="faq-answer-txt">{faq.answer}</p>
              </div>
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default FAQ;
