import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleToggleService = (service) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((item) => item !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleViewList = () => setShowModal(true);

  const handleConfirmSubmit = () => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedServices));
    alert("Your list is submitted.");
    setShowModal(false);
  };

  const handleModalClose = () => setShowModal(false);

  const inlineStyles = {
    header: {
      backgroundColor: "#007bff",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    serviceCard: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    serviceCardBody: {
      padding: "15px",
    },
    serviceCardTitle: {
      marginTop: "0",
      fontSize: "1.5rem",
    },
    serviceCardText: {
      margin: "10px 0",
      fontSize: "1rem",
    },
    footer: {
      backgroundColor: "#343a40",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    modalBody: {
      padding: "20px",
    },
    modalFooter: {
      padding: "10px",
    },
    btnDanger: {
      marginLeft: "10px",
    },
    submitBtn: {
      fontSize: "1.2em",
    },
  };

  return (
    <div>
      <header style={inlineStyles.header}>
        <h1>Event Services</h1>
        <p>Choose the services that best fit your needs</p>
      </header>

      <div className="container my-5">
        {/* Meeting Hall Section */}
        <section id="meeting-hall" className="mb-5">
          <h2 className="text-center mb-4">Meeting Hall</h2>
          <div className="row">
            {["Hall A", "Hall B", "Hall C", "Hall D"].map((hall, index) => (
              <div className="col-md-3" key={index}>
                <div style={inlineStyles.serviceCard}>
                  <div style={inlineStyles.serviceCardBody}>
                    <h3 style={inlineStyles.serviceCardTitle}>{hall}</h3>
                    <p style={inlineStyles.serviceCardText}>
                      Description for {hall}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleToggleService(hall)}
                    >
                      {selectedServices.includes(hall) ? "Remove" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Services Section */}
        <section id="custom-services" className="mb-5">
          <h2 className="text-center mb-4">Custom Services</h2>
          <div className="row">
            {[
              "TentHouse",
              "Catering Service",
              "Technical Support",
              "Event Decorations",
            ].map((service, index) => (
              <div className="col-md-3" key={index}>
                <div style={inlineStyles.serviceCard}>
                  <div style={inlineStyles.serviceCardBody}>
                    <h3 style={inlineStyles.serviceCardTitle}>{service}</h3>
                    <p style={inlineStyles.serviceCardText}>
                      Description for {service}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleToggleService(service)}
                    >
                      {selectedServices.includes(service) ? "Remove" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Events Section */}
        <section id="other-events" className="mb-5">
          <h2 className="text-center mb-4">Other Events</h2>
          <div className="row">
            {[
              "Competition",
              "Speeches",
              "Yoga",
              "Workshops",
              "Seminars",
              "Parties",
            ].map((event, index) => (
              <div className="col-md-3" key={index}>
                <div style={inlineStyles.serviceCard}>
                  <div style={inlineStyles.serviceCardBody}>
                    <h3 style={inlineStyles.serviceCardTitle}>{event}</h3>
                    <p style={inlineStyles.serviceCardText}>
                      Description for {event}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleToggleService(event)}
                    >
                      {selectedServices.includes(event) ? "Remove" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Items Section */}
        <section id="selected-items">
          <h2 className="text-center mb-4">Selected Services</h2>
          <ul id="selected-list" className="list-group mb-4">
            {selectedServices.map((service, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {service}
                <button
                  className="btn btn-danger btn-sm"
                  style={inlineStyles.btnDanger}
                  onClick={() => handleToggleService(service)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between">
            <button className="btn btn-info" onClick={handleViewList}>
              View Selected Items
            </button>
            <button
              className="btn btn-success"
              style={inlineStyles.submitBtn}
              onClick={() => handleToggleService("")}
            >
              Submit
            </button>
          </div>
        </section>
      </div>

      {/* Modal for Selected Items */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          onClick={handleModalClose}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Selected Services</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleModalClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={inlineStyles.modalBody}>
                {selectedServices.length > 0 ? (
                  selectedServices.map((service, index) => (
                    <p key={index}>{service}</p>
                  ))
                ) : (
                  <p>No items selected.</p>
                )}
              </div>
              <div className="modal-footer" style={inlineStyles.modalFooter}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmSubmit}
                >
                  Confirm Submission
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
