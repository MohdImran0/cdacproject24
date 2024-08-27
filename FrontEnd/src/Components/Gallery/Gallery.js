import React from "react";
import chess4Image from "../assets/chess4.jpg";
import carrom3Image from "../assets/carrom3.jpeg";
import chess1Image from "../assets/chess1.jpg";
import snooker1Image from "../assets/snooker1.jpg";
import chess3Image from "../assets/chess3.jpg";
import snooker3Image from "../assets/snooker3.jpg";
import chess2Image  from "../assets/chess2.jpg";
import snooker4Image from "../assets/snooker4.jpg";
import carrom1Image from "../assets/carrom1.jpg";

const Gallery = () => {
  const styles = {
    body: {
      background: "linear-gradient(to right, #00b0ff, #f06292)",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      maxWidth: "900px",
      margin: "auto",
    },
    image: {
      width: "100%",
      height: "auto",
      border: "2px solid black",
      boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.gallery}>
        <img src={chess4Image} alt="Image 1" style={styles.image} />
        <img src={carrom3Image} alt="Image 2" style={styles.image} />
        <img src={chess1Image} alt="Image 3" style={styles.image} />
        <img src={snooker1Image} alt="Image 4" style={styles.image} />
        <img src={chess3Image} alt="Image 5" style={styles.image} />
        <img src={snooker3Image} alt="Image 6" style={styles.image} />
        <img src={chess2Image} alt="Image 7" style={styles.image} />
        <img src={snooker4Image} alt="Image 8" style={styles.image} />
        <img src={carrom1Image} alt="Image 9" style={styles.image} />
      </div>
    </div>
  );
};

export default Gallery;
