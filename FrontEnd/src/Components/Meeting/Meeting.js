import React, { useState } from 'react';

const Meeting = () => {
  const [expanded, setExpanded] = useState({
    hallA: false,
    hallB: false,
    hallC: false,
    hallD: false,
  });

  const toggleServices = (hall) => {
    setExpanded((prevState) => ({
      ...prevState,
      [hall]: !prevState[hall],
    }));
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.headerH1}>Meeting Hall</h1>
      </header>
      <div style={styles.container}>
        <div style={styles.hall}>
          <h2>Available Halls</h2>
          {hallData.map((hall) => (
            <div style={styles.room} key={hall.name}>
              <img src={hall.image} alt={`${hall.name} Image`} style={styles.roomImg} />
              <div style={styles.roomDetails}>
                <h3 style={styles.roomH3}>{hall.name}</h3>
                <p>{`Capacity: ${hall.capacity} people`}</p>
                <p>{`Features: ${hall.features}`}</p>
                <p>{`Hall Rate: ${hall.rate}`}</p>
                <span
                  style={styles.toggleButton}
                  onClick={() => toggleServices(hall.toggleKey)}
                >
                  Additional Services
                </span>
                <div
                  style={{
                    ...styles.additionalServices,
                    ...(expanded[hall.toggleKey] && styles.expanded),
                  }}
                >
                  {hall.services.map((service, index) => (
                    <p key={index}>{service}</p>
                  ))}
                </div>
              </div>
              <div style={styles.buttonBox}>
                <a href={hall.link} style={styles.buttonLink}>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const hallData = [
  {
    name: 'Hall A',
    capacity: 50,
    features: 'Projector, Whiteboard, Wifi',
    rate: 15000,
    services: ['Breakfast: Available upon request', 'Catering: Optional'],
    image: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_219,w_4256,h_2394,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/st-marks-hotel/Banquet_Halls_near_MG_Road_Bangalore_5,_St_Marks_Hotel,_Banquets',
    link: 'book-hall-a.html',
    toggleKey: 'hallA',
  },
  {
    name: 'Hall B',
    capacity: 100,
    features: 'Projector, Whiteboard, Wifi',
    rate: 30000,
    services: ['Breakfast: Available upon request', 'Catering: Optional'],
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-large-conference-room-with-chairs-and-projector-image_2540138.jpg',
    link: 'book-hall-b.html',
    toggleKey: 'hallB',
  },
  {
    name: 'Hall C',
    capacity: 250,
    features: 'Projector, Whiteboard, Wifi, Video Conferencing',
    rate: 60000,
    services: ['Breakfast: Included', 'Catering: Available'],
    image: 'https://www.theseashoregroup.com/sahanacastle/wp-content/uploads/2022/01/Superior-Banquet-Hall-in-Nagercoil.jpg',
    link: 'book-hall-c.html',
    toggleKey: 'hallC',
  },
  {
    name: 'Hall D',
    capacity: 500,
    features: 'Whiteboard, Wifi',
    rate: 100000,
    services: ['Breakfast: Included', 'Catering: Available'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWlrw41ka4mq5WvcTrHL-148ErjYYO_-ERc2Frpb4GdWQzVK5RV5jfve6Xw4E6ZzSJjc&usqp=CAU',
    link: 'book-hall-d.html',
    toggleKey: 'hallD',
  },
];

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f4f4f4',
  },
  container: {
    width: '80%',
    margin: 'auto',
    overflow: 'hidden',
  },
  header: {
    background: '#333',
    color: '#fff',
    paddingTop: 30,
    minHeight: 70,
    borderBottom: '3px solid #ddd',
    textAlign: 'center',
  },
  headerH1: {
    margin: 0,
    fontSize: '2em',
  },
  hall: {
    background: '#fff',
    border: '1px solid #ddd',
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  room: {
    margin: '20px 0',
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  roomImg: {
    width: 150,
    height: 'auto',
    borderRadius: 4,
    marginRight: 20,
  },
  roomDetails: {
    flex: 1,
  },
  roomH3: {
    marginTop: 0,
    color: '#333',
  },
  buttonBox: {
    border: '1px solid #ddd',
    borderRadius: 4,
    padding: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonLink: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: 4,
    fontSize: '1em',
  },
  toggleButton: {
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#007bff',
    display: 'inline-block',
    padding: 5,
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: 4,
    textAlign: 'center',
    marginTop: 5,
  },
  additionalServices: {
    marginTop: 10,
    padding: 10,
    background: '#e2e2e2',
    border: '1px solid #ddd',
    borderRadius: 4,
    display: 'none',
    transition: 'max-height 0.3s ease-out',
    overflow: 'hidden',
    maxHeight: 0,
  },
  expanded: {
    display: 'block',
    maxHeight: 200,
  },
};

export default Meeting;
