import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Shipments = () => {
  // state for render
  const [change, setChange] = useState(0);

  // state to save all shipments
  const [shipments, Setshipments] = useState([]);

  // delete a shipment function
  const handleDelete = (ship) => {
    setChange((c) => c + 1);
    axios.delete(`http://127.0.0.1:8000/test/shipment/${ship.pk}/`);
    Swal.fire({
      icon: "sucess",
      title: "Sucess...",
      text: "Shipment has been deleted successfully",
    });
  };

  // api call to get all shipments
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/test/getShipmentDetails/").then((res) => {
      Setshipments(res.data.result);
    });
  }, [change]);

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
                Your Shipments
              </h2>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            {shipments.length === 0 ? (
              <div
                className="team-item"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <div className="team-item-info">
                  <h3>No Shipments For You Yet</h3>
                </div>
              </div>
            ) : (
              shipments.map((ship) => (
                <>
                  <div
                    className="team-item col-lg-4 col-md-6 col-sm-12 "
                    key={ship.pk}
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <div className="team-item-info">
                      <h3>Shipment Name : {ship.fields.name}</h3>
                      <p> Shipment Code : {ship.fields.code}</p>
                      <p>Shipment Weight : {ship.fields.weight}</p>
                      <p> Shipment Description : {ship.fields.description}</p>
                      <p> Shipment Status : {ship.fields.status}</p>
                    </div>
                    <div>
                      {/* stop interaction with shipments when they are in done status */}
                      {ship.fields.status === "Done" ? null : (
                        <>
                          <Link
                            to={{
                              pathname: "/shipmentdetails",
                              state: { ship: ship },
                            }}
                          >
                            <button className="button is-link is-light">
                              Save
                            </button>
                          </Link>
                          <button
                            className="button is-link is-light"
                            onClick={() => handleDelete(ship)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                      {/* stop interaction with shipments when they are in done status */}

                      <Link
                        to={{
                          pathname: "/shipmentjournaldetails",
                          state: { shipId: ship.pk, ship },
                        }}
                      >
                        <button className="button is-link is-light">
                          Details
                        </button>
                      </Link>
                    </div>
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

export default Shipments;
