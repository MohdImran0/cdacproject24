import React from "react";
import carrom1Image from "../assets/carrom1.jpg";

const AboutUs = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      margin: "65px auto",
    },
    hero: {
      backgroundColor: "aqua",
      overflow: "hidden",
      padding: "50px 0",
    },
    heading: {
      color: "aquamarine",
      fontSize: "55px",
      textAlign: "center",
      marginTop: "35px",
    },
    heroContent: {
      flex: 1,
      margin: "0 25px",
      textAlign: "justify",
      fontSize: "18px",
      lineHeight: "1.6",
    },
    heroImage: {
      flex: 1,
      width: "100%",
      margin: "auto",
    },
    imgFluid: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div>
      
      <div style={styles.heading}>
        <h1>About Us</h1>
      </div>

      <div style={styles.container}>
        <div className="row">
          <div className="col-xl-9">
            <div style={styles.heroContent}>
              <h2>
                Welcome to our <b>UNIFILED CLUB HUB</b>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                numquam excepturi, soluta quaerat natus quos blanditiis corporis
                assumenda esse officia vitae distinctio tempora ut ducimus
                dolore voluptatibus temporibus nesciunt! Nostrum?
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div style={styles.heroImage}>
              <img
                src={carrom1Image}
                alt="Carrom"
                style={styles.imgFluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div className="row">
          <div className="col-xl-3">
            <div style={styles.heroImage}>
              <img
                src="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/low_budget_wedding_stage_decoration_0_1200.jpg"
                alt="Wedding Stage Decoration"
                style={styles.imgFluid}
              />
            </div>
          </div>
          <div className="col-xl-9">
            <div style={styles.heroContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                numquam excepturi, soluta quaerat natus quos blanditiis corporis
                assumenda esse officia vitae distinctio tempora ut ducimus
                dolore voluptatibus temporibus nesciunt! Nostrum? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Unde placeat
                recusandae adipisci eos expedita, totam necessitatibus. Earum
                optio amet nesciunt quasi? Aliquid, magni earum quia architecto
                perspiciatis blanditiis. Corrupti, esse!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div className="row">
          <div className="col-xl-9">
            <div style={styles.heroContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                numquam excepturi, soluta quaerat natus quos blanditiis corporis
                assumenda esse officia vitae distinctio tempora ut ducimus
                dolore voluptatibus temporibus nesciunt! Nostrum?
              </p>
            </div>
          </div>
          <div className="col-xl-3">
            <div style={styles.heroImage}>
              <img
                src="https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/low_budget_wedding_stage_decoration_0_1200.jpg"
                alt="Wedding Stage Decoration"
                style={styles.imgFluid}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
