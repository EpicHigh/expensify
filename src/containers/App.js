import React from "react";
import Routes from "../routes/routes";
import numeral from "numeral";
import { injectGlobal } from "styled-components";
import { sSize } from "../styles/common";

injectGlobal`
	* {
		box-sizing: border-box;
	}
	body {
		font-family: Avenir, Arial, sans-serif;
		font-size: ${sSize};
		line-height: 1.5;
		margin: 0;
	}
	button {
		cursor: pointer;
	}
	button:disabled {
		cursor: default;
	}
	.is-active {
		font-weight: bold;
	}
`;

numeral.register("locale", "th", {
  delimiters: {
    thousands: ",",
    decimal: "."
  },
  currency: {
    symbol: "฿"
  }
});

numeral.locale("th");

const App = () => (
  <div>
    <Routes />
  </div>
);

export default App;
