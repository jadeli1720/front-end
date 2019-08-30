import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  // const [routeCheck, setRouteCheck] = useState(false)

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/getusername`)
  //     .then(res => {
  //       setRouteCheck(res.status === 200 ? true : false)
  //     })
  //     .catch(err => console.log('Oops', err.respond))
  // })

    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
    );
  };
  
  export default PrivateRoute;