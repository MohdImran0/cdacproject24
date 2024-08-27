import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #00b0ff, #f06292)", // Updated background color
    padding : "100px",
  };

  const faqStyle = {
    backgroundColor: "#ffffff",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    fontFamily: "Arial, Helvetica, sans-serif",
    lineHeight: "1.6rem",
    color: "#333333",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const headerStyle = {
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    textDecoration: "underline",
    color: "#333333",
    textAlign: "center",
    marginBottom: "20px",
  };

  const accordionStyle = {
    backgroundColor: "#f0f0f0",
    padding: "16px",
    marginBottom: "16px",
    borderRadius: "4px",
    boxShadow: "1px 1px 5px rgba(63, 59, 63, 0.1)",
    cursor: "pointer",
    color: "#333333",
  };

  const questionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
  };

  const iconStyle = (isActive) => ({
    marginRight: "16px",
    transition: "transform 0.2s",
    transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
  });

  const answerStyle = (isActive) => ({
    color: "#333333",
    maxHeight: isActive ? "500px" : "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease-in-out",
    paddingLeft: "16px",
  });

  const faqs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.",
  ];

  return (
    <div style={faqContainerStyle}>
      <div style={faqStyle}>
        <h1 style={headerStyle}>Frequently Asked Questions:</h1>
        <p>
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam.</i>
        </p>
        {faqs.map((faq, index) => (
          <div key={index} style={accordionStyle} onClick={() => toggleAccordion(index)}>
            <div style={questionStyle}>
              <h4>{faq}</h4>
              <i className="fa-solid fa-caret-down" style={iconStyle(activeIndex === index)}></i>
            </div>
            <div style={answerStyle(activeIndex === index)}>
              <p>{faq}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
