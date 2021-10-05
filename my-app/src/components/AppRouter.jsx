import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function AppRouter() {
  const { isUserLogin } = useContext(AuthContext);

  return (
    <div>
      {isUserLogin ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Redirect to="/songs" />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
}

export default AppRouter;
