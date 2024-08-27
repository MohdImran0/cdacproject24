import React from 'react';

const Award = () => {
    const styles = {
        howSection: {
            backgroundColor: '#f8f9fa',
            padding: '40px 0',
        },
        row: {
            marginBottom: '30px',
        },
        howImg: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        img: {
            maxWidth: '80%',
            height: 'auto',
            border: '2px solid #ddd',
            borderRadius: '10px',
            padding: '5px',
        },
        h4: {
            fontWeight: 'bold',
        },
        subheading: {
            fontStyle: 'italic',
            color: '#6c757d',
        },
        textMuted: {
            color: '#6c757d',
            lineHeight: '1.7',
        }
    };

    return (
        <div style={styles.howSection}>
            <div className="container">
                <div className="row" style={styles.row}>
                    <div className="col-md-3" style={styles.howImg}>
                        <img 
                            src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png" 
                            className="rounded-circle img-fluid" 
                            alt="Find rewarding projects"
                            style={styles.img} 
                        />
                    </div>
                    <div className="col-md-9">
                        <h4 style={styles.h4}>Find rewarding projects</h4>
                        <h4 style={{...styles.h4, ...styles.subheading}}>GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4>
                        <p style={styles.textMuted}>
                            Freedom to work on ideal projects. On GetLance, you run your own business and choose your own clients and projects. 
                            Just complete your profile and we’ll highlight ideal jobs. Also search projects, and respond to client invitations.
                            Wide variety and high pay. Clients are now posting jobs in hundreds of skill categories, paying top price for great work.
                            More and more success. The greater the success you have on projects, the more likely you are to get hired by clients that use GetLance.
                        </p>
                    </div>
                </div>
                <div className="row" style={styles.row}>
                    <div className="col-md-9">
                        <h4 style={styles.h4}>Get hired quickly</h4>
                        <h4 style={{...styles.h4, ...styles.subheading}}>GetLance makes it easy to connect with clients and begin doing great work.</h4>
                        <p style={styles.textMuted}>
                            Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                            Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                            Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.
                        </p>
                    </div>
                    <div className="col-md-3" style={styles.howImg}>
                        <img 
                            src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png" 
                            className="rounded-circle img-fluid" 
                            alt="Get hired quickly"
                            style={styles.img} 
                        />
                    </div>
                </div>
                <div className="row" style={styles.row}>
                    <div className="col-md-3" style={styles.howImg}>
                        <img 
                            src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png" 
                            className="rounded-circle img-fluid" 
                            alt="Work efficiently"
                            style={styles.img} 
                        />
                    </div>
                    <div className="col-md-9">
                        <h4 style={styles.h4}>Work efficiently, effectively.</h4>
                        <h4 style={{...styles.h4, ...styles.subheading}}>
                            With GetLance, you have the freedom and flexibility to control when, where, and how you work. 
                            Each project includes an online workspace shared by you and your client, allowing you to:
                        </h4>
                        <p style={styles.textMuted}>
                            Send and receive files. Deliver digital assets in a secure environment.
                            Share feedback in real time. Use GetLance Messages to communicate via text, chat, or video.
                            Use our mobile app. Many features can be accessed on your mobile phone when on the go.
                        </p>
                    </div>
                </div>
                <div className="row" style={styles.row}>
                    <div className="col-md-9">
                        <h4 style={styles.h4}>Get paid on time</h4>
                        <h4 style={{...styles.h4, ...styles.subheading}}>
                            All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.
                        </h4>
                        <p style={styles.textMuted}>
                            All invoices and payments happen through GetLance. Count on a simple and streamlined process.
                            Hourly and fixed-price projects. For hourly work, submit timesheets through GetLance. 
                            For fixed-price jobs, set milestones and funds are released via GetLance escrow features.
                            Multiple payment options. Choose a payment method that works best for you, from direct deposit or PayPal to wire transfer and more.
                        </p>
                    </div>
                    <div className="col-md-3" style={styles.howImg}>
                        <img 
                            src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png" 
                            className="rounded-circle img-fluid" 
                            alt="Get paid on time"
                            style={styles.img} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;
