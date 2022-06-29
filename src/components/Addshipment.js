import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const AddShipment = () => {
  const history = useHistory();

  // use ref to get form values
  const shipmentNameRef = React.useRef();
  const ShipmentWeightRef = React.useRef();
  const shipmentDescriptionRef = React.useRef();

  // cancel adding new shipment
  const handleCancel = () => {
    history.push("/shipments");
  };

  // adding new shipment
  const addNewShipment = () => {
    // check for weight value
    if (Number(ShipmentWeightRef.current.value) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Weight cannot be 0 or less!",
      });
    } else {
      axios
        .post("http://127.0.0.1:8000/test/addShipment/", {
          name: shipmentNameRef.current.value,
          weight: ShipmentWeightRef.current.value,
          description: shipmentDescriptionRef.current.value,
        })
        .then((res) =>
          Swal.fire({
            icon: "success",
            title: "Great...",
            text: res.data.result,
          })
        );
      setTimeout(() => {
        history.push("/shipments");
      }, 2000);
    }
  };
  return (
    <>
      <div className="container data">
        <div className="row  menu-tab-content active" id="lunch">
          <div
            className="menu-item"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <div className="menu-item-title">
              <h3>Add New Shipment</h3>
            </div>
            <div className="menu-item-price">
              <div className="field">
                <label className="label">Shipment Name</label>
                <div className="control">
                  <input
                    className="input"
                    ref={shipmentNameRef}
                    type="text"
                    placeholder="Enter Shipment Name"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Shipment Weight</label>
                <div className="control">
                  <input
                    className="input"
                    ref={ShipmentWeightRef}
                    type="number"
                    placeholder="Enter Shipment Weight"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Shipment Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    ref={shipmentDescriptionRef}
                    placeholder="Textarea"
                  ></textarea>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link"
                    type="submit"
                    onClick={addNewShipment}
                  >
                    Create
                  </button>
                </div>
                <div className="control">
                  <button
                    className="button is-link is-light"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddShipment;
