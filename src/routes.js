import React from "react";
import { Route, Switch } from "react-router-dom";
import HelpPage from "./pages/HelpPage";
import AddExpensePage from "./pages/AddExpensePage";
import EditExpensePage from "./pages/EditExpensePage";
import ExpenseDashBoardPage from "./pages/ExpenseDashBoardPage";
import NotFoundPage from "./pages/NotFoundPage";

export default () => (
	<div>
		<Switch>
			<Route path="/" component={ExpenseDashBoardPage} exact/>
			<Route path="/create" component={AddExpensePage} exact/>
			<Route path="/edit:id" component={EditExpensePage} exact/>
			<Route path="/help" component={HelpPage} exact/>
			<Route component={NotFoundPage}/>
		</Switch>
	</div>
);