import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ShipmentDetails = () => {
  // use location to get specified shipment
  const location = useLocation();
  const ship = location.state;
  const shipment = ship.ship.fields;

  const history = useHistory();

  const journalTypes = {
    debitCash: "debitCash",
    creditRevenue: "creditRevenue",
    creditPayable: "creditPayable",
  };

  // state for shipment status
  const [status, setStatus] = useState(shipment.status);

  // state for rerendering
  const [change, setChange] = useState(0);

  //function for pending status
  const handlePending = (id) => {
    if (status === "Pending") {
      setChange((c) => c + 1);
      axios.put(`http://127.0.0.1:8000/test/changeShipmentStatus/`, {
        id: id,
        editedstatus: "Progress",
      });
      setStatus("Progress");
    }
  };

  //function for progress status
  const handleProgress = (id) => {
    if (status === "Progress") {
      setChange((c) => c + 1);
      axios.put(`http://127.0.0.1:8000/test/changeShipmentStatus/`, {
        id: id,
        editedstatus: "Pending",
      });
      setStatus("Pending");
    }
  };

  //function for done status
  const handleFinalStatus = (id) => {
    axios.put(`http://127.0.0.1:8000/test/changeShipmentStatus/`, {
      id: id,
      editedstatus: "Done",
    });
    // create 3 journals for the shipment after done status
    for (let type in journalTypes) {
      axios.post(`http://127.0.0.1:8000/test/addJournal/`, {
        id: id,
        type: type,
      });
    }

    history.push("/");
  };

  // rerender for any change
  useEffect(() => {}, [change, status]);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <section className="team sec-padding bag" id="team">
        <div className="container">
          <div className="row marg">
            <div className="section-title">
              <h2
                data-title="order now"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {" "}
                Shipment Details
              </h2>
            </div>
          </div>

          <div className="row">
            <div
              className="team-item col-lg-4 col-md-6 col-sm-12 "
              key={shipment.pk}
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <div className="team-item-info">
                <h3>Shipment Name : {shipment.name}</h3>
                <p> Shipment Code : {shipment.code}</p>
                <p>Shipment Weight : {shipment.weight}</p>
                <p> Shipment Description : {shipment.description}</p>
                <p> Shipment Status : {status}</p>
              </div>
              {status === "Pending" ? (
                <button
                  className="button is-link is-light"
                  onClick={() => handlePending(ship.ship.pk)}
                >
                  Progress
                </button>
              ) : (
                <button
                  className="button is-link is-light"
                  onClick={() => handleProgress(ship.ship.pk)}
                >
                  Pending
                </button>
              )}
              {status === "Progress" ? (
                <button
                  className="button is-link is-light"
                  onClick={() => handleFinalStatus(ship.ship.pk)}
                >
                  Done
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipmentDetails;
