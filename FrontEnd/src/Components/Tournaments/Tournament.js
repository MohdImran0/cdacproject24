import React, { useState } from "react";
import chess2Image from "../assets/chess2.jpg";
import snooker3Image from "../assets/snooker3.jpg";
import carrom2Image from "../assets/carrom2.jpeg";
import snooker4Image from "../assets/snooker4.jpg";
import chess5Image from "../assets/chess5.jpg";
import snooker1Image from "../assets/snooker1.jpg";
import carrom3Image from "../assets/carrom3.jpeg";
import carrom1Image from "../assets/carrom1.jpg";

const events = {
  upcoming: [
    {
      title: "Chess Tournament",
      date: "September 20, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.",
      imgSrc: chess2Image,
    },
    {
      title: "Snooker Tournament",
      date: "August 16, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.",
      imgSrc: snooker3Image,
    },
    {
      title: "Carrom Tournament",
      date: "August 18, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.",
      imgSrc: carrom2Image,
    },
  ],
  live: [
    {
      title: "Snooker Finals",
      date: "August 15, 2024",
      description:
        "Currently live! Watch the game and cheer for your favorite players.",
      imgSrc: snooker4Image,
    },
    {
      title: "Chess Friendly-Match",
      date: "August 15, 2024",
      description:
        "Currently live! Watch the game and cheer for your favorite players.",
      imgSrc: chess5Image,
    },
    {
      title: "Snooker InterClub",
      date: "August 15, 2024",
      description:
        "Currently live! Watch the game and cheer for your favorite players.",
      imgSrc: snooker1Image,
    },
    {
      title: "Carrom Trophy",
      date: "August 15, 2024",
      description:
        "Currently live! Watch the game and cheer for your favorite players.",
      imgSrc: carrom3Image,
    },
  ],
  ended: [
    {
      title: "Carrom Championship",
      date: "July 10, 2024",
      description: "The event has ended. Check out the highlights and results.",
      imgSrc: carrom1Image,
    },
  ],
};

const EventCard = ({ event, onButtonClick, buttonText, isBooked }) => (
  <div style={styles.eventCard}>
    <div style={styles.row}>
      <div style={styles.colMd4}>
        <img src={event.imgSrc} style={styles.imgFluid} alt={event.title} />
      </div>
      <div style={styles.colMd8}>
        <h3 style={styles.eventCardTitle}>{event.title}</h3>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>{event.description}</p>
        <button
          style={styles.button(buttonText)}
          onClick={onButtonClick}
          disabled={isBooked}
        >
          {isBooked ? "Seat Booked" : buttonText}
        </button>
      </div>
    </div>
  </div>
);

const Tabs = ({ activeTab, setActiveTab }) => (
  <ul style={styles.navTabs} role="tablist">
    <li style={styles.navItem}>
      <a
        style={activeTab === "upcoming" ? styles.navLinkActive : styles.navLink}
        onClick={() => setActiveTab("upcoming")}
        role="tab"
        href="#"
      >
        Upcoming Events
      </a>
    </li>
    <li style={styles.navItem}>
      <a
        style={activeTab === "live" ? styles.navLinkActive : styles.navLink}
        onClick={() => setActiveTab("live")}
        role="tab"
        href="#"
      >
        Live Events
      </a>
    </li>
    <li style={styles.navItem}>
      <a
        style={activeTab === "ended" ? styles.navLinkActive : styles.navLink}
        onClick={() => setActiveTab("ended")}
        role="tab"
        href="#"
      >
        Ended Events
      </a>
    </li>
  </ul>
);

const Tournament = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [bookedSlots, setBookedSlots] = useState({});

  const handleButtonClick = (eventTitle) => {
    alert(`Booking slot for ${eventTitle}`);
    setBookedSlots((prevState) => ({
      ...prevState,
      [eventTitle]: true,
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Events Schedules</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={styles.tabContent}>
        <div
          style={
            activeTab === "upcoming" ? styles.tabPaneActive : styles.tabPane
          }
          role="tabpanel"
        >
          {events.upcoming.map((event) => (
            <EventCard
              key={event.title}
              event={event}
              onButtonClick={() => handleButtonClick(event.title)}
              buttonText="Book Slot"
              isBooked={bookedSlots[event.title]}
            />
          ))}
        </div>
        <div
          style={activeTab === "live" ? styles.tabPaneActive : styles.tabPane}
          role="tabpanel"
        >
          {events.live.map((event) => (
            <EventCard
              key={event.title}
              event={event}
              onButtonClick={() =>
                handleButtonClick(`Watching live: ${event.title}`)
              }
              buttonText="Watch Live"
              isBooked={false} // Live events do not require booking
            />
          ))}
        </div>
        <div
          style={activeTab === "ended" ? styles.tabPaneActive : styles.tabPane}
          role="tabpanel"
        >
          {events.ended.map((event) => (
            <EventCard
              key={event.title}
              event={event}
              onButtonClick={() =>
                handleButtonClick(`Viewing highlights for: ${event.title}`)
              }
              buttonText="View Highlights"
              isBooked={false} // Ended events do not require booking
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "5rem",
    padding: "0 1rem",
  },
  header: {
    textAlign: "center",
    fontSize: "36px",
    color: "#007bff",
    marginBottom: "30px",
  },
  navTabs: {
    display: "flex",
    borderBottom: "1px solid #ddd",
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginRight: "1rem",
  },
  navLink: {
    display: "block",
    padding: "10px 20px",
    color: "#007bff",
    textDecoration: "none",
  },
  navLinkActive: {
    display: "block",
    padding: "10px 20px",
    color: "#007bff",
    borderBottom: "2px solid #007bff",
    textDecoration: "none",
  },
  eventCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  colMd4: {
    flex: "0 0 33.3333%",
    maxWidth: "33.3333%",
    marginRight: "20px", // Added margin to create space between image and text
  },
  colMd8: {
    flex: "0 0 66.6667%",
    maxWidth: "66.6667%",
  },
  imgFluid: {
    borderRadius: "8px",
    maxHeight: "200px",
    objectFit: "cover",
    width: "100%",
  },
  eventCardTitle: {
    marginTop: 0,
    fontSize: "24px",
    color: "#343a40",
  },
  button: (buttonText) => ({
    display: "inline-block",
    padding: "10px 20px",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    backgroundColor:
      buttonText === "Watch Live"
        ? "#28a745"
        : buttonText === "Book Slot"
        ? "#6c757d"
        : "#17a2b8",
    marginRight: "10px",
  }),
  tabContent: {
    marginTop: "20px",
  },
  tabPane: {
    display: "none",
  },
  tabPaneActive: {
    display: "block",
  },
};

export default Tournament;
