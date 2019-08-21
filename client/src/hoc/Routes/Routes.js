import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../../components/UI/NotFound/NotFound";
import Spinner from "../../components/UI/Spinner/Spinner";
import Logout from "../../components/App/Logout/Logout";

const Auth = lazy(() => {
  return import("../../containers/Auth/Auth");
});

const Dashboard = lazy(() => {
  return import("../../containers/Dashboard/Dashboard");
});

const SearchStudent = lazy(() => {
  return import("../../containers/SearchStudent/SearchStudent");
});

const StoreStudent = lazy(() => {
  return import("../../containers/StoreStudent/StoreStudent");
});

const ShowStudent = lazy(() => {
  return import("../../containers/ShowStudent/ShowStudent");
});

const UpdateStudent = lazy(() => {
  return import("../../containers/UpdateStudent/UpdateStudent");
});

const DeleteStudent = lazy(() => {
  return import("../../containers/DeleteStudent/DeleteStudent");
});

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <Route exact path="/login" component={Auth} />
      <Route exact path="/register" component={Auth} />} />
      <Route exact path="/logout" component={Logout} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/show" component={SearchStudent} />
      <PrivateRoute path="/update" component={SearchStudent} />
      <PrivateRoute path="/delete" component={SearchStudent} />
      <PrivateRoute path="/store-student" component={StoreStudent} />
      <PrivateRoute path="/show-student/:id" component={ShowStudent} />
      <PrivateRoute path="/update-student/:id" component={UpdateStudent} />
      <PrivateRoute path="/delete-student/:id" component={DeleteStudent} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
