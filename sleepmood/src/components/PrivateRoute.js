import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [routeCheck, setRouteCheck] = useState(false)

  useEffect(() => {
    axiosWithAuth()
      .get(`/getCurrentUserName`)
      .then(res => {
        setRouteCheck(res.status === 200 ? true : false)
      })
      .catch(err => console.log('Oops', err.respond))
  })

    return (
      <Route
        {...rest}
        render={props => {
          if (routeCheck) {
            return <Component {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
    );
  };
  
  export default PrivateRoute;