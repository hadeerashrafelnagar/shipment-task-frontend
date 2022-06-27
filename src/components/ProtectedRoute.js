import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  // check for loggedin user
  const loggedUser = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedUser === null ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
}

export default ProtectedRoute;
