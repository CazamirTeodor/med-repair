import React from "react";
import { Route, Navigate } from "react-router-dom";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/landingauth" }} />
        )
      }
    />
  );
}

export default PublicRoute;
