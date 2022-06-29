import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const history = useHistory();

  // custom user
  const user = "hadeerashraf";

  // use ref to get username from sign in form
  const userNameRef = React.useRef();

  //sumbit function
  const handleSubmit = () => {
    // check for user
    if (user === userNameRef.current.value) {
      localStorage.setItem("user", user);
      history.push("/shipments");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must write your username!",
      });
    }
  };

  return (
    <>
      <div className="container data">
        <div className="row menu-tab-content active" id="lunch">
          <div
            className="menu-item"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <div className="menu-item-title">
              <h1>SignIn</h1><br></br>
              <p className="text-center"> please to continue sign in</p>
            </div>
            <div className="menu-item-price">
              <div className="field">
                <label className="label">Enter Your Name</label>
                <div className="control">
                  <input
                    className="input"
                    ref={userNameRef}
                    type="text"
                    placeholder="Enter Your Name"
                  ></input>
                </div>
              </div>
              <button
                className="button is-link"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
