import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExpensePage from "../pages/AddExpensePage";
import EditExpensePage from "../pages/EditExpensePage";
import ExpenseDashBoardPage from "../pages/ExpenseDashBoardPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => (
  <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} exact />
      <PrivateRoute path="/create" component={AddExpensePage} exact />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default Routes;
