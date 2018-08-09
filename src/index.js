import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory"
import App from "./containers/App";
import LoadingPage from "./pages/LoadingPage";
import configureStore from "./store/configure";
import registerServiceWorker from "./registerServiceWorker";
import { startSetExpenses } from "./actions/expenses";
import { firebase } from "./db/firebase";
import { login, logout } from "./actions/auth";

const history = createHistory();
const store = configureStore();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store
      .dispatch(startSetExpenses())
      .then(() => {
        setTimeout(() => {
	        renderApp();
          history.location.pathname === "/" && history.push("/dashboard");
        }, 5000);
      })
      .catch(e => {
        ReactDOM.render(<p>{e.message}</p>, document.getElementById("root"));
      });
  } else {
    store.dispatch(logout());
	  renderApp();
    history.push("/");
  }
});

registerServiceWorker();
