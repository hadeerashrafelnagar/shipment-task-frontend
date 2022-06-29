import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShipmentJournalDetails = () => {
  // use location to get specified shipment journals
  const location = useLocation();
  const shipId = location.state.shipId;
  const ship = location.state.ship.fields;

  // state to save journals
  const [shipmentJournal, setShipmentJournal] = useState([]);

  // api call for journals
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/test/journal/").then((res) => {
      setShipmentJournal(
        res.data.filter(
          (e) => Number(e.shipment.slice(0, -1).match(/[0-9]+$/)[0]) === shipId
        )
      );
    });
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      <section className="team sec-padding bag" id="team">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2
                data-title="order now"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {" "}
                Your Shipment Journal Details
              </h2>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="row">
            {shipmentJournal.length === 0 ? (
              <div
                className="team-item"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <div className="team-item-info">
                  <h3>No Journal Details For this Shipment Yet</h3>
                </div>
              </div>
            ) : (
              shipmentJournal.map((shipJournal) => (
                <>
                  <div
                    className="team-item col-lg-4 col-md-6 col-sm-12 "
                    key={shipJournal.id}
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <div className="team-item-info">
                      <h3>Journal Entry Type : {shipJournal.type}</h3>
                      <p>Journal Entry Amount : {shipJournal.amount}</p>
                      <p>Shipment Weight : {ship.weight}</p>
                    </div>
                    <div></div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipmentJournalDetails;
