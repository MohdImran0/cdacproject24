import React from "react";
import snooker4Image from "../assets/snooker4.jpg";
import snooker1Image from "../assets/snooker1.jpg";
import carrom1Image from "../assets/carrom1.jpg";
import snooker2Image from "../assets/snooker2.jpg";
import chess5Image from "../assets/chess5.jpg";
import carrom2Image from "../assets/carrom2.jpeg";
import carrom3Image from "../assets/carrom3.jpeg";
import carrom4Image from "../assets/download.jpeg";

const eventsData = [
  {
    imgSrc: snooker4Image,
    title: "Event Title 1",
    date: "August 15, 2024",
    location: "City Hall",
    description: "A brief description of the event.",
  },
  {
    imgSrc: snooker1Image,
    title: "Event Title 2",
    date: "September 10, 2024",
    location: "Community Center",
    description: "A brief description of the event.",
  },
  {
    imgSrc: carrom1Image,
    title: "Event Title 3",
    date: "October 5, 2024",
    location: "Park",
    description: "A brief description of the event.",
  },
  {
    imgSrc: snooker2Image,
    title: "Event Title 4",
    date: "October 12, 2024",
    location: "Town Square",
    description: "A brief description of the event.",
  },
  {
    imgSrc: chess5Image,
    title: "Event Title 5",
    date: "October 20, 2024",
    location: "Community Hall",
    description: "A brief description of the event.",
  },
  {
    imgSrc: carrom2Image,
    title: "Event Title 6",
    date: "October 25, 2024",
    location: "Central Park",
    description: "A brief description of the event.",
  },
  {
    imgSrc: carrom3Image,
    title: "Event Title 7",
    date: "November 5, 2024",
    location: "City Arena",
    description: "A brief description of the event.",
  },
  {
    imgSrc: snooker4Image,
    title: "Event Title 8",
    date: "November 12, 2024",
    location: "Convention Center",
    description: "A brief description of the event.",
  },
  {
    imgSrc: carrom4Image,
    title: "Event Title 9",
    date: "November 20, 2024",
    location: "Beach Park",
    description: "A brief description of the event.",
  },
  // Add more events as needed
];

const EventsPage = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f4f4f4",
      margin: 0,
      padding: 0,
    },
    header: {
      background: "#333",
      color: "#fff",
      padding: "10px 0",
      textAlign: "center",
    },
    main: {
      padding: "20px",
    },
    eventsContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
    event: {
      background: "#fafafa",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
    },
    eventTitle: {
      marginTop: "10px",
    },
    eventParagraph: {
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>Events</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.eventsContainer}>
          {eventsData.map((event, index) => (
            <article style={styles.event} key={index}>
              <img
                src={event.imgSrc}
                alt={`Event ${index + 1} Image`}
                style={styles.img}
              />
              <h2 style={styles.eventTitle}>{event.title}</h2>
              <p style={styles.eventParagraph}>Date: {event.date}</p>
              <p style={styles.eventParagraph}>Location: {event.location}</p>
              <p style={styles.eventParagraph}>{event.description}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
