import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import App from "./containers/App";
import configureStore from "./store/configure";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses"

const store = configureStore();
store.dispatch(addExpense({ description: "Water Bill", amount: 4500, createdAt: 4500}));
store.dispatch(addExpense({ description: "Gas Bill", amount: 3000, createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 19500, createdAt: 3000 }));
const state = store.getState();

getVisibleExpenses(state.expenses, state.filters);

ReactDOM.render(
	<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
	</Provider>,
  document.getElementById("root")
);
registerServiceWorker();
