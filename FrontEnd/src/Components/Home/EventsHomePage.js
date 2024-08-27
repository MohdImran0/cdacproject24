import React from 'react';
import { Link } from 'react-router-dom';
import chess2Image from '../assets/chess2.jpg';
import snooker3Image from '../assets/snooker3.jpg';
import carrom3Image from '../assets/carrom3.jpeg';
import exampleImage from '../assets/download.jpeg'; // Add your image path here

const EventsHomePage = () => {
    // Inline CSS styles
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
        },
        hero: {
            backgroundColor: '#007bff', // Example primary color
            color: 'white',
            textAlign: 'center',
            padding: '5rem 0',
        },
        btnLight: {
            backgroundColor: '#f8f9fa',
            color: '#000',
            border: 'none',
        },
        eventCard: {
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '15px',
            marginBottom: '15px',
        },
        eventCardImg: {
            borderBottom: '1px solid #ddd',
            marginBottom: '15px',
        },
        eventCardBody: {
            padding: '15px',
        },
        listGroupItem: {
            border: 'none',
            padding: '10px 15px',
        },
        listGroupItemOdd: {
            backgroundColor: '#f9f9f9',
        },
        circularImage: {
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            objectFit: 'cover', // Ensure the image covers the circle shape properly
        },
        imageContainer: {
            textAlign: 'center',
            marginBottom: '20px', // Adjust margin if needed
        },
    };

    return (
        <>
            <header style={styles.hero}>
                <div className="container">
                    <h1 className="display-4">Welcome to Events Central</h1>
                    <p className="lead">Find and Book Exciting Events Happening Near You</p>
                    <Link to="/Events" style={styles.btnLight} className="btn btn-light btn-lg">Explore Events</Link>
                </div>
            </header>

            {/* Featured Events Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Featured Events</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div style={styles.eventCard}>
                            <img src={chess2Image} style={styles.eventCardImg} className="img-fluid" alt="Chess Tournament" />
                            <div style={styles.eventCardBody}>
                                <h3>Chess Tournament</h3>
                                <p><strong>Date:</strong> September 20, 2024</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={styles.eventCard}>
                            <img src={snooker3Image} style={styles.eventCardImg} className="img-fluid" alt="Snooker Tournament" />
                            <div style={styles.eventCardBody}>
                                <h3>Snooker Tournament</h3>
                                <p><strong>Date:</strong> August 16, 2024</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div style={styles.eventCard}>
                            <img src={carrom3Image} style={styles.eventCardImg} className="img-fluid" alt="Carrom Tournament" />
                            <div style={styles.eventCardBody}>
                                <h3>Carrom Tournament</h3>
                                <p><strong>Date:</strong> August 18, 2024</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisl non velit consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video and Tips Section */}
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/your-video-id" allowFullScreen title="Video"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <h3 className="text-center">Tips</h3>
                            <li style={styles.listGroupItem} className="list-group-item">1. Chess: Control the center of the board early in the game to dominate your opponent.</li>
                            <li style={{ ...styles.listGroupItem, ...styles.listGroupItemOdd }} className="list-group-item">2. Snooker: Practice your cue ball control to set up your next shots effectively.</li>
                            <li style={styles.listGroupItem} className="list-group-item">3. Carrom: Learn to master both offensive and defensive play styles for better strategy.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Circular Image and Description Section */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-9 col-lg-4 col-md-6 col-sm-12">
                    <div style={styles.eventCardBody}>
                            <h3>Award</h3>
                            <p>This is a description of the example image. Provide detailed information about the image and its relevance here.</p>
                        </div>
                        
                    </div>
                    <div className="col-xl-3 col-lg-8 col-md-6 col-sm-12">
                    <div style={styles.imageContainer}>
                            <img src={exampleImage} style={styles.circularImage} alt="Example" />
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventsHomePage;
