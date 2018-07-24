import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import App from "./containers/App";
import configureStore from "./store/configure";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill"}));
store.dispatch(addExpense({ description: "Gas Bill"}));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
	<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
	</Provider>,
  document.getElementById("root")
);
registerServiceWorker();
