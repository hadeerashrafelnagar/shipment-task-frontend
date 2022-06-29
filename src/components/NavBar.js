import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  // state to handle navbar animation
  const [isactive, SetIsActive] = useState(false);
  const [isopen, SetIsOpen] = useState(false);

  // state to handle rerendering
  const [change, setChange] = useState(0);

  // state to locate user rerendering
  const user = localStorage.getItem("user");

  // function to add animation to navbar
  const toggleNav = () => {
    SetIsActive((current) => !current);
    SetIsOpen((current) => !current);
  };

  // function to make logout
  const handleLogOut = () => {
    setChange((c) => (c += 1));
    localStorage.removeItem("user");
  };

  // rerender for any change
  useEffect(() => {}, [change, location]);

  return (
    <>
      <header className="header sticky">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <button
              type="button"
              className={isactive ? "active nav-toggler " : " nav-toggler "}
              onClick={toggleNav}
            >
              <span></span>
            </button>
            <nav className={isopen ? "open nav " : " nav "}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-start">
                <li className="nav-item hoverable">
                  <Link className="nav-link" aria-current="page" to="/">
                    <strong>Home</strong>
                  </Link>
                </li>

                <li className="nav-item hoverable">
                  <Link className="nav-link" to={"/test"}>
                    {" "}
                    <strong>Testimonials</strong>
                  </Link>
                </li>

                <li className="nav-item hoverable">
                  <Link className="nav-link" to={"/aboutus"}>
                    {" "}
                    <strong>About Us</strong>
                  </Link>
                </li>
                {/* check for user existence */}
                {user ? (
                  <>
                    <li className="nav-item hoverable">
                      <Link className="nav-link" to={"/addnew"}>
                        {" "}
                        <strong>Add New </strong>
                      </Link>
                    </li>
                    <li className="nav-item hoverable">
                      <Link className="nav-link" to={"/shipments"}>
                        {" "}
                        <strong>Your Shipments </strong>
                      </Link>
                    </li>
                  </>
                ) : null}
                {user === null ? (
                  <li className="nav-item hoverable">
                    <Link className="nav-link" to={"/signin"}>
                      {" "}
                      <strong>Sign In</strong>
                    </Link>
                  </li>
                ) : null}
                {user ? (
                  <li className="nav-item">
                    <Link className="" to={"/signin"}>
                      <button className="button is-link" onClick={handleLogOut}>
                        {" "}
                        <strong>Log Out </strong>
                      </button>
                    </Link>
                  </li>
                ) : null}
                {/* check for user existence */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
