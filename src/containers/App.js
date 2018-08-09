import React from "react";
import Routes from "../routes/routes";
import Header from "../components/Header";
import numeral from "numeral";

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
    <Header />
    <Routes />
  </div>
);

export default App;
