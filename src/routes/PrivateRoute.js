import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={prop =>
      isAuth ? (
        <div>
          <Navbar />
          <Component {...prop} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
