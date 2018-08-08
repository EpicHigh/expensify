import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import LoadingPage from "./pages/LoadingPage"
import configureStore from "./store/configure";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { startSetExpenses } from "./actions/expenses";

const store = configureStore();

ReactDOM.render(<LoadingPage/>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.getElementById("root")
	);
}).catch(e => {
	ReactDOM.render(<p>{e.message}</p>, document.getElementById("root"));
});


registerServiceWorker();
