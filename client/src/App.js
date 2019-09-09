import React, { Fragment, useState, useEffect } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Routes from "./hoc/Routes/Routes";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Notification from "./components/UI/Notification/Notification";
import Loading from "./components/UI/Loading/Loading";
import Footer from "./components/UI/Footer/Footer";
import Print from "./components/App/Print/Print";

//Redux
import store from "./store/store";
import { checkAuthState } from "./store/actions/authActions";

import "./App.css";

const App = () => {
  const [state, setState] = useState({ showSide: false, loading: true });

  const { showSide, loading } = state;

  const [, path] = window.location.pathname.split("/");

  useEffect(() => {
    store.dispatch(checkAuthState());
    setTimeout(() => setState({ ...state, loading: false }), 700);
  }, []);

  const toggleSideDrawer = () => {
    setState({ ...state, showSide: !showSide });
  };

  const closeSideDrawer = () => {
    setState({ ...state, showSide: false });
  };

  return (
    <Provider store={store}>
      <Router>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {path === "print" ? (
              <Print />
            ) : (
              <Fragment>
                <Toolbar toggleSide={toggleSideDrawer} />
                <SideDrawer show={showSide} close={closeSideDrawer} />
                <Notification />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/login" />}
                  />
                  <Route component={Routes} />
                </Switch>
                <Footer />
              </Fragment>
            )}
          </Fragment>
        )}
      </Router>
    </Provider>
  );
};

export default App;
